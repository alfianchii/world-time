<script setup lang="ts"></script>

<template>
	<div>
		<div v-for="(zone, idx) of zones" :key="zone.name" px4 py2 border="b base" relative>
			<TimezoneItem :timezone="zone" />
			<div absolute left="-6" top-0 bottom-0 text-xl flex="~ col" justify-center>
				<button @click="removeZone(zone)" title="Remove" i-carbon-close icon-btn m--1px></button>
				<button @click="moveZone(zone, -1)" title="Move up" v-if="idx !== 0" i-carbon-caret-up icon-btn m--1px></button>
				<button @click="moveZone(zone, 1)" title="Move down" v-if="idx !== zones.length - 1" i-carbon-caret-down icon-btn m--1px></button>
			</div>
		</div>
	</div>
</template>
