class TopDashboard extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="top-dashboard">
                <!-- Bagian 1: menu -->
                <div class="item-menu">
                    <ul>
                    <li>
                        <a href="#/store"><i class="fas fa-cog"></i></a>
                    </li>
                    <li>
                        <a href="#" id="logout"><i class="fas fa-sign-out-alt"></i></a>
                    </li>
                    </ul>
                </div>

                <!-- Bagian 2: Profile Pic -->
                <div class="profile-pic">
                    <p>Hello, Esa Faizal Gibran</p>
                    <img src="https://via.placeholder.com/100" alt="Avatar" />
                </div>
            </div>
          `;
  }
}

customElements.define("top-dashboard", TopDashboard);
