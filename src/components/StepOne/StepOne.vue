<template>
  <div class="mt-100 bg-fafafa br-8 p-40 text-center mb-100">
    <h2>Hello There!</h2>
    <div class="mt-50">
      <p>Let's buy some insurance. It is going to take only a few steps</p>
    </div>
    <div class="mt-50 mb-30">
      <router-link to="/step-two" class="btn btn-primary">Start</router-link>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    document.title = this.$route.meta.title;
  },
};
</script>

<style></style>
