import { defineConfig, presetIcons, presetUno } from "unocss";
import transformerDirectives from "@unocss/transformer-directives";
import { colors } from "@unocss/preset-mini";
import { presetScrollbar } from "unocss-preset-scrollbar";

export default defineConfig({
  presets: [
    presetIcons(),
    presetUno(),
    presetScrollbar({
      scrollbarWidth: "4px",
      scrollbarTrackColor: "transparent",
      scrollbarThumbColor: "#424242",
    }),
  ],
  transformers: [transformerDirectives()],
  theme: {
    colors: {
      primary: colors!.lime,
      fill: {
        1: "rgba(255, 255, 255, 0.18)",
        2: "rgba(255, 255, 255, 0.12)",
        3: "rgba(255, 255, 255, 0.08)",
        4: "rgba(255, 255, 255, 0.04)",
      },
      base: {
        container: "#141414",
        elevated: "#1f1f1f",
        layout: "#000000",
        spotlight: "#424242",
        mask: "rgba(0, 0, 0, 0.45)",
      },
      bd: {
        1: "#424242",
        2: "#303030",
      },
      txt: {
        1: "rgba(255, 255, 255, 0.85)",
        2: "rgba(255, 255, 255, 0.65)",
        3: "rgba(255, 255, 255, 0.45)",
        4: "rgba(255, 255, 255, 0.25)",
      },
    },
  },
  shortcuts: [["box", "bg-base-container p-4 rounded-lg border border-bd-2"]],
});