import { DioAccount } from "./DioAccount"
import { PeopleAccount } from "./PeopleAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  getLoan = (userAccount: PeopleAccount, value: number): void => {
    if (userAccount.validateStatus()) {
      userAccount.deposit(value)
    } else {
      console.log("Você não está autorizado a fazer este emprestimo")
    }
  }
}
