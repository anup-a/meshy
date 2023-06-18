<script>
  import HiImage from "./../assets/hi.png";
  import XIcon from "./../assets/x-icon.svg";
  import ArrowUpIcon from "./../assets/arrow-up.svg";
  import GlobeIcon from "./../assets/globe-icon.svg";
  import GithubLogo from "./../assets/github.svg";

  let display = true;

  const toggleDisplay = () => {
    display = !display;
  };
</script>

<div class="callout">
  <button on:click={toggleDisplay}>
    {#if display}
      <img src={XIcon} alt="close" width="20" />
    {:else}
      <img src={ArrowUpIcon} alt="close" width="20" />
    {/if}
  </button>

  {#if display}
    <div class="content">
      <p class="greeting">
        Hi, <strong>creator</strong> here
      </p>
      <p class="urgency">
        I'm urgently seeking a full-stack opportunity (remote) in
        React/Next.js/Node.js/Python.
      </p>
      <div class="actions">
        <a class="contact-btn" href="mailto:aglawe.anup22@gmail.com">
          Contact me
        </a>
        <a href="https://anup.app" class="portfolio-link">
          <img src={GlobeIcon} alt="portfolio link" class="globe-icon" />
        </a>
        <a href="https://github.com/anup-a" class="github-link">
          <img src={GithubLogo} alt="GitHub link" />
        </a>
      </div>
    </div>
  {/if}

  <img src={HiImage} class="hi-image" alt="Hi" />
</div>

<style>
  .callout {
    display: none;
  }

  @media (min-width: 768px) {
    .callout {
      display: block;
    }
  }

  .callout {
    position: absolute;
    bottom: 16px;
    left: 16px;
    z-index: 50;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: 0.375rem;
    background-color: #fff;
    width: 20rem;
    word-break: break-all;
    font-weight: 300;
  }

  button {
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
  }

  .callout button {
    float: right;
    margin-top: 1rem;
    margin-right: 1rem;
  }

  .callout .content {
    padding: 1rem;
  }

  .callout .content .greeting {
    margin-top: 1rem;
    font-size: 1.25rem;
  }

  .callout .content .urgency {
    margin-top: 1rem;
    font-size: 1.125rem;
  }

  .callout .content .actions {
    display: flex;
    margin-top: 2rem;
    gap: 1rem;
    align-items: center;
  }

  .callout .content .actions .contact-btn {
    padding: 0.5rem 1rem;
    background-color: #000;
    border-radius: 0.375rem;
    color: #fff;
  }

  .callout .content .actions .portfolio-link .globe-icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  .callout .content .actions .github-link {
    fill: currentColor;
  }

  .callout .hi-image {
    width: 5rem;
    margin-right: 2rem;
    margin-bottom: -6px;
  }
</style>
