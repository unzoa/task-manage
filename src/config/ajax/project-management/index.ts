import { NORMAL_USER } from './menu.ts'
import api from './api.ts'
import routerObj from './router.ts'

const tokenName = 'system'
localStorage.setItem('tokenName', tokenName)

document.title = 'X系统'

export const router = routerObj
export default {
  NORMAL_USER,
  api,
  router: routerObj,

  tokenName,
  projectCnName: document.title,
  projectEnName: tokenName,

  companyCnName: '上海戎磐网络科技有限公司'
}
