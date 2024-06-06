window.addEventListener("load", function() {
    const btnSubmit = document.getElementById("btnSubmit");
    const NameInput = document.getElementById("Name");
    const EmailInput = document.getElementById("Email");
    const LastNameInput = document.getElementById("Last-Name");
    const PhoneNumberInput = document.getElementById("Phone-Number");
    const DateInput = document.getElementById("Date");
    const EnterCityInput = document.getElementById("Enter-City");
    const NumberOfPassengersInput = document.getElementById("Number-of-passegers");
    const TypeOfFlightInput = document.getElementById("Flight");
    const TypeOfServiceInput = document.getElementById("Type-of-service");

    const defaultTypeOfService = "Type of service";
    const defaultTypeOfFlight = "Type of Flight";

    function checkInputs() {
        if (
            NameInput.value.trim() === "" ||
            EmailInput.value.trim() === "" ||
            LastNameInput.value.trim() === "" ||
            PhoneNumberInput.value.trim() === "" ||
            DateInput.value.trim() === "" ||
            EnterCityInput.value.trim() === "" ||
            NumberOfPassengersInput.value.trim() === ""
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
        EnterCityInput.value = "";
        NumberOfPassengersInput.value = "";

        if (TypeOfFlightInput.value.trim() === "" || TypeOfFlightInput.value === defaultTypeOfFlight) {
            TypeOfFlightInput.value = defaultTypeOfFlight;
        }
        if (TypeOfServiceInput.value.trim() === "" || TypeOfServiceInput.value === defaultTypeOfService) {
            TypeOfServiceInput.value = defaultTypeOfService;
        }
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
    EnterCityInput.addEventListener("input", checkInputs);
    NumberOfPassengersInput.addEventListener("input", checkInputs);
    TypeOfFlightInput.addEventListener("input", checkInputs);
    TypeOfServiceInput.addEventListener("input", checkInputs);
    checkInputs(); 
});
