import { NORMAL_USER } from './menu'
import api from './api'
import router from './router'

const tokenName = 'system'
localStorage.setItem('tokenName', tokenName)

document.title = '任务追踪管理'

export default {
  NORMAL_USER,
  api,
  router,

  tokenName,
  projectCnName: document.title,
  projectEnName: tokenName,

  companyCnName: '上海戎磐网络科技有限公司'
}
