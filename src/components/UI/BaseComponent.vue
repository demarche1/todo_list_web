<template>
  <div class="base_component">
    <slot />
  </div>
</template>

<style scoped>
.base_component {
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  padding: 1.5rem;

  border: 1px solid rgba(155, 139, 139, 0.3);
  border-radius: 5px;
}
</style>
