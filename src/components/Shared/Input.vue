<template>
  <input
    :placeholder="placeholder"
    :type="type"
    required
    v-model="value[vModel]"
    @input="handleInput"
  />
</template>

<script>
export default {
  name: "SharedInput",
  props: {
    placeholder: {
      type: String,
      required: false,
      default: () => "",
    },
    type: {
      type: String,
      required: false,
      default: () => "text",
    },
    value: {
      type: Object,
    },
    vModel: {
      type: String,
    },
  },
  data() {
    return {
      content: this.value,
    };
  },
  methods: {
    handleInput() {
      this.$emit("input", this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  background: transparent;
  width: calc(100% - 1.3rem);
  border: 1px solid #999fc6;
  border-radius: 1rem;
  padding: 0.6rem;
  outline: none;
  color: #e1e8ef;

  &::placeholder {
    color: #999fc6;
  }
}
</style>
