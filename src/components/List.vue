<template>
  <div class="list">
    <ul v-for="todo in todos" :key="todo.id">
      <li @click="$emit('complete', onComplete(todo))">
        <span v-if="todo.completed">✅</span>
        {{ todo.title }}
        <span @click="$emit('destroy', todo.id)" class="destroy">X</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array,
      required: false,
    },
  },
  methods: {
    onComplete(todo) {
      todo.completed = !todo.completed;
      return todo;
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

    li {
      background-color: #2b3a4e;
      padding: 1.2rem 1rem;
      border-radius: 1rem;
      position: relative;
      list-style: none;
      color: #8b98a8;
      margin-top: 10px;

      &:hover {
        background-color: #2f3847;
      }

      .destroy {
        background-color: #ff0202;
        width: 24px;
        height: 24px;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: all 0.2s linear;
        text-align: center;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 1.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 3px;
        font-weight: bold;
        color: #fff;
      }
    }
  }
}
</style>
