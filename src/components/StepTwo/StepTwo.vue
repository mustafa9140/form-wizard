<template>
  <div class="mt-100 bg-ffffff br-8 pt-40 pb-40 mb-500">
    <div class="text-center pr-40 pl-40">
      <h2>Tell us about yourself</h2>
    </div>
    <Form
      class="mt-50"
      @submit="formSubmitted"
      :validation-schema="schema"
      autocomplete="on"
    >
      <div class="form-controls pr-40 pl-40">
        <label>Name</label>
        <Field
          name="username"
          v-model="username"
          type="text"
          placeholder="Enter Name"
        />
        <ErrorMessage class="error" name="username" />
      </div>
      <div class="form-controls pr-40 pl-40">
        <label>Age</label>
        <Field name="age" v-model="age" type="text" placeholder="Enter Age" />
        <ErrorMessage class="error" name="age" />
      </div>
      <div class="form-controls pr-40 pl-40">
        <label>Where do you live?</label>
        <select v-model="place">
          <option value="1">Hong Kong</option>
          <option value="2">USA</option>
          <option value="3">Austrailia</option>
        </select>
        <Field name="place" v-model="place" type="hidden" />
        <ErrorMessage class="error" name="place" />
      </div>
      <div class="bg-fafafa float-start w-100 pt-40 pb-40 br-8">
        <div class="form-controls pr-40 pl-40">
          <label>
            <input
              type="radio"
              name="package"
              value="1"
              v-model="package"
            />Standard
          </label>
        </div>
        <div class="form-controls pr-40 pl-40">
          <label>
            <input
              type="radio"
              name="package"
              value="1.5"
              v-model="package"
            />Safe
            <template v-if="age > 0"
              >( +{{
                `${(10 * this.age * this.place * 1) / 2} ${
                  place == 1 ? "HKD" : place == 2 ? "USD" : "AUD"
                }`
              }}, 50% )</template
            >
          </label>
        </div>
        <div class="form-controls pr-40 pl-40">
          <label>
            <input
              type="radio"
              name="package"
              value="1.75"
              v-model="package"
            />Super Safe
            <template v-if="age > 0"
              >( +{{
                `${10 * this.age * this.place * 1 * 0.75} ${
                  place == 1 ? "HKD" : place == 2 ? "USD" : "AUD"
                }`
              }}, 75% )</template
            >
          </label>
        </div>
        <Field name="package" v-model="package" type="hidden" />
        <ErrorMessage class="error pl-40" name="package" />
        <div class="text-center fw-700 fs-30">
          <p>
            Your Premium is:
            <template v-if="age > 0">
              {{
                `${10 * this.age * this.place * this.package} ${
                  place == 1 ? "HKD" : place == 2 ? "USD" : "AUD"
                }`
              }}
            </template>
          </p>
        </div>
        <div class="d-flex align-items-center justify-content-center mt-100">
          <router-link to="/" class="btn btn-secondary mr-30">Back</router-link>
          <button class="btn btn-primary">Next</button>
        </div>
      </div>
    </Form>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  created() {
    document.title = this.$route.meta.title;
  },
  data() {
    const schema = yup.object({
      username: yup
        .string()
        .required()
        .min(8, "Name must be atleast 8 characters long"),
      age: yup
        .number()
        .required()
        .positive("Age must be greater that 0")
        .typeError("Age must be a number"),
      place: yup.string().required(),
      package: yup.number().required().positive("Package must be selected"),
    });
    return {
      schema,
      username: "",
      age: 0,
      place: 1,
      package: 0,
    };
  },
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  methods: {
    formSubmitted() {
      if (this.age > 100) {
        this.$router.push("/error-found");
        return;
      }
      this.$router.push({
        path: "/step-three",
        query: {
          name: this.username,
          age: this.age,
          place: this.place,
          package: this.package,
        },
      });
    },
  },
};
</script>

<style></style>
