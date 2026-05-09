export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.balance += value
      console.log('Voce depositou')
    }
  }

  withdraw = (value: number): void => {
    if (this.validateStatus()) {
      if (this.getBalance() >= value) {
        this.balance -= value
        console.log(`Você sacou R$${value} da sua conta`)
      } else {
        console.log("Você não tem saldo suficiente para fazer este saque!")
      }
    } else {
      console.log("Você não está autorizado á fazer este saque!")
    }
  }

  getBalance = (): number => {
    return this.balance;
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
