/**
 * @author yuhongyu
 * @time 2023-02-15
 */

// 只提供files的计算和上传
// 接收参数：url,params,limit,size,accept
// 回调：
  // filter：function 更多过滤条件
  // beforeDrag：拦截拖拽释放

// 对外接口：
  // input change事件

type Files = Array<any>
type FinalFiles = Files | undefined
interface Callback {
  filter: (fileList: Files, originFilterFailList: Files) => Files,

  failList: (fileList: Files) => void,
  onSwitch: (isSwitch: boolean) => void,
  onTotal: (count: number) => void,
  onImgPreview: (file: any) => void
  // beforeDrag: () => void
}

export default class Upload {
  filterSuccessList: FinalFiles
  count: number = -1
  fileKey: string = 'file'

  // 多文件 or 文件夹
  webkitdirectory: boolean = false
  multiple: boolean = false
  // 自动上传
  autoUpload: boolean = false
  // 拖拽
  drag: boolean = false
  // 接收格式
  accept: string = ''

  inputDom: any = null


  constructor (
    public id: string,
    // 必须
    public url: string,
    public data: object | undefined,
    // 过滤
    public limit: number = 1,
    public size: number | undefined,

    // 回调
    public cb: Callback = {} as Callback
  ) {
    this.init()
  }

  init () {
    this.inputDom = document.getElementById(this.id)
    const {
      webkitdirectory,
      multiple,
      autoUpload,
      drag,
      accept,
    }: any = this.inputDom?.attributes

    this.webkitdirectory = webkitdirectory.value === 'true' || webkitdirectory.value === ''
    this.multiple = multiple.value === 'true' || multiple.value === ''
    this.autoUpload = autoUpload.value === 'true' || autoUpload.value === ''
    this.drag = drag.value === 'true' || drag.value === ''

    this.accept = accept.value
  }

  change (e: {target: {files: Files}}) {
    const files: Files = e.target.files
    this.transFiles(files)
  }

  transFiles (files: Files) {
    if (this.limitNumEvent(files) === false) return false


    // 不通过 size和格式 过滤的文件
    let failList: Files = []
    const filesFilter: Files = Array.from(files).filter(file => {
      const sizeBol = this.size
        ? file.size <= this.size
        : true

      const acceptBol = this.accept
        ? this.accept.includes((file.name.split('.').reverse()[0]).toLowerCase())
        : true

      let failText = ''
      switch (true) {
        case !(sizeBol || acceptBol): failText = '文件过大且格式不正确'; break
        case !sizeBol: failText = '文件过大'; break
        case !acceptBol: failText = '文件格式不正确'; break
      }

      !(sizeBol && acceptBol) && failList.push({
        file_name: file.name,
        message: failText
      })

      return sizeBol && acceptBol
    })

    // 更多过滤
    const filterSuccessList: FinalFiles = this.cb.filter(filesFilter, failList) || filesFilter

    // 通知：不通过过滤的文件
    if (failList.length) this.cb.failList(failList)

    if (filterSuccessList?.length === 0) {
      // this.$emit('on-switch', false)
      this.cb.onSwitch(false)
      return false
    }


    // 准备进入上传列队
    this.filterSuccessList = filterSuccessList
    this.count = filterSuccessList?.length || 0
    // this.$emit('on-total', this.count)
    this.cb.onTotal(this.count)


    // 用于页面展示选中的图片
    const that = this
    function fileToBase64 (filelist: FinalFiles) {
      filelist &&
      filelist
        .filter(file => {
          return file.type.includes('image')
        })
        .forEach((file) => {
          var fr = new FileReader()
          fr.readAsDataURL(file)
          fr.onloadend = function (e: any) {
            // that.$emit('on-img-preview', e.target.result)
            that.cb.onImgPreview(e.target.result)
          }
        })
    }
    fileToBase64(this.filterSuccessList)


    // 清空form
    this.inputDom?.reset()


    // 或开始上传
    // this.autoUpload && this.submit()
  }

  limitNumEvent (files: Files) {
    if (!this.limit) return false

    if (files.length > this.limit) {
      // this.$emit('on-limit-error')
      return false
    }
  }


}