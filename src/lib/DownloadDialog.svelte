<script>
  //@ts-nocheck
  import RangeSlider from "svelte-range-slider-pips";
  import { changeCanvasSize, resetCanvas } from "./utils/canvasUtils";
  import downloadImage from "./utils/downloadImage";

  import imgIcon from "./../assets/image.svg";

  let height = [600];
  let width = [1024];

  export let showDownloadModal;

  const handleCloseModal = () => {
    showDownloadModal = false;
  };

  const downloadPng = () => {
    changeCanvasSize(width[0], height[0]);
    downloadImage("mesh");
    setTimeout(() => {
      resetCanvas();
    }, 500);
  };
</script>

<div id="main-modal" class="modal {showDownloadModal ? 'flex' : ''}">
  <div class="modal-content">
    <span class="close" on:click={handleCloseModal}>&times;</span>
    <div class="content">
      <h2>Export</h2>
      <div class="range-slider-container">
        <p>HEIGHT</p>
        <div class="range-slider-grp">
          <RangeSlider
            min={0}
            max={3000}
            id="range-slider-height"
            bind:values={height}
            float
            first="label"
            last="label"
            suffix=" px"
          />
          <input class="size-input" type="text" bind:value={height[0]} />
        </div>
      </div>
      <div class="range-slider-container">
        <p>WIDTH</p>
        <div class="range-slider-grp">
          <RangeSlider
            min={0}
            max={3000}
            id="range-slider-width"
            bind:values={width}
            float
            first="label"
            last="label"
            suffix=" px"
          />
          <input class="size-input" type="text" bind:value={width[0]} />
        </div>
      </div>
      <div class="btn-grp">
        <div>{width[0]} px X {height[0]}px</div>
        <button class="btn btn-download" on:click={() => downloadPng()}>
          <p>Download PNG</p>
          <img src={imgIcon} alt="icon for png" width="20px" />
        </button>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  /* Stylings from https://www.w3schools.com/howto/howto_css_modals.asp*/

  .modal {
    display: none;
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.7); /* Black w/ opacity */
  }

  .flex {
    display: flex;
  }

  .modal-content {
    background-color: #fefefe;
    margin: auto auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    border-radius: 8px;
    width: 40%; /* Could be more or less, depending on screen size */
  }

  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  /* Custom Styles */

  .content {
    width: 100%;

    h2 {
      margin-bottom: 1rem;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 0.2mm;
      font-weight: 700;
    }

    .range-slider-container {
      .range-slider-grp {
        display: flex;
        align-items: flex-start;

        #range-slider-height,
        #range-slider-width {
          width: 80%;
          margin-top: 2rem;
        }

        .size-input {
          width: 15%;
          margin-left: 1rem;
          text-align: center;
          border: none;
          border-bottom: 1px solid black;
          font-size: 18px;
          font-weight: 700;

          &:focus {
            outline: none;
          }
        }
      }
    }

    .btn-grp {
      display: flex;
      align-items: center;

      .btn {
        @include center-children;

        border-radius: 8px;
        border: none;
        outline: none;
        box-sizing: border-box;
        cursor: pointer;
        font-size: 15px;
        border-radius: 8px;
        font-family: $serif-font;
        margin: 0;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;

        p {
          font-weight: 700;
          margin-right: 8px;
        }
      }

      div {
        background-color: rgb(247, 247, 247);
        height: 100%;
        padding: 0.7rem 1.8rem;
        border-radius: 8px;
      }

      .btn-download {
        background-color: rgb(0, 0, 0);
        color: white;
        font-weight: 700;
        padding: 0.7rem 1.8rem;
        flex-grow: 1;
        margin: 0 1.8rem;
      }
    }
  }

  :global(#range-slider-height, #range-slider-width) {
    width: 80%;
  }

  :global(.rangeFloat) {
    --float-inactive: var(--float);
    opacity: 1 !important;
  }
</style>
