<script setup lang="ts">
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
	<button @click="toggleDark()" i-carbon-sun dark:i-carbon-moon></button>
</template>
