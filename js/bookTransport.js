window.addEventListener("load", function() {
    const btnSubmit = document.getElementById("btnSubmit");
    const NameInput = document.getElementById("Name");
    const EmailInput = document.getElementById("Email");
    const LastNameInput = document.getElementById("Last-Name");
    const PhoneNumberInput = document.getElementById("Phone-Number");
    const DateInput = document.getElementById("Date");
    const NumberOfPassengersInput = document.getElementById("Number-of-passegers");
    const Time = document.getElementById("Time");
    const Pickup = document.getElementById("Pick-up");
    const Dropoff = document.getElementById("Drop-off");

    function checkInputs() {
        if (
            NameInput.value.trim() === "" ||
            EmailInput.value.trim() === "" ||
            LastNameInput.value.trim() === "" ||
            PhoneNumberInput.value.trim() === "" ||
            DateInput.value.trim() === "" ||
            NumberOfPassengersInput.value.trim() === "" ||
            Time.value.trim() === "" ||
            Pickup.value.trim() === "" ||
            Dropoff.value.trim() === ""
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
        DateInput.value = "";
        NumberOfPassengersInput.value = "";
        Time.value = "";
        Pickup.value = "";
        Dropoff.value = "";
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
    DateInput.addEventListener("input", checkInputs);
    NumberOfPassengersInput.addEventListener("input", checkInputs);
    Time.addEventListener("input", checkInputs);
    Pickup.addEventListener("input", checkInputs);
    Dropoff.addEventListener("input", checkInputs);
    checkInputs(); 
});
