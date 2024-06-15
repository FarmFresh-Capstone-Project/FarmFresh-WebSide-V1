document.addEventListener('DOMContentLoaded', (event) => {
    var btn = document.getElementById("addItemBtn");

    if (btn) {
        btn.onclick = function() {
            // Create the modal
            var modal = document.createElement("div");
            modal.classList.add("modal");
            modal.id = "itemModal";
            modal.innerHTML = `
              <div class="modal-content">
                <span class="close">&times;</span>
                <h2>Add New Item</h2>
                <form id="itemForm">
                  <label for="itemName">Name:</label>
                  <input type="text" id="itemName" name="itemName" required>

                  <label for="itemPrice">Price:</label>
                  <input type="number" id="itemPrice" name="itemPrice" required>

                  <label for="itemRate">Rate (1-5):</label>
                  <input type="number" id="itemRate" name="itemRate" min="1" max="5" required>

                  <label for="itemType">Type:</label>
                  <select id="itemType" name="itemType" required>
                    <option value="Sayur">Sayur</option>
                    <option value="Buah">Buah</option>
                    <option value="Bumbu">Bumbu</option>
                  </select>

                  <label for="itemCategory">Category:</label>
                  <select id="itemCategory" name="itemCategory" required>
                    <option value="Organik">Organik</option>
                    <option value="Non-Organik">Non-Organik</option>
                  </select>

                  <label for="itemQuantity">Quantity:</label>
                  <input type="number" id="itemQuantity" name="itemQuantity" required>

                  <button type="submit">Submit</button>
                </form>
              </div>
            `;

            document.body.appendChild(modal);

            // Display the modal
            modal.style.display = "block";

            // Get the <span> element that closes the modal
            var span = modal.querySelector(".close");

            // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
                modal.style.display = "none";
                document.body.removeChild(modal);
            }

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                    document.body.removeChild(modal);
                }
            }

            // Handle form submission
            var form = document.getElementById("itemForm");
            form.onsubmit = function(e) {
                e.preventDefault();
                // Handle form data here
                var name = document.getElementById("itemName").value;
                var price = document.getElementById("itemPrice").value;
                var rate = document.getElementById("itemRate").value;
                var type = document.getElementById("itemType").value;
                var category = document.getElementById("itemCategory").value;
                var quantity = document.getElementById("itemQuantity").value;

                // Ensure rate is within 1-5
                if (rate < 1 || rate > 5) {
                    alert("Rate must be between 1 and 5.");
                    return;
                }

                // Add the new item to localStorage
                var newItem = {
                    name: name,
                    price: price,
                    rate: rate,
                    type: type,
                    category: category,
                    quantity: quantity
                };
                saveItemToStorage(newItem);

                // Add the new item to the table
                var tableBody = document.getElementById("table-body");
                var newRow = tableBody.insertRow();
                newRow.innerHTML = `
                  <td>${tableBody.rows.length}</td>
                  <td>${name}</td>
                  <td>${price}</td>
                  <td>${rate}</td>
                  <td>${type}</td>
                  <td>${category}</td>
                  <td>${quantity}</td>
                  <td><button class="delete-btn">Delete</button></td>
                `;

                // Add delete functionality to the new delete button
                var deleteBtn = newRow.querySelector(".delete-btn");
                deleteBtn.onclick = function() {
                    var rowIndex = newRow.rowIndex;
                    tableBody.deleteRow(rowIndex);
                    updateLocalStorage();
                    updateTotalCounts();
                }

                // Close the modal after submission
                modal.style.display = "none";
                document.body.removeChild(modal);

                // Update total counts
                updateTotalCounts();
            }
        }
    } else {
        console.error("Element with id 'addItemBtn' not found.");
    }

    // Function to save item to localStorage
    function saveItemToStorage(item) {
        var items = JSON.parse(localStorage.getItem("items")) || [];
        items.push(item);
        localStorage.setItem("items", JSON.stringify(items));
    }

    // Load initial items from localStorage when the page loads
    loadItemsFromStorage();

    // Function to load items from localStorage and populate the table
    function loadItemsFromStorage() {
        var items = JSON.parse(localStorage.getItem("items")) || [];
        var tableBody = document.getElementById("table-body");
        tableBody.innerHTML = ""; // Clear existing table rows

        items.forEach(function(item, index) {
            var row = `
                <tr>
                    <td>${index + 1}</td>
                    <td>${item.name}</td>
                    <td>${item.price}</td>
                    <td>${item.rate}</td>
                    <td>${item.type}</td>
                    <td>${item.category}</td>
                    <td>${item.quantity}</td>
                    <td><button class="delete-btn">Delete</button></td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });

        // Add delete functionality to all delete buttons
        var deleteBtns = document.querySelectorAll(".delete-btn");
        deleteBtns.forEach(function(btn, index) {
            btn.onclick = function() {
                var rowIndex = index; // Get the index of the row to delete
                tableBody.deleteRow(rowIndex);
                updateLocalStorage();
                updateTotalCounts();
            }
        });

        // Update total counts after loading items
        updateTotalCounts();
    }

    // Function to update localStorage after deleting an item
    function updateLocalStorage() {
        var tableRows = document.querySelectorAll("#table-body tr");
        var items = [];

        tableRows.forEach(function(row) {
            var item = {
                name: row.cells[1].textContent,
                price: row.cells[2].textContent,
                rate: row.cells[3].textContent,
                type: row.cells[4].textContent,
                category: row.cells[5].textContent,
                quantity: row.cells[6].textContent
            };
            items.push(item);
        });

        localStorage.setItem("items", JSON.stringify(items));
    }

    // Function to update total counts
    function updateTotalCounts() {
        var items = JSON.parse(localStorage.getItem("items")) || [];
        var totalItems = items.length; // Total number of items
        var uniqueCounts = {}; // Object to store unique counts for each type

        items.forEach(function(item) {
            if (!uniqueCounts[item.type]) {
                uniqueCounts[item.type] = 1;
            } else {
                uniqueCounts[item.type]++;
            }
        });

        // Update total items count
        var totalItemsElement = document.getElementById("totalItems");
        if (totalItemsElement) {
            totalItemsElement.querySelector("h2").textContent = totalItems;
        }

        // Update total count for Sayuran
        var totalSayuranElement = document.getElementById("totalSayuran");
        if (totalSayuranElement) {
            totalSayuranElement.querySelector("h2").textContent = uniqueCounts["Sayur"] || 0;
        }

        // Update total count for Buah
        var totalBuahElement = document.getElementById("totalBuah");
        if (totalBuahElement) {
            totalBuahElement.querySelector("h2").textContent = uniqueCounts["Buah"] || 0;
        }

        // Update total count for Bumbu
        var totalBumbuElement = document.getElementById("totalBumbu");
        if (totalBumbuElement) {
            totalBumbuElement.querySelector("h2").textContent = uniqueCounts["Bumbu"] || 0;
        }
    }
});
