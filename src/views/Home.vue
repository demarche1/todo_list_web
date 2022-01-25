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

<style scoped>
.base_component {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  padding: 1.5rem;

  border: 1px solid rgba(155, 139, 139, 0.3);
  border-radius: 5px;
}
</style>
