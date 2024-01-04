class AppDetail extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div id="detail-container" class="detail-container">
            <h2 class='data-not-found'>Data is not found</h2>
        </div>
        `;
            // <loading-spinner></loading-spinner>
  }
}
customElements.define('app-detail', AppDetail);
