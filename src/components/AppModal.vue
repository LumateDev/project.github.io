<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal__width">
        <div class="modal-content modal__content">
          
          <AppForm></AppForm>
        </div>
      </div>
    </div>
  </template>
  
  <script >
  import AppForm from "@/components/AppForm.vue";
  
  export default {
    components: {AppForm}
  
  }
  </script>
  
  <style>
  .modal__content {
    padding: 40px;
    background: #040613;
  }
  .modal__width {
    width: 700px !important;
  }
  @media (max-width: 440px) {
    .modal__width {
    width: 390px !important;
  }
  }
  </style>