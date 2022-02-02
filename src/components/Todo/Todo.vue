<template>
  <div class="todo">
    <Form @submit="createTodo" />
    <List
      :todos="todos"
      @destroy="deleteTodo"
      @complete="saveTodo"
      @toggleModal="toggleModal"
      @todoToEdit="setTodoEdit"
    />
    <base-modal v-show="showModal" @toggleModal="toggleModal">
      <todo-modal
        :todo="todoEdit"
        @saveTodo="saveTodo"
        @toggleModal="toggleModal"
      />
    </base-modal>
  </div>
</template>

<script>
import api from "@/utils/api";
import List from "@/components/Todo/List.vue";
import Form from "@/components/Todo/Form.vue";
import TodoModal from "@/components/Todo/Modal.vue";
import BaseModal from "@/components/UI/BaseModal.vue";

export default {
  name: "Todo",
  data() {
    return {
      todos: [],
      showModal: false,
      todoEdit: {},
    };
  },
  components: {
    List,
    Form,
    BaseModal,
    TodoModal,
  },
  methods: {
    /**
     * @typedef todo
     * @property { number } id
     * @property { string } title
     * @property { boolean } completed
     */

    /**
     * Retrieves all todos from api.
     */
    async getTodos() {
      this.todos = await api("/", "GET");
    },
    /**
     * Create todo.
     * @param { todo } todo
     */
    async createTodo(todo) {
      await api("/", "POST", todo);

      todo.title = "";
      todo.completed = false;

      await this.getTodos();
    },
    /**
     * Complete todo.
     * @param { todo } todo
     */
    async saveTodo(todo) {
      console.log("trigguei", todo);
      await api(`/${todo.id}`, "PUT", todo);
    },
    /**
     * Delete current Todo.
     * @param { string } id
     */
    async deleteTodo(id) {
      await api(`/${id}`, "DELETE");

      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    /**
     * Show and hidden edit modal.
     */
    toggleModal() {
      this.showModal = !this.showModal;
    },
    /**
     * Set which todo will be edited.
     */
    setTodoEdit(todo) {
      this.todoEdit = todo;
    },
  },
  async created() {
    await this.getTodos();
  },
};
</script>

<style scoped lang="scss">
.todo {
  width: 100%;
}
</style>
