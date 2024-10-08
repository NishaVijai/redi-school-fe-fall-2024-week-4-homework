console.log("Week 4 - Homework");

// Hand-in assignment
// A. Create a counter
// a. Should start at 0
// b. Make a function to increase the counter
// c. Make a function to decrease the counter
// d. Number should increase when hitting ‘+ʼ
// e. Number should decrease when hitting ‘-ʼ
// B. Bonus: Add a reset button to set counter to 0

const mainElement = document.querySelector("main");
const createNewOuterDivElement = document.createElement("div");
mainElement.appendChild(createNewOuterDivElement);

const createFirstInnerDivElement = document.createElement("div");
createNewOuterDivElement.appendChild(createFirstInnerDivElement);

const createSecondInnerDivElement = document.createElement("div");

createNewOuterDivElement.classList.add("div_outer_container", "flex-container");
createFirstInnerDivElement.classList.add("div_first_inner_container", "flex-container");
createSecondInnerDivElement.classList.add("div_second_inner_container", "flex-container");

const createPElementToDisplayResult = document.createElement("p");
createPElementToDisplayResult.classList.add("display_result", "flex-container");

const createPlusButton = document.createElement("button");
const createMinusButton = document.createElement("button");
const createResetButton = document.createElement("button");

createFirstInnerDivElement.appendChild(createPElementToDisplayResult);

createFirstInnerDivElement.appendChild(createSecondInnerDivElement);
createSecondInnerDivElement.appendChild(createPlusButton);
createSecondInnerDivElement.appendChild(createMinusButton);
createSecondInnerDivElement.appendChild(createResetButton);

let displayValue = 0;

createPElementToDisplayResult.textContent = `${displayValue}`;
createPlusButton.textContent = "+";
createMinusButton.textContent = "-";
createResetButton.textContent = "Reset";

const updateDisplayCountValue = () => createPElementToDisplayResult.textContent = displayValue;

const resetDisplayCountValue = () => createPElementToDisplayResult.textContent = 0;

// Example: Regular Function
// function addCountValue(num) {
//   displayValue += num;
// // num++;
//   updateDisplayCountValue();
// };

const addCountValue = (num) => {
  displayValue += num;
  updateDisplayCountValue();
};

const subtractCountValue = (num) => {
  displayValue -= num;
  updateDisplayCountValue();
};

createPlusButton.addEventListener("click", () => { addCountValue(1); }, false);

// Example: Different argument (adding by 3)
// createPlusButton.addEventListener("click", () => { addCountValue(3); }, false);

// Example: addEventListener
// createPlusButton.addEventListener("click", () => {
//   displayValue++;
//   updateDisplayCountValue();
// });

createMinusButton.addEventListener("click", () => { subtractCountValue(1); }, false);
createResetButton.addEventListener("click", () => { resetDisplayCountValue(); }, false);
