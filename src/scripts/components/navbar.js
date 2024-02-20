class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <a class="skip-link" id="toContent" href='#main'>To Content</a>
    <div class="logo">
      <h1><a href="#/restaurant">MaFood</a></h1>
    </div>
    <button id="btn-menu" aria-label="Tombol Menu">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;">
        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
      </svg>
    </button>
    <ul class='list-nav'>
      <li><a href="#/restaurant">Home</a></li>
      <li><a href="#/favorite">Favorite</a></li>
      <li><a href="https://github.com/dadang-hawari" rel="noreferrer" target="_blank">About Us</a></li>
    </ul>
        `;
  }
}

customElements.define('nav-bar', NavBar);
