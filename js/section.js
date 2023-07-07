    // Fetch the JSON data from the file
    fetch('../data/bandaraya.json')
    .then(response => response.json())
    .then(data => {
        // Get the section data array from the JSON
        var sectionData = data.section;
        console.log('section data', sectionData);

        // Get the div element by its ID
        var sectionDiv = document.getElementById('sectiondata');

        // Loop through the section data
        for (var i = 1; i < sectionData.length; i += 4) {
            var name = sectionData[i].name;
            var content = sectionData[i + 1].content;
            var image = sectionData[i + 2].image;

            // Create a new section element
            var section = document.createElement('section');
            section.id = name; // Use the name as the ID

            // Create a heading for the section
            var heading = document.createElement('h2');
            heading.textContent = name;

            // Create a paragraph for the content
            var paragraph = document.createElement('p');
            paragraph.textContent = content;

            // Create an image element
            var img = document.createElement('img');
            img.src = image;

            // Append the heading, paragraph, and image to the section
            section.appendChild(heading);
            section.appendChild(paragraph);
            section.appendChild(img);

            // Append the section to the div element
            sectionDiv.appendChild(section);
        }
    })
    .catch(error => {
        console.log('Error fetching JSON:', error);
    });