


function filterByHorsepower(minHorsepower, maxHorsepower) {
    var articles = document.querySelectorAll('.car');

    articles.forEach(function(article) {
        var horsepowerText = article.querySelector('p:nth-child(2)').textContent.toLowerCase();
        var carHorsepower = parseInt(horsepowerText.match(/\d+/)[0]); // Extract numeric value of horsepower
        console.log(carHorsepower)
        if (carHorsepower >= minHorsepower && carHorsepower <= maxHorsepower) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
}

function displayArticlesByHorsepower(minHorsepower, maxHorsepower) {
    // Select all elements with the class "car"
    var articles = document.querySelectorAll('.car');

    // Iterate over each article
    articles.forEach(function(article) {
        // Select the paragraph element containing the horsepower information
        var paragraph = article.querySelector('p:first-of-type');

        if (paragraph) { // Check if paragraph element exists
            // Get the text content of the paragraph
            var paragraphText = paragraph.textContent;

            // Extract the numeric value of horsepower
            var horsepower = parseInt(paragraphText.match(/\d+/)[0]);

            // Compare the horsepower value with the provided parameters
            if (horsepower >= minHorsepower && horsepower <= maxHorsepower) {
                // Display the article on the screen
                console.log("Displaying article with horsepower:", horsepower);
                article.style.display = 'block'; // Display the article
            } else {
                // Do not display the article on the screen
                console.log("Horsepower not in specified range:", horsepower);
                article.style.display = 'none'; // Hide the article
            }
        } else {
            console.log("Paragraph element not found in article:", article);
        }
    });
}

// Example usage: Display articles with horsepower between 200 and 300


function filterByMaxSpeed(minSpeed, maxSpeed) {
    var articles = document.querySelectorAll('.car');

    articles.forEach(function(article) {
        var speedText = article.querySelector('p:nth-child(3)').textContent.toLowerCase();
        var carSpeed = parseInt(speedText.match(/\d+/)[0]); // Extract numeric value of speed
        if (carSpeed >= minSpeed && carSpeed <= maxSpeed) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
}

function filterByPrice(minPrice, maxPrice) {
    var articles = document.querySelectorAll('.car');

    articles.forEach(function(article) {
        var priceText = article.querySelector('p:nth-child(4)').textContent.toLowerCase();
        var numericPrice = parseFloat(priceText.replace(/[^\d.]/g, '')); // Extract numeric value of price

        if (!isNaN(numericPrice) && numericPrice >= minPrice && numericPrice <= maxPrice) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
}
