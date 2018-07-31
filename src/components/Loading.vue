<template>
  <div
    v-if="isLoading"
    class="loading">

    Loading
    <span class="mdi mdi-refresh"></span>
  </div>
</template>

<script>
export default {
  computed: {
    isLoading: function() {
      return this.$store.state.loading;
    }
  }
};
</script>

<style lang="scss">
.loading {
  background: orange;
  margin: 0.5rem;
  padding: 0.2rem;

  .mdi::before {
    animation-name: spin;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
}

@-moz-keyframes spin {
  from {
    -moz-transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
