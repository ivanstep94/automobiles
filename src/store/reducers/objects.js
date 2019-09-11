import { STORE_OBJECT } from '../actions/objects';

export default function(state = [], {type, payload = []}) {
    switch (type) {
      case STORE_OBJECT:
      return [...payload];
  }
  return state;
}