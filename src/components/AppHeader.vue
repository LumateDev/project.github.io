<template>
<header class="navbar-region">
  <div class="divVideo">
    <video autoplay muted loop class="video">
      <source src="@/assets/video.mp4" type="video/mp4">
    </video>
  </div>
  <div class="navbar navbar-expand-lg navbar-dark pt-4">
    <div class="container-fluid px-2 px-lg-0">
      <div class="ms-0 ms-lg-4">
        <a class="navbar-brand" href="#">
          <img class="img-fluid" src="@/assets/img/drupal-coder.svg" alt="Project" width="200" height="35">
        </a>
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div>

      </div>
    </div>
  </div>
</header>
</template>

<script>
export default {
  name: "AppHeader"
}
</script>

<style scoped>
.divVideo{
  position: absolute;
  z-index: -2;
  background: #040613;
  left:0;
  right:0;
  top:0;
  bottom:0;
}

.video{
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
  opacity: 0.15;
  filter: blur(1px);
  transform: scale(2.04);
}
.navbar-region{
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
}

</style>