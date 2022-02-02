<template>
  <div class="overlay">
    <div class="modal">
      <img
        @click="$emit('toggleModal')"
        class="close-button"
        src="https://img.icons8.com/external-tal-revivo-duo-tal-revivo/25/000000/external-close-cross-symbol-for-discontinued-and-invalid-basic-duo-tal-revivo.png"
      />
      <slot />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

.modal {
  max-width: 800px;
  max-height: 600px;
  margin: 80px auto 0 auto;
  background-color: #18243c;
  padding: 15px;
  overflow: auto;
  border-radius: 10px;
}

.close-button {
  background: unset;
  outline: unset;
  border: 1px solid rgba(0, 0, 0, 0.2);
  float: right;
  cursor: pointer;
}
</style>
