import React from 'react';

import { Router } from 'components/modules';
import { mainRedirects, mainRoutes } from 'components/routes';

import { Props } from './app.interfaces';

import 'theme/index.scss';

export default class App extends React.PureComponent<Props> {
  render() {
    const { history } = this.props;

    return <Router history={history} routes={mainRoutes} redirects={mainRedirects} />;
  }
}
