<template>
    <div class="minfo">
        <img :src="movieinfo.img" alt="">
        <div class="mtitle">
            {{movieinfo.mtitle}}
            <span>评分：{{movieinfo.score}}</span>
            <span>放映次数：10W+</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MovieBlock',
  props:['movieinfo'],
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .minfo{
        width: 300px;
        height: 350px;
        float: left;
        margin-right: 20px;
        overflow: hidden;
    }
    .minfo img{
        width: 100%;
    }
    .minfo img:hover{
        transform: scale(1.2, 1.2)
    }
    .minfo  span{
        color:brown;
    }
</style>
