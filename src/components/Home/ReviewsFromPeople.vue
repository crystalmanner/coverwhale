<template>
  <div>
    <transition name="slide-fade-y" mode="out-in">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 items-center px-8 sm:px-16 md:px-32 gap-16"
        key="page1"
        v-if="reviewCardsPage == 1"
      >
        <div class="flex flex-col items-center gap-10">
          <div class="text-left">
            <h1 class="font-bold text-3xl mb-3">
              What people are saying about us.
            </h1>
            <p class="text-sm">
              This section talks about the customer first mentality that
              CoverWhale has. Lorem ipsum dolor sit amet, consectetur adipiscing
              elitas, sed do eiusd tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
          </div>
          <div>
            <img class="w-28" src="@/assets/Home/reviews-starts.png" alt="" />
          </div>
          <div class="flex flex-col items-center lg:hidden">
            <ReviewCards
              class="mx-auto"
              userName="Ashley Meg"
              userJob="Web Developer at Facebook"
              userReview="Lorem ipsum dolor sit amet, consectetur adipiscing elitas, sed do eiusd tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            />
            <div class="flex gap-2 mx-auto">
              <div
                @click="reviewCardsPage = 1"
                :class="[
                  'page-changer ',
                  reviewCardsPage == 1
                    ? 'page-changer-active'
                    : 'page-changer-inactive',
                ]"
              ></div>
              <div
                @click="reviewCardsPage = 2"
                :class="[
                  'page-changer ',
                  reviewCardsPage == 2
                    ? 'page-changer-active'
                    : 'page-changer-inactive',
                ]"
              ></div>
              <div
                @click="reviewCardsPage = 3"
                :class="[
                  'page-changer ',
                  reviewCardsPage == 3
                    ? 'page-changer-active'
                    : 'page-changer-inactive',
                ]"
              ></div>
            </div>
          </div>
        </div>
        <div class="items-center justify-between gap-4 hidden lg:flex">
          <div class="grid grid-cols-1 gap-20 w-full">
            <ReviewCards
              class="justify-self-end"
              userName="Ashley Meg"
              userJob="Web Developer at Facebook"
              userReview="Lorem ipsum dolor sit amet, consectetur adipiscing elitas, sed do eiusd tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            />
            <ReviewCards
              class="justify-self-start"
              userName="Ashley Meg"
              userJob="Web Developer at Facebook"
              userReview="Lorem ipsum dolor sit amet, consectetur adipiscing elitas, sed do eiusd tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            />
            <ReviewCards
              class="justify-self-end"
              userName="Ashley Meg"
              userJob="Web Developer at Facebook"
              userReview="Lorem ipsum dolor sit amet, consectetur adipiscing elitas, sed do eiusd tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            />
          </div>
          <div>
            <div
              @click="reviewCardsPage = 1"
              :class="[
                'page-changer ',
                reviewCardsPage == 1
                  ? 'page-changer-active'
                  : 'page-changer-inactive',
              ]"
            ></div>
            <div
              @click="reviewCardsPage = 2"
              :class="[
                'page-changer ',
                reviewCardsPage == 2
                  ? 'page-changer-active'
                  : 'page-changer-inactive',
              ]"
            ></div>
            <div
              @click="reviewCardsPage = 3"
              :class="[
                'page-changer ',
                reviewCardsPage == 3
                  ? 'page-changer-active'
                  : 'page-changer-inactive',
              ]"
            ></div>
          </div>
        </div>
      </div>

      <!-- the below code will be removed and the above will be used as a component when dealing with actual data -->

      <div
        class="grid grid-cols-1 lg:grid-cols-2 items-center px-16 md:px-32 gap-16"
        key="page2"
        v-if="reviewCardsPage == 2"
      >
        <div class="flex flex-col items-center gap-10">
          <div class="text-left">
            <h1 class="font-bold text-3xl mb-3">What</h1>
            <p class="text-sm">
              This section talks about the customer first mentality that
              CoverWhale has. Lorem ipsum dolor sit amet, consectetur adipiscing
              elitas, sed do eiusd tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
          </div>
          <div>
            <img class="w-28" src="@/assets/Home/reviews-starts.png" alt="" />
          </div>
          <div class="flex flex-col items-center lg:hidden">
            <ReviewCards
              class="mx-auto"
              userName="Ashley Meg"
              userJob="Web Developer at Facebook"
              userReview="Lorem ipsum dolor sit amet, consectetur adipiscing elitas, sed do eiusd tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            />
            <div class="flex gap-2 mx-auto">
              <div
                @click="reviewCardsPage = 1"
                :class="[
                  'page-changer ',
                  reviewCardsPage == 1
                    ? 'page-changer-active'
                    : 'page-changer-inactive',
                ]"
              ></div>
              <div
                @click="reviewCardsPage = 2"
                :class="[
                  'page-changer ',
                  reviewCardsPage == 2
                    ? 'page-changer-active'
                    : 'page-changer-inactive',
                ]"
              ></div>
              <div
                @click="reviewCardsPage = 3"
                :class="[
                  'page-changer ',
                  reviewCardsPage == 3
                    ? 'page-changer-active'
                    : 'page-changer-inactive',
                ]"
              ></div>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between gap-4 hidden lg:flex">
          <div class="grid grid-cols-1 gap-20 w-full">
            <ReviewCards
              class="justify-self-end"
              userName="Ashley Meg"
              userJob="Web Developer at Facebook"
              userReview="Lorem ipsum dolor sit amet, consectetur adipiscing elitas, sed do eiusd tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            />
            <ReviewCards
              class="justify-self-start"
              userName="Ashley Meg"
              userJob="Web Developer at Facebook"
              userReview="Lorem ipsum dolor sit amet, consectetur adipiscing elitas, sed do eiusd tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            />
            <ReviewCards
              class="justify-self-end"
              userName="Ashley Meg"
              userJob="Web Developer at Facebook"
              userReview="Lorem ipsum dolor sit amet, consectetur adipiscing elitas, sed do eiusd tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            />
          </div>
          <div>
            <div
              @click="reviewCardsPage = 1"
              :class="[
                'page-changer ',
                reviewCardsPage == 1
                  ? 'page-changer-active'
                  : 'page-changer-inactive',
              ]"
            ></div>
            <div
              @click="reviewCardsPage = 2"
              :class="[
                'page-changer ',
                reviewCardsPage == 2
                  ? 'page-changer-active'
                  : 'page-changer-inactive',
              ]"
            ></div>
            <div
              @click="reviewCardsPage = 3"
              :class="[
                'page-changer ',
                reviewCardsPage == 3
                  ? 'page-changer-active'
                  : 'page-changer-inactive',
              ]"
            ></div>
          </div>
        </div>
      </div>

      <div
        class="grid grid-cols-1 lg:grid-cols-2 items-center px-16 md:px-32 gap-16"
        key="page3"
        v-if="reviewCardsPage == 3"
      >
        <div class="flex flex-col items-center gap-10">
          <div class="text-left">
            <h1 class="font-bold text-3xl mb-3">about us.</h1>
            <p class="text-sm">
              This section talks about the customer first mentality that
              CoverWhale has. Lorem ipsum dolor sit amet, consectetur adipiscing
              elitas, sed do eiusd tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
          </div>
          <div>
            <img class="w-28" src="@/assets/Home/reviews-starts.png" alt="" />
          </div>
          <div class="flex flex-col items-center lg:hidden">
            <ReviewCards
              class="mx-auto"
              userName="Ashley Meg"
              userJob="Web Developer at Facebook"
              userReview="Lorem ipsum dolor sit amet, consectetur adipiscing elitas, sed do eiusd tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            />
            <div class="flex gap-2 mx-auto">
              <div
                @click="reviewCardsPage = 1"
                :class="[
                  'page-changer ',
                  reviewCardsPage == 1
                    ? 'page-changer-active'
                    : 'page-changer-inactive',
                ]"
              ></div>
              <div
                @click="reviewCardsPage = 2"
                :class="[
                  'page-changer ',
                  reviewCardsPage == 2
                    ? 'page-changer-active'
                    : 'page-changer-inactive',
                ]"
              ></div>
              <div
                @click="reviewCardsPage = 3"
                :class="[
                  'page-changer ',
                  reviewCardsPage == 3
                    ? 'page-changer-active'
                    : 'page-changer-inactive',
                ]"
              ></div>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between gap-4 hidden lg:flex">
          <div class="grid grid-cols-1 gap-20 w-full">
            <ReviewCards
              class="justify-self-end"
              userName="Ashley Meg"
              userJob="Web Developer at Facebook"
              userReview="Lorem ipsum dolor sit amet, consectetur adipiscing elitas, sed do eiusd tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            />
            <ReviewCards
              class="justify-self-start"
              userName="Ashley Meg"
              userJob="Web Developer at Facebook"
              userReview="Lorem ipsum dolor sit amet, consectetur adipiscing elitas, sed do eiusd tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            />
            <ReviewCards
              class="justify-self-end"
              userName="Ashley Meg"
              userJob="Web Developer at Facebook"
              userReview="Lorem ipsum dolor sit amet, consectetur adipiscing elitas, sed do eiusd tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            />
          </div>
          <div>
            <div
              @click="reviewCardsPage = 1"
              :class="[
                'page-changer ',
                reviewCardsPage == 1
                  ? 'page-changer-active'
                  : 'page-changer-inactive',
              ]"
            ></div>
            <div
              @click="reviewCardsPage = 2"
              :class="[
                'page-changer ',
                reviewCardsPage == 2
                  ? 'page-changer-active'
                  : 'page-changer-inactive',
              ]"
            ></div>
            <div
              @click="reviewCardsPage = 3"
              :class="[
                'page-changer ',
                reviewCardsPage == 3
                  ? 'page-changer-active'
                  : 'page-changer-inactive',
              ]"
            ></div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import ReviewCards from "@/components/ReviewCards.vue";

export default {
  components: {
    ReviewCards,
  },
  data() {
    return {
      reviewCardsPage: 1,
    };
  },
};
</script>

<style scoped>
/* border-2 rounded-full bg-gray-100 border-gray-500 w-1 p-0.5 mt-1.5 cursor-pointer */
.page-changer {
  cursor: pointer;
  padding: 1.8px;
  border-radius: 9999px;
  width: 3px;
  margin-top: 16px;
}
.page-changer-active {
  border: 4px solid rgb(119, 119, 119);
}
.page-changer-active:hover {
  border: 4px solid black;
}
.page-changer-inactive {
  padding: 3.2px;
  border: 2px solid rgb(119, 119, 119);
}
.page-changer-inactive:hover {
  border: 2px solid black;
}</style
>>
