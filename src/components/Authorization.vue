<template>
  <div id="container">
    <loading v-if="isLoading"></loading>

    <div v-if="!isLoading">
      <div
        v-if="authorizations.length == 0"
        class="no-auth">Nessuna autorizzazione trovata :(
      </div>

      <ul v-if="authorizations.length > 0">
        <li
          v-for="auth in authorizations" :key="auth.id">

          {{ auth.descr }}
        </li>
      </ul>

      <form @submit.prevent="onSubmit">
        <button
          type="button"
          @click="onSubmit">

          Mi sembra onesto
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Loading from "./Loading.vue";

export default {
  name: "authorization",

  components: {
    loading: Loading
  },

  data() {
    return {
      loading: true
    };
  },

  created() {
    this.$store.dispatch("loadAuthorizations");
  },

  methods: {
    onSubmit() {
      this.$router.go(-1);
    }
  },

  computed: {
    isLoading() {
      return this.$store.state.loading;
    },
    authorizations() {
      return this.$store.state.authorizations;
    }
  }
};
</script>


<style lang="scss">
</style>
