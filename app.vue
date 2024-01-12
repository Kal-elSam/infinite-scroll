<template>
  <div>
    <!-- Lista de repositorios -->
    <ul>
      <li v-for="repo in repositorios" :key="repo.id">
        {{ repo.name }} - {{ repo.description }}
      </li>
    </ul>

    <!-- Indicador de carga -->
    <div v-if="cargando">Cargando más repositorios...</div>

    <!-- Mensaje de error -->
    <div v-if="error">Ha ocurrido un error: {{ error }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      repositorios: [], // Almacenará los repositorios cargados
      cargando: false, // Indicador de si se están cargando datos
      error: null, // Almacenará un mensaje de error si ocurre alguno
      pagina: 1, // Control de paginación para la API
    }
  },
  created() {
    this.cargarRepositorios() // Cargar inicialmente los repositorios
  },
  methods: {
    async cargarRepositorios() {
      if (this.cargando) return

      this.cargando = true
      this.error = null

      const baseUrl = 'https://api.github.com/users/Kal-elSam/repos'
      try {
        const response = await fetch(
          `${baseUrl}?page=${this.pagina}&per_page=10`,
        )
        if (!response.ok) {
          throw new Error('No se han podido cargar los repositorios')
        }
        const repos = await response.json()

        if (!Array.isArray(repos)) {
          throw new Error('La respuesta no es un array')
        }

        if (repos.length > 0) {
          this.repositorios.push(...repos)
        } else {
          this.error = 'No hay más repositorios'
        }

        this.pagina += 1
      } catch (err) {
        this.error = `Error al cargar los repositorios: ${err.message}` // Manejo de errores
      } finally {
        this.cargando = false
      }
    },
  },
}
</script>
