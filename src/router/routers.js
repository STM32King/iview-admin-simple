import Main from '@/components/main'
import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面不会缓存
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true, // 设为true后在左侧菜单不会显示该页面选项
      notCache: false // 设为true后页面不会缓存
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页你好',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
  { // 文档
    path: '',
    name: 'doc',
    meta: {
      title: '文档',
      href: 'https://lison16.github.io/iview-admin-doc/#/',
      icon: 'ios-book'
    }
  },
  { // 模仿首页
    path: 'owner',
    name: '_owner',
    component: Main,
    meta: {
      hideInMenu: false, // 设为true后在左侧菜单不会显示该页面选项
      notCache: false // 设为true后页面不会缓存
    },
    children: [
      {
        path: '/owner',
        name: 'owner',
        meta: {
          hideInMenu: false,
          title: '恭喜发财',
          icon: 'md-home'
        },
        component: () => import('@/view/single-page/owner')
      }
    ]
  },
  {
    path: '/iview-element',
    name: 'iview-element',
    meta: {
      icon: 'md-menu',
      title: 'iview 组件' // 多个界面
    },
    component: Main,
    children: [
      {
        path: 'card',
        name: 'card',
        meta: {
          icon: 'md-funnel',
          title: 'Card 卡片'
        },
        component: () => import('@/view/iview-element/card.vue') // 请注意路径
      },
      {
        path: 'collapse',
        name: 'collapse',
        meta: {
          icon: 'md-funnel',
          title: 'collapse 折叠面板'
        },
        component: () => import('@/view/iview-element/collapse.vue')
      },
      {
        path: 'split',
        name: 'split',
        meta: {
          icon: 'md-funnel',
          title: 'split 面板分割'
        },
        component: () => import('@/view/iview-element/split.vue')
      },
      {
        path: 'divider',
        name: 'divider',
        meta: {
          icon: 'md-funnel',
          title: 'divider 分割线'
        },
        component: () => import('@/view/iview-element/divider.vue')
      },
      {
        path: 'cell',
        name: 'cell',
        meta: {
          icon: 'md-funnel',
          title: 'cell 单元格'
        },
        component: () => import('@/view/iview-element/cell.vue')
      },
      {
        path: 'menu',
        name: 'menu',
        meta: {
          icon: 'md-funnel',
          title: 'menu 单元格'
        },
        component: () => import('@/view/iview-element/menu.vue')
      },
      {
        path: 'tabs',
        name: 'tabs',
        meta: {
          icon: 'md-funnel',
          title: 'tabs 标签页'
        },
        component: () => import('@/view/iview-element/tabs.vue')
      },
      {
        path: 'dropdown',
        name: 'dropdown',
        meta: {
          icon: 'md-funnel',
          title: 'dropdown 下拉菜单'
        },
        component: () => import('@/view/iview-element/dropdown.vue')
      },
      {
        path: 'page',
        name: 'page',
        meta: {
          icon: 'md-funnel',
          title: 'page 分页'
        },
        component: () => import('@/view/iview-element/page.vue')
      },
      {
        path: 'breadcrumb',
        name: 'breadcrumb',
        meta: {
          icon: 'md-funnel',
          title: 'breadcrumb 面包屑'
        },
        component: () => import('@/view/iview-element/breadcrumb.vue')
      },
      {
        path: 'badge',
        name: 'badge',
        meta: {
          icon: 'md-funnel',
          title: 'badge 微标数'
        },
        component: () => import('@/view/iview-element/badge.vue')
      },
      {
        path: 'anchor',
        name: 'anchor',
        meta: {
          icon: 'md-funnel',
          title: 'anchor 锚点'
        },
        component: () => import('@/view/iview-element/anchor.vue')
      },
      {
        path: 'stsps',
        name: 'steps',
        meta: {
          icon: 'md-funnel',
          title: 'steps 步骤条'
        },
        component: () => import('@/view/iview-element/steps.vue')
      },
      {
        path: 'loading',
        name: 'loading',
        meta: {
          icon: 'md-funnel',
          title: 'loading  加载进度条'
        },
        component: () => import('@/view/iview-element/loading.vue')
      },
      {
        path: 'input',
        name: 'input',
        meta: {
          icon: 'md-funnel',
          title: 'input 输入框'
        },
        component: () => import('@/view/iview-element/input.vue')
      },
      {
        path: 'radio',
        name: 'radio',
        meta: {
          icon: 'md-funnel',
          title: 'radio  单选框'
        },
        component: () => import('@/view/iview-element/radio.vue')
      },
      {
        path: 'checkbox',
        name: 'checkbox',
        meta: {
          icon: 'md-funnel',
          title: 'checkbox  多选框'
        },
        component: () => import('@/view/iview-element/checkbox.vue')
      },
      {
        path: 'switch',
        name: 'switch',
        meta: {
          icon: 'md-funnel',
          title: 'switch  开关'
        },
        component: () => import('@/view/iview-element/switch.vue')
      },
      {
        path: 'table',
        name: 'table',
        meta: {
          icon: 'md-funnel',
          title: 'table  表格'
        },
        component: () => import('@/view/iview-element/table.vue')
      },
      {
        path: 'select',
        name: 'select',
        meta: {
          icon: 'md-funnel',
          title: 'select  选择器'
        },
        component: () => import('@/view/iview-element/select.vue')
      },
      {
        path: 'autocomplete',
        name: 'autocomplete',
        meta: {
          icon: 'md-funnel',
          title: 'autocomplete  选择器'
        },
        component: () => import('@/view/iview-element/autocomplete.vue')
      },
      {
        path: 'datepicker',
        name: 'datepicker',
        meta: {
          icon: 'md-funnel',
          title: 'datepicker  日期选择器'
        },
        component: () => import('@/view/iview-element/datepicker.vue')
      },
      {
        path: 'timepicker',
        name: 'timepicker',
        meta: {
          icon: 'md-funnel',
          title: 'timepicker  时间选择器'
        },
        component: () => import('@/view/iview-element/timePicker.vue')
      },
      {
        path: 'cascader',
        name: 'cascader',
        meta: {
          icon: 'md-funnel',
          title: 'cascader  级联选择器'
        },
        component: () => import('@/view/iview-element/cascader.vue')
      },
      {
        path: 'InputNumber',
        name: 'InputNumber',
        meta: {
          icon: 'md-funnel',
          title: 'InputNumber   数字输入框'
        },
        component: () => import('@/view/iview-element/InputNumber.vue')
      },
      {
        path: 'rate',
        name: 'rate',
        meta: {
          icon: 'md-funnel',
          title: 'rate   等级'
        },
        component: () => import('@/view/iview-element/rate.vue')
      }
    ]
  },
  {
    path: '/moretab',
    name: 'moretab',
    meta: {
      icon: 'md-menu',
      title: '汪永峰' // 多个界面
    },
    component: Main,
    children: [
      {
        path: 'WYF-001',
        name: 'WYF-001',
        meta: {
          icon: 'md-funnel',
          title: '市政府店'
        },
        component: () => import('@/view/moretab/WYF-001.vue') // 请注意路径
      },
      {
        path: 'WYF-002',
        name: 'WYF-002',
        meta: {
          icon: 'md-funnel',
          title: '九三街店'
        },
        component: () => import('@/view/moretab/WYF-002.vue')
      }
    ]
  },
  {
    path: '/multilevel', // 原生多级菜单
    name: 'multilevel',
    meta: {
      icon: 'md-menu',
      title: '多级菜单'
    },
    component: Main,
    children: [
      {
        path: 'level_2_1',
        name: 'level_2_1',
        meta: {
          icon: 'md-funnel',
          title: '二级-1'
        },
        component: () => import('@/view/multilevel/level-2-1.vue')
      },
      {
        path: 'level_2_2',
        name: 'level_2_2',
        meta: {
          access: ['super_admin'],
          icon: 'md-funnel',
          showAlways: false,
          title: '二级-2'
        },
        component: parentView,
        children: [
          {
            path: 'level_2_2_1',
            name: 'level_2_2_1',
            meta: {
              icon: 'md-funnel',
              title: '三级'
            },
            component: () => import('@/view/multilevel/level-2-2/level-3-1.vue')
          }
        ]
      },
      {
        path: 'level_2_3',
        name: 'level_2_3',
        meta: {
          icon: 'md-funnel',
          title: '二级-3'
        },
        component: () => import('@/view/multilevel/level-2-3.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]
