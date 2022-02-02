<template>
  <base-component>
    <Todo />
  </base-component>
</template>

<script>
import Todo from "@/components/Todo/Todo.vue";
import BaseComponent from "@/components/UI/BaseComponent.vue";

export default {
  name: "Home",
  components: {
    Todo,
    BaseComponent,
  },
};
</script>
