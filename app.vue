<template>
  <div class="container mx-auto p-6">
    <!-- Repositories List -->
    <RepoList :repos="repositories" />

    <!-- Loading Indicator -->
    <LoadingIndicator v-if="isLoading" />

    <!-- Error Message -->
    <ErrorMessage v-if="error" :message="error" />
  </div>
  <div ref="observerElement" class="observer-element"></div>
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

  mounted() {
    this.retrieveState()
    this.createIntersectionObserver()
  },

  methods: {
    retrieveState() {
      if (typeof window !== 'undefined') {
        const savedData = localStorage.getItem('repoData')
        if (savedData) {
          const { repositories, page } = JSON.parse(savedData)
          this.repositories = repositories
          this.page = page
        } else {
          this.loadRepositories()
        }
      }
    },

    async loadRepositories() {
      if (this.isLoading) return

      this.isLoading = true
      this.error = null

      const users = ['Kal-elSam', 'midudev', 'Klerith']
      const userIndex = (this.page - 1) % users.length
      const user = users[userIndex]
      const baseUrl = `https://api.github.com/users/${user}/repos`

      try {
        const pageIndex = Math.ceil(this.page / users.length)
        const response = await fetch(`${baseUrl}?page=${pageIndex}&per_page=10`)
        if (!response.ok) {
          throw new Error('Failed to load repositories')
        }
        const repos = await response.json()

        if (!Array.isArray(repos)) {
          throw new Error('Response is not an array')
        }

        this.repositories.push(...repos)
        this.page += 1
        this.saveState()
      } catch (err) {
        this.error = `Error loading repositories: ${err.message}`
      } finally {
        this.isLoading = false
      }
    },

    saveState() {
      if (typeof window !== 'undefined') {
        localStorage.setItem(
          'repoData',
          JSON.stringify({
            repositories: this.repositories,
            page: this.page,
          }),
        )
      }
    },

    createIntersectionObserver() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }

      this.observer = new IntersectionObserver((entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          this.loadRepositories()
        }
      }, options)

      this.observer.observe(this.$refs.observerElement)
    },
  },
}
</script>

<style>
.observer-element {
  height: 10px;
  width: 100%;
}
</style>
