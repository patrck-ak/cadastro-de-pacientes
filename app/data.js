export class Database {
  #pacientes = new Map()


  list() {
    return this.#pacientes.values()
  }

  create(nome, email, cpf) {
    const id = randomUUID()

    this.#pacientes.set(id, nome, email, cpf)
  }

  delete(id) {
    this.#pacientes.delete(id)
  }

}