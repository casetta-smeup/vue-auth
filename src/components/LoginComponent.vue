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

      <div
        v-if="errorMsg"
        class="errorMessage">

        {{ errorMsg }}
      </div>

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
      errorMsg: "",
      disabled: true
    };
  },

  methods: {
    onSubmit() {
      this.errorMsg = "";

      if (this.username.length > 0 && this.password.length > 0) {
        router.push("authorization");
      } else {
        this.errorMsg = "Username/password non presenti";
      }
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

  .errorMessage {
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
