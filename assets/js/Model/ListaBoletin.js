class ListaBoletin{

    constructor(){
        this._boletins = []
    }

    adiciona(boletin){
        this._boletins.push(boletin)
        console.log(this._boletins.push(boletin));
        
    }

    get boletin(){
        return [].concat(this._boletins)
    }
}