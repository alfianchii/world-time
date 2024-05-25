import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import UnoCSS from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		Vue(),
		Components({
			dts: true,
		}),
		AutoImport({
			imports: ["vue", "vue/macros"],
			dirs: ["src/composables"],
			vueTemplate: true,
		}),
		UnoCSS(),
	],
});
