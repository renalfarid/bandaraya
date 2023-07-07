function loadFacilityData() {
    // Fetch the JSON data
    fetch('../../data/facility.json')
        .then(response => response.json())
        .then(data => {
            // Get the facility section by its ID
            const facilitySection = document.getElementById('facility');

            // Get the facility data array from the JSON
            const facilityData = data.facility;
            console.log('fasilitas', facilityData);

            // Loop through the facility data
            for (let i = 0; i < facilityData.length; i++) {
                const facility = facilityData[i];

                // Create a paragraph element for the facility title
                const facilityTitle = document.createElement('p');
                facilityTitle.textContent = facility.title;

                // Append the facility title to the facility section
                facilitySection.appendChild(facilityTitle);
            }
        })
        .catch(error => {
            console.log('Error fetching JSON:', error);
        });
}
