import './form-review';

class AppReview extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
          <form-review></form-review>
        `;
  }
}

customElements.define('app-review', AppReview);
