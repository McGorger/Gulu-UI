<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script lang='ts'>
export default {
  name: "GuluRow",
  props: {
    gutter: {
      type: [Number, String],
    },
    align: {
      type: String,
      validator(value){
          return ['left','right','center'].includes(value);
      }
},
  },
  computed: {
    rowStyle() {
      let { gutter } = this;
      return {
        marginLeft: -gutter / 2 + "px",
        marginRight: -gutter / 2 + "px",
      };
    },
    rowClass(){
        let {align}  = this;
        return [align && `align-${align}`]
    }
  },
  mounted() {
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter;
    });
  },
};
</script>

<style scoped lang='scss'>
.row {
  display: flex;
  margin: 0 -10px;
  &-left{
      justify-content: start;
  }
  &-right{
      justify-content: right;
  }
  &-center{
      justify-content: center;
  }
}
</style>
