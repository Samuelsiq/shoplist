export class Recipe{
    public name: string | undefined;
    public description: string | undefined;
    public imagPath: string | undefined;
    
    constructor(name: string, desc:string, imagPath: string){
        this.name = name;
        this.description = desc;
        this.imagPath = imagPath;
        
    }

}