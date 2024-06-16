document.addEventListener("DOMContentLoaded", () => {
  
  // Handle Login
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = {
        email: formData.get("email"),
        password: formData.get("password"),
      };

      try {
        const response = await fetch("http://localhost:3000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          const responseData = await response.json();
          alert("Login berhasil!");
          localStorage.setItem("accessToken", responseData.accessToken);
          window.location.href = "./index.html";
        } else {
          const errorData = await response.json();
          alert(`Error: ${errorData.error}`);
        }
      } catch (error) {
        console.error("Error during login:", error);
        alert("Terjadi kesalahan, silakan coba lagi.");
      }
    });
  }

  // Handle Registration
  const registrasiForm = document.getElementById("registrasiForm");
  if (registrasiForm) {
    registrasiForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = {
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
      };

      try {
        const response = await fetch("http://localhost:3000/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          alert("Registrasi berhasil!");
          window.location.href = "./login.html";
        } else {
          const errorData = await response.json();
          alert(`Error: ${errorData.error}`);
        }
      } catch (error) {
        console.error("Error during registration:", error);
        alert("Terjadi kesalahan, silakan coba lagi.");
      }
    });
  }

  // Handle Logout
  const logoutButton = document.getElementById("logout");
  if (logoutButton) {
    logoutButton.addEventListener("click", (event) => {
      event.preventDefault();
      localStorage.removeItem("accessToken");
      window.location.href = "./login.html";
    });
  }
});
