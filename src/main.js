import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import FengjunUI from '../modules/fengjun-ui'  // 组件库全量引入注册
// createApp(App).use(FengjunUI).mount('#app')

import Transfer from '../modules/fengjun-ui/Transfer' // 单独引入注册
createApp(App).use(Transfer).mount('#app')

// createApp(App).mount('#app')

