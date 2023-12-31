<script>
  import semiTorusImg from "./../assets/semi-torus.webp";
  import cubeImg from "./../assets/cube.webp";
  import arrowImg2 from "./../assets/Group 7_2.webp";
</script>

<div id="footer-illustration">
  <div id="footer-left">
    <!-- <img id="torus-img" src={semiTorusImg} alt="semi torus" /> -->
    <div id="footer-center">
      <!-- <div class="arrow">
        <img src={arrowImg2} alt="arrow illustration" />
      </div> -->
      <p>
        Credits -
        <a href="http://stripe.com">stripe</a>
        and <a href="https://kevinhufnagl.com/">kevinhufnagl</a> .
        <a href="https://www.freepik.com/vectors/background"
          >Vectors by - pikisuperstar</a
        >
      </p>
    </div>
  </div>
  <!-- <div id="footer-right">
    <img src={cubeImg} alt="semi torus" />
  </div> -->
</div>

<style lang="scss">
  #footer-illustration {
    height: 25%;
    position: relative;
    display: flex;

    #footer-left {
      width: 80%;
      display: flex;
      flex-direction: column;

      #torus-img {
        width: 4rem;
        margin-left: 2rem;
      }

      #footer-center {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        img {
          /* transform: scaleX(-1); */
          width: 100%;
        }

        p {
          font-size: smaller;
          text-align: center;
          color: rgb(100, 106, 112);
          margin-bottom: 4px;

          a {
            color: rgb(100, 106, 112);
          }
        }
      }
    }

    #footer-right {
      display: flex;
      width: 15%;
      justify-content: end;
      align-items: end;
      margin-right: 2rem;
      margin-bottom: 2rem;
      img {
        height: 4rem;
        /* height: ; */
      }
    }
  }
</style>
