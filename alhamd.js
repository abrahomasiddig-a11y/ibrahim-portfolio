const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const service =
        document.getElementById("service").value;

    const message =
        document.getElementById("message").value.trim();


    // Basic validation

    if (name.length < 2) {

        event.preventDefault();

        alert("Please enter your name.");

        return;
    }


    if (!email.includes("@")) {

        event.preventDefault();

        alert("Please enter a valid email address.");

        return;
    }


    if (!service) {

        event.preventDefault();

        alert("Please select a service.");

        return;
    }


    if (message.length < 10) {

        event.preventDefault();

        alert("Please provide more details about your project.");

        return;
    }


    // If everything is valid,
    // allow Formspree to receive the form.

});