<template>
  <ul>
    <repoListItem v-for="repo in repos" :key="repo.id" :repo="repo" />
  </ul>
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
