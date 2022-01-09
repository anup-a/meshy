<script>
  import { get } from "svelte/store";

  import { inputColors } from "./store";

  export let genBtnText;
  export let highlightGenBtn;

  let allColors = get(inputColors);

  const handleColorChange = (e, id) => {
    const color = e.target.value;
    inputColors.update((c) => {
      genBtnText = "Generate";
      highlightGenBtn = true;

      const updatedColors = [...c];
      updatedColors[id] = color;
      return updatedColors;
    });
  };

  inputColors.subscribe((val) => {
    allColors = val;
  });
</script>

<div class="color-customizer">
  <div class="color-options">
    {#each allColors as color, id}
      <div class="color-border-wrapper">
        <div class="color-box-wrapper">
          <input
            type="color"
            id="color-1"
            class="color-box"
            value={color}
            on:change={(e) => handleColorChange(e, id)}
          />
        </div>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .color-customizer {
    @include center-children;
    flex-grow: 1;
    margin-left: 0.75rem;
    margin-right: 0.75rem;

    .color-options {
      display: flex;

      .color-border-wrapper {
        @include center-children;
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%),
          0 4px 6px -2px rgb(0 0 0 / 5%);
        background-color: rgba(255, 255, 255, 1);
        width: 50px;
        height: 50px;
        border-radius: 5px;
        border: solid 2px #ddd;
        border-color: rgba(60, 54, 107, 1);
        margin: 0 0.6rem;

        .color-box-wrapper {
          position: relative;
          overflow: hidden;
          width: 40px;
          height: 40px;
          border-radius: 4px;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%),
            0 2px 4px -1px rgb(0 0 0 / 6%);

          .color-box {
            position: absolute;
            right: -8px;
            top: -8px;
            width: 56px;
            height: 56px;
            border: none;
          }
        }

        @include medium {
          width: 40px;
          height: 40px;

          .color-box-wrapper {
            width: 30px;
            height: 30px;

            .color-box {
              width: 46px;
              height: 46px;
            }
          }
        }

        @include phone {
          margin-top: 1rem;
          margin-bottom: 1rem;
        }
      }
    }
  }
</style>
