<template>
  <div>
    <modal-title>Editar Tarefa</modal-title>
    <form @submit.prevent="onTodoSaved(todo)">
      <modal-input :value="todo.title" @update="update" />
      <modal-button type="submit">Salvar</modal-button>
    </form>
  </div>
</template>

<script>
import ModalInput from "@/components/Shared/Input.vue";
import ModalButton from "@/components/Shared/Button.vue";
import ModalTitle from "@/components/Shared/Title.vue";

export default {
  name: "TodoModal",

  props: {
    todo: {
      type: Object,
    },
  },
  components: {
    ModalInput,
    ModalButton,
    ModalTitle,
  },
  methods: {
    /**
     * Emits events to save and hidden or show modal.
     *
     * @param { todo } todo
     */
    onTodoSaved(todo) {
      this.$emit("saveTodo", todo);
      this.$emit("toggleModal");
    },
    /**
     * Update value of input.
     *
     * @param { string } value
     */
    update(value) {
      this.todo.title = value;
    },
  },
};
</script>
