<template>
  <div class="dark:bg-dark dark:color-white" ref="container"></div>
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

<style>
/* Dark theme */
.dark .fn-text {
  fill: #fff;
}

.dark .x.origin,
.dark .y.origin,
.dark .domain,
.dark line {
  stroke: #fff;
}

.dark .graph [data-fn] {
  stroke: #fff;
}

.dark .graph [data-point] {
  fill: #e23838;
}

.dark .derivative path {
  stroke: #00ffc8;
}


.dark .tip .inner-tip path,
.dark .tip .inner-tip circle,
.dark .tip .inner-tip text {
  fill: #fff;
}

/* Light theme */
.tip .inner-tip path,
.tip .inner-tip circle,
.tip .inner-tip text {
  fill: #007BFF;
}

.graph [data-fn] {
  stroke: #007BFF;
}

.graph [data-point] {
  fill: #ff3232;
}

.derivative path {
  stroke: #007BFF;
}
</style>