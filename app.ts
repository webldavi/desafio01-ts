import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SpecialAccount } from './class/SpecialAccount'


console.log("------------------------------------------------------------------")
console.log("-------------------------PEOPLE ACCOUNT---------------------------")
console.log("------------------------------------------------------------------")
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(`PeopleAccount Balance: ${peopleAccount.getBalance()}`)
peopleAccount.deposit(2)
console.log(`PeopleAccount Balance: ${peopleAccount.getBalance()}`)
peopleAccount.withdraw(1)
console.log(`PeopleAccount Balance: ${peopleAccount.getBalance()}`)
peopleAccount.getName()



console.log("------------------------------------------------------------------")
console.log("-------------------------COMPANY ACCOUNT---------------------------")
console.log("------------------------------------------------------------------")
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(`companyAccount Balance: ${companyAccount.getBalance()}`)
companyAccount.deposit(2)
console.log(`companyAccount Balance: ${companyAccount.getBalance()}`)
companyAccount.withdraw(1)
console.log(`companyAccount Balance: ${companyAccount.getBalance()}`)
companyAccount.getName()
companyAccount.getLoan(peopleAccount, 10)



console.log("------------------------------------------------------------------")
console.log("-------------------------SPECIAL ACCOUNT--------------------------")
console.log("------------------------------------------------------------------")
const specialAccount = new SpecialAccount(2, "Luis", 55);
console.log(`specialAccount Balance: ${specialAccount.getBalance()}`)
specialAccount.deposit(2)
console.log(`specialAccount Balance: ${specialAccount.getBalance()}`)
specialAccount.withdraw(1)
console.log(`specialAccount Balance: ${specialAccount.getBalance()}`)
specialAccount.getName()
specialAccount.ExtraDeposit(1);
console.log(`specialAccount Balance: ${specialAccount.getBalance()}`)