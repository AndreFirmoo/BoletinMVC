class BoletinController {
    constructor(){
        this._inputNome = document.querySelector('#nomeAluno')
        this._inputMateria = document.querySelector('#materiaAluno')
        this._inputNota1 = document.querySelector('#primeiroNota')
        this._inputNota2 = document.querySelector('#segundoNota')
        this._inputNota3 = document.querySelector('#terceiroNota')
        this._inputNota4 = document.querySelector('#quartoNota')
        this._tabela = document.querySelector('#tabela')
        this._template = new BoletinView(this._tabela)
        this._listaBoletin = new ListaBoletin()
    }

    mandarView(event){
        event.preventDefault()
        this._listaBoletin.adiciona(this.criarAluno())
        this._template.update(this._listaBoletin)
    }


    criarAluno(){
        return new BoletinModel(this._inputNome.value,
                                this._inputMateria.value,
                                this._inputNota1.value,
                                this._inputNota2.value,
                                this._inputNota3.value,
                                this._inputNota4.value)
    }
}