/**
 * Actions are functions that exist to call mutations. In addition, actions can perform
 * asynchronous calls/logic handling before committing to mutations.
 */

import { ADD_NOTE, ADD_TIMESTAMP } from './mutations';

export const addNote = 'addNote';
export const addTimestamp = 'addTimestamp';

export default {
  [addNote](context, payload) {
    context.commit(ADD_NOTE, payload);
  },
  [addTimestamp](context, payload) {
    context.commit(ADD_TIMESTAMP, payload);
  },
};
