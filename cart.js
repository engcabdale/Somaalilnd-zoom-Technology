document.addEventListener("DOMContentLoaded", function() {
    const cartItems = document.querySelectorAll(".product-details");
    cartItems.forEach((item, index) => {
        const qtyElement = item.parentElement.querySelector(".qty h5");
        const minusButton = item.parentElement.querySelector(".fa-minus");
        const plusButton = item.parentElement.querySelector(".fa-plus");
        const trashButton = item.parentElement.querySelector(".fa-trash");

        minusButton.addEventListener("click", () => {
            let qty = parseInt(qtyElement.textContent);
            if (qty > 1) {
                qtyElement.textContent = qty - 1;
                updateTotalPrice();
            }
        });

        plusButton.addEventListener("click", () => {
            let qty = parseInt(qtyElement.textContent);
            qtyElement.textContent = qty + 1;
            updateTotalPrice();
        });

        trashButton.addEventListener("click", () => {
            item.parentElement.remove();
            updateTotalPrice();
        });
    });

    function updateTotalPrice() {
        let totalPrice = 0;
        cartItems.forEach((item) => {
            const qty = parseInt(item.parentElement.querySelector(".qty h5").textContent);
            const price = parseFloat(item.parentElement.querySelector(".text-grey").textContent.replace('$', ''));
            totalPrice += qty * price;
        });
        console.log("Total Price: $" + totalPrice.toFixed(2));
    }
});
