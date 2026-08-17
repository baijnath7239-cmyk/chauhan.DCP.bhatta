const phoneNumber = "917239002246";

function orderNow() {
    const message = encodeURIComponent(
        "Namaste Chauhan Bhatta, mujhe eent ke baare mein price aur availability ki information chahiye."
    );

    window.open(
        "https://wa.me/" + phoneNumber + "?text=" + message,
        "_blank"
    );
}

function viewProducts() {
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}

function orderProduct(productName) {
    const message = encodeURIComponent(
        "Namaste Chauhan Bhatta, mujhe " +
        productName +
        " ke baare mein price aur availability ki information chahiye."
    );

    window.open(
        "https://wa.me/" + phoneNumber + "?text=" + message,
        "_blank"
    );
}
document
    .getElementById("brickOrderForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("customerName").value.trim();

        const phone =
            document.getElementById("customerPhone").value.trim();

        const product =
            document.getElementById("productName").value;

        const quantity =
            document.getElementById("quantity").value;

        const location =
            document.getElementById("deliveryLocation").value.trim();

        const extra =
            document.getElementById("additionalMessage").value.trim();

        const message =
`🧱 CHAUHAN BHATTA
━━━━━━━━━━━━━━━━━━
Product: ${product}
Quantity: ${quantity} Eent

Customer Name: ${name}
Customer Mobile: ${phone}

Delivery Location:
${location}

Additional Message:
${extra || "None"}

Please share price and delivery details.`;

        const whatsappURL =
            "https://wa.me/" +
            phoneNumber +
            "?text=" +
            encodeURIComponent(message);

        window.open(whatsappURL, "_blank");
    });