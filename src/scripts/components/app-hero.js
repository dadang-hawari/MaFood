class AppHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="jumbotron" tabindex="0"> 
          <div class="img-hero"></div>
          <div class="white-trans">
          <h1 class="hero-title">MaFood.</h1>
          <p>A place to find favorite restaurants</p>
          </div>
        </div>
        `;
  }
}

customElements.define('app-hero', AppHero);
