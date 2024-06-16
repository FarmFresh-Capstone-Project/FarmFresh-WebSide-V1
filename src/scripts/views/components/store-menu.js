class StoreMenu extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="container">
                <div class="header">
                    <div class="profile-picture">
                    <img src="https://via.placeholder.com/100" alt="Profile Picture" />
                    </div>
                    <div class="profile-info">
                    <h1>SayurBox</h1>
                    <p>sayurbox25@gmail.com</p>
                    </div>
                    <button id="add-profil">Add Profil</button>
                </div>
                <div class="form">
                    <div class="form-row">
                    <div class="form-group">
                        <label for="owner">Owner</label>
                        <input type="text" id="owner" placeholder="Owner of the store" />
                    </div>
                    <div class="form-group">
                        <label for="store-name">Store Name</label>
                        <input type="text" id="store-name" placeholder="Store Name" />
                    </div>
                    </div>
                    <div class="form-row">
                    <div class="form-group">
                        <label for="address">Address</label>
                        <input type="text" id="address" placeholder="Your Address" />
                    </div>
                    <div class="form-group">
                        <label for="country">Country</label>
                        <input type="text" id="country" placeholder="Your Country" />
                    </div>
                    </div>
                    <div class="form-row">
                    <div class="form-group">
                        <label for="contact">Contact</label>
                        <input type="text" id="contact" placeholder="Your Contact" />
                    </div>
                    <div class="form-group">
                        <label for="timezone">Time Zone</label>
                        <input type="text" id="timezone" placeholder="Your Time Zone" />
                    </div>
                    </div>
                    <div class="buttons">
                    <button id="save">Save</button>
                    <button id="edit">Edit</button>
                    </div>
                </div>
                <div class="email-section">
                    <h2>My Email Address</h2>
                    <div class="email">
                    <p>sayurbox25@gmail.com</p>
                    <button id="add-email">+ Add Email Address</button>
                    </div>
                </div>
            </div>
          `;
  }
}

customElements.define("store-menu", StoreMenu);
