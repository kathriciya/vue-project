import About from '@/pages/About';
import Main from '@/pages/Main';
import PostIdPage from '@/pages/PostIdPage';
import PostPage from '@/pages/PostPage';
import PostPageCompositionAPI from '@/pages/PostPageCompositionAPI';
import PostPageWithStore from '@/pages/PostPageWithStore';
import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/posts',
    component: PostPage,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/posts/:id',
    component: PostIdPage,
  },
  {
    path: '/store',
    component: PostPageWithStore,
  },
  {
    path: '/composition',
    component: PostPageCompositionAPI,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
