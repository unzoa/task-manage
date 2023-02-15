# 抽屉菜单

## 依赖

**element-ui_drawer**

## 使用

```js
<MenuDrawer bgClass="bg333">
  <Menu :data="menuData" />
</MenuDrawer>
```

## props

```js
{
  // 抽屉的背景颜色class,需要时全局的
  bgClass: {
    default: ''
  },

  // 抽屉的宽度
  width: {
    default: '300px'
  }
}
```

## 插槽

> 默认插槽 <slot />
