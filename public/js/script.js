function sendMessage() {
    // Get user input
    const userInput = document.getElementById("user-input").value;

    console.log(userInput)

    // Clear the input field
    document.getElementById("user-input").value = "";

    // Display user message
    appendMessage("User", userInput);

    // Get chatbot response
    const response = chatbotResponse(userInput);

    // Display chatbot response
    appendMessage("Chatbot", response);
}
function autoresize(){
    const textarea = document.getElementById('user-input');
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
    var height = textarea.style.height;
    height = height.split(0);
    if (height > '200px'){
        document.getElementById("user-input").style.overflowY = "scroll";
    }
}

function sendhighlight() {
    const textarea = document.getElementById('user-input');
    const sendBtn = document.getElementById('send');
    if (textarea.value.trim() !== '') {
        sendBtn.disabled = false;
    } else {
        sendBtn.disabled = true;
    }
}


// Chatbot logic
function chatbotResponse(userInput) {
    userInput = userInput.toLowerCase();

    if (userInput === "hello") {
        return "Oh, hey there! Finally, someone interesting!";
    } else if (userInput === "how are you?") {
        return "I'm a bunch of code, so... always perfect!";
    } else if (userInput === "what's your name?") {
        return "I'm the genius you never knew you needed! my name is   S.T.A.R.C";
    } else if (userInput === "tell me a joke") {
        return "Why don't programmers like nature? It has too many bugs!";
    } else if (userInput === "goodbye") {
        return "Oh, you're leaving already? Typical.";
    } else {
        return "Really? You expect me to know everything? Try again, sir.";
    }
}

// Function to append message to chatbox
function appendMessage(sender, message) {
    const messageContainer = document.getElementById("messages");

    // Create a new div for the message
    const messageDiv = document.createElement("div");

    // Add content and class based on sender
    if (sender === "User") {
        messageDiv.classList.add("user-message");
        messageDiv.textContent = `You: ${message}`;
    } else {
        messageDiv.classList.add("chatbot-message");
        messageDiv.textContent = `S.T.A.R.C : ${message}`;
    }

    // Append the message to the messages div
    messageContainer.appendChild(messageDiv);

    // Scroll to the bottom to show the latest message
    messageContainer.scrollTop = messageContainer.scrollHeight;
}
