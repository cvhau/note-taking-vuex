<template>
  <div class="note-count">Note count: <strong>{{ noteCount }}</strong></div>
</template>
<script>
export default {
  name: 'NoteCountComponent',
  data() {
    return {
    };
  },
  computed: {
    noteCount() {
      return this.$store.getters.getNoteCount;
    },
  },
};
</script>
<style lang="scss" scoped></style>
