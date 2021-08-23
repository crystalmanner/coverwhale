<template>
  <div id="app">
    <transition appear name="fade">
      <router-view key="current-view" />
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* slide-x and fade transition */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

/* slide-y and fade transition */
.slide-fade-y-enter-active {
  transition: all 0.35s ease;
}
.slide-fade-y-leave-active {
  transition: all 0.35s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-y-enter {
  transform: translateY(20px);
  opacity: 0;
}
.slide-fade-y-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.card-general {
  background-color: #fff;
  box-shadow: 4px 3px 12px 4px rgba(145, 145, 145, 0.295);
  border-radius: 10px;
  overflow: hidden;
}
.flatCard {
  max-width: 18rem;
  height: 17rem;
  padding: 1.25rem 0.75rem;
  border-radius: 25px;
}

.pink-image-background {
  background: url("./assets/Home/home-lower-section-bg.png");
  background-size: cover;
}
.purple-image-background {
  background: url("./assets/About/about-us-purple-bg.png");
}

.gradient-text-color-purple {
  background: linear-gradient(45deg, #613675, #ce7bed);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.light-blue-gradient {
  background: rgb(69, 96, 255);
  background: linear-gradient(
    120deg,
    rgba(69, 96, 255, 1) 0%,
    rgba(14, 201, 254, 1) 100%
  );
}
.light-purple-gradient {
  background: rgb(169, 49, 229);
  background: linear-gradient(
    120deg,
    rgba(169, 49, 229, 1) 0%,
    rgba(79, 4, 254, 1) 100%
  );
}
.light-green-gradient {
  background: rgb(24, 161, 183);
  background: linear-gradient(
    120deg,
    rgba(24, 161, 183, 1) 0%,
    rgba(41, 232, 174, 1) 100%
  );
}
.extra-light-purple-gradient {
  background: linear-gradient(34deg, #FBF1F5 0%, #F6F3ED 14%, #EFEAF9 70%, #E1EEFF 100%);
}

.position-center {
  position: absolute;
  left: -50%;
  right: -50%;
  transform: translateX(50%, 50%);
}

.page-changer {
  cursor: pointer;
  padding: 1.6px;
  border-radius: 9999px;
  width: 3px;
  margin-top: 16px;
}
.page-changer-active {
  border: 3.8px solid rgb(119, 119, 119);
}
.page-changer-active:hover {
  border: 3.8px solid rgb(54, 54, 54);
}
.page-changer-inactive {
  padding: 3.2px;
  border: 2px solid rgb(119, 119, 119);
}
.page-changer-inactive:hover {
  border: 2px solid black;
}
</style>
