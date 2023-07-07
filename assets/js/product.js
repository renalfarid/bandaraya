function loadProductData() {
    // Fetch the JSON data
    fetch('../../data/product.json')
    .then(response => response.json())
    .then(data => {
        const productSection = document.getElementById('product');
        console.log(data.apartemen);

        // Get the "apartemen" array from the JSON data
        const apartemen = data.apartemen;
        // Iterate over each product object in the "apartemen" array
        for (let i = 0; i < apartemen.length; i += 5) {
            // Extract the product details from consecutive objects
            const id = apartemen[i].id;
            const name = apartemen[i + 1].name;
            const type = apartemen[i + 2].type;
            const price = apartemen[i + 3].price;
            const image = apartemen[i + 4].image;

            // Create a card element for the product
            const card = document.createElement('div');
            card.className = 'product-card';

            // Create an image element and set its source
            const img = document.createElement('img');
            img.src = image;

            // Create heading elements for name, type, and price
            const nameHeading = document.createElement('h3');
            nameHeading.textContent = name;

            const typeHeading = document.createElement('p');
            typeHeading.textContent = `Type: ${type}`;

            const priceHeading = document.createElement('p');
            priceHeading.textContent = `Price: $${price}`;

            // Append the elements to the card
            card.appendChild(img);
            card.appendChild(nameHeading);
            card.appendChild(typeHeading);
            card.appendChild(priceHeading);

            // Append the card to the product section
            productSection.appendChild(card);
        }
    });
}
