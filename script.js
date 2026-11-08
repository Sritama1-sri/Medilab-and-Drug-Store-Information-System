/* List of tests */

const tests = [

    {
        name: "CBC",
        description: "Complete Blood Count test to check blood cells and hemoglobin.",
        charge: 300
    },

    {
        name: "Thyroid Profile",
        description: "Checks thyroid hormone levels including T3, T4 and TSH.",
        charge: 500
    },

    {
        name: "Blood Sugar",
        description: "Measures the glucose level in the blood.",
        charge: 150
    },

    {
        name: "Lipid Profile",
        description: "Checks cholesterol and other fats in the blood.",
        charge: 600
    },

    {
        name: "Liver Function Test",
        description: "Checks the health and functioning of the liver.",
        charge: 700
    },

    {
        name: "Kidney Function Test",
        description: "Checks kidney function using different blood parameters.",
        charge: 650
    },

    {
        name: "Urine Test",
        description: "Checks urine for signs of infection and other health problems.",
        charge: 200
    },

    {
        name: "Vitamin D Test",
        description: "Measures the level of Vitamin D in the blood.",
        charge: 800
    },

    {
        name: "Vitamin B12 Test",
        description: "Measures the level of Vitamin B12 in the blood.",
        charge: 750
    },

    {
        name: "HbA1c Test",
        description: "Measures average blood sugar level over the past few months.",
        charge: 450
    },

    {
        name: "Calcium Test",
        description: "Measures the calcium level in the blood.",
        charge: 350
    },

    {
        name: "Hemoglobin Test",
        description: "Measures the amount of hemoglobin present in the blood.",
        charge: 150
    }

];


/* Store selected tests */

let selectedTests = [];


/* Search Test Function */

function searchTest() {

    let searchText =
        document.getElementById("searchInput").value
        .toLowerCase()
        .trim();


    let result =
        document.getElementById("testResults");


    /* Clear previous results */

    result.innerHTML = "";


    let foundTests;


    /*
       If search box is empty,
       show all tests.
    */

    if (searchText === "") {

        foundTests = tests;

    }

    /*
       Otherwise show matching tests.
    */

    else {

        foundTests = tests.filter(function(test) {

            return test.name
                .toLowerCase()
                .includes(searchText);

        });

    }


    /* If no test is found */

    if (foundTests.length === 0) {

        result.innerHTML =
            "<p>No test found.</p>";

        return;

    }


    /* Display tests */

    foundTests.forEach(function(test) {


        let isSelected =
            selectedTests.includes(test.name);


        result.innerHTML += `

            <div class="test-card">

                <h4>${test.name}</h4>

                <p>
                    <b>Description:</b>
                    ${test.description}
                </p>

                <p>
                    <b>Test Charge:</b>
                    ₹${test.charge}
                </p>

                <button
                    class="select-button ${isSelected ? "selected" : ""}"
                    onclick="toggleTest('${test.name}')">

                    ${isSelected ? "✓ Selected" : "Select Test"}

                </button>

            </div>

        `;

    });

}


/* Select / Unselect Test */

function toggleTest(testName) {


    /* If already selected */

    if (selectedTests.includes(testName)) {


        /* Remove test */

        selectedTests =
            selectedTests.filter(function(test) {

                return test !== testName;

            });

    }


    /* If not selected */

    else {

        selectedTests.push(testName);

    }


    /* Update selected test box */

    showSelectedTests();


    /* Update button */

    searchTest();

}


/* Display Selected Tests */

function showSelectedTests() {


    let selectedDiv =
        document.getElementById("selectedTests");


    /* If no test selected */

    if (selectedTests.length === 0) {

        selectedDiv.innerHTML = `

            <b>Selected Tests:</b>

            <p>No test selected</p>

        `;

        return;

    }


    /* Display selected tests */

    let output =
        `<b>Selected Tests:</b><br><br>`;


    selectedTests.forEach(function(test) {

        output +=
            "✓ " + test + "<br>";

    });


    selectedDiv.innerHTML = output;

}


/* Book Test Function */

function bookTest() {


    let patient =
        document.getElementById("patientName")
        .value
        .trim();


    let mobile =
        document.getElementById("mobile")
        .value
        .trim();


    let date =
        document.getElementById("date")
        .value;


    let time =
        document.getElementById("time")
        .value;


    /* Check test selection */

    if (selectedTests.length === 0) {

        alert("Please select at least one test.");

        return;

    }


    /* Check patient name */

    if (patient === "") {

        alert("Please enter patient name.");

        return;

    }


    /* Name should contain only letters and spaces */

    let namePattern =
        /^[A-Za-z ]+$/;


    if (!namePattern.test(patient)) {

        alert(
            "Incorrect Patient Name!\n\n" +
            "Name should contain only letters and spaces."
        );

        return;

    }


    /* Check mobile number */

    let mobilePattern =
        /^[0-9]{10}$/;


    if (!mobilePattern.test(mobile)) {

        alert(
            "Incorrect Mobile Number!\n\n" +
            "Please enter exactly 10 digits."
        );

        return;

    }


    /* Check date */

    if (date === "") {

        alert("Please select a date.");

        return;

    }


    /* Check time */

    if (time === "Select Time") {

        alert("Please select a time.");

        return;

    }


    /* Successful booking */

    alert(

        "Tests booked successfully!\n\n" +

        "Selected Tests:\n" +

        selectedTests.join(", ") +

        "\n\nPatient Name: " +

        patient +

        "\nMobile Number: " +

        mobile +

        "\nDate: " +

        date +

        "\nTime: " +

        time

    );

}