import { WithNamespaces } from 'react-i18next';
import { RouteComponentProps } from 'react-router';

import { mapDispatchToProps, mapStateToProps } from './home.container';

export type StoreProps = ReturnType<typeof mapStateToProps>;
export type DispatchProps = ReturnType<typeof mapDispatchToProps>;

export type Props = StoreProps & DispatchProps & WithNamespaces & RouteComponentProps<{}>;
