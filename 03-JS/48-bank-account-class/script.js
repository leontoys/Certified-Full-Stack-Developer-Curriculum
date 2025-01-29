class BankAccount {
    constructor(){
        this.balance = 0
        this.transactions = []//{type:"deposit/withdraw",amount:}
    }
    //methods
    deposit(amount){
        if(amount > 0){
            const deposit = {type:"deposit",amount:amount}
            this.transactions.push(deposit)
            this.balance += amount
            return `Successfully deposited $${amount}. New balance: $${this.balance}`
        }
        else{
            return `Deposit amount must be greater than zero.`
        }
    }
    withdraw(amount){
        if(amount > 0 && amount <= this.balance){
            const withdraw = {type:"withdraw",amount:amount}
            this.transactions.push(withdraw)
            this.balance -= amount
            return `Successfully withdrew $${amount}. New balance: $${this.balance}`
        }
        else{
            return `Insufficient balance or invalid amount.`
        }
    }
    checkBalance(){
        return `Current balance: $${this.balance}`
    }
    listAllDeposits(){
        let str = "Deposits: "
        const deposits = []
        this.transactions.forEach(transaction => {
            if(transaction.type==="deposit"){
                //str += `${transaction.amount},`
                deposits.push(transaction.amount)
            }
        });
        str += deposits.join(",")
        return str
    }
    listAllWithdrawals(){
        let str = "Withdrawals: "
        const withdrawals = []
        this.transactions.forEach(transaction => {
            if(transaction.type==="withdraw"){
                //str += `${transaction.amount},`
                withdrawals.push(transaction.amount)
            }
        });
        str += withdrawals.join(",")
        return str
    }
}

const myAccount = new BankAccount()
myAccount.deposit(100)
myAccount.withdraw(100)
myAccount.deposit(100)
myAccount.withdraw(100)
myAccount.deposit(200)
console.log(myAccount.checkBalance())
console.log(myAccount.listAllDeposits())
console.log(myAccount.listAllWithdrawals())