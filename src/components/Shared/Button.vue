<template>
  <button :type="type"><slot /></button>
</template>

<script>
export default {
  name: "SharedButton",
  props: {
    type: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  background-color: #2d6cea;
  color: #e1e8ef;
  border: none;
  border-radius: 1rem;
  padding: 0.6rem 1.5rem;
  margin-top: 10px;
  width: max-content;
  transition: all 0.3s linear;
  outline: none;
  cursor: pointer;
  box-shadow: 0 0 5px 3px rgba(45, 108, 234, 0.3);

  &:hover {
    background-color: #1b5cdc;
  }
}
</style>
