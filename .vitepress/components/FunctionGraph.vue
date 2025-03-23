<template>
  <div ref="container"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import functionPlot from 'function-plot'

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
})

const container = ref(null)

onMounted(() => {
  // add css height and width to the container
  container.value.style.height = props.data.height + 'px'
  container.value.style.width = props.data.width + 'px'

  functionPlot({
    ...props.data,
    target: container.value,
  })
})
</script>
