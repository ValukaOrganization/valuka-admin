import { createApp } from 'vue'
import loadPlugins from '@/plugins'
import App from './App.vue'

import 'ant-design-vue/dist/antd.css'
import './style.css'

const app = createApp(App)
loadPlugins(app)

app.mount('#app')
