function loadPromotionData() {
    // Fetch the JSON data
    fetch('../../data/promotion.json')
        .then(response => response.json())
        .then(data => {
            console.log("data", data);
            const promotionSection = document.getElementById('promotion');
            // Get the promotion section and its elements by their IDs
            const promotionBase = document.getElementById('promotionBase');
            const promotionImage = document.getElementById('promotionImage');

            // Set the data from the JSON to the HTML elements
            promotionBase.src = data.baseImage;
            promotionImage.src = data.image;

            // Optional: You can add additional code to modify or style the elements as needed

            // Append the elements to the promotion section
            promotionSection.appendChild(promotionBase);
            promotionSection.appendChild(promotionImage);
        })
        .catch(error => {
            console.log('Error fetching JSON:', error);
        });
}
