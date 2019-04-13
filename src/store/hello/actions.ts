import { action } from 'typesafe-actions';
import { Hello } from './model';
export enum ActionTypes {
  LIST = '@@hello/LIST',
  LIST_REQUEST = '@@hello/LIST_REQUEST',
}
export const fetchSuccess = (data: Hello[]) => action(ActionTypes.LIST, data);
export const fetchRequest = () => action(ActionTypes.LIST_REQUEST);
