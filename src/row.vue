<template>
 <div class="row" :style="{marginLeft:-gutter/2+'px',marginRight:-gutter/2+'px'}">
<slot></slot>
 </div>
</template>

<script lang='ts'>
 export default {
    name:'GuluRow',
    props:{
        gutter:{
            type:[Number,String]
        }
    }
    ,
    mounted() {
        
     this.$children.forEach((vm) => {
      vm.gutter = this.gutter;
    });
  },
 }
</script>

<style scoped lang='scss'>
.row{
    display: flex;
    margin: 0 -10px;
}
 
</style>
