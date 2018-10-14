const input = document.querySelector('#input'),
  convertBtn = document.querySelector('.btn'),
  outputDiv = document.querySelector('.result-output');

convertBtn.addEventListener('click', convertUserInput);

function convertUserInput(e) {
  e.preventDefault();
  const romanNumberObj = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  const userInput = input.value;
  let html;
  if (isNaN(userInput)) {
    html = convertToInteger(romanNumberObj, userInput.toUpperCase());
  } else {
    html = convertToRoman(romanNumberObj, parseInt(userInput, 10));
  }

  !html
    ? ((document.querySelector('.warning').style.display = 'block'),
      (outputDiv.innerHTML = ''))
    : ((outputDiv.innerHTML = html),
      (document.querySelector('.warning').style.display = 'none'));
}

/**
 * @ desc Convert Number to Roman Numerals
 * @param {object} romNumObj
 * @param {Integer} num
 * @returns {string} Roman numerals representation of num
 */
function convertToRoman(romNumObj, num) {
  let roman = '';
  for (let key in romNumObj) {
    while (num >= romNumObj[key]) {
      roman += key;
      num -= romNumObj[key];
    }
  }
  return roman;
}

/**
 * @desc Convert Roman Numerals to Integer
 * @param {object} romNumObj
 * @param {string} rom
 * @returns {integer} Integer representation of rom
 */
function convertToInteger(romNumObj, rom) {
  let prep = 0,
    ans = 0;
  iterator = rom.length - 1;
  for (let i = iterator; i >= 0; i--) {
    const key = rom[i];
    if (romNumObj[key] >= prep) {
      ans += romNumObj[key];
      prep = romNumObj[key];
    } else {
      ans -= romNumObj[key];
      prep = romNumObj[key];
    }
  }
  return ans;
}
