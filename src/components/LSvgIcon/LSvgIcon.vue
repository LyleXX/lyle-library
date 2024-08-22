<template>
  <!-- v-bind="$attrs"  父组件绑定到子组件的属性，会直接传递到 $attrs 中 -->
  <!-- 外部 svg 展示 -->
  <img v-if="isExternal" :src="icon" v-bind="$attrs"  alt=""/>
  <!-- 内部 svg 展示 -->
  <svg v-else v-bind="$attrs">
    <use
        :xlink:href="iconName"
        :style="{
				fill: color
			}"
    />
  </svg>
</template>

<script setup lang="ts">
import {  computed } from 'vue'
const props = defineProps({
  // icon 图标
  icon: {
    type: String,
    required: true
  },
  color: {
    type: String
  }
})

/**
 * 判断是否为外部图标
 */
const isExternal = computed(() => /^(https?:|mailto:|tel:)/.test(props.icon))

/**
 * 项目内图标，使用 #icon- 前缀，其中 icon- 对应 svg-loader 的配置
 */
const iconName = computed(() => `#icon-${props.icon}`)
</script>
