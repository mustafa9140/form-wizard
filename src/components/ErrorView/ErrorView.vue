<template>
  <div class="mt-100 bg-fafafa br-8 p-40 text-center mb-100">
    <h2>Ooops</h2>
    <div class="mt-50">
      <p>Your age is over our accepted limit.</p>
      <br />
      <p>We are sorry but we cannot insure you now.</p>
    </div>
    <div class="mt-50 mb-30">
      <router-link to="/" class="btn btn-primary"
        >Okay &nbsp;&nbsp;:(</router-link
      >
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
