export const routes = [
  {
    path: '/',
    component: 'Home'
  },
  {
    path: '/posts',
    component: 'Posts',
    routes: [
      {
        path: '/posts/',
        component: 'PostsList'
      },
      {
        path: '/posts/:id',
        component: 'Post'
      }
    ]
  },
  {
    path: '/about',
    component: 'About'
  },
  {
    path: '/support',
    component: 'Support'
  }
];
