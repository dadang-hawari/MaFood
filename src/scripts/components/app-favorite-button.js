class AppFavoriteButton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div id="favoriteButtonContainer"></div>
    `;
  }
}

customElements.define('app-favorite-button', AppFavoriteButton);
