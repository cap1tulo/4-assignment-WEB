function validateForm() {

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  let valid = true;
  
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("confirmPasswordError").textContent = "";

  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    valid = false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    valid = false;
  } else if (!email.match(emailPattern)) {
    document.getElementById("emailError").textContent = "Please enter a valid email address.";
    valid = false;
  }

  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters long.";
    valid = false;
  }

  if (confirmPassword !== password) {
    document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
    valid = false;
  }

  return valid;
}

 // To-do List
document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = taskText;
    listItem.className = "todo-li";

    const completeButton = document.createElement('button');
    completeButton.textContent = '✔️';
    completeButton.addEventListener('click', function() {
        listItem.classList.toggle('completed');
    });


    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);

    taskInput.value = '';
 });

});

// Number-Sorting
function sortNumbers(order) {
    const input = document.getElementById('numbers').value;
    const resultElement = document.getElementById('sortedResult');

    if (!/^[0-9,\s]+$/.test(input)) {
        resultElement.textContent = "please enter the numbers that is separated by commas.";
        return;
    }

    const numbersArray = input.split(',').map(Number);

    numbersArray.sort((a, b) => order === 'asc' ? a - b : b - a);

    resultElement.textContent = `Sorted Numbers (${order}): ${numbersArray.join(', ')}`;
}

// Change BG
document.addEventListener('DOMContentLoaded', function() {
     const colors = ['#FF5733', '#33FF57', '#3357FF', '#000000', '#FF8F33'];
     let colorIndex = 0;
    
     document.getElementById('colorBtn').addEventListener('click', function() {
     document.body.style.backgroundColor = colors[colorIndex];
     colorIndex = (colorIndex + 1) % colors.length;
     });
});

// Current Time

function formatDateTime() {
  const now = new Date();

  const options = {
      month: 'long',   
      day: 'numeric', 
      year: 'numeric', 
      hour: 'numeric', 
      minute: 'numeric', 
      second: 'numeric', 
      hour12: true    
  };

  const formattedDate = now.toLocaleString('en-US', options);

  return formattedDate;
}

function updateDateTime() {
  const dateTimeDisplay = document.getElementById('dateTimeDisplay');
  dateTimeDisplay.textContent = formatDateTime();
}

setInterval(updateDateTime, 1000);

updateDateTime();

// Guess Game
function startGame() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;
  let guess = 0;

  while (guess !== randomNumber) {
      guess = parseInt(prompt("Угадай число от 1 до 100: "), 10);
      attempts++;

      if (isNaN(guess)) {
          alert("Введите действительное число!");
      } else if (guess > randomNumber) {
          alert("Слишком много! Попробуй снова.");
      } else if (guess < randomNumber) {
          alert("Слишком мало! Попробуй снова.");
      } else {
          alert(`Поздравляем! Вы угадали число ${randomNumber} за ${attempts} попыток!`);
      }
  }
}