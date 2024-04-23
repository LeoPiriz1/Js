function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  

  let personas = [
    new Persona("Juan", 15),
    new Persona("María", 18),
    new Persona("Pedro", 14),
    new Persona("Ana", 12),
    new Persona("Luis", 17),
    new Persona("Sofía", 11),
    new Persona("Diego", 16),
    new Persona("Carla", 13),
    new Persona("Mateo", 19),
    new Persona("Valentina", 20)
  ];
  
  
  let filtroEdad = parseInt(prompt("Ingrese la edad para filtrar personas (10 a 20 años) "));
  
  
  let personasFiltradas = personas.filter(persona => persona.edad === filtroEdad);
  
  
  if (personasFiltradas.length > 0) {
    
    let mensaje = "Personas encontradas con la edad " + filtroEdad + ":\n";
    personasFiltradas.forEach(persona => {
      mensaje += "- " + persona.nombre + "\n";
    });
    
    alert(mensaje);
  } else {
    alert("No se encontraron personas con la edad ingresada.");
  }
  
