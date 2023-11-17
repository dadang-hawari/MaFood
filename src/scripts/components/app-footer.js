class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <p class="footer-flex">Made with <i class='fa fa-code'></i> by Muh. Dadang Hawari </p>
      `;
  }
}

customElements.define('app-footer', AppFooter);
