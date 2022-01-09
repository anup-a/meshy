<script>
  import Customizer from "./Customizer.svelte";
  import MainCanvas from "./MainCanvas.svelte";
</script>

<div>
  <MainCanvas />
  <Customizer />
</div>

<style lang="scss">
  div {
    display: flex;
    flex-grow: 1;

    @include large {
      justify-content: space-between;
    }

    @include phone {
      justify-content: center;
      flex-direction: column;
    }
  }
</style>
