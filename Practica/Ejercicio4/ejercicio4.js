function Alumno(nombre, apellidos, edad, ciudadDeNacimiento) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad=edad;
    this.ciudadDeNacimiento=ciudadDeNacimiento; 
  }

  const persona1 = new Alumno('Sergio','Perez', 24, 'Sevilla');
  const persona2 = new Alumno('Marta','Blancart',27, 'Córdoba');
  const persona3= new Alumno('Angela','Gómez', 27, 'Écija');
  const persona4 = new Alumno('Carmen','Castilla', 22, 'Málaga');

  var alumnos= new Array(persona1, persona2, persona3, persona4);
  
  function toStringAlumno(alumno){
    
    return 'Alumno:' + alumno.nombre+' '+alumno.apellidos+', '+ alumno.edad + ', '+ alumno.ciudadDeNacimiento+'.<br/>';
  }

  for(let i=0;i<alumnos.length;i++){
   document.write(toStringAlumno(alumnos[i]));
  }

