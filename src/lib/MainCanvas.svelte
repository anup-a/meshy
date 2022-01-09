<script>
  import { onMount } from "svelte";
  import { gradient } from "./../core";
  import { inputColors } from "./store";

  let initialSetupDone = false;

  onMount(() => {
    inputColors.subscribe((colors) => {
      if (!initialSetupDone) {
        // @ts-ignore
        gradient.initGradient("#gradient-canvas", colors);
        initialSetupDone = true;
      }
    });
  });
</script>

<div id="main-canvas">
  <canvas id="gradient-canvas" data-transition-in />
</div>

<style lang="scss">
  #main-canvas {
    @include center-children;
    width: 70%;
    padding: 1rem 0rem 1rem 3rem;
    margin-left: 0;

    #gradient-canvas {
      border-radius: 12px;
      width: 600px;
      height: 350px;
    }

    @include large {
      width: 60%;

      #gradient-canvas {
        width: 500px;
        height: 300px;
      }
    }

    @include tablet {
      #gradient-canvas {
        width: 400px;
        height: 250px;
      }
    }

    @include phone {
      margin-left: auto;
      margin-right: auto;
      padding: 0;
      padding-top: 1rem;
    }

    @include small {
      width: 100%;
      padding-left: 8px;
      padding-right: 8px;

      #gradient-canvas {
        width: 100%;
      }
    }

    /* @include medium {
      width: 60%;

      #gradient-canvas {
        width: 600px;
        height: 300px;
      }
    } */
  }
</style>
