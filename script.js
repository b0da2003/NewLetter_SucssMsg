function validateEmail() {
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const dia = document.getElementById("dia");
  const disDia = document.getElementById("disDia");
  const card = document.getElementById("card");
  // Regular expression for email validation
  const emailRegex = /^[a-zA-Z0-9]+[\._]*[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/;
  const isValid = emailRegex.test(emailInput.value);

  if (isValid) {
    // The email is valid
    setTimeout(() => {
      dia.showModal();
    }, 800);
    emailInput.classList.add(
      "border-green-500",
      "bg-green-100",
      "text-green-400",
      "bg-white"
    );

    emailError.classList.remove("hidden");
    emailError.classList.add("block");
    emailError.textContent = "Valid Email !";
    emailError.classList.add("text-green-400");
  } else {
    // Display an error message
    emailError.classList.remove("hidden");
    emailError.classList.add("block");
    emailInput.classList.remove("border-[#9294A0]", "bg-white");
    emailInput.classList.add(
      "border-[#FF6257]",
      "outline-[#FF6257]",
      "text-[#FF6257]",
      "bg-[#ffeae8]"
    );
  }
  event.preventDefault();
}

disDia.addEventListener("click", () => {
  setTimeout(() => {
    window.location.reload();
    dia.close();
  }, 500);
});
