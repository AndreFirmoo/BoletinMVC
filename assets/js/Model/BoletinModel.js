class BoletinModel{
    constructor(nome, materia, nota1, nota2, nota3, nota4){
        this._nome = nome
        this._materia = materia
        this._nota1 = nota1
        this._nota2 = nota2
        this._nota3 = nota3
        this._nota4 = nota4
    }
    get nome() {
        return this._nome
    }
    get materia() {
        return this._materia
    }
    get nota1() {
        return this._nota1
    }
    get nota2() {
        return this._nota2
    }
    get nota3() {
        return this._nota3
    }
    get nota4() {
        return this._nota4
    }
    get media() {
        return (parseInt(this.nota1) + parseInt(this.nota2) + parseInt(this.nota3) + parseInt(this.nota4)) / 4
    }

    get passouDeAno(){
        if (this.media > 5 ){
            return "aprovado"
        }
        else {
            return "reprovado"
        }
    }

}
