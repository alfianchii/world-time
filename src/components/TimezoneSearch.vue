<script setup lang="ts">
import Fuse from "fuse.js";
import { Timezone } from "../types";

const fuse = new Fuse(timezones, {
	keys: ["name"],
	threshold: 0.3,
});

let input = $ref("");
let index = $ref(0);
const searchResult = $computed(() => {
	return fuse.search(input);
});

function add(t: Timezone) {
	addToTimezone(t);
	input = "";
	index = 0;
}

function onKeyDown(e: KeyboardEvent) {
	if (e.key === "ArrowDown") index = (index + 1) % searchResult.length;
	if (e.key === "ArrowUp") index = (index - 1 + searchResult.length) % searchResult.length;
	if (e.key === "Enter") add(searchResult[index].item);
}
</script>

<template>
	<div relative>
		<input v-model="input" @keydown="onKeyDown" type="text" placeholder="Search timezone ..." p="x3 y2" border="~ base rounded" text-xl bg-transparent w-full />

		<div v-show="input" absolute top-full left-0 right-0 p1 border="~ base" bg-base max-h-100 overflow-auto>
			<button v-for="(i, idx) of searchResult" :key="i.refIndex" block w-full @click="add(i.item)" :class="idx === index ? 'bg-gray:10' : ''">
				<TimezoneItem :timezone="i.item" />
			</button>
		</div>
	</div>
</template>
