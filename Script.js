document.addEventListener("DOMContentLoaded", function () {
    const recordBtn = document.getElementById("recordBtn");
    const output = document.getElementById("output");

    if (!('webkitSpeechRecognition' in window)) {
        output.textContent = "Your browser does not support speech recognition. Try using Chrome.";
        return;
    }

    const recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.lang = "en-US";
    recognition.interimResults = false;

    recordBtn.addEventListener("click", function () {
        output.textContent = "Listening...";
        recognition.start();
    });

    recognition.onresult = function (event) {
        const transcript = event.results[0][0].transcript;
        output.textContent = "You said: " + transcript;
    };

    recognition.onerror = function () {
        output.textContent = "Error occurred. Try again.";
    };
});
