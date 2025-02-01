let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

const cash = document.getElementById("cash")
const changeDue = document.getElementById("change-due")
const purchaseBtn = document.getElementById("purchase-btn")

purchaseBtn.addEventListener("click",()=>{
    const cash_amount = Number(cash.value)
    const change_due_amount = Number(changeDue.innerText)

    //if the cash customer has is less than price
    if(cash_amount<=price){
        alert("Customer does not have enough money to purchase the item")
        return
    }
    //if its the same
    if(cash_amount===price){
        changeDue.innerText = "No change due - customer paid with exact cash"
        return
    }
    //for other cases
    let difference = cash_amount - price 
})