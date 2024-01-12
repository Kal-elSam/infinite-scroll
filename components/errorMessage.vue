<template>
  <div class="text-center py-4 text-red-500">Error: {{ message }}</div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
}
</script>
