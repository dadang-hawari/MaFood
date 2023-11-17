class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <p class="footer-flex">Made with < / > by Muh. Dadang Hawari </p>
      `;
  }
}

customElements.define('app-footer', AppFooter);
