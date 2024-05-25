import { defineConfig, presetAttributify, presetIcons, presetUno } from "unocss";

export default defineConfig({
	presets: [presetUno, presetAttributify, presetIcons],
	shortcuts: {
		"border-base": "border-gray/20 dark:border-gray/15",
		"bg-base": "bg-white dark:bg-truegray-900",
		"bg-canvas": "bg-gray/15 dark:bg-truegray-800",
		"icon-btn": "op50 hover:op100 transition-all duration-300",
	},
});
