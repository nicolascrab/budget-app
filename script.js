// script.js

const sendTestDataButton = document.getElementById('sendTestDataBtn');

// Your actual deployed Web App URL
const APP_SCRIPT_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbx9QYnhii0ya1_vhuZznkUhIFD8akkSpLtqUHh-1N9xTn9XE_cGx3P3f0xO74AB95Mn1A/exec';

if (sendTestDataButton) {
  sendTestDataButton.addEventListener('click', () => {
    console.log("1/3 I'm inside the eventListener!");

    // The data to send (as a JavaScript object)
    const dataToSend = {
      message: "Sending data via StackOverflow suggestion!",
      timestamp: new Date().toISOString(),
      source: "SO_Test"
    };

    console.log("2/3 Attempting to send data:", dataToSend);

    fetch(APP_SCRIPT_WEB_APP_URL, {
      redirect: "follow", // Added as per SO suggestion
      method: "POST",
      body: JSON.stringify(dataToSend), // Still send stringified JSON
      headers: {
        "Content-Type": "text/plain;charset=utf-8", // Specific Content-Type
      },
    })
    .then(response => {
      console.log("3/3 Received response from Apps Script.");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
      }
      return response.json(); // Expect JSON back from Apps Script
    })
    .then(data => {
      console.log('SUCCESS: Data received back from Apps Script:', data);
      alert('Data sent and confirmed by Apps Script! Check Apps Script logs.');
    })
    .catch(error => {
      console.error('ERROR: Failed to send data or receive valid response:', error);
      alert('Error sending data! Check your browser console and Apps Script logs.');
    });
  });
} else {
  console.error("Button with ID 'sendTestDataBtn' not found.");
}