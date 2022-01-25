<template>
  <div class="todo">
    <Form @submit="createTodo" />
    <List :todos="todos" @destroy="deleteTodo" @complete="completeTodo" />
  </div>
</template>

<script>
import api from "@/utils/api";
import List from "@/components/List.vue";
import Form from "@/components/Form.vue";

export default {
  name: "Todo",
  data() {
    return {
      todos: [],
    };
  },
  components: {
    List,
    Form,
  },
  methods: {
    /**
     * Retrieves all todos from api
     */
    async getTodos() {
      this.todos = await api("/", "GET");
    },
    /**
     * Create todo
     * @param {EventTarget} event
     */
    async createTodo(todo) {
      await api("/", "POST", todo);

      todo.title = "";
      todo.completed = false;

      await this.getTodos();
    },
    async completeTodo(todo) {
      await api(`/${todo.id}`, "PUT", todo);
    },
    /**
     * Delete current Todo
     * @param {string} id
     */
    async deleteTodo(id) {
      await api(`/${id}`, "DELETE");

      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
  async created() {
    await this.getTodos();
  },
};
</script>

<style scoped lang="scss">
.todo {
  & {
    width: 100%;
  }
}
</style>
