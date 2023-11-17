class NotFound extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <h2 class='data-not-found'>Data is not found</h2>
    `;
  }
}

customElements.define('not-found', NotFound);
