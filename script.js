        const categoryFilter = document.getElementById("categoryFilter");
        const products = document.querySelectorAll(".product");

        categoryFilter.addEventListener("change", function () {
            const selectedCategory = this.value;

            products.forEach(product => {
                const category = product.getAttribute("data-category");

                if (selectedCategory === "" || category === selectedCategory) {
                    product.style.display = "";
                } else {
                    product.style.display = "none";
                }
            });
        });