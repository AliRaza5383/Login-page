// Ensure GSAP library is loaded before running this script
document.addEventListener("DOMContentLoaded", function () {

    // Fade-in animation for the form container
    gsap.from(".container", {
      opacity: 0,
      y: -50,
      duration: 1.5,
      ease: "power3.out",
      delay: 0.3
    });
  
    // Animation for input fields (username and password)
    gsap.from(".username input, .password input", {
      opacity: 0,
      x: -100,
      stagger: 0.3,
      duration: 1.5,
      ease: "power3.out",
      delay: 0.5
    });
  
    // Button animation with a scale and bounce effect
    gsap.from(".btn button", {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: "back.out(1.7)",
      delay: 1
    });
  
    // Hover effect for the 'Submit' button (scale it up on hover)
    const button = document.querySelector(".btn button");
    button.addEventListener("mouseenter", () => {
      gsap.to(button, { scale: 1.1, duration: 0.3 });
    });
  
    button.addEventListener("mouseleave", () => {
      gsap.to(button, { scale: 1, duration: 0.3 });
    });
  
    // Hover effect for 'Remember Me' text (color change)
    const rememberMeText = document.querySelector(".checkb h5");
    rememberMeText.addEventListener("mouseenter", () => {
      gsap.to(rememberMeText, { color: "rgb(13, 0, 255)", duration: 0.3 });
    });
  
    rememberMeText.addEventListener("mouseleave", () => {
      gsap.to(rememberMeText, { color: "black", duration: 0.3 });
    });
  
  });
  