import { createApp } from 'vue';
import lodash from 'lodash';

import App from './App.vue';
import router from './router'
import VuetifyComponents from '@payoffice2.0/vuetify';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/dist/vuetify.min.css'
import 'vuetify/lib/styles/main.sass'; // Manually import Vuetify styles
// import Hello from './Hello.vue';
// import Auth from 'remote-app/Auth'
// import Login from 'remote-app/Login'
// import LoginForm from 'remote-app/LoginForm'

import('@/styles/overrides.scss');

const app = createApp(App);

// app.component('Hello', Hello);
// app.component('Auth', Auth);
// app.component('Login', Login);
// app.component('LoginForm', LoginForm);

const customLightTheme = {
  dark: false,
  colors: {
    primary: '#d60b52',
    secondary: '#1e1e20',
    'light-secondary': '#4e4e56',
    tertiary: '#ea610d',
    'light-grey': '#f0f0f0',
  },
};


window.$_ = lodash;
app.config.globalProperties.$_ = lodash;

const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: "customLightTheme",
      themes: {
        customLightTheme
      },
    }
  });
  
app.use(vuetify)
  .use(router)
  .use(VuetifyComponents);

app.mount('#app');
