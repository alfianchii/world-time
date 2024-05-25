import { defineConfig, presetAttributify, presetIcons, presetUno } from "unocss";

export default defineConfig({
	presets: [presetUno, presetAttributify, presetIcons],
	shortcuts: {
		"border-base": "border-gray/20 dark:border-gray/15",
	},
});
