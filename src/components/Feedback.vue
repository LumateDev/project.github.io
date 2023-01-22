<template>
    <div class="feedback-carousel">
      <FeedbackElem v-for="r in feedbackSliderItems" :key="r" :r="r" />
    </div>
  </template>
  
  <script>
  import FeedbackElem from "./FeedbackElem.vue";
  export default {
    props: ["feedbackSliderItems"],
    components: { FeedbackElem },
    data() {
      return {
        settings: {
          dots: false,
          dotsClass: ".feedback-nav",
          edgeFriction: 0.35,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          arrows: true,
          slidesToScroll: 1,
          adaptiveHeight: true,
          appendArrows: ".feedback-nav",
          prevArrow:
            '<button id="prev" type="button" class="slick-prev slick-arrow"></button>',
          nextArrow:
            '<button id="next" type="button" class="slick-next slick-arrow"></button>'
        }
      };
    },
    mounted() {
      $(".feedback-carousel").on("init", function(event, slick) {
        $(".feedback-counter").append(
          `<span class="feedback-counter-active">01</span>/0${slick.slideCount} `
        );
      });
      $(".feedback-carousel").slick(this.settings);
      $(".feedback-carousel").on("afterChange", function(
        event,
        slick,
        currentSlide,
        nextSlide
      ) {
        $(".feedback-counter-active").html(`0${currentSlide + 1}`);
      });
    }
  };
  </script>
  
  <style></style>