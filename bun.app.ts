/// <reference path="../bun/src/bake/bake.d.ts" />
import svelte from "./framework";

export default {
  port: 3000,
  fetch() {
    return new Response("[existing Bun.serve backend here]");
  },
  app: {
    framework: svelte(),
  },
};
