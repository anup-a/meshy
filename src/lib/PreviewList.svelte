<script>
  import { get } from "svelte/store";
  import { presets, inputColors, meshId } from "./store";
  import { gradient } from "./../core";

  let presetList = get(presets);

  import img1 from "./../presets/preset_1.png";
  import img2 from "./../presets/preset_2.png";
  import img3 from "./../presets/preset_3.png";
  import img4 from "./../presets/preset_4.png";
  import img5 from "./../presets/preset_5.png";
  import img6 from "./../presets/preset_6.png";

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
</script>

<div id="preview-list">
  {#each allPresetImages as imgSrc, idx}
    <img
      class="img-1"
      alt="mesh img"
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
