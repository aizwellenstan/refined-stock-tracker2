import { fetchEventsProcess } from 'src/redux/actions/events';
import produce from 'immer';
import { isType } from 'typescript-fsa';
import { Reducer } from 'src/redux/types';
import { Liver } from '../../../../shared/entities/liver';

export interface LiversState {
  readonly [K: number]: any;
}

function normalizeLiver(draft: any, liver: Liver) {
  draft[liver.id] = liver;
}

function normalizeLivers(draft: any, livers: Liver[]) {
  for (const liver of livers) {
    normalizeLiver(draft, liver);
  }
}

const initialState: LiversState = {};

export const liversReducer: Reducer<LiversState> = (
  state = initialState,
  action,
) =>
  produce(state, draft => {
    if (isType(action, fetchEventsProcess.done)) {
      normalizeLivers(
        draft,
        action.payload.result.events.map(event => event.liver),
      );
    }

    return draft;
  });
