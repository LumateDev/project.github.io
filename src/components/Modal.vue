<template>
  <transition appear>
    <div class="modal-background">
      <div class="modal-body">
        <div class="modal-header">
          <slot name="header">
            Форма
          </slot>
          <router-link to="/"
            ><button type="button" class="btn-close"></button
          ></router-link>
        </div>
        <div class="modal-content">
          <component :is="component" v-bind="$attrs" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
let globalIDs;
export default {
  props: ["component"],
  name: "Modal",
  beforeRouteLeave(to, from, next) {
    if ((to.path = "/")) {
      globalIDs = requestAnimationFrame(this.repeatOftenClose);
      setTimeout(() => {
        next();
      }, 150);
    } else {
      cancelAnimationFrame(globalIDs);
    }
  },
  methods: {
    repeatOftenClose() {
      if ($(".modal-body").length) {
        let trans = parseInt(
          $(".modal-body")
            .css("transform")
            .split(",")[4]
        );
        $(".modal-body").css({
          transform: `translateX(${trans - 20}px)`
        });
        globalIDs = requestAnimationFrame(this.repeatOftenClose);
      }
    }
  }
};
</script>

<style scoped>
.modal-background {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10000;
}
.modal-background > a {
  z-index: 200;
}
.modal-header {
  color: white;
  background: #040613;
  border-radius: calc(0.3rem);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 1px solid;
}
.modal-body {
  transform: translateX(-300px);
  margin: 0 auto;
  min-width: 280px;
  height: auto;
  z-index: 259;
}
.modal-content {
  background: #040613;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  padding: 10px;
}
.modal-content > div {
  padding-top: 20px;
  margin: 0 auto;
}
.btn-close {
  filter: invert(1);
}
@media (min-width: 767px) {
  .modal-content {
    padding: 0px;
  }
  .modal-body {
    width: 600px;
  }
}
</style>
