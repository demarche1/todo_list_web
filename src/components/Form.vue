<template>
  <form @submit.prevent="$emit('submit', todo)">
    <input
      placeholder="Digite sua tarefa"
      type="text"
      v-model="todo.title"
      required
    />
    <button type="submit">Criar tarefa</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      todo: {
        title: "",
        completed: false,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
form {
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
}
</style>
