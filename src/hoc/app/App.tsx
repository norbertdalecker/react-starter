import React from 'react';

import { mainRedirects, mainRoutes } from 'hoc/routes';
import { Router } from 'modules';

import { Props } from './app.interfaces';

import 'theme/index.scss';

export default class App extends React.PureComponent<Props> {
  render() {
    const { history } = this.props;

    return <Router history={history} routes={mainRoutes} redirects={mainRedirects} />;
  }
}
