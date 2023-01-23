<template>
  <div class="container-fluid pt-3 pb-5 pb-md-0 footer-region" id="footerRegion">
    <div class="footer-region-background"></div>
    <div class="row d-flex mt-2 px-2">
      <div class="col-11 col-md-10 mx-auto px-0">
        <div class="row">
          <div class="col-11 col-md-5 mx-auto">
            <h5 class="text-head-footer text-md-start text-center">
              Оставить заявку на
              <br/>
              поддержку сайта
            </h5>
            <p class="text-extra-footer text-start">
              Срочно нужна поддержка сайта? Ваша команда не успевает справиться самостоятельно или предыдущий подрядчик не справился с работой?
              Тогда вам точно к нам! Просто оставьте заявку и наш менеджер с вами свяжется!
            </p>
            <div class="text-start phone">
              <img src="../assets/img/phoneicon.png" alt="">
              <a class="text-light text-decoration-none phone" href="">
                
                8 800 222-26-73
              
              </a>
            </div>
            <div class="text-start email">
              <img src="..//assets/img/mail.png" alt="">
              <a class="text-light email" href="">
                
                    info@drupal-coder.ru 
              </a>
            </div>
          </div>
          <div class="col-11 col-md-5 mx-auto">
            <form id="Form" action="https://formcarry.com/s/NHJ3ElLaq" method="POST" enctype="multipart/form-data" accept-charset="UTF-8">
              <div class="form-row">
                <div class="col-12">
                  <label class="text-light form-group"><br/>
                    <input class="form-control form-control-md info" type="text" name="lastName" placeholder="Ваше имя" autocomplete="off">
                  </label><br/>
                </div>
                <div class="col-12">
                  <label class="text-light form-group"><br/>
                    <input class="form-control form-control-md info" type="text" name="userPhone" placeholder="Телефон" autocomplete="off">
                  </label><br/>
                </div>
                <div class="col-12">
                  <label class="text-light form-group"><br/>
                    <input class="form-control form-control-md info" type="email" name="userEmail" placeholder="E-mail" autocomplete="off">
                  </label><br/>
                </div>
                <div class="col-12">
                  <label class="form-group"><br/>
                    <textarea class="form-control form-control-md info" name="userMsg" placeholder="Ваш комментарий" autocomplete="off"></textarea>
                  </label><br/>
                </div>
                <div class="col-12">
                  <label class="text-light form-group">
                    <input type="checkbox" id="check" class="info">
                    Согласен с
                    <a class="form-politics" href="" rel="nofollow">
                      политикой обработки персональных данных
                    </a>
                  </label><br/>
                </div>
                <div class="col-12 mt-3">
                  <button class="btn btn-footer" type="submit" id="Button">Свяжитесь с нами! </button>
                </div>
              </div>
            </form>
          </div>

          <div class="col-12 footer-social">
            <div class="row">
              <div class="col-md-6 col-12">
                <div class="row">
                  <div class="social-block">
                    <ul class="social-list">
                      <li class="social-list-item">
                        <a href="#"
                        ><img src="@/assets/img/facebook.svg" alt=""
                        /></a>
                      </li>
                      <li class="social-list-item">
                        <a href="#"><img src="@/assets/img/vk.svg" alt="" /> </a>
                      </li>
                      <li class="social-list-item">
                        <a href="#"
                        ><img src="@/assets/img/telegram.svg" alt=""
                        /></a>
                      </li>
                      <li class="social-list-item">
                        <a href="#"><img src="@/assets/img/youtube.svg" alt=""/></a>
                      </li>
                    </ul>
                    <div class="social-desc">
                      <p>
                        Проект ООО «Инитлаб», Краснодар, Россия.<br />
                        Drupal является зарегистрированной торговой маркой Dries
                        Buytaert.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppFooter"
}
</script>

<style scoped>



.footer-region{
  position: relative;
  width: 100%;
  height: auto;
  background: linear-gradient(
      261.2deg,
      rgba(255, 255, 255, 0.276) -114.85%,
      rgba(255, 255, 255, 0) 69.04%
    ),
    url("../assets/img/D-flying.svg") top center, url("../assets/img/D.png") bottom right,
    #040613;
  background-repeat: no-repeat;
  background-size: cover, 220px, 360px;
  padding-top: 35px;
  padding-bottom: 45px;
}


.footer-region-background{
  position: absolute;
  z-index: -2;
  background: linear-gradient(254.72deg,rgba(255,255,255,.276) -114.85%,rgba(255,255,255,0) 69.04%),#040613;
  left:0;
  right:0;
  top:0;
  bottom:0;
}

.phone {
  font-size:24px;
  align-items: right;
  position: relative;
  text-decoration: none;
  color: #fff;
 


}
.email{
  position: relative;
  font-weight: bold;
  font-size: 20px;
  line-height: 150%;
  text-decoration-line: underline;
 

}
.form-control{
  color:#fff;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  border-radius: 5px;
  padding: 13px 12px;
  margin-bottom: 7px;
  
}

.form-control::placeholder {
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #fff;
  opacity: 1;
}

.form-control:focus{
  color: #f7f7f7;
  background-color: transparent;
  border-color: #ff2200;
  outline: 0;
  box-shadow: 0 0 0 0.25rem transparent;
}
.info textarea{
  background-color: #040613;
}

.form-group{
  width: 100%;
  margin-left: 60px;
}

.text-head-footer{
  font-weight: bold;
  font-size: 42px;
  line-height: 1.215;
  color: #fff;
}

.form-politics{
  color: #ad1700;
  text-decoration: none;
  margin-left: 0px;
}

.form-politics:hover{
  color: #e76652;
  text-decoration: underline;
}

.text-extra-footer{
  line-height: 1.55;
  font-weight: 500;
  font-size: 14px;
  color: rgba(256,256,256,.7);
  margin-bottom: 140px;
}

.btn-footer{
  border: 2px solid #f14d34;
  border-radius: 5px;
  color: #fff;
  text-transform: uppercase;
  width: 100%;
  height: 50px;
  font-weight: 500;
  font-size: 12px;
  transition: background 300ms;
  background: #f14d34;
  margin-left: 60px;
}

.btn-footer:hover{
  background-color: #fa735f;
}
.footer-social {
  position: relative;
  padding-top: 60px;
 
}
.footer-social:before {
  margin-top: 20px;
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.3);
}
.social-list {
  list-style: none;
  display: flex;
  padding-left: 0px;
}
.social-list-item {
  display: inline-block;
  margin-right: 10px;
}
.social-list-item a {
  width: 30px;
  height: 30px;
  background: #f14d34;
  display: inline-block;
  text-align: center;
  border-radius: 5px;
}
.social-list-item img {
  width: 18px;
  height: 16px;
  filter: invert(1);
}
.social-desc {
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  opacity: 0.5;
}

</style>