<template>
<div class=''>
    <ul class="menu">
        <li>全部</li>
        <li>动作</li>
        <li>喜剧</li>
        <li>爱情</li>
        <li>剧情</li>
        <li>纪录片</li>
        <li>战争</li>
    </ul>
</div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  }
 
};
</script>
<style scoped>
    .menu{
        width: 100%;
        background-color: #eee;
    }

     .menu li{
        background-color: #eee;
        padding: 10px;
        cursor: pointer;

    }
    .menu li:hover{
        background-color: #f08;

    }
    .menu::after{
        content: '';
        display: block;
        clear: both;
    }
</style>