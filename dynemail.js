class ResolveEmail extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `Email me <a style="text-decoration: none;color: darkgrey;underline: none;" href="mailto:0xffff0004@proton.me">here.</a>`;
  }
}

customElements.define('dyn-mail', ResolveEmail);