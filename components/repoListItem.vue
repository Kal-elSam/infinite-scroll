<template>
  <li
    class="bg-gray-800 text-white p-6 flex items-center space-x-4 rounded-md hover:bg-gray-700 transition-colors duration-200 ease-in-out"
  >
    <!-- Icon container with a fixed size to ensure alignment -->
    <div class="icon-container flex-shrink-0">
      <font-awesome-icon
        :icon="['fab', 'github']"
        class="text-gray-400"
        size="4x"
      />
    </div>
    <!-- Repo information container -->
    <div class="flex-grow">
      <h3 class="text-xl font-semibold">{{ repo.name }}</h3>
      <p class="text-gray-400 text-sm">Owner: {{ repo.owner.login }}</p>
      <p class="text-gray-300">{{ repo.description }}</p>
    </div>
    <!-- Browse button -->
    <a
      :href="repo.html_url"
      target="_blank"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Browse
    </a>
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

<style>
.icon-container {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 640px) {
  .icon-container {
    width: 48px;
    height: 48px;
  }

  .font-awesome-icon {
    font-size: 24px;
  }
}
</style>
