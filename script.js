let screen = document.getElementById('result');

function inputValue(value) {
  screen.value += value;
}

function clearScreen() {
  screen.value = '';
}

function deleteDigit() {
  screen.value = screen.value.slice(0, -1);
}

function calculate() {
  try {
    screen.value = eval(screen.value);
  } catch (error) {
    alert("Invalid Input");
  }
}
