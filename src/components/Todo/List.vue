<template>
  <div class="list">
    <ul v-for="todo in todos" :key="todo.id">
      <li @dblclick="$emit('complete', onComplete(todo))">
        <span class="completed" v-if="todo.completed">✅</span>
        <p>{{ todo.title }}</p>
        <div class="actions">
          <img
            @click="onEditIconClick(todo)"
            src="https://img.icons8.com/fluency/48/000000/edit-chat-history.png"
          />
          <img
            @click="$emit('destroy', todo.id)"
            src="https://img.icons8.com/fluency/48/000000/filled-trash.png"
          />
          <img
            @click="isOpen = !isOpen"
            :class="['description', { open: isOpen }]"
            src="https://img.icons8.com/color/48/000000/expand-arrow--v1.png"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  props: {
    todos: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    onComplete(todo) {
      todo.completed = !todo.completed;
      return todo;
    },
    onEditIconClick(todo) {
      this.$emit("toggleModal");
      this.$emit("todoToEdit", todo);
    },
  },
};
</script>

<style scoped lang="scss">
.list {
  margin-top: 10px;

  ul {
    padding: 0;
    margin: 0;
    position: relative;

    li {
      background-color: #2b3a4e;
      padding: 1.2rem 2rem 1.2rem 2rem;
      border-radius: 1rem;
      list-style: none;
      color: #8b98a8;
      margin-top: 10px;
      position: relative;

      display: flex;
      justify-content: space-between;
      align-items: center;

      &:hover {
        background-color: #2f3847;
      }

      p {
        margin: 0;
        padding: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .completed {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 15px;
      }

      .actions {
        display: flex;
        gap: 5px;
        img {
          width: 24px;
          height: 24px;
          cursor: pointer;
        }
      }

      .description {
        content: "";
        position: absolute;
        top: 50%;
        right: 90px;

        transform: translateY(-50%) rotate(0deg);

        transition: all 0.4s linear;
      }

      .description.open {
        transform: translateY(-50%) rotate(180deg);
      }
    }
  }
}
</style>
