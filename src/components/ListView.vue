<template>
<div>
  <ul>
      <li v-for="item in arr">
          {{item.title}}
      </li>
  </ul>
</div>
</template>

<script>
export default {
  data() {
    return {
      arr: []
    }
  },

  mounted() {

     // console.log(this.$http)
    let id = this.$route.params.id;
    console.log(id);

    this.$http({
      method: 'get',
      url: '/list'
    }).then(res=>{
      // console.log(res.data.code);
      // console.log(res.data[id])
      this.arr = res.data[id]
    })

  }
}
</script>
