/**
 * Getters are to an application store what computed properties are to a component.
 * Getters are used to derive computed information from store state. We can call
 * getters multiple times in our actions and in our components.
 */

export default {
  getNotes(state) {
    return state.notes;
  },
  getTimestamps(state) {
    return state.timestamps;
  },
  getNoteCount(state) {
    return state.notes.length;
  },
};
