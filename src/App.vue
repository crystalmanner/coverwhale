<template>
  <div id="app">
    <transition appear name="fade">
      <router-view key="current-view"/>
    </transition>
  </div>
</template>

<script>

export default {
};
</script>

<style>
/* fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* slide-x and fade transition */
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.4s ease-in-out;
}
.slide-fade-enter-to {
  transform: translateX(20px);
  opacity: 1;
}
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

/* slide-y and fade transition */
.slide-fade-y-enter-active, .slide-fade-y-leave-active {
  transition: all 0.4s ease-in-out;
}
.slide-fade-y-enter-to {
  transform: translateY(60px);
  opacity: 1;
}
.slide-fade-y-leave-to {
  transform: translateY(-60px);
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
