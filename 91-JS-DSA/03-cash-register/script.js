let price = 19.5;
let cid = [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
];
const cash = document.getElementById("cash");
const changeDue = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");
let cid_total = 0.0;

const clear = () => {
  changeDue.innerText = "";
};

purchaseBtn.addEventListener("click", () => {
  clear();

  const cash_amount = parseFloat(cash.value);
  const change_due_amount = parseFloat(changeDue.innerText);
  //console.log("cash_amount", cash_amount);
  //console.log("change_due_amount", change_due_amount);
  price = parseFloat(price);
  //console.log("price", price);

  //if its the same
  if (cash_amount === price) {
    changeDue.innerText = "No change due - customer paid with exact cash";
    return;
  }
  //if the cash customer has is less than price
  if (cash_amount <= price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }

  //for other cases
  const cidObj = cidToObj();
  //console.log("cidObj", cidObj);
  //console.log("cid_total", parseFloat(cid_total));

  //console.log("price", price);
  let difference = parseFloat(cash_amount - price);
  //console.log("difference", difference);

  let str = "";
  for (const [key, value] of Object.entries(cidObj)) {
    //console.log(`${key}: ${value.value} ${value.total} ${value.number}`);
    //only if the difference is greater than or equal to the amount
    if (!difference >= value.value || value.value == 0) {
      continue;
    }
    //how many of this denominations we will need?
    let needed = Math.floor(difference / value.value);
    //console.log("difference", difference);
    //console.log("needed", needed);
    //console.log("value-number", value.number);
    //do we have enough?
    let paid = value.number > needed ? needed : value.number;
    //console.log("paid", paid);
    //console.log("value", value.value);
    let paid_amount = paid * value.value;
    //console.log("paid_amount", paid_amount);
    //reduce the amount paid
    difference = difference - paid_amount;
    difference = parseFloat(difference.toFixed(2));
    //reduce that amount from drawer
    cid_total = cid_total - paid_amount;
    cidObj[key]["paid"] = paid;
    //if we paid
    if (paid) {
      str += ` ${key}: $${paid_amount}`;
    }
    //paid all due
    if (difference === 0) {
      break;
    }
  }

  //console.log("cidObj--paid", cidObj);
  //console.log("cidtotal--paid", cid_total);

  //console.log("str", str);
  if (cid_total > 0) {
    changeDue.innerText = "Status: OPEN" + str;
  } else if (cid_total < 0 || difference > 0) {
    changeDue.innerText = "Status: INSUFFICIENT_FUNDS";
  } else {
    changeDue.innerText = "Status: CLOSED" + str;
  }
  console.log("changeDue.innerText",changeDue.innerText)
});

//convert cid to object for easier handling
const cidToObj = () => {
  let cidObj = {};
  cid.toReversed().forEach((element) => {
    cid_total = cid_total + parseFloat(element[1]);
    switch (element[0]) {
      case "PENNY":
        cidObj[element[0]] = {
          value: 0.01,
          total: element[1],
          number: Math.round(element[1] / 0.01),
        };
        break;
      case "NICKEL":
        cidObj[element[0]] = {
          value: 0.05,
          total: element[1],
          number: Math.round(element[1] / 0.05),
        };
        break;
      case "DIME":
        cidObj[element[0]] = {
          value: 0.1,
          total: element[1],
          number: Math.round(element[1] / 0.1),
        };
        break;
      case "QUARTER":
        cidObj[element[0]] = {
          value: 0.25,
          total: element[1],
          number: Math.round(element[1] / 0.25),
        };
        break;
      case "ONE":
        cidObj[element[0]] = {
          value: 1,
          total: element[1],
          number: Math.round(element[1] / 1),
        };
        break;
      case "FIVE":
        cidObj[element[0]] = {
          value: 5,
          total: element[1],
          number: Math.round(element[1] / 5),
        };
        break;
      case "TEN":
        cidObj[element[0]] = {
          value: 10,
          total: element[1],
          number: Math.round(element[1] / 10),
        };
        break;
      case "TWENTY":
        cidObj[element[0]] = {
          value: 20,
          total: element[1],
          number: Math.round(element[1] / 20),
        };
        break;
      case "ONE HUNDRED":
        cidObj[element[0]] = {
          value: 100,
          total: element[1],
          number: Math.round(element[1] / 100),
        };
        break;

      default:
        break;
    }
  });
  return cidObj;
};
