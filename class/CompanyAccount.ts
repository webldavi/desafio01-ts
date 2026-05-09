import { DioAccount } from "./DioAccount"
import { PeopleAccount } from "./PeopleAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  getLoan = (userAccount: PeopleAccount, value: number): void => {
    try {
      userAccount.deposit(value)
    } catch (error) {
      console.log("Você não tem autorização para fazer emprestimos")
    }
  }
}
