<template>
  <div class="Menu">
    <el-menu
      :class="{
        'el-menu-vertical': mode === 'vertical'
      }"
      :mode="mode"
      :collapse="isCollapse"
      router
      :default-active="$route.path"
      :unique-opened=true
      :background-color="background"
      :text-color="text"
      :active-text-color="activeText"
      >
      <div
        v-for="(level_1, level_1_index) in data"
        :key="level_1_index"
        class="menu-item noSelect">

        <!-- level 1 -->
        <el-menu-item
          v-if="level_1.path"
          :index="level_1.path">
          <i :class="level_1.icon"></i>
          <span slot="title">{{level_1.title}}</span>
        </el-menu-item>

        <!-- level 1 -->
        <el-submenu
          v-if="!level_1.path"
          :index="String(level_1_index)">

          <!-- level 1 -->
          <template slot="title">
            <i :class="level_1.submenu.icon"></i>
            <span
              v-show="!isCollapse"
              slot="title">{{level_1.submenu.submenuTitle}}</span>
          </template>

          <!-- level 2 -->
          <div
            v-for="(level_2, leve_2_Index) in level_1.submenu.submenuItems"
            :key="leve_2_Index">

            <!-- level 2 -->
            <el-menu-item v-if="level_2.path" :index="level_2.path">
              <i :class="level_2.icon"></i>
              <span slot="title">{{level_2.title}}</span>
            </el-menu-item>

            <!-- level 2 -->
            <el-submenu
              index="submenuIndex"
              v-if="!level_2.path">

              <!-- level 3 -->
              <template slot="title">
                <i :class="level_2.submenu.icon"></i>
                <span slot="title">{{ level_2.submenu.submenuTitle }}</span>
              </template>

              <!-- level 3 -->
              <el-menu-item
                v-for="(level_3, level_3_index) in level_2.submenu.submenuItems"
                :key="level_3_index"
                :index="level_3.path">
                <i :class="level_3.icon"></i>
                <span slot="title">{{ level_3.title }}</span>
              </el-menu-item>
            </el-submenu>
          </div>
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Menu',

  // 本地状态 (本地的响应式 property)

  props: {
    mode: {
      default: 'vertical' // horizontal / vertical
    },

    isCollapse: {
      default: false
    },

    background: {
      default: '#333333'
    },

    text: {
      default: '#fff'
    },

    activeText: {
      default: '#ffd04b'
    },

    data: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .Menu {
    position: relative;

    .el-menu {
      border: none;
    }

    ::v-deep .el-submenu__icon-arrow {
      font-size: 17px;
    }
  }
</style>
