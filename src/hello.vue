<script setup lang="ts">
export interface Props {
  name?: string;
}

const props = withDefaults(defineProps<Props>(), {
  name: 'world'
})
</script>
<template>
  <span>hello {{ props.name }}</span>
</template>
