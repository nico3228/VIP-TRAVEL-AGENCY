window.addEventListener("load", function() {
    const btnSubmit = document.getElementById("btnSubmit");
    const NameInput = document.getElementById("Name");
    const EmailInput = document.getElementById("Email");
    const LastNameInput = document.getElementById("Last-Name");
    const PhoneNumberInput = document.getElementById("Phone-Number");

    function checkInputs() {
        if (
            NameInput.value.trim() === "" ||
            EmailInput.value.trim() === "" ||
            LastNameInput.value.trim() === "" ||
            PhoneNumberInput.value.trim() === ""
        ) {
            btnSubmit.setAttribute("data-bs-target", "#InformationMessage2");
        } else {
            btnSubmit.setAttribute("data-bs-target", "#InformationMessage");
        }
    }

    function resetForm() {
        NameInput.value = "";
        EmailInput.value = "";
        LastNameInput.value = "";
        PhoneNumberInput.value = "";
    }

    btnSubmit.addEventListener("click", function() {
        if (btnSubmit.getAttribute("data-bs-target") === "#InformationMessage") {
            resetForm();
        }
    });

    NameInput.addEventListener("input", checkInputs);
    EmailInput.addEventListener("input", checkInputs);
    LastNameInput.addEventListener("input", checkInputs);
    PhoneNumberInput.addEventListener("input", checkInputs);
    checkInputs(); 
});
