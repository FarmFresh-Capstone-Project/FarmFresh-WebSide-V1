class DashboardHome extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="dashborad-content">
        
                <div class="second-dashboard">
                    <!-- Bagian 1: welcome text -->
                    <div class="welcome-dashboard">
                        <h1>Dashboard</h1>
                        <p>Hi, Esa. Welcome back to FarmFresh Admin!</p>
                    </div>
            
                    <!-- Bagian 2: tanggal section -->
                    <div class="date-container">
                        <div class="icon-container">
                        <i class="far fa-calendar"></i>
                        </div>
                        <div class="text-container">
                        <h3 id="currentDay"></h3>
                        <p id="currentTime"></p>
                        </div>
                    </div>
                </div>
        
                <div class="dashboard-mainContent">
                    <!-- Bagian 1: Total Items -->
                    <div class="item-container">
                        <div class="icons-container">
                        <i class="fas fa-leaf"></i>
                        </div>
                        <div class="texts-container">
                        <h2>0</h2>
                        <h3>Total Items</h3>
                        </div>
                    </div>
            
                    <!-- Bagian 2: Total Order -->
                    <div class="item-container">
                        <div class="icons-container">
                        <i class="fas fa-box"></i>
                        </div>
                        <div class="texts-container">
                        <h2>0</h2>
                        <h3>Total Orders</h3>
                        </div>
                    </div>
            
                    <!-- Bagian 3: Total Revenue -->
                    <div class="item-container">
                        <div class="icons-container">
                        <i class="fas fa-comment-dollar"></i>
                        </div>
                        <div class="texts-container">
                        <h2>0</h2>
                        <h3>Total Revenue</h3>
                        </div>
                    </div>
                </div>
        
                <div class="dashboard-review">
                    <!-- Bagian 1: Review Text -->
                    <div class="review-text">
                        <h1>Customer Review</h1>
                        <p>Feedback for better result</p>
                    </div>
            
                    <!-- Bagian 2: Review Card -->
                    <div class="review-container">
                        <!-- profile -->
                        <div class="profile-review-container">
                            <div class="pic-container">
                                <img
                                src="https://via.placeholder.com/100"
                                alt="Avatar"
                                class="profile-review"
                                />
                            </div>
                            <div class="name-container">
                                <h3>Esa Faizal Gibran</h3>
                                <p>2 days ago</p>
                            </div>
                        </div>
            
                        <!-- Deskripsi -->
                        <div class="description-container">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                                corporis provident neque omnis quas ipsum deleniti. Incidunt,
                                possimus consequuntur sit ut modi suscipit! Debitis omnis, officia
                                illum ut eligendi libero!
                            </p>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                    </div>
                </div>
            </div>
        `;
  }
}

customElements.define("dashboard-home", DashboardHome);
