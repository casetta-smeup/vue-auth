<template>
  <div id="login">
    <loginComponent></loginComponent>
  </div>
</template>

<script>
import LoginComponent from "@/components/LoginComponent.vue";

export default {
  name: "login",
  components: {
    LoginComponent
  }
};
</script>

<style lang="scss">
#login {
  width: 400px;
  max-width: 400px;
  margin: auto;
  margin-top: 50px;
  border: 1px solid black;
}
</style>
