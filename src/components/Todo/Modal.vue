<template>
  <div>
    <modal-title>Editar Tarefa</modal-title>
    <form @submit.prevent="onTodoSaved(todo)">
      <modal-input :value="todo.title" @update="update" />
      <textarea
        v-model="todo.description"
        placeholder="Dê uma descrição para sua tarefa"
        class="description"
      />
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

<style scoped lang="scss">
textarea {
  width: calc(100% - 1.5rem);
  height: 168px;
  margin-top: 1rem;
  border: 1px solid #e1e8ef8c;
  border-radius: 1rem;
  padding: 0.6rem;
  background-color: #18243c;
  color: #e1e8ef;
  outline: none;
}
</style>
