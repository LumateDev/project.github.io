<template>
    <form id="Form" action="https://formcarry.com/s/NHJ3ElLaq" method="POST" enctype="multipart/form-data"
          accept-charset="UTF-8" class="w-100">
      <div class="form-row">
        <div class="col-12">
            <input class="form-control opacity-75 p-4 form-control-md info"
                   type="text"
                   name="lastName"
                   placeholder="Ваше имя" autocomplete required>
        </div>
        <div class="col-12">
            <input class="form-control opacity-75 p-4 form-control-md info"
                   type="number"
                   name="userPhone"
                   placeholder="Телефон"
                   autocomplete
                   required>
        </div>
        <div class="col-12">
            <input class="form-control opacity-75 p-4 form-control-md info"
                   type="email"
                   name="userEmail"
                   placeholder="E-mail"
                   required
                   autocomplete>
        </div>
        <div class="col-12">
            <textarea class="form-control opacity-75 p-4 form-control-md info"
                      name="userMsg"
                      placeholder="Ваш комментарий"
            ></textarea>
        </div>
        <div class="col-12">
            <input type="checkbox" id="check" required class="info">
            Согласен с
            <a class="form-politics" href="" rel="nofollow">
              политикой обработки персональных данных
            </a>
        </div>
        <div class="col-12 mt-3">
          <button class="btn btn-footer" type="submit" id="Button">Свяжитесь с нами!</button>
        </div>
      </div>
    </form>
  </template>
  
  <script >
  export default {
  
  }
  </script>
  
  <style lang="scss" scoped>
  
  </style>