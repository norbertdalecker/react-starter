import { RouterState } from 'connected-react-router';
import { HelloState } from './hello/model';
export default interface AppState {
  router: RouterState;
  hello: HelloState;
}
