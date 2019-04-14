import Loadable from 'react-loadable';

export const mainRoutes = [
  {
    path: '/home',
    component: Loadable({
      loader: () => import(/* webpackPrefetch: true */ './home'),
      loading: () => null,
    }),
  },
  {
    component: Loadable({
      loader: () => import(/* webpackPrefetch: true */ './noMatch'),
      loading: () => null,
    }),
  },
];

export const mainRedirects = [
  {
    from: '/',
    exact: true,
    to: '/home',
  },
];
