// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Login Panel Logic
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "user" && password === "1234") {
        alert("Login successful!");
    } else {
        alert("Invalid credentials!");
    }
});

// Book Appointment
document.getElementById('bookAppointment').addEventListener('click', () => {
    const doctorType = document.getElementById('doctorType').value;
    const appointmentDate = document.getElementById('appointmentDate').value;

    if (appointmentDate) {
        alert(`Appointment with ${doctorType} booked for ${appointmentDate}`);
    } else {
        alert("Please choose a date!");
    }
});

// Emergency Services
document.getElementById('emergencyContact').addEventListener('click', () => {
    alert("Contacting Emergency Services...");
});

document.getElementById('findHospital').addEventListener('click', () => {
    alert("Finding nearest hospital...");
});
const hospitals = [
    {
        name: "Apollo Hospitals",
        address: "Jubilee Hills, Hyderabad",
        emergency: true,
    },
    {
        name: "Care Hospitals",
        address: "Banjara Hills, Hyderabad",
        emergency: true,
    },
    {
        name: "KIMS Hospitals",
        address: "Secunderabad, Hyderabad",
        emergency: false,
    },
    {
        name: "Yashoda Hospitals",
        address: "Somajiguda, Hyderabad",
        emergency: true,
    },
    {
        name: "Continental Hospitals",
        address: "Gachibowli, Hyderabad",
        emergency: true,
    }
];

// Function to display the list of hospitals
function displayHospitals() {
    const hospitalList = document.getElementById('hospitalList');
    hospitalList.innerHTML = hospitals.map(hospital => {
        return `
            <div class="hospital">
                <h3>${hospital.name}</h3>
                <p>Address: ${hospital.address}</p>
                <p>Emergency Services: ${hospital.emergency ? 'Available' : 'Not Available'}</p>
            </div>
        `;
    }).join('');
}

// Function to search hospitals by name
function searchHospitals() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const filteredHospitals = hospitals.filter(hospital => 
        hospital.name.toLowerCase().includes(query)
    );
    
    const hospitalList = document.getElementById('hospitalList');
    hospitalList.innerHTML = filteredHospitals.map(hospital => {
        return `
            <div class="hospital
// Handle Pharmacy Service button
document.getElementById('orderMedicine').addEventListener('click', function() {
    alert("Redirecting to the pharmacy order page...");
});

// Handle Diagnostic Center button
document.getElementById('findDiagnostics').addEventListener('click', function() {
    alert("Finding diagnostic centers near you...");
});

// Handle Online Doctor Consultation button
document.getElementById('consultDoctor').addEventListener('click', function() {
    alert("Connecting you to an online doctor...");
});

// Handle Diet Plan button
document.getElementById('getDietPlan').addEventListener('click', function() {
    alert("Fetching your personalized diet plan...");
});

// Handle Insurance Carrier Plans button
document.getElementById('checkInsurance').addEventListener('click', function() {
    alert("Showing available insurance carrier plans...");
});

// Handle Budgeting for Healthcare button
document.getElementById('getBudgetInfo').addEventListener('click', function() {
    alert("Providing financial budgeting details...");
});

// Handle Cost Management button
document.getElementById('getCostOptions').addEventListener('click', function() {
    alert("Listing payment plans and financial assistance options...");
});
// Handle Contact Hospital button
document.getElementById('contactHospital').addEventListener('click', function() {
    alert("Contacting the nearest hospital...");
    // Simulate calling an API or redirecting to a hospital contact page
});

// Handle Real-Time Communication button
document.getElementById('startCommunication').addEventListener('click', function() {
    alert("Starting real-time communication with healthcare provider...");
    // Here, you would implement a chat or video consultation feature
});

// Handle Resource Management button
document.getElementById('checkResources').addEventListener('click', function() {
    alert("Checking available medical staff, equipment, and beds...");
    // Simulate checking resources in real-time
});

// Handle Emergency Contact button
document.getElementById('callEmergency').addEventListener('click', function() {
    alert("Calling emergency services...");
    // Simulate calling emergency services with one tap
});
// Handle Telemedicine (Video Call)
document.getElementById('startVideoCall').addEventListener('click', function() {
    alert("Starting video call with doctor...");
    // Simulate starting a video call
});

// Handle Messaging
document.getElementById('sendMessage').addEventListener('click', function() {
    alert("Opening messaging platform...");
    // Simulate sending a message to the doctor
});

// Handle Health Data Integration
document.getElementById('syncHealthData').addEventListener('click', function() {
    alert("Syncing health data with Google Fit or Apple Health...");
    // Simulate health data synchronization with a platform like Google Fit or Apple Health
});

// Handle Medication Reminders
document.getElementById('setReminder').addEventListener('click', function() {
    alert("Setting medication reminder...");
    // Simulate setting a medication reminder
});

// Handle Secure Payment
document.getElementById('makePayment').addEventListener('click', function() {
    alert("Redirecting to secure payment gateway...");
    // Simulate a secure payment process
});
// Handle Interview Scheduling
document.getElementById('scheduleInterview').addEventListener('click', function() {
    const hospitalType = document.getElementById('hospitalType').value;
    const hospitalSize = document.getElementById('hospitalSize').value;
    const hospitalLocation = document.getElementById('hospitalLocation').value;
    const contactMethod = document.getElementById('contactMethod').value;

    alert(`Interview scheduled with a ${hospitalType} hospital (${hospitalSize}) in ${hospitalLocation} via ${contactMethod}.`);
});

// Start Zoom Video Call
document.getElementById('startZoom').addEventListener('click', function() {
    window.open('https://zoom.us', '_blank');
});

// Start Google Meet Video Call
document.getElementById('startGoogleMeet').addEventListener('click', function() {
    window.open('https://meet.google.com', '_blank');
});

// Create Google Form
document.getElementById('createGoogleForm').addEventListener('click', function() {
    window.open('https://forms.google.com', '_blank');
});

// Create SurveyMonkey Form
document.getElementById('createSurveyMonkey').addEventListener('click', function() {
    window.open('https://www.surveymonkey.com', '_blank');
});
const hospitalIcons = document.querySelectorAll('.hospital-icon');
hospitalIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        alert("Opening full photo of the hospital.");
    });
});
body {
    font-family: Arial, sans-serif;
    background-color: #f0f4f8;
    color: #333;
    margin: 0;
}

header {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #007bff;
    padding: 20px;
    color: white;
}

#logo-container {
    margin-bottom: 20px;
}

#app-logo {
    width: 150px;
    height: auto;
    border-radius: 50%;
}

h1 {
    margin: 0;
}

main {
    padding: 20px;
    text-align: center;
}

footer {
    text-align: center;
    padding: 20px;
    background-color: #007bff;
    color: white;
}
