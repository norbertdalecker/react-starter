import React from 'react';
import { Hello } from 'store/hello/model';
import { Props } from './home.interfaces';

export default class Home extends React.PureComponent<Props> {
  fetchHello = () => this.props.fetchHello();
  componentDidMount() {
    const { helloState } = this.props;

    if (helloState.hello == null) {
      this.props.fetchHello();
    }
  }
  getHello() {
    const { helloState } = this.props;
    if (helloState.hello !== null) {
      return helloState.hello;
    }
    return [];
  }
  render() {
    const { t } = this.props;

    return (
      <div>
        <h1>
          {t('Page Hader')}
        </h1>
        {this.getHello().map((hello: Hello, index: number) => {
          return (<span key={index}>{hello.message}</span>);
        })}
      </div>
    );
  }
}
