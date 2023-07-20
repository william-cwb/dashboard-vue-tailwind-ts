import { createApp, } from 'vue'
import './style.css'
import MainApp from './App.vue'
import AppPlugin from './plugins/app'

const app = createApp(MainApp);

// app.provide("on_click_teste", () => {
//     alert();
//   });

app.use(AppPlugin);
app.mount('#app')
