const output = document.getElementById("output");

const romanValues = [1000, 500, 100, 50, 10, 5, 1];
const specialRomanValues = [900, 400, 90, 40, 9, 4];

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    convertToRoman();
  }
});

function convertToRoman() {
  let number = Number(document.getElementById("number").value);
  const valuesArray = [];
  let romanChar = null;

  if (!number || number < 0 || number > 3999) {
    output.textContent = displayError(number);
    output.classList.add("error");
  } else {
    while (number !== 0) {
      romanValues.forEach((value) => {
        while (Math.sign(number - value) !== -1) {
          if (
            specialRomanValues.includes(Number(number.toString().split("")[0]))
          ) {
            for (const specialValue of specialRomanValues) {
              if (number >= specialValue) {
                switch (specialValue) {
                  case 900:
                    romanChar = "CM";
                    break;
                  case 400:
                    romanChar = "CD";
                    break;
                  case 90:
                    romanChar = "XC";
                    break;
                  case 40:
                    romanChar = "XL";
                    break;
                  case 9:
                    romanChar = "IX";
                    break;
                  case 4:
                    romanChar = "IV";
                    break;
                }
                number -= specialValue;
                break;
              }
            }
          } else {
            switch (value) {
              case 1000:
                romanChar = "M";
                break;
              case 500:
                romanChar = "D";
                break;
              case 100:
                romanChar = "C";
                break;
              case 50:
                romanChar = "L";
                break;
              case 10:
                romanChar = "X";
                break;
              case 5:
                romanChar = "V";
                break;
              case 1:
                romanChar = "I";
                break;
            }
            number -= value;
          }
          valuesArray.push(romanChar);
        }
      });
    }

    const romanNumber = valuesArray.join("");

    output.textContent = romanNumber;
    output.classList.remove("error");
  }
  output.classList.remove("hidden");
}

function displayError(invalidNumber) {
  if (invalidNumber === 0) {
    return "Please enter a valid number";
  } else if (invalidNumber < 0) {
    return "Please enter a number greater than or equal to 1";
  } else if (invalidNumber > 3999) {
    return "Please enter a number less than or equal to 3999";
  }
}
