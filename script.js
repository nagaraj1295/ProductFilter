        const categoryFilter = document.getElementById("categoryFilter");
        const products = document.querySelectorAll(".product");

        categoryFilter.addEventListener("change", function () {
            const selectedCategory = this.value;

            products.forEach(product => {
                const category = product.getAttribute("data-category");

                if (selectedCategory === "" || category === selectedCategory) {
                    product.style.display = "block";
                    product.style.opacity = "1"

                } else {
                    product.style.opacity = "0";
                    setTimeout(()=>{
                      product.style.display = "none";
                    },200);
                }
            });
        });
