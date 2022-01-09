<script>
  import { onDestroy, onMount } from "svelte";
  import { get } from "svelte/store";
  import { gradient } from "./../core";
  import ColorsContainer from "./ColorsContainer.svelte";
  import { inputColors, meshId } from "./store";
  import compareArray from "./utils/compareArray";
  import DownloadModal from "./DownloadDialog.svelte";

  import downloadIcon from "./../assets/download.svg";
  import beakerIcon from "./../assets/beaker.svg";
  import meshImg from "./../assets/prism.png";

  let unsubscribe;
  let currMeshId = 367;
  let genBtnText = "Randomize";
  let highlightGenBtn = false;
  let showDownloadModal = false;

  console.log(showDownloadModal);

  const changeGradientId = (e) => {
    const inputStr = e.target.value;
    const value = Number.parseInt(inputStr);
    currMeshId = value;
    meshId.set(value);
  };

  onMount(() => {
    unsubscribe = meshId.subscribe((value) => {
      currMeshId = value;
      if (value !== 0) {
        gradient?.changePosition(value);
      }
    });
  });

  onDestroy(unsubscribe);

  const handleGenerateMesh = () => {
    genBtnText = "Randomize";
    highlightGenBtn = false;
    const newColors = get(inputColors);
    const hasColorsChanged = !compareArray(
      gradient.getGradientColors(),
      newColors
    );

    if (hasColorsChanged) {
      gradient.changeGradientColors(newColors);
    } else {
      const randVal = Math.floor(Math.random() * 1000);
      currMeshId = randVal;
      gradient.changePosition(randVal);
    }
  };

  const handleSaveBtnClick = () => {
    showDownloadModal = true;
    console.log(showDownloadModal);
  };
</script>

<div id="customizer">
  <div id="input-container">
    <div id="input-group">
      <p>Mesh Id</p>
      <div class="input-item">
        <input type="text" value={currMeshId} on:change={changeGradientId} />
        <span class="hash-icon">#</span>
      </div>
    </div>
  </div>
  <ColorsContainer bind:genBtnText bind:highlightGenBtn />
  <div class="img-container">
    <img src={meshImg} alt="mesh" id="mesh-img" />
  </div>
  <div class="btn-container">
    <button class="btn save-btn" on:click={handleSaveBtnClick}>
      <p>Save</p>
      <img src={downloadIcon} alt="download icon" width="20px" />
    </button>
    <div class={highlightGenBtn && "highlight-btn"}>
      <button class="btn gen-btn " on:click={handleGenerateMesh}
        ><p>{genBtnText}</p>
        <img src={beakerIcon} alt="download icon" width="20px" />
      </button>
    </div>
  </div>
</div>

<DownloadModal bind:showDownloadModal />

<style lang="scss">
  #customizer {
    width: 30%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    margin-top: 2rem;

    #input-container {
      @include center-children;
      width: 100%;
      flex-grow: 1;

      #input-group {
        p {
          text-align: center;
          font-size: large;
          font-weight: 600;
          /* text-transform: uppercase;
          letter-spacing: 0.2mm; */
          margin-bottom: 1rem;
        }

        .input-item {
          position: relative;

          input {
            border: none;
            border-bottom: 1px solid black;
            outline: none;
            font-size: 22px;
            text-align: right;
            font-weight: 700;
            padding: 0.75rem 1rem 0.75rem 1.5rem;
            width: 6rem;
            /* border-radius: 6px; */
            color: rgb(77, 77, 77);

            /* background: linear-gradient(
              180deg,
              #f9f9f9 0%,
              rgba(194, 194, 194, 0.3) 25%,
              rgba(194, 194, 194, 0.4) 50%,
              rgba(194, 194, 194, 0.3) 75%,
              rgba(194, 194, 194, 0) 100%
            ); */
          }
          span {
            position: absolute;
            left: 0.5rem;
            padding: 0.2rem 0;
            font-size: xx-large;
            font-weight: 700;
            color: slategray;
          }
        }
      }
    }

    .img-container {
      width: 100%;
      flex-grow: 1;
      @include center-children;
      #mesh-img {
        width: 3rem;
      }
    }

    .btn-container {
      @include center-children;
      flex-grow: 1;

      .btn {
        border-radius: 8px;
        border: none;
        outline: none;
        box-sizing: border-box;
        cursor: pointer;
        display: inline-block;
        font-size: 15px;
        border-radius: 8px;
        font-family: $serif-font;
        margin: 0;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        justify-content: center;
      }

      .save-btn {
        display: flex;
        align-items: center;
        background-color: #fff;
        border: 1px solid #000;
        padding: 0.7rem 1rem;
        p {
          font-weight: 700;
          margin-right: 8px;
        }
        /* box-shadow: 0px 6px 12px 0px rgb(0 0 0 / 10%),
          0px 1px 3px 0px rgb(0 0 0 / 8%); */
        margin-right: 16px;
      }

      .highlight-btn {
        padding: 2px;
        border: solid 4px rgb(211, 211, 211);
        border-radius: 12px;
      }

      .gen-btn {
        display: flex;
        align-items: center;
        background-color: rgb(0, 0, 0);
        color: white;
        font-weight: 700;
        padding: 0.7rem 1.8rem;

        p {
          font-weight: 700;
          margin-right: 8px;
        }

        /* background: linear-gradient(
          180deg,
          #fafafa 0%,
          rgba(237, 128, 255, 0.3) 25%,
          rgba(237, 128, 255, 0.4) 50%,
          rgba(237, 128, 255, 0.3) 75%,
          rgba(237, 128, 255, 0) 100%
        ); */
      }
    }

    @include large {
      margin-right: 1rem;
    }

    @include medium {
      width: 40%;

      #input-container {
        #input-group {
          p {
            margin-bottom: 0.5rem;
          }
          .input-item {
            input {
              font-size: 18px;
            }
          }
        }
      }

      .img-container {
        #mesh-img {
          width: 2rem;
        }
      }

      .btn-container {
        .btn {
          padding: 0.5rem 1rem;

          p {
            font-weight: 600;
            margin-right: 6px;
            font-size: 14px;
          }

          img {
            width: 15px;
          }
        }
      }
    }

    @include phone {
      margin-left: auto;
      margin-right: auto;
      margin-top: 1rem;

      .btn-container {
        .btn {
          padding: 0.5rem 1.5rem;
        }
      }

      .img-container {
        margin-bottom: 1rem;
      }
    }

    /* @include medium {
      .btn-container {
        .btn {
          padding: 0.5rem 1rem;

          p {
            font-weight: 600;
            margin-right: 6px;
            font-size: 14px;
          }

          img {
            width: 15px;
          }
        }
      }
    } */
  }
</style>
