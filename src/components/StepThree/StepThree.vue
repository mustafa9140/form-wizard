<template>
  <div class="mt-100 bg-fafafa br-8 pt-40 pb-40 mb-100 text-center">
    <div class="text-center">
      <h2>Summary</h2>
    </div>
    <div class="mt-100">
      <p>
        Name: <b>{{ $route.query.name }}</b>
      </p>
    </div>
    <div class="mt-50">
      <p>
        Age: <b>{{ $route.query.age }}</b>
      </p>
    </div>
    <div class="mt-50">
      <p>
        Where do you live:
        <b>{{
          $route.query.place == 1
            ? "Hong Kong"
            : $route.query.place == 2
            ? "USA"
            : $route.query.place == 3
            ? "Australia"
            : "Place disturbed"
        }}</b>
      </p>
    </div>
    <div class="mt-50">
      <p>
        Package:
        <b>{{
          $route.query.package == 1
            ? "Standard"
            : $route.query.package == 1.5
            ? "Safe"
            : $route.query.package == 1.75
            ? "Super Safe"
            : "Package disturbed"
        }}</b>
      </p>
    </div>
    <div class="mt-50">
      <p>
        Premium:
        <b>{{
          `${
            10 * $route.query.age * $route.query.place * $route.query.package
          } ${
            $route.query.place == 1
              ? "HKD"
              : $route.query.place == 2
              ? "USD"
              : "AUD"
          }`
        }}</b>
      </p>
    </div>
    <div class="d-flex align-items-center justify-content-center mt-100">
      <button class="btn btn-secondary mr-30" @click.prevent="back">
        Back
      </button>
      <router-link to="/" class="btn btn-primary">Buy</router-link>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    document.title = this.$route.meta.title;
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style></style>
