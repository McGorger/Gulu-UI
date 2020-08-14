<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true}"
  @click="$emit('click')">
      <g-icon v-if="loading" class=" icon loading" name='loading'></g-icon>
       <div class="content">
      <slot></slot>
    </div>
    <g-icon class="icon" v-if="icon && !loading" :name='icon' />
  </button>
</template>

<script>
import Icon from './icon'
export default {
  components:{
    'g-icon':Icon
  },
  props: {
    icon: {},
    loading:{
      type:Boolean,
      default:false
    },
    
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value === "left" || value === "right";
      },
    },
  },
};
</script>

<style scoped lang='scss'>
@keyframes spin {
  0%{transform: rotate(0deg);}
  100%{transform: rotate(360deg);}
}
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--button-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    border-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .content {
    order: 2;
  }
  > .icon {
    order: 1;
    margin-top: 0.1em;
    margin-right: 0.1em;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-left: 0.1em;
      margin-right: 0;
    }
    > .content {
      order: 1;
    }
  }
  .loading{
    animation: spin 1.5s infinite linear;
  }
}
</style>
