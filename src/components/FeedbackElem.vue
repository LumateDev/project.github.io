<template>
    <div class="feedback-item">
      <div class="feedback-logo">
        <img v-bind:src="require(`../assets/img/${r.img}`)" class="img-fluid" />
      </div>
      <div class="feedback-desc">
        <p>
          {{ r.text }}
        </p>
      </div>
      <div class="feedback-author">
        {{ r.author }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      r: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style></style>