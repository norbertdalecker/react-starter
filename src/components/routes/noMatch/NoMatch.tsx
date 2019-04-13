import React from 'react';

import { Props } from './noMatch.interfaces';

export default class NoMatch extends React.PureComponent<Props> {
  render() {
    const { t } = this.props;

    return t('Page Not Found');
  }
}
