<template>
  <div class="bg-black min-h-screen">
    <ul class="divide-y divide-gray-700">
      <repo-list-item v-for="repo in repos" :key="repo.id" :repo="repo" />
    </ul>
  </div>
</template>

<script>
import repoListItem from '@/components/repoListItem.vue'

export default {
  components: { repoListItem },
  props: {
    repos: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
/* Si tienes estilos adicionales específicos, pueden ir aquí */
</style>
