<template>
  <div>
    <h2>Editar Tarefa</h2>
    <form @submit.prevent="onTodoSaved(todo)">
      <todo-input :value="todo" vModel="title" />
      <button type="submit">Salvar</button>
    </form>
  </div>
</template>

<script>
import TodoInput from "@/components/Shared/Input.vue";

export default {
  name: "TodoModal",

  props: {
    todo: {
      type: Object,
    },
  },
  components: {
    TodoInput,
  },
  methods: {
    onTodoSaved(todo) {
      this.$emit("saveTodo", todo);
      this.$emit("toggleModal");
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
}
</style>
