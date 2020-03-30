<template>
  <input :placeholder="placeholder" v-model="input" @keyup.enter="monitorEnterKey"
    class="input is-small" type="text" autofocus />
</template>
<script>
import { addNote, addTimestamp } from '../store/actions';

export default {
  name: 'InputComponent',
  props: {
    placeholder: String,
  },
  data() {
    return {
      input: '',
    };
  },
  methods: {
    monitorEnterKey() {
      if (this.input.trim() !== '') {
        this.$store.dispatch(addNote, this.input);
        this.$store.dispatch(addTimestamp, (new Date()).toLocaleString());
      }
      this.input = '';
    },
  },
};
</script>
<style lang="scss" scoped>
  input {
    text-align: center;
  }
</style>
