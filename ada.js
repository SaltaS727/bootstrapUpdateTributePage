
    // Get the image element by its ID
    const adaImage = document.getElementById("adaImage");

    // Add a click event listener to the image
    adaImage.addEventListener("click", function () {
        // Check the current source of the image
        if (adaImage.src.includes("ada_lovelace.jpg")) {
            // Change the image source to a new image
            adaImage.src = "ada_lovelace2.jpg"; // Replace with the actual file name of the second image
        } else {
            // Revert back to the original image
            adaImage.src = "ada_lovelace.jpg";
        }
    });

