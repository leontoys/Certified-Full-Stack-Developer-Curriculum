const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const convert = (input) => {
  //console.log("input",input)  

  let arabic = "";

  const thousand = Math.floor(input / 1000);
  //console.log("M",thousand)
  let remainder = input % 1000;
  //console.log("remainder",remainder)
  let hundred = Math.floor(remainder / 100);
  //console.log("C",hundred)
  remainder = remainder % 100;
  //console.log("remainder",remainder)
  let ten = Math.floor(remainder / 10);
  //console.log("X",ten)
  let unit = remainder % 10;
  //console.log("I",unit)
  let difference = "";
  let unit_string = "";
  let ten_string = "";
  let hundred_string = "";
  let thousand_string = "";

  //focus on what you know
  // units
  if (unit < 4) {
    unit_string = `${"I".repeat(unit)}`;
  } else if (unit === 4) {
    unit_string = `IV`;
  } else if (unit < 9) {
    difference = unit - 5;
    unit_string = `V${"I".repeat(difference)}`;
  } else if (unit === 9) {
    unit_string = `IX`;
  }

  //tens
  if (ten < 4) {
    ten_string = `${"X".repeat(ten)}`;
  } else if (ten === 4) {
    ten_string = `XL`;
  } else if (ten < 9) {
    difference = ten - 5;
    ten_string = `L${"X".repeat(difference)}`;
  } else if (ten === 9) {
    ten_string = `XC`;
  }

  //hundreds
  if (hundred < 4) {
    hundred_string = `${"C".repeat(hundred)}`;
  } else if (hundred === 4) {
    hundred_string = `CD`;
  } else if (hundred < 9) {
    difference = hundred - 5;
    hundred_string = `D${"C".repeat(difference)}`;
  } else if (hundred === 9) {
    hundred_string = `CM`;
  }

  if (thousand > 0) {
    //if there is something in the thousand place
    thousand_string = `${"M".repeat(thousand)}`;
  }

  arabic = `${thousand_string}${hundred_string}${ten_string}${unit_string}`;

  //console.log("arabic", arabic);
  return arabic;
};

//event listener
convertBtn.addEventListener("click", () => {
  const input = Number(number.value) 
  console.log("input",input) 
  if (!input) {
    output.innerText = "Please enter a valid number";
    return;
  }
  if (input < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
    return
  }
  if (input >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return
  }
  output.innerText = convert(input);
});

convert(9);
convert(16);
convert(649);
convert(1023);
convert(3999);
