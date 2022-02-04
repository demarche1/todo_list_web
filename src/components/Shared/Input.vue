<template>
  <input
    required
    :placeholder="placeholder"
    :type="type"
    :value="value"
    @input="$emit('update', $event.target.value)"
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
      type: [String, Number],
      required: true,
      default: () => "",
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
