class RestaurantHeading extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const text = this.textContent;
    this.innerHTML = `
      <h2 class="list-title" tabindex="0">${text}</h2>
    `;
  }
}

customElements.define('restaurant-heading', RestaurantHeading);
