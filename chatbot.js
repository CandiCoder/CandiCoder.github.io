// Responses database
const responses = {
    "hello": "Hi there! How can I help you today?",
    "how are you": "I'm just a bot, but I'm doing great! How about you?",
    "bye": "Goodbye! Have a great day!",
    "default": "I'm not sure how to respond to that."
};

// Function to process user input
function getBotResponse(input) {
    input = input.toLowerCase();
    return responses[input] || responses["default"];
}

// Add a message to the chatbox
function addMessage(message, sender) {
    const messagesDiv = document.getElementById("messages");
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${sender}`;
    messageDiv.textContent = message;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to the bottom
}

// Handle user input
function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    if (userInput.trim() === "") return; // Ignore empty input

    // Display user message
    addMessage(userInput, "user");

    // Get and display bot response
    const botResponse = getBotResponse(userInput);
    setTimeout(() => addMessage(botResponse, "bot"), 500);

    // Clear input field
    document.getElementById("userInput").value = "";
}
