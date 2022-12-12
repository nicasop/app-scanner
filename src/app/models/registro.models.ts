export class Registro{
    public format: string;
    public icon?: string;
    public text: string;
    public type?: string;
    public create: Date;
    constructor(format: string, text: string){
        this.format = format;
        this.text = text;
        this.create = new Date();
        this.determinarTipo();
    }
    public determinarTipo(){
        const inicioTipo = this.text.substring(0,4);
        console.log("El tipo es",inicioTipo);
        switch(inicioTipo){
            case 'http':
                this.icon = 'earth-outline';
                this.type = 'http';
                break;
            case 'geo':
                this.icon = 'map-outline';
                this.type = 'geo';
                break;
            default:
                this.icon = 'hammer-outline';
                this.type = 'No reconocido';
                break;
        }
    }
}