<template>
  <div class="w-11/12 md:w-10/12 lg:w-8/12 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 py-24">
    <div>
      <div
        class="card-general rounded-2xl px-6 xs:px-14 py-14 text-purpleMain mb-4 outline-none"
      >
        <h1 class="text-3xl font-bold mb-3">Contact Us</h1>
        <p class="mb-6 text-sm sm:text-base opacity-90 font-normal text-color-custom mb-8">
          With fast, friendly, reliable support, we’re happy to answer any and
          all questions you’ve got!
        </p>
        <div class="gap-3 mb-3 flex items-center">
          <img
            src="@/assets/Icons/contact-mail.png"
            width="29px"
            height="17.5px"
            alt=""
          />
          <p class="text-sm font-light text-color-custom">
            info@coverwhale.com
          </p>
        </div>
        <div class="gap-3 flex items-center">
          <img
            src="@/assets/Icons/contact-phone.png"
            width="29px"
            height="17.5px"
            alt=""
          />
          <p class="text-sm font-light text-color-custom">+1 206 656 1175</p>
        </div>

        <div class="flex gap-10 justify-start items-center mt-10">
          <router-link to="">
            <img
              src="@/assets/Icons/facebook.png"
              width="19.5px"
              height="19.5px"
              alt=""
            />
          </router-link>
          <router-link to="">
            <img
              src="@/assets/Icons/instagram.png"
              width="19.5px"
              height="19.5px"
              alt=""
            />
          </router-link>
          <router-link to="">
            <img
              src="@/assets/Icons/twitter.png"
              width="24px"
              height="19.5px"
              alt=""
            />
          </router-link>
        </div>
      </div>
      <div class="card-general rounded-2xl relative">
        <iframe
          width="600"
          height="300"
          style="border:0"
          loading="lazy"
          allowfullscreen
          src=""
        >
        </iframe>
        <div
          class="card-general top-1.5 py-2 text-center w-7/12 mx-auto text-xs font-light text-color-custom position-center"
        >
          30211 Ave de Las Banderas, Suite 200 Rancho Santa Margarita, CA 92688
        </div>
      </div>
    </div>
    <div
      class="card-general rounded-2xl px-8 py-10 xs:p-10 pb-20 flex flex-col items-start gap-10"
    >
      <p class="text-sm text-light text-color-custom">Send us a Message</p>
      <BaseInput placeHolder="Name" type="text" />
      <BaseInput placeHolder="Email" type="text" />
      <BaseInput placeHolder="Phone" type="number" />

      <div>
        <p class="text-xs xs:text-sm text-light text-color-custom mb-2">
          Preferred method of communications
        </p>
        <div class="flex gap-12 justify-start">
          <div class="flex items-center mr-4 mb-4">
            <input id="radio1" type="radio" name="radio" class="hidden" />
            <label
              for="radio1"
              class="flex items-center cursor-pointer mr-8 font-light text-sm text-purpleMain"
            >
              <span
                class="w-3 h-3 inline-block mr-1.5 rounded-full border-2 border-purpleMain"
              ></span>
              Email</label
            >
            <input id="radio2" type="radio" name="radio" class="hidden" />
            <label
              for="radio2"
              class="flex items-center cursor-pointer font-light text-sm text-purpleMain"
            >
              <span
                class="w-3 h-3 inline-block mr-1.5 rounded-full border-2 border-purpleMain"
              ></span>
              Phone</label
            >
          </div>
        </div>
      </div>

      <BaseInput class="mb-8" placeHolder="Message" type="number" />
      <BaseButton
        buttonLabel="Send Message"
        variant="bg-purpleMain rounded-full px-10 py-2"
        class="mx-auto"
      >
        <template v-slot:iconPrepend>
          <img
            src="@/assets/Icons/paper-plane.png"
            width="15"
            height="15"
            alt=""
          />
        </template>
      </BaseButton>
    </div>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";

export default {
  components: {
    BaseInput,
    BaseButton,
  },
};
</script>

<style scoped>
.position-center {
  position: absolute;
  left: -50%;
  right: -50%;
  transform: translateX(50%, 50%);
}
.text-color-custom {
  color: #756e93;
}

/* custom radio button styles */

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  width: 5px;
  height: 5px;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
input[type="radio"] + label span {
  transition: background 0.2s, transform 0.2s;
}

input[type="radio"] + label span:hover,
input[type="radio"] + label:hover span {
  transform: scale(1.1);
}

input[type="radio"]:checked + label span {
  background-color: #613675;
  box-shadow: 0px 0px 0px 2px white inset;
}
</style>
