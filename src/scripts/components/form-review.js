import PostReview from "../utils/post-review";
class FormReview extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <form id="reviewForm" class='ma-05'>
            <h3>Review</h3>
            <div class="name-review">
                <label for="inputNama">Your name</label>
                <input id="inputNama" type="text" class="input-review" required>
            </div>
            <div class="comment-review">
                <label for="inputKomen">Comment about the restaurant</label>
                <input id="inputKomen" type="text" class="input-review" required>
            </div>
            <button id="sendReview" type="submit">Send</button>
        </form>
        `;
  }
}

customElements.define('form-review', FormReview);
