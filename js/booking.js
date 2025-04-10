document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("booking-form");
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("close-popup");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const formData = new FormData(form);
  
      fetch("https://formspree.io/f/xyzebadg", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            popup.style.display = 'flex';  // Show popup
            form.reset();
          } else {
            response.json().then((data) => {
              console.error('Error data:', data);
              alert("There was a problem with your booking submission.");
            });
          }
        })
        .catch((error) => {
          console.error('Network error:', error);
          alert("Something went wrong. Please try again.");
        });
    });
  
    // Add click event to close the popup
    closeBtn.addEventListener("click", () => {
      popup.style.display = 'none';  // Close the popup
    });
  });
