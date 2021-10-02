
function toCatch() {
    //creando el constructur
    function Persona(name, age, DNI, email) {
        this.name = name;
        this.age = age;
        this.DNI = DNI;
        this.email = email;
    }

    //capturando los inputs
    let catchName = document.getElementById("name").value;
    let catchAge = document.getElementById("age").value;
    let catchDNI = document.getElementById("DNI").value;
    let catchEmail = document.getElementById("email").value;


    //creando el objeto
    //no se declaro 'newPerson' la variable como tipo let ni var debido a que esperamos que su scope sea global
    newPerson = new Persona(catchName, catchAge, catchDNI, catchEmail)
    
    addTo();
}

// Desafio Arreglo de Objetos
let DataBase = [];

function addTo() {
    //se añade el objeto al array DataBase[]
    DataBase.push(newPerson);
    console.log(DataBase)
}
