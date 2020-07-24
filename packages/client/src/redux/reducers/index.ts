import { combineReducers } from 'redux';
import { RootState, RootAction } from 'src/redux/types';
import { eventsReducer } from './events';
import { liversReducer } from './livers';
import { eventListsReducer } from './event-lists';

export const reducerMap = {
  events: eventsReducer,
  livers: liversReducer,
  eventLists: eventListsReducer,
};

export const reducers = combineReducers<RootState, RootAction>(reducerMap);
