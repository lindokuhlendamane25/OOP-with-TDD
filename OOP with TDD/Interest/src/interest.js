class bankAccount {
   constructor(balance,intRate,monthlyFee) {
       this.balance = balance
       this.intRate = intRate
       this.monthlyFee = monthlyFee
       this.interest = 0
   }

   calculateInterest(){
      var result = this.balance * this.intRate/12
      this.interest = result
      return this.interest
   }

finalBalance(){
Account.calculateInterest();
var fBalance = this.balance + this.interest -this.monthlyFee
return fBalance
}
}


