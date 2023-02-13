import routeName from './routeName'

export const NORMAL_USER = [
  {
    path: '/Main',
    title: routeName['/Main'],
    icon: 'el-icon-s-home',
    submenu: null
  },

  {
    path: '/Charts',
    title: routeName['/Charts'],
    icon: 'el-icon-s-marketing',
    submenu: null
  },

  {
    path: '/UploadSample',
    title: routeName['/UploadSample'],
    icon: 'el-icon-upload',
    submenu: null
  },

  {
    path: '/SandGlassDataShow',
    title: routeName['/SandGlassDataShow'],
    icon: 'el-icon-s-operation',
    submenu: null
  },

  {
    path: '/ThreeShow',
    title: routeName['/ThreeShow'],
    icon: 'el-icon-s-data',
    submenu: null
  },

  {
    path: '/Svg',
    title: routeName['/Svg'],
    icon: 'el-icon-s-data',
    submenu: null
  },

  {
    path: '/Topo',
    title: routeName['/Topo'],
    icon: 'el-icon-s-data',
    submenu: null
  },

  {
    path: '/Icons',
    title: routeName['/Icons'],
    icon: 'el-icon-s-help',
    submenu: null
  },

  {
    path: null,
    title: null,
    submenu: {
      submenuTitle: routeName.subTitle,
      icon: 'el-icon-s-flag',
      belong: '',
      submenuItems: [
        {
          path: '/About',
          title: routeName['/About'],
          icon: 'el-icon-s-data',
          submenu: null
        },
        {
          path: null,
          title: null,
          submenu: {
            submenuTitle: '3 level menu item',
            icon: 'el-icon-s-flag',
            belong: '',
            submenuItems: [
              {
                path: '/About',
                title: routeName['/About'],
                icon: 'el-icon-s-data',
                submenu: null
              }
            ]
          }
        }
      ]
    }
  }
]
