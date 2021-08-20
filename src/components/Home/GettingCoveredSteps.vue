<template>
  <div class="text-center pt-5 pb-40 mx-8 sm:mx-20 lg:mx-52">
    <h1 class="text-2xl font-bold mb-8 text-gray-700">
      Getting covered is literally as easy as 1, 2, 3.
    </h1>

    <transition name="slide-fade" mode="out-in">
      <div
        v-if="gettingCoveredPage == 1"
        key="page1"
        class="card-general flex flex-col-reverse md:grid md:grid-cols-2 items-center"
      >
        <div
          class="border-r-0 md:border-r-2 border-gray-200 max-w-xs md:max-w-full md:my-4"
        >
          <img src="@/assets/Home/truck-map.png" alt="" />
        </div>
        <div class="flex flex-col justify-evenly h-full">
          <div class="py-6 border-b-2 md:border-b-0 border-gray-200">
            <div class="flex items-center justify-center px-5">
              <div
                class="hidden md:block cursor-pointer"
                @click="gettingCoveredPage = 3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
              <div class="text-left px-3 lg:px-10">
                <h1
                  class="transform scale-150 text-purpleMain text-4xl w-1 font-bold mb-6"
                >
                  01
                </h1>
                <h3 class="text-purpleMain uppercase font-bold text-lg mb-2">
                  Give us two minutes of your time
                </h3>
                <p class="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                  repellendus id tenetur recusandae reiciendis nisi beatae harum
                  commodi maiores ut. Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div
                class="hidden md:block cursor-pointer"
                @click="gettingCoveredPage++"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <span
              @click="gettingCoveredPage = 1"
              :class="[
                'border rounded px-1.5 py-0.5 mt-2 cursor-pointer ',
                gettingCoveredPage == 1 ? 'bg-purpleMain' : '',
              ]"
            ></span>
            <span
              @click="gettingCoveredPage = 2"
              :class="[
                'border rounded px-1.5 py-0.5 mt-2 cursor-pointer ',
                gettingCoveredPage == 2 ? 'bg-purpleMain' : '',
              ]"
            ></span>
            <span
              @click="gettingCoveredPage = 3"
              :class="[
                'border rounded px-1.5 py-0.5 mt-2 cursor-pointer ',
                gettingCoveredPage == 3 ? 'bg-purpleMain' : '',
              ]"
            ></span>
          </div>
        </div>
      </div>

      <div
        v-if="gettingCoveredPage == 2"
        key="page2"
        class="card-general flex flex-col-reverse md:grid md:grid-cols-2 items-center"
      >
        <div
          class="border-r-0 md:border-r-2 border-gray-200 max-w-xs md:max-w-full md:my-4"
        >
          <img src="@/assets/Home/truck-map.png" alt="" />
        </div>
        <div class="flex flex-col">
          <div class="py-6 border-b-2 md:border-b-0 border-gray-200">
            <div class="flex items-center justify-center px-5">
              <div
                class="hidden md:block cursor-pointer"
                @click="gettingCoveredPage--"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
              <div class="text-left px-3 lg:px-10">
                <h1
                  class="transform scale-150 text-purpleMain text-4xl w-1 font-bold mb-6"
                >
                  02
                </h1>
                <h3 class="text-purpleMain uppercase font-bold text-lg mb-2">
                  Give us two minutes of your time
                </h3>
                <p class="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                  repellendus id tenetur recusandae reiciendis nisi beatae harum
                  commodi maiores ut. Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div
                class="hidden md:block cursor-pointer"
                @click="gettingCoveredPage++"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <span
              @click="gettingCoveredPage = 1"
              :class="[
                'border rounded px-1.5 py-0.5 mt-2 cursor-pointer ',
                gettingCoveredPage == 1 ? 'bg-purpleMain' : '',
              ]"
            ></span>
            <span
              @click="gettingCoveredPage = 2"
              :class="[
                'border rounded px-1.5 py-0.5 mt-2 cursor-pointer ',
                gettingCoveredPage == 2 ? 'bg-purpleMain' : '',
              ]"
            ></span>
            <span
              @click="gettingCoveredPage = 3"
              :class="[
                'border rounded px-1.5 py-0.5 mt-2 cursor-pointer ',
                gettingCoveredPage == 3 ? 'bg-purpleMain' : '',
              ]"
            ></span>
          </div>
        </div>
      </div>

      <div
        v-if="gettingCoveredPage == 3"
        key="page3"
        class="card-general flex flex-col-reverse md:grid md:grid-cols-2 items-center"
      >
        <div
          class="border-r-0 md:border-r-2 border-gray-200 max-w-xs md:max-w-full md:my-4"
        >
          <img src="@/assets/Home/truck-map.png" alt="" />
        </div>
        <div class="flex flex-col">
          <div class="py-6 border-b-2 md:border-b-0 border-gray-200">
            <div class="flex items-center justify-center px-5">
              <div
                class="hidden md:block cursor-pointer"
                @click="gettingCoveredPage--"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
              <div class="text-left px-3 lg:px-10">
                <h1
                  class="transform scale-150 text-purpleMain text-4xl w-1 font-bold mb-6"
                >
                  03
                </h1>
                <h3 class="text-purpleMain uppercase font-bold text-lg mb-2">
                  Give us two minutes of your time
                </h3>
                <p class="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                  repellendus id tenetur recusandae reiciendis nisi beatae harum
                  commodi maiores ut. Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div
                class="hidden md:block cursor-pointer"
                @click="gettingCoveredPage = 1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <span
              @click="gettingCoveredPage = 1"
              :class="[
                'border rounded px-1.5 py-0.5 mt-2 cursor-pointer ',
                gettingCoveredPage == 1 ? 'bg-purpleMain' : '',
              ]"
            ></span>
            <span
              @click="gettingCoveredPage = 2"
              :class="[
                'border rounded px-1.5 py-0.5 mt-2 cursor-pointer ',
                gettingCoveredPage == 2 ? 'bg-purpleMain' : '',
              ]"
            ></span>
            <span
              @click="gettingCoveredPage = 3"
              :class="[
                'border rounded px-1.5 py-0.5 mt-2 cursor-pointer ',
                gettingCoveredPage == 3 ? 'bg-purpleMain' : '',
              ]"
            ></span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gettingCoveredPage: 1,
    };
  },
};
</script>

<style></style>
