<template>
  <Carousel :items-to-show="5" :wrap-around="true">
    <Slide v-for="(slide, i) in names.length" :key="i">
      <div class="carousel-wrapper">
        <img :src="names[i]" alt="">
      </div>
    </Slide>


  </Carousel>
</template>

<script>

import {defineComponent} from 'vue'
import {Carousel, Slide} from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'WrapAround',
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      names: [
        "https://firebasestorage.googleapis.com/v0/b/test-5dfbe.appspot.com/o/image_1.png?alt=media&token=cdc21140-41ef-4786-9de1-8a265022982d",
        "https://firebasestorage.googleapis.com/v0/b/test-5dfbe.appspot.com/o/image_2.png?alt=media&token=73fd016e-41d9-4724-956c-963dfb391add",
        "https://firebasestorage.googleapis.com/v0/b/test-5dfbe.appspot.com/o/image_3.png?alt=media&token=c0f9183a-8e35-4c55-8711-1275c6f527fb",
        "https://firebasestorage.googleapis.com/v0/b/test-5dfbe.appspot.com/o/image_4.png?alt=media&token=21fb46f5-6cd6-42ef-b913-a1462234dece",
        
      ]
    }
  },

})

</script>

<style>
.carousel-wrapper {
  margin-right: 20px;
  border: 1px solid #eeeeee;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 160px;
}
.carousel__title {
  text-align: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 51px;
  text-align: center;
  margin-top: 150px;
  color: #050C33;
}
.carousel__text {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #050C33;
  width: 50%;
  margin: 20px auto;
  margin-bottom: 50px;
  opacity: 0.7;
}

@media (max-width: 440px) {
  .carousel-wrapper img{
    max-width: 70px;
    max-height: 100px;
    
  }
}
</style>