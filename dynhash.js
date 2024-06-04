class HashDisplay extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `0572ec8144419bf5bc823a47569ac710245b70bb7012143531068e36fd8218a842`;
  }
}

customElements.define('ses-sion', HashDisplay);
