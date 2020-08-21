<template>
    <svg  class="g-icon frank">
      <use :xlink:href="`#i-${name}`" />
    </svg>
</template>

<script>
import './svg'
export default {
  name:'GuluIcon',
 props:['name']
}
</script>


<style scoped lang='scss'>
 .g-icon {
   width: 1em;
    height: 1em;
  }
</style>