module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        vue: 'always',
      },
    ],
    // Desactivar la regla que previene el uso de console.log
    'no-console': 'off',
    // Ajustes para compatibilidad con Nuxt.js
    'global-require': 'off',
    'import/no-unresolved': 'off',
    'vue/multi-word-component-names': 'off', // Esta regla es opcional y depende de tus preferencias de nombrado de componentes
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      },
    },
  },
}
