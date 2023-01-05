import type { App } from 'vue'
import AntDesign from 'ant-design-vue'

export default function loadAntDesign(app: App) {
  app.use(AntDesign)
}
