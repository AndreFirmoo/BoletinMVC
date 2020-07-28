class BoletinView{
    constructor(elementoDom){
        this._elementoDOM = elementoDom
    }
    template(element){
        return `${element.boletin.map(boletins => {
            return `
            <tr id="InfoAluno">
                <td id="nome">${boletins.nome}</td>
                <td id="materia">${boletins.materia}</td>
                <td id="primeiro">${boletins.nota1}</td>
                <td id="segundo">${boletins.nota2}</td>
                <td id="terceiro">${boletins.nota3}</td>
                <td id="quarto">${boletins.nota4}</td>
                <td id="media" class="${boletins.passouDeAno}">${boletins.media.toFixed(2)}</td>
            </tr>`
        }).join("")}
        `
    }

    update(modelo){
        this._elementoDOM.innerHTML = this.template(modelo)
    }
}   