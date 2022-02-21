<script>
  import { get } from "svelte/store";
  import { presets, inputColors, meshId } from "./store";
  import { gradient } from "./../core";

  let presetList = get(presets);

  import img1 from "./../presets/preset_1.webp";
  import img2 from "./../presets/preset_2.webp";
  import img3 from "./../presets/preset_3.webp";
  import img4 from "./../presets/preset_4.webp";
  import img5 from "./../presets/preset_5.webp";
  import img6 from "./../presets/preset_6.webp";

  const allPresetImages = [img1, img2, img3, img4, img5, img6];

  const handleImgClick = (idx) => {
    const presetConfig = presetList[idx];
    const colors = presetConfig.meshColors;
    const newId = presetConfig.meshId;

    if (colors && newId) {
      inputColors.set(colors);
      meshId.set(newId);
      gradient.changeGradientColors(colors);
      gradient.changePosition(newId);
    }
  };

  const colorsList = ["skyblue", "yellow", "red", "pink", "voilet", "green"];
</script>

<div id="preview-list">
  <a
    class="buy-coffee"
    href="https://www.buymeacoffee.com/anup"
    target="_blank"
    style="height: 50px !important;"
    ><img
      src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
      alt="Buy Me A Coffee"
      style="height: 50px !important;"
    /></a
  >
  {#each allPresetImages as imgSrc, idx}
    <img
      class="img-1"
      alt={`download ${colorsList[idx]} mesh gradient`}
      src={imgSrc}
      on:click={() => handleImgClick(idx)}
    />
  {/each}
</div>

<style lang="scss">
  #preview-list {
    background-color: rgb(45, 49, 49);
    height: 100%;
    width: 20%;
    padding: 1rem;
    overflow-y: scroll;

    img {
      margin-bottom: 1rem;
      border-radius: 4px;
      object-fit: cover;
      height: 150px;
      width: 100%;
      cursor: pointer;
    }

    @include medium {
      height: 20%;
      width: 100%;
      overflow-y: visible;
      overflow-x: scroll;
      display: flex;
      margin: 2rem;
      border-radius: 4px;
      padding-bottom: 0;
      background-color: rgb(32, 32, 32);

      a {
        display: none;
      }

      img {
        width: 250px;
        margin-right: 1rem;
      }
    }

    @include phone {
      margin-left: 0;
    }
  }
</style>
