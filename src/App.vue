<script setup lang="ts"></script>

<template>
	<div text-sans bg-canvas h-screen>
		<NavBar />
		<div border="~ base rounded" bg-base shadow mx8 mt5>
			<ActionBar />
			<TimeSchedular />
		</div>
	</div>
</template>

<style>
.dark {
	background: #222;
	color: white;
	color-scheme: dark;
}
</style>
