class Form{
    constructor(){
        this.title=createElement("h1");
        this.nombre=createElement("h3");
        this.apellido=createElement("h3")
        this.telefono=createElement("h3")
        this.genero=createElement("h3")
        this.input = createInput();
        this.inputA = createInput();
        this.inputT = createInput();
        this.inputG = createInput();
        this.button = createButton("Registrarse");
    }
    display(){
        this.title.html("Registro de persona");
        this.title.position(130,0);
        this.nombre.html("Nombre:");
        this.nombre.position(130,100);
        this.apellido.html("Apellido:");
        this.apellido.position(130,230);
        this.telefono.html("Telefono:");
        this.telefono.position(130,370);
        this.genero.html("Genero:");
        this.genero.position(130,490);


        this.input.position(130,140);
        this.inputA.position(130,270);
        this.inputT.position(130,410);
        this.inputG.position(130,530);
        this.button.position(350,600);
        
        this.button.mousePressed(()=>{
            persona.nombre=this.input.value();
            persona.apellido=this.inputA.value();
            persona.telefono=this.inputT.value();
            persona.genero=this.inputG.value();
            persona.update();
        })
    }
}