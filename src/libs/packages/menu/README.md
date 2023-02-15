# 菜单组件

## 依赖

**element-ui_menu** 只能适应3级菜单

## props

```js
{
  mode: {
    default: 'vertical' // horizontal / vertical
  },

  isCollapse: { // 是否收起： true 收起； false 展开
    default: false
  },

  background: {
    default: '#333333'
  },

  text: { // 文字颜色
    default: '#fff'
  },

  activeText: { // 高亮文字颜色
    default: '#ffd04b'
  },

  data: { // 菜单数据
    type: Array,
    default: function () {
      return []
    }
  }
}
```

### 菜单数据

```js
[
  {
    path: '/Main',
    title: routeName['/Main'],
    icon: 'el-icon-s-home',
    submenu: null
  },

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
```