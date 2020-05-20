<template>
  <div class="contact">
    <button @click="openForm" class="contact-button">Contact Form</button>

    <div class="modal hidden">
      <div class="contact-form">
        <button @click="closeForm" class="btn-close">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.4186 11.0875C21.4186 10.95 21.3061 10.8375 21.1686 10.8375L19.1061 10.8469L15.9998 14.55L12.8967 10.85L10.8311 10.8406C10.6936 10.8406 10.5811 10.95 10.5811 11.0906C10.5811 11.15 10.6029 11.2063 10.6404 11.2532L14.7061 16.0969L10.6404 20.9375C10.6027 20.9833 10.5817 21.0407 10.5811 21.1C10.5811 21.2375 10.6936 21.35 10.8311 21.35L12.8967 21.3407L15.9998 17.6375L19.1029 21.3375L21.1654 21.3469C21.3029 21.3469 21.4154 21.2375 21.4154 21.0969C21.4154 21.0375 21.3936 20.9813 21.3561 20.9344L17.2967 16.0938L21.3623 11.25C21.3998 11.2063 21.4186 11.1469 21.4186 11.0875Z"
              fill="black"
            />
            <path
              d="M16 2.03125C8.26875 2.03125 2 8.3 2 16.0312C2 23.7625 8.26875 30.0312 16 30.0312C23.7313 30.0312 30 23.7625 30 16.0312C30 8.3 23.7313 2.03125 16 2.03125ZM16 27.6562C9.58125 27.6562 4.375 22.45 4.375 16.0312C4.375 9.6125 9.58125 4.40625 16 4.40625C22.4188 4.40625 27.625 9.6125 27.625 16.0312C27.625 22.45 22.4188 27.6562 16 27.6562Z"
              fill="black"
            />
          </svg>
        </button>
        <form @submit="submitForm" action="/cgi-sys/FormMail.cgi" method="post">
          <label for="name">Name*</label>
          <input id="input-name" v-model="name" type="text" name="name" tabindex="1" autocomplete="off" />

          <label for="email">Email*</label>
          <input id="input-email" v-model="email" type="email" tabindex="2" autocomplete="off" />

          <label for="message">Message*</label>
          <textarea
            id="input-message"
            v-model="message"
            name="message"
            cols="auto"
            rows="10"
            tabindex="3"
          ></textarea>

          <p>*required</p>

          <ul v-if="errors.length" class="error-list">
            Please add a valid
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>

          <button type="submit" tabindex="4">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      errors: [],
      name: null,
      email: null,
      message: null
    };
  },
  methods: {
    openForm() {
      document.querySelector(".modal").classList.remove("hidden");
      document.querySelector(".contact-button").classList.add("hidden");
      document.querySelector("#input-name").focus();
    },
    closeForm() {
      document.querySelector(".modal").classList.add("hidden");
      document.querySelector(".contact-button").classList.remove("hidden");
    },
    validEmail(email) {
      let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validateForm() {
      this.errors = [];

      if (!this.name) {
        document.querySelector("#input-name").classList.add("error");
        this.errors.push("name");
      }
      if (!this.validEmail(this.email)) {
        document.querySelector("#input-email").classList.add("error");
        this.errors.push("email");
      }
      if (!this.message) {
        document.querySelector("#input-message").classList.add("error");
        this.errors.push("message");
      }
      if (!this.errors.length) {
        return true;
      }

      return false;
    },
    submitForm: function(e) {
      if (this.validateForm()) {
        console.log("validated");
        // this.closeForm();
      } else {
        console.log("nope");
      }
      e.preventDefault();
    }
  }
};
</script>

<style>
</style>