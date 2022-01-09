<script>
  import Main from "./lib/Main.svelte";
  import PreviewList from "./lib/PreviewList.svelte";

  $: innerWidth = 0;
  let widthBreakpoint = 1024;
</script>

<svelte:window bind:innerWidth />

<div id="container">
  <Main />
  {#if innerWidth > widthBreakpoint}
    <PreviewList />
  {/if}
</div>

<style lang="scss">
  #container {
    display: flex;
    background-color: #fff;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    font-family: $serif-font;

    @include medium {
      height: 100%;
      overflow: visible;
      flex-direction: column;
    }
  }
</style>
