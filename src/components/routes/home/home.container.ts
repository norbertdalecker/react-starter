import { withNamespaces } from 'react-i18next';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState, selectors } from '../../../store';

import { fetchRequest } from 'store/hello/actions';
import Home from './Home';
import { DispatchProps, StoreProps } from './home.interfaces';

export const mapStateToProps = (state: AppState) => ({
  helloState: selectors.getHello(state),
  fetchHello: fetchRequest(),
});

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchHello: () => dispatch(fetchRequest()),
});

export default connect<StoreProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps,
)(withNamespaces(['common'])(Home));
