<template>
  <footer>
    <div class="div container-fluid pt-3 pb-5 pb-md-0 footer-region" id ="footerRegion">
      <div class = "footer-region-background"></div>
      <div class="footer-region-background">
        <div class="col-11  col-md-10 mx-auto px-0">
          <div class="row">
            <div class="col-11 col-md-5 mx-auto">
              <div class="text-head-footer text-md-start text-center">
                Оставить заявку на
                <br>
                поддержку сайта
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter"
}
</script>

<style scoped>

.footer-region {
  position: relative;
  width: 100%;
  height: auto;
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
.text-head-footer{
  font-weight: bold;
  font-size: 42px;
  line-height: 1.215;
  color: #fff;
}

</style>