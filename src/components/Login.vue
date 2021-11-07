<template>
  <div>
    <h1>登录界面</h1>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    mounted(){
      // this.$request({
      //   method:'get',
      //   url: '/login',
      //   data:{
      //     name:'blank'
      //   }
      // }).then(res => {
      //   console.log(res);
      // })
      this.$request.get('/login',{name:'jack'},{mock:true,loading:true}).then(res => {
        console.log(res);
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>