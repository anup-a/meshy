const template = document.createElement("template");

template.innerHTML = `
    <style>
      .dark-theme {
        background-color: #242535;
        color: white;
      }

      .dark-theme.icons a {
        display: none;
        margin:0 auto;
        text-decoration: none;
        color: white;
      }

      .light-theme {
        background-color: #fff;
        color: black;
      }

      .light-theme.icons a {
        display: none;
        margin:0 auto;
        text-decoration: none;
        color: black;
      }

      .float-menu {
        /* width: 100%; */
      }

      .btn-wrapper {
        cursor: pointer;
        /* border: 2px solid black; */
        border-radius: 8px;
        margin: 8px;
        width: 42px;
        z-index: 4;
        box-shadow: 0 5px 8px rgba(0, 0, 0, .1);

        

      }

      .home-icon {
        padding: 10px;
        margin: 0px;
        border-radius: 8px;
      }

      .home-icon,.icons,.btn-wrapper {
          -webkit-transition: -webkit-all 500ms cubic-bezier(.87,-.41,.19,1.44), background-color 0ms;
          transition:  all 500ms cubic-bezier(.87,-.41,.19,1.44), background-color 0ms;
      }

      .btn-wrapper.active {
        -webkit-transform: rotate(45deg);
        transform: rotate(90deg);
        border: none;
        left:0px;
      }

      .icons {
        width:0;
        margin:8px auto;
        /* min-height: 20px; */
        overflow:hidden;
        list-style:none;
        padding:0px;
        background-color:#fff;
        box-shadow: 0 5px 8px rgba(0, 0, 0, .1);;
        margin:-40px 0 0 10px;
        border-radius: 4px;
        display:flex;
        flex-direction:column;
        align-items:center;
      }

      .icons a p {
        margin: 0 auto;
        text-decoration: none;
        margin-top: 4px;
        font-size: 14px;

      }

      .icons.open {
        width:80px;
        padding:10px 0;
        margin:10px 0 0 10px;
        overflow:hidden;
      }

      .icons.open a {
        display: flex;
        flex-direction: column;
        align-items:center;
        height: 100%;
        margin-bottom: 1rem;      
      }

      .svgshapes svg {
        width: 30px;
        height: 30px;
      }
    </style>

    <script>
    </script>

    <div class="float-menu">
      <div class="btn-wrapper">
          <div class="home-icon light-theme">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 275.4 261.94"><defs><style>.cls-1{fill:url(#linear-gradient);}.cls-2{fill:url(#linear-gradient-2);}</style><linearGradient id="linear-gradient" x1="-110.25" y1="121.46" x2="86.6" y2="339.03" gradientTransform="matrix(0.65, 0.65, -0.65, 0.65, 241.32, -12.83)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#da1c5c"/><stop offset="1" stop-color="#662d91"/></linearGradient><linearGradient id="linear-gradient-2" x1="114.87" y1="108.34" x2="165.1" y2="186.6" gradientTransform="matrix(0.99, 0.12, -0.13, 1.01, 32.63, -46.84)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#7fffcb"/><stop offset="1" stop-color="#0bf"/></linearGradient></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M172.41,4.15V176A86.21,86.21,0,0,1,0,176V4.15Z"/><path class="cls-2" d="M70.05,175s-4.44-128,83.47-165.62S272,59.55,272,59.55s23.93,66.74-56,64.93S72.22,261.7,72.22,261.7Z"/></g></g></svg>
        </div>
      </div>
      <div class="icons light-theme open">
      <a class="Creatica" href="https://creatica.app" target="_blank" >
        <svg viewBox="0 0 86 67" width="35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M57.3128 1.25925V33.3476V65.436L83.9481 33.3476L57.3128 1.25925Z" fill="#00B4D8"/>
<path d="M57.3128 1.25925L30.7797 33.3476H57.3128V1.25925Z" fill="black"/>
<path d="M1.69531 33.3476L30.7797 65.436H57.3128L30.7797 33.3476H1.69531Z" fill="#C5BEFF"/>
<path d="M30.7797 33.3476L57.3128 65.436V33.3476H30.7797Z" fill="#FF5263"/>
<path d="M30.7797 1.25925L1.69531 33.3476H30.7797L57.3128 1.25925H30.7797Z" fill="#5A45FF"/>
<path d="M1.69531 33.3476L30.7797 1.25925H57.3128M1.69531 33.3476L30.7797 65.436H57.3128M1.69531 33.3476H30.7797M30.7797 33.3476L57.3128 1.25925M30.7797 33.3476L57.3128 65.436M30.7797 33.3476H57.3128M57.3128 1.25925V33.3476M57.3128 1.25925L83.9481 33.3476L57.3128 65.436M57.3128 65.436V33.3476" stroke="black" stroke-width="2"/>
</svg>
      <p>creatica</p></a>
        <a class="svgwave" href="https://svgwave.in" target="_blank" >
        <svg width="50px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="Layer_1" data-name="Layer 1" viewBox="0 0 300 196.5"><defs><linearGradient id="linear-gradient" x1="188.08" x2="188.08" y1="139.66" y2="-28.13" gradientTransform="translate(124.18 -104.37) rotate(45)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1d0054"/><stop offset="1" stop-color="#4c5fec"/></linearGradient><linearGradient id="linear-gradient-2" x1="137.86" x2="137.86" y1="179.13" y2="22.83" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#00dccc"/><stop offset="1" stop-color="#c7f0b9"/></linearGradient></defs><title>3</title><circle cx="188.08" cy="97.71" r="60.79" transform="translate(-14.01 161.61) rotate(-45)" style="opacity:.8;fill:url(#linear-gradient)"/><path d="M219.78,98q0,3.41-.28,6.73,0,.73-.12,1.47a82.17,82.17,0,0,1-3.52,16.91c-.17.53-.35,1.06-.53,1.59A81.94,81.94,0,0,1,55.94,98c0-.87,0-1.73.05-2.59a81.42,81.42,0,0,1,1.75-14.5A81.51,81.51,0,0,1,74.54,46,81.89,81.89,0,0,1,219.78,98Z" style="opacity:.8;fill:url(#linear-gradient-2)"/></svg>
      <p>svgwave</p>

    </a>
        <a class="tinter" href="https://tinter.uxie.io" target="_blank" >
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" width="30" height="30" rx="15" transform="rotate(90 30 0)" fill="url(#paint0_linear_1_22)"/>
            <defs>
            <linearGradient id="paint0_linear_1_22" x1="30" y1="0" x2="88.9797" y2="35.3895" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF3366"/>
            <stop offset="0.164583" stop-color="#FF4455"/>
            <stop offset="1" stop-color="#FF9900"/>
            </linearGradient>
            </defs>
            </svg>
          <p>tinter</p>
        </a>
        <a class="svgshapes" href="https://svgshapes.in" target="_blank" >
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="none" viewBox="0 0 200 200" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs"><path fill="url(&quot;#SvgjsLinearGradient1001&quot;)" d="M165.963 134.037c-5.467 5.467-14.332 5.467-19.799 0l-24.137-24.138c-5.468-5.467-5.468-14.331 0-19.799l24.137-24.137c5.467-5.467 14.332-5.467 19.799 0L190.101 90.1c5.467 5.468 5.467 14.332 0 19.799l-24.138 24.138Zm-112.127 0c-5.467 5.467-14.332 5.467-19.8 0L9.9 109.899c-5.468-5.467-5.468-14.331 0-19.799l24.137-24.137c5.467-5.467 14.332-5.467 19.799 0L77.973 90.1c5.468 5.468 5.468 14.332 0 19.799l-24.137 24.138ZM109.9 190.1c-5.468 5.468-14.332 5.468-19.8 0l-24.137-24.137c-5.467-5.467-5.467-14.332 0-19.799l24.138-24.137c5.467-5.468 14.331-5.468 19.799 0l24.137 24.137c5.467 5.467 5.467 14.332 0 19.799L109.9 190.1Zm0-112.127c-5.468 5.468-14.332 5.468-19.8 0L65.963 53.836c-5.467-5.468-5.467-14.332 0-19.8L90.101 9.9c5.467-5.467 14.331-5.467 19.799 0l24.137 24.138c5.467 5.467 5.467 14.331 0 19.799L109.9 77.973Z"></path><defs><linearGradient gradientTransform="rotate(0 0.5 0.5)" id="SvgjsLinearGradient1001"><stop stop-opacity=" 1" stop-color="rgba(105, 234, 203)" offset="0"></stop><stop stop-opacity=" 1" stop-color="rgba(234, 204, 248)" offset="0.48"></stop><stop stop-opacity=" 1" stop-color="rgba(102, 84, 241)" offset="1"></stop></linearGradient></defs></svg>
          <p>shapes</p>
        </a>

    </div>
    </div>
`;

class FloatMenu extends HTMLElement {
  static get observedAttributes() {
    return ["isdark"];
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    const homeBtn = this.shadowRoot.querySelector(".btn-wrapper");
    const iconsDiv = this.shadowRoot.querySelector(".icons");

    homeBtn.addEventListener("click", () => {
      homeBtn.classList.toggle("active");
      iconsDiv.classList.toggle("open");
    });

    const screenWidth = window.innerWidth;

    if (screenWidth < 500) {
      homeBtn.classList.toggle("active");
      iconsDiv.classList.toggle("open");
    }
  }
  toggleFloatMenuDarkMode(name) {
    if (name === "isdark") {
      const homeIcon = this.shadowRoot.querySelector(".home-icon");
      const iconsDiv = this.shadowRoot.querySelector(".icons");
      homeIcon.classList.toggle("dark-theme");
      homeIcon.classList.toggle("light-theme");
      iconsDiv.classList.toggle("dark-theme");
      iconsDiv.classList.toggle("light-theme");
    }
  }
  attributeChangedCallback(name) {
    this.toggleFloatMenuDarkMode(name);
  }
}

window.customElements.define("float-menu", FloatMenu);

export default FloatMenu;
