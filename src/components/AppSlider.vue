<template>
  <div>
    <h2>С нами работают</h2>
    <p>Десятки компаний доверяют нам самое ценное, что у них есть в интернете – свои сайты. Мы делаем всё, чтобы наше
      сотрудничество было долгим.</p>
    <ul>
      <li v-for="(item, i) in imgList.length" :key="item.id">
        <img :src="itemImg(i)" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        {
          img: "rosatom.png",
          id: 1
        },
        {
          img: "kubsu.png",
          id: 2
        },
        {
          img: "gazprom.png",
          id: 3
        },
        {
          img: "vtb.png",
          id: 4
        },
        {
          img: "rosatom.png",
          id: 5
        },
        {
          img: "kubsu.png",
          id: 6
        },
        {
          img: "gazprom.png",
          id: 7
        },
        {
          img: "vtb.png",
          id: 8
        },
        {
          img: "rosatom.png",
          id: 9
        },
        {
          img: "kubsu.png",
          id: 10
        },

      ]
    }
  },
  computed: {
    itemImg(item) {
      return require(`../assets/img/${this.imgList[item].img}`);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>