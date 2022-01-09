<script>
  import sphereImg from "./../assets/sphere.png";
  import triangleImg from "./../assets/triangle.png";
</script>

<div>
  <div class="top-img-container">
    <div class="top-logo">
      <img id="sphere-img" src={sphereImg} alt="3d sphere" />
      <p>Mesh·y</p>
    </div>
    <div class="top-right-logo">
      <a href="https://uxie.io">By <span>UXIE·io</span></a>
      <img id="triangle-img" src={triangleImg} alt="3d sphere" />
    </div>
  </div>
  <p class="heading-text">Generate beautiful mesh gradients</p>
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

      .top-logo {
        display: flex;
        align-items: center;
        p {
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
    }

    @include large {
      .heading-text {
        margin-top: 1.5rem;
        font-size: x-large;
      }
    }

    @include medium {
      .heading-text {
        margin-top: 2.5rem;
        font-size: x-large;
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
          p {
            font-size: 14px;
          }
        }

        .top-right-logo {
          a {
            font-size: 14px;
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
      .heading-text {
        text-align: center;
        font-size: medium;
        font-weight: 700;
      }
    }
  }
</style>
