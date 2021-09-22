<template>
  <div class="support-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Support</h1>
          <p class="text-xs-center">If you have any inquiries concerning the Comics Info service, please send us an email through the following form.</p>
          <form @submit.prevent="onSubmit">
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                v-model="email"
                placeholder="Email (Optional)"
              />
            </fieldset>
            <fieldset class="form-group">
              <textarea
                class="form-control form-control-lg"
                v-model="message"
                placeholder="Write a message..."
                rows="10"
             />
            </fieldset>

            <button :disabled='!isSendEnabled || this.message.length <= 0' class="btn btn-lg btn-primary pull-xs-right">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FEEDBACK_CREATE } from "@/store/actions.type";

export default {
  name: "Support",
  data() {
    return {
      isSendEnabled: true,
      email: null,
      message: ""
    };
  },
  methods: {
    onSubmit() {
      this.isSendEnabled = false
      this.$store
        .dispatch(FEEDBACK_CREATE, {
          email: this.email,
          message: this.message,
          origin: "WEB"
        })
        .then(() => {
            this.isSendEnabled = true;
            this.$alert("Thank you for your feedback 🤗")
        })
        .catch(() => {
            this.isSendEnabled = true;
            this.$alert("Something went wrong. Please try again later ❤️")
        });
    }
  }
};
</script>
