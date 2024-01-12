<template>
  <div class="container mx-auto p-6">
    <!-- Repositories List -->
    <RepoList :repos="repositories" />

    <!-- Loading Indicator -->
    <LoadingIndicator v-if="isLoading" />

    <!-- Error Message -->
    <ErrorMessage v-if="error" :message="error" />
  </div>
</template>

<script>
import RepoList from '@/components/repoList.vue'
import LoadingIndicator from '@/components/loadingIndicator.vue'
import ErrorMessage from '@/components/errorMessage.vue'

export default {
  components: { RepoList, LoadingIndicator, ErrorMessage },

  data() {
    return {
      repositories: [],
      isLoading: false,
      error: null,
      page: 1,
    }
  },

  created() {
    this.loadRepositories()
  },

  methods: {
    async loadRepositories() {
      if (this.isLoading) return

      this.isLoading = true
      this.error = null

      const user = this.page % 2 === 0 ? 'Kal-elSam' : 'midudev'
      const baseUrl = `https://api.github.com/users/${user}/repos`

      try {
        const response = await fetch(
          `${baseUrl}?page=${Math.ceil(this.page / 2)}&per_page=10`,
        )
        if (!response.ok) {
          throw new Error('Failed to load repositories')
        }
        const repos = await response.json()

        if (!Array.isArray(repos)) {
          throw new Error('Response is not an array')
        }

        if (repos.length > 0) {
          this.repositories.push(...repos)
        } else {
          this.error = 'No more repositories to load'
        }

        this.page += 1
      } catch (err) {
        this.error = `Error loading repositories: ${err.message}`
      } finally {
        this.isLoading = false
      }
    },
  },
}
</script>
