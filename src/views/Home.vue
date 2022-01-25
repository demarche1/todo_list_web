<template>
  <base-component>
    <Todo />
  </base-component>
</template>

<script>
import Todo from "@/components/Todo.vue";
import BaseComponent from "@/components/BaseComponent.vue";

export default {
  name: "Home",
  components: {
    Todo,
    BaseComponent,
  },
};
</script>
