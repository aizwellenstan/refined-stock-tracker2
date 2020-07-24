import { Event } from '../../../shared/entities/event';
import { RootState } from './types';

export const eventSelector = (state: RootState, id: number): Event => ({
  ...state.events[id],
  liver: state.livers[state.events[id].liver],
});
