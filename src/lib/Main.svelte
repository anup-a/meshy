<script>
  import CanvasContainer from "./CanvasContainer.svelte";
  import ColorsContainer from "./ColorsContainer.svelte";
  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";
  import PreviewList from "./PreviewList.svelte";

  $: innerWidth = 0;
  let widthBreakpoint = 1024;
</script>

<svelte:window bind:innerWidth />

<div id="main">
  <Header />
  <CanvasContainer />
  <Footer />
</div>

<style lang="scss">
  #main {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;

    @include medium {
      width: 100%;
    }
  }
</style>
