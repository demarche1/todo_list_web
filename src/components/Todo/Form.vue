<template>
  <form @submit.prevent="$emit('submit', todo)">
    <todo-input placeholder="Digite sua terefa" :value="todo" vModel="title" />
    <button type="submit">Criar tarefa</button>
  </form>
</template>

<script>
import TodoInput from "@/components/Shared/Input.vue";

export default {
  components: {
    TodoInput,
  },
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
}
</style>
