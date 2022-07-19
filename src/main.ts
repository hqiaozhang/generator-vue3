import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store' 
import "@/assets/styles";

// 导入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import './permission'

const app = createApp(App)
app.use(router).use(store).use(ElementPlus).mount('#root')
