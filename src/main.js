import components from '@/components/UI';
import directives from '@/directives';
import { createApp } from 'vue';
import App from './App';
import router from './router/router';
const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

app.use(router).mount('#app');
