

class PageElements {
    public name:string;
    public document:string;
    public email:string;
    
    constructor (
        name: string,
        document: string,
        email: string
        ){

        this.name = name;
        this.document = document;
        this.email = email;

    }

    public getID(id:string){
        let element = window.document.getElementById(id);
        return element;
    }
}

