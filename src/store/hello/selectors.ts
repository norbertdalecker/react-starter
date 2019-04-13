import { createSelector } from 'reselect';
import AppState from '../AppState';
import { HelloState } from './model';

const helloState = (state: AppState) => state.hello;

const getHello = createSelector(helloState, (hState: HelloState) => hState);

export default {
  getHello,
};
