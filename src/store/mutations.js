/**
 * In Vuex, mutations need to be explicitly defined. A mutation consists of a string type and a
 * handler. In Flux architectures, mutation string types are often declared in capital letters
 * to distinguish them from other functions and for tooling/linting purposes.
 */

export const ADD_NOTE = 'ADD_NOTE';
export const ADD_TIMESTAMP = 'ADD_TIMESTAMP';

export default {
  [ADD_NOTE](state, payload) {
    const newNote = payload;
    state.notes.push(newNote);
  },
  [ADD_TIMESTAMP](state, payload) {
    const newTimestamp = payload;
    state.timestamps.push(newTimestamp);
  },
};
