<template>
  <div id="app">
    <transition-group appear name="fade">
      <NavBar key="nav" />
      <router-view key="current-view"/>
      <div id="footer" key="footer"></div>
    </transition-group>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style>
/* fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
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
  box-shadow: 5px 5px 25px 6px rgba(94, 94, 94, 0.35);
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

</style>
