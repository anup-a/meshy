import sveltePreprocess from "svelte-preprocess";

export default {
  preprocess: sveltePreprocess({
    scss: {
      prependData: `@import 'src/styles/global.scss';`,
    },
  }),
};
