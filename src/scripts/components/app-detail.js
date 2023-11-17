class AppDetail extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div id="detail-container" class="detail-container">
            <loading-spinner></loading-spinner>
            <h2 class='data-not-found'>Data is not found</h2>
        </div>
        `;
  }
}
customElements.define('app-detail', AppDetail);
