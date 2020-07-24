import { fetchEventsProcess } from 'src/redux/actions/events';
import produce from 'immer';
import { isType } from 'typescript-fsa';
import { Reducer } from 'src/redux/types';
import { Overwrite } from 'type-zoo';
import { Event } from '../../../../shared/entities/event';

export type NormalizedEvent = Overwrite<
  Event,
  {
    liver: number;
  }
>;

export interface EventsState {
  readonly [K: number]: any;
}

function normalizeEvent(draft: any, event: Event) {
  draft[event.id] = {
    ...event,
    liver: event.liver.id,
  };
}

function normalizeEvents(draft: any, events: Event[]) {
  for (const event of events) {
    normalizeEvent(draft, event);
  }
}

const initialState: EventsState = {};

export const eventsReducer: Reducer<EventsState> = (
  state = initialState,
  action,
) =>
  produce(state, draft => {
    if (isType(action, fetchEventsProcess.done)) {
      normalizeEvents(draft, action.payload.result.events);
      return;
    }

    return draft;
  });
