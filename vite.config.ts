import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import VueMacros from "unplugin-vue-macros/vite";
import UnoCSS from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		VueMacros({
			plugins: {
				vue: Vue(),
			},
		}),
		Components({
			dts: true,
		}),
		AutoImport({
			imports: ["vue", "vue/macros", "@vueuse/core"],
			dirs: ["src/composables"],
			vueTemplate: true,
		}),
		UnoCSS(),
	],
});
