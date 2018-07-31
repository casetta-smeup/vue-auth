<template>
  <div id="container">
    <form @submit.prevent="onSubmit">
      <div class="header">
        <h3>Login</h3>
      </div>

      <div class="content">
        <div class="username">
          <label for="username">Username:</label>

          <input
            id="username"
            type="text"
            v-model="username"
            v-bind:disabled="isLoading"
            >
        </div>

        <div class="password">
          <label for="password">Password:</label>

          <input
            id="password"
            type="password"
            v-model="password"
            v-bind:disabled="isLoading"
            >
        </div>

        <ul
          v-if="errorMsgs.length > 0"
          class="errorMessages">

          <li
            v-for="errorMsg in errorMsgs"
            :key="errorMsg">

            {{errorMsg}}
          </li>
        </ul>

        <loading v-if="isLoading"></loading>

        <button
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
      this.validateForm();

      if (!this.isLoading && this.valid) {
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
    },

    validateForm() {
      this.errorMsgs = [];

      if (this.username.trim().length == 0) {
        this.errorMsgs.push("Username: campo obbligatorio");
      }

      if (this.password.trim().length == 0) {
        this.errorMsgs.push("Password: campo obbligatorio");
      }

      this.valid = this.errorMsgs.length == 0;
    }
  },

  computed: {
    isLoading() {
      return this.$store.state.loading;
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
