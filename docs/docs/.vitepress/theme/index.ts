import { jButton,jButtonGroup, jIcon, jCrumb,JQueryPage, jMessage, jTooltip, jDialog, JSelect,JLayout,JHeader,JSider,JContent,JFooter,JNavBar,JSideBar,JSidebarItem,JTab,JTabItem,JBackTop, jCard,JCounter } from '@joy'
// import { JLayout } from "../../../../examples/components"
import { define } from '../utils/types'
import type { Theme as ThemeType } from 'vitepress'
import IconList from '../../examples/icon/IconList.vue'

import { globals } from '../vitepress'

const components = {jButton,jButtonGroup, jIcon, jCrumb,JQueryPage, jMessage, jTooltip, jDialog, JSelect,JLayout,JHeader,JSider,JContent,JFooter,JNavBar,JSideBar,JSidebarItem,JTab,JTabItem,JBackTop, jCard,JCounter}
import '../../../../examples/assets/scss/index.scss';


// 使用vitepress-theme-demoblock主题，并注册组件(包含主题中默认的组件)。
import Theme from 'vitepress/dist/client/theme-default/index.js'

export default define<ThemeType>({
  ...Theme,
  enhanceApp: ({ app }) => {
    Object.entries(components).forEach(([key, value]) => {
      app.component(key, value);
    });
    app.component('IconList', IconList);
    globals.forEach(([name, comp]) => app.component(name, comp))
  }
})
