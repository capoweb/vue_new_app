import { createApp } from 'vue'
import App from './App'
//создаем компонент в App.vue


createApp(App).mount('#app')

//корневой компонент 
// createApp(App).use(store).use(router).mount('#app') - было так