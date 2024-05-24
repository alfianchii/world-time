<script setup lang="ts">
const props = defineProps<{
	modelValue?: boolean;
}>();
</script>

<template>
	<div border="b base" p2>
		<TimezoneSearch />
	</div>
</template>
