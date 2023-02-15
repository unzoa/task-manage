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

type InputDom = any // HTMLInputElement
type Files = Array<InputDom>
type FinalFiles = Files | undefined
type FilesMessagelist = Array<object>
interface Callback {
  filter: (fileList: Files, originFilterFailList: FilesMessagelist) => Files, // 更多过滤条件处理

  failMessageList: (failMessageList: FilesMessagelist) => void, // 失败文件数组
  onSwitch: (isSwitch: boolean) => void, // 是否开始任务
  onTotal: (count: number) => void, // 总上传数量
  onImgPreview: (file: any) => void // 上传图片预览
  // beforeDrag: () => void
}

interface Options {
  data: object | undefined, // 上传携带参数
  limit: number, // 限制上传个数
  size: number | undefined, // 限制上传文件大小
}

export default class Upload {
  filterSuccessList: FinalFiles
  count: number = -1
  fileKey: string = 'file'

  webkitdirectory: boolean = false // 文件夹
  multiple: boolean = false // 多文件
  autoUpload: boolean = false // 自动上传
  drag: boolean = false // 拖拽
  accept: string = '' // 接收格式

  inputDom: InputDom = null

  constructor (
    public id: string,
    public url: string,
    public options: Options = {} as Options,
    public cb: Callback = {} as Callback
  ) {
    this.init()
  }

  init () {
    this.inputDom = document.getElementById(this.id) as InputDom
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

  change (e: any) { // {target: {files: Files}}
    const files: Files = e.target.files
    this.transFiles(files)
  }

  transFiles (files: Files) {
    if (this.limitNumEvent(files) === false) return false


    // 不通过 size和格式 过滤的文件
    let failMessageList: FilesMessagelist = []
    const filesFilter: Files = Array.from(files).filter(file => {
      const sizeBol = this.options.size
        ? file.size <= this.options.size
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

      !(sizeBol && acceptBol) && failMessageList.push({
        file_name: file.name,
        message: failText
      })

      return sizeBol && acceptBol
    })

    // 更多过滤
    const filterSuccessList: FinalFiles = this.cb.filter(filesFilter, failMessageList) || filesFilter

    // 通知：不通过过滤的文件
    if (failMessageList.length) this.cb.failMessageList(failMessageList)

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
    this.inputDom.reset()

    // 或开始上传
    // this.autoUpload && this.submit()
  }

  limitNumEvent (files: Files) {
    if (!this.options.limit) return false

    if (files.length > this.options.limit) {
      // this.$emit('on-limit-error')
      return false
    }
  }


}