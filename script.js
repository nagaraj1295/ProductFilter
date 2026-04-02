const categoryFilter = document.getElementById("categoryFilter");
const searchInput = document.getElementById("searchInput");
const products = document.querySelectorAll(".product");

function filterProducts() {
        const selectedValue = categoryFilter.value.toLowerCase();
        const searchValue = searchInput.value.toLowerCase();

        products.forEach(product => {
                const category = product.getAttribute("data-category").toLowerCase();
                const title = product.querySelector(".card-title").textContent.toLowerCase();

                const matchCategory = selectedValue === "" || category === selectedValue;

                const matchSearch = title.includes(searchValue);
                if (matchCategory && matchSearch) {
                        product.style.display = "block";
                        } else {
                        product.style.display = "none";
                        }
});
}

// Run when category changes
categoryFilter.addEventListener("change", filterProducts);

// Run when typing in search
searchInput.addEventListener("input", filterProducts);
