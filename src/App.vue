<template>
  <div id="app">
    <div class="notes-section">
      <div class="columns">
        <div class="column has-text-centered">
          <strong>Notes</strong>
          <div v-for="(note, index) in notes" :key="index" class="notes">
            {{ note }}
          </div>
        </div>
        <div class="column has-text-centered">
          <strong>Timestamp</strong>
          <div v-for="(timestamp, index) in timestamps" :key="index" class="timestamps">
            {{ timestamp }}
          </div>
        </div>
      </div>
      <InputComponent :placeholder="placeholder" />
    </div>
    <NoteCountComponent />
  </div>
</template>
<script>
import InputComponent from './components/InputComponent.vue';
import NoteCountComponent from './components/NoteCountComponent.vue';

export default {
  name: 'App',
  components: {
    InputComponent,
    NoteCountComponent,
  },
  data() {
    return {
      placeholder: 'Enter a note',
    };
  },
  computed: {
    notes() {
      return this.$store.getters.getNotes;
    },
    timestamps() {
      return this.$store.getters.getTimestamps;
    },
  },
};

</script>
<style lang="scss"></style>
