<template>
  <button
    class="bg-salmon-400 text-gray-50 px-4 py-2 hover:bg-salmon-500 transition-color dark:bg-pale-lime-400 dark:text-gray-600 dark:hover:bg-pale-lime-500"
  >
    {{ label }}
  </button>
</template>

<script>
const props = {
  label: String,
};
export default {
  name: "SushiButton",
  props,
  setup() {},
};
</script>
