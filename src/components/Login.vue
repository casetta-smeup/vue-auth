<template>
  <div id="container">
    <form @submit.prevent="onSubmit">
      <div class="header">
        <h3>Login</h3>
      </div>

      <div class="content">
        <div
          class="username"
          :class="{ 'form-group-error': $v.username.$error }">

          <label for="username">Username:</label>

          <input
            id="username"
            type="text"
            v-model.trim="$v.username.$model"
            v-bind:disabled="isLoading"
            >
        </div>

        <div
          class="password"
          :class="{ 'form-group-error': $v.password.$error }">

          <label for="password">Password:</label>

          <input
            id="password"
            type="password"
            v-model.trim="$v.password.$model"
            v-bind:disabled="isLoading"
            >
        </div>

        <loading v-if="isLoading"></loading>

        <button
          :disabled="$v.$invalid"
          v-show="!isLoading"
          type="submit">

          Login
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import Loading from "./Loading";
import { required } from 'vuelidate/lib/validators';

export default {
  name: "loginComponent",

  components: {
    loading: Loading
  },

  data() {
    return {
      username: "",
      password: "",
      errorMsgs: [],
      valid: false
    };
  },

  methods: {
    onSubmit() {
      if (!this.isLoading && !this.$v.$invalid) {
        const username = this.username;
        const password = this.password;

        this.$store
          .dispatch("login", {
            username,
            password
          })
          .then(() => {
            this.$router.push("authorization");
          });
      }
    }
  },

  computed: {
    isLoading() {
      return this.$store.state.loading;
    }
  },

  validations: {
    username: {
      required
    },
    password: {
      required
    }
  }
};
</script>

<style lang="scss">
#container {
  width: 400px;
  max-width: 400px;
  margin: auto;
  margin-top: 50px;
  border: 1px solid black;

  .header {
    background-color: deepskyblue;
    color: white;
    padding: 0.5rem;
  }

  .content {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .username,
    .password {
      display: flex;
      flex-direction: column;
      margin: 0.5rem;

      &.form-group-error {
        label {
          color: red;
        }
      }
    }

    .errorMessages {
      background: red;
      color: white;
      margin: 0.5rem;
    }
  }

  button {
    max-width: 200px;
    margin: auto;
  }
}
</style>
