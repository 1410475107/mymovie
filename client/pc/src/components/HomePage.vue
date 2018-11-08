<template>
  <div class="index">
        <top-menu></top-menu>
        <h2>最新上线的电影</h2>
        <movie-block v-for="movie in movieList" :key="movie.id" :movieinfo="movie"></movie-block>
        <div class="clear"></div>
        <foot-info></foot-info>
  </div>
</template>

<script>
//如果要使用一个子组件，需要引入并注册到vue实例里面
import MovieBlock from './movie/MovieBlock';
import TopMenu from  './TopMenu';
import FootInfo from  './FootInfo';
export default {
  data () {
    return {
        movieList:[]
    }
  },
  components:{
      MovieBlock,
      TopMenu,
      FootInfo
  },
  mounted:function(){
      let _this = this;
      _this.$http.get(
          'http://localhost:81/getmoviedata'
      ).
      then(function(res){
          console.log(res);
          _this.movieList = res.data;
      });
  }


}
</script>

<style scoped>
.clear{clear: both;}
</style>
