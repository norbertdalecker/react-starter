import { History } from 'history';

import { Redirect, Route } from 'modules/router/switch';

export interface PublicProps {
  routes?: Route[];
  redirects?: Redirect[];
  history?: History;
}

export type Props = PublicProps;
