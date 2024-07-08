document
  .getElementById("fetchProductBtn")
  .addEventListener("click", function () {
    const productId = document.getElementById("productId").value;

    if (productId >= 1 && productId <= 20) {
      fetch(`https://fakestoreapi.com/products/${productId}`)
        .then((response) => response.json())
        .then((product) => {
          document.getElementById("productImage").src = product.image;
          document.getElementById("productTitle").textContent = product.title;
          document.getElementById("productDescription").textContent =
            product.description;
          document.getElementById("productPrice").textContent = product.price;
          document.getElementById("product").style.display = "block";
        })
        .catch((error) => console.error("Error fetching product:", error));
    } else {
      alert("Please enter a number between 1 and 20.");
    }
  });
