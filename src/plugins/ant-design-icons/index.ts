import type { App } from 'vue'
import * as AntDesignIcons from '@ant-design/icons-vue'

export default function loadAntDesignIcons(app: App) {
  const icons = AntDesignIcons as any
  Object.keys(icons).forEach((key) => {
    app.component(key, icons[key])
  })
}
