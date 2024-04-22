// Get the "Volunteer Now" button element
const volunteerButton = document.getElementById("volunteer-button");

// Add event listener to the "Volunteer Now" button
volunteerButton.addEventListener("click", () => {
    // Prompt a form for users to input their contact information
    const contactForm = prompt("Please enter your contact information:");
    // Display the contact information in an alert
    if (contactForm) {
        alert("Thank you for volunteering! Your contact information has been submitted.");
    }
});

// Get the additional element to enhance interactivity
const additionalInfo = document.getElementById("additional-info");

// Add event listener to the additional element
additionalInfo.addEventListener("mouseover", () => {
    // Change the background color when the user hovers over the element
    additionalInfo.style.backgroundColor = "lightblue";
});

additionalInfo.addEventListener("mouseout", () => {
    // Restore the original background color when the user moves the mouse away
    additionalInfo.style.backgroundColor = "white";
});
