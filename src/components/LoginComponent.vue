<template>
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
          >
      </div>

      <div class="password">
        <label for="password">Password:</label>

        <input
          id="password"
          type="password"
          v-model="password"
          >
      </div>

      <ul
        v-if="errorMsgs.length > 0"
        class="errorMessages">

        <li v-for="errorMsg in errorMsgs" :key="errorMsg">{{errorMsg}}</li>
      </ul>

      <button type="submit">
        Login
      </button>
    </div>
  </form>
</template>

<script>
import router from "@/router";

export default {
  name: "loginComponent",

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

      if (this.valid) {
        router.push("authorization");
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
  }
};
</script>

<style lang="scss">
.header {
  background-color: red;
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
</style>
