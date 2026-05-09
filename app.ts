import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

// const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
// console.log(`PeopleAccount Balance: ${peopleAccount.getBalance()}`)
// peopleAccount.deposit(2)
// console.log(`PeopleAccount Balance: ${peopleAccount.getBalance()}`)
// peopleAccount.withdraw(1)
// console.log(`PeopleAccount Balance: ${peopleAccount.getBalance()}`)




const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(`companyAccount Balance: ${companyAccount.getBalance()}`)
companyAccount.deposit(3)
console.log(`companyAccount Balance: ${companyAccount.getBalance()}`)
companyAccount.withdraw(2)
console.log(`companyAccount Balance: ${companyAccount.getBalance()}`)
