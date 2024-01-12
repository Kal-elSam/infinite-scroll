<template>
  <li class="border-b border-gray-200 p-4 hover:bg-gray-100">
    <h3 class="text-lg font-semibold">{{ repo.name }}</h3>
    <p class="text-gray-600">{{ repo.description }}</p>
  </li>
</template>

<script>
export default {
  props: {
    repo: {
      type: Object,
      required: true,
    },
  },
}
</script>
