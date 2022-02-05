<template>
  <div class="list">
    <ul v-for="todo in todos" :key="todo.id">
      <li @dblclick="$emit('complete', onComplete(todo))">
        <div class="todo">
          <p :class="{ completed: todo.completed }">{{ todo.title }}</p>
          <div class="actions">
            <img
              @click="isDescriptionOpen(todo.id)"
              :class="[
                'description_arrow',
                { open: isCurrentTodoDescriptionOpen(todo.id) },
              ]"
              src="https://img.icons8.com/color/48/000000/expand-arrow--v1.png"
            />
            <img
              @click="onEditIconClick(todo)"
              src="https://img.icons8.com/fluency/48/000000/edit-chat-history.png"
            />
            <img
              @click="$emit('destroy', todo.id)"
              src="https://img.icons8.com/fluency/48/000000/filled-trash.png"
            />
          </div>
        </div>

        <transition name="fade">
          <p
            class="description_box"
            v-if="isCurrentTodoDescriptionOpen(todo.id)"
          >
            {{ todo.description || defaultDescription }}
          </p>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoDescriptionOpenId: 0,
    };
  },
  props: {
    todos: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    /**
     * Return default description
     * @returns { string }
     */
    defaultDescription() {
      return "Dê uma descrição para sua tarefa";
    },
  },
  methods: {
    /**
     * Change todo status when double clicked.
     * @param { Object } todo
     * @returns { Object } todo
     */
    onComplete(todo) {
      todo.completed = !todo.completed;
      return todo;
    },
    /**
     * When clicked on edit icon open edit modal and emit the todo reference to edit.
     * @param { Object } todo
     */
    onEditIconClick(todo) {
      this.$emit("toggleModal");
      this.$emit("todoToEdit", todo);
    },
    /**
     * Checks if the id of the clicked task is an id that has already been clicked,
     * if it is, set it to 0, if not, set the new id.
     * @param { number } todoId
     */
    isDescriptionOpen(todoId) {
      if (this.todoDescriptionOpenId !== todoId) {
        this.todoDescriptionOpenId = todoId;
      } else {
        this.todoDescriptionOpenId = 0;
      }
    },
    /**
     * Varify if current todo is same of todoOpenDescription context, if it return true.
     * @param { number } todoId
     * @returns { boolean }
     */
    isCurrentTodoDescriptionOpen(todoId) {
      return todoId === this.todoDescriptionOpenId ? true : false;
    },
  },
};
</script>

<style scoped lang="scss">
.list {
  margin-top: 10px;

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}

ul {
  padding: 0;
  margin: 0;
  position: relative;

  li {
    background-color: #2b3a4e;
    padding: 1.2rem;
    border-radius: 1rem;
    list-style: none;
    color: #8b98a8;
    margin-top: 10px;
    position: relative;

    &:hover {
      background-color: #2f3847;
    }

    .todo {
      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        margin: 0;
        padding: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        &.completed {
          text-decoration: line-through;
          color: rgb(180, 1, 1);
        }
      }

      .actions {
        display: flex;
        align-items: center;
        gap: 5px;
        img {
          width: 24px;
          height: 24px;
          cursor: pointer;
        }
      }

      .description_arrow {
        transform: rotate(0deg);
        transition: all 0.4s linear;
      }

      .description_arrow.open {
        transform: rotate(180deg);
      }
    }
    .description_box {
      border: 1px solid #e1e8ef33;
      padding: 10px;
      border-radius: 5px;
      height: 50px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
