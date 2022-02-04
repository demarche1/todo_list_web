<template>
  <form @submit.prevent="$emit('submit', todo)">
    <todo-input
      placeholder="Digite sua terefa"
      @update="update"
      :value="todo.title"
    />
    <todo-button type="submit">Criar tarefa</todo-button>
  </form>
</template>

<script>
import TodoInput from "@/components/Shared/Input.vue";
import TodoButton from "@/components/Shared/Button.vue";

export default {
  components: {
    TodoInput,
    TodoButton,
  },
  data() {
    return {
      todo: {
        title: "",
        completed: false,
      },
    };
  },
  methods: {
    update(value) {
      this.todo.title = value;
    },
  },
};
</script>
