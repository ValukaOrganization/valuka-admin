import type { App } from 'vue'
import loadAntDesign from './ant-design'
import loadAntDesignIcons from './ant-design-icons'

export default function loadPlugins(app: App) {
  const env = import.meta.env.MODE
  // 如果是开发环境加载全量ant-design-vue
  if (env.includes('development')) {
    loadAntDesign(app)
  }
  loadAntDesignIcons(app)
}
