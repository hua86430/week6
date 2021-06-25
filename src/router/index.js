import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/Front.vue'),
    children: [
      {
        path: 'products',

        component: () => import('../views/Products.vue'),
      },
      {
        path: '/product/:id',

        component: () => import('../views/Product.vue'),
      },
      {
        path: 'cart',

        component: () => import('../views/Cart.vue'),
      },
    ],
  },

  {
    path: '/login',
    component: () => import('../views/Login.vue'),
  },

  {
    path: '/admin',

    component: () => import('../views/Admin.vue'),
    children: [
      {
        path: 'products',

        component: () => import('../views/admin/Products.vue'),
      },
      {
        path: 'orderlist',

        component: () => import('../views/admin/Order.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
