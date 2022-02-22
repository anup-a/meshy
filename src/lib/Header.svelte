<script>
  import sphereImg from "./../assets/sphere.webp";
  import triangleImg from "./../assets/triangle.webp";
</script>

<div>
  <div class="top-img-container">
    <div class="top-logo">
      <img id="sphere-img" src={sphereImg} alt="3d sphere" />
      <h2><a href="https://meshgradient.in">Mesh·y</a></h2>
    </div>
    <div class="top-right-logo">
      <a href="https://github.com/anup-a/meshy" target="_blank"
        ><span>Github</span></a
      >
      <a href="https://uxie.io" class="uxie-nav">By <span>UXIE·io</span></a>
      <a
        class="buy-coffee"
        href="https://www.buymeacoffee.com/anup"
        target="_blank"
        style="height: 40px !important;"
        ><img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee"
          style="height: 40px !important;"
        /></a
      >
      <img id="triangle-img" src={triangleImg} alt="3d sphere" />
    </div>
  </div>
  <h1 class="heading-text">Generate beautiful mesh gradients</h1>
</div>

<style lang="scss">
  div {
    height: 15%;
    position: relative;

    .top-img-container {
      position: absolute;
      top: 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      height: 100%;
      align-items: center;

      h2 {
        a {
          text-decoration: none;
          color: black;
        }
      }
      @media (min-width : #{$x-large-width}) {
        top: -16px;
      }
      .top-logo {
        display: flex;
        align-items: center;
        h2 {
          font-size: large;
          text-transform: uppercase;
          letter-spacing: 0.3mm;
          margin-left: 1.5rem;
          z-index: 1;
        }
        #sphere-img {
          margin-left: 2rem;
          height: 3.5rem;
        }
      }

      .top-right-logo {
        display: flex;
        align-items: center;

        a {
          text-decoration: none;
          color: black;
          font-size: large;
          letter-spacing: 0.3mm;
          margin-right: 1.5rem;
          z-index: 1;

          span {
            border-bottom: 2px dotted #000;
            text-decoration: none;
            letter-spacing: 0.3mm;
            cursor: pointer;
          }
        }

        .buy-coffee {
          display: none;
        }

        @include medium {
          .buy-coffee {
            display: block;
          }
        }

        #triangle-img {
          margin-right: 2rem;
          height: 3rem;
          transform: rotate(27deg);
        }
      }
    }

    .heading-text {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      padding-bottom: 0.5rem;
      height: 100%;
      width: 100%;
      font-size: xx-large;
      letter-spacing: 0.1mm;
      font-weight: 600;
      margin-bottom: 1.5rem;
    }

    @include large {
      .heading-text {
        margin-top: 1.5rem;
        font-size: x-large;
      }
    }

    @include medium-only {
      .top-img-container {
        top: -40px;
      }
    }

    @include medium {
      .heading-text {
        margin-top: 4.5rem;
        font-size: x-large;
        padding-top: 2rem;
      }
    }

    @include tablet {
      .top-img-container {
        top: 2rem;
        align-items: initial;
      }

      .heading-text {
        margin-top: 4rem;
      }
    }

    @include phone {
      .top-img-container {
        .top-logo {
          h2 {
            font-size: 14px;
          }
        }

        .top-right-logo {
          a {
            font-size: 14px;
          }

          .uxie-nav {
            display: none;
          }
        }
      }
      #sphere-img {
        height: 2.5rem !important;
      }

      #triangle-img {
        height: 2rem !important;
      }

      .heading-text {
        margin-top: 5rem;
      }
    }

    @include small {
      .top-img-container {
        .top-logo {
          h2 {
            margin-left: 0.5rem;
          }
          #sphere-img {
            margin-left: 1rem;
          }
        }
        .top-right-logo {
          a {
            font-size: 12px;
            margin-right: 0.5rem;
          }
          #triangle-img {
            margin-right: 0.5rem;
            margin-left: 0.5rem;
          }
        }
      }
      .heading-text {
        text-align: center;
        font-size: medium;
        font-weight: 700;
      }
    }
  }
</style>
