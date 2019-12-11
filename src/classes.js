class Persona{
  /* 
  ? Por defecto, todos los atributos menos el NSS serán valores por defecto según
  ? su tipo (0 números, cadena vacía para String, etc.). Sexo será hombre por defecto,
  ? usa una constante para ello.
  */
  nombre = ''
  edad = 0
  
  constructor(nombre='', edad=0, NSS, sexo='H', peso=0, altura=0){
    this.nombre = nombre;
    this.edad = edad;
    this.NSS = NSS;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
  }
 
  calcularIMC(){
    const IMC = this.peso / Math.pow(this.altura, 2);
    return this.sexo === 'H'
      ? this.calcularIMCHombre(IMC)
      : this.calcularIMCMujer(IMC)
  }

  calcularIMCHombre(IMC){
    return IMC < 20
      ? -1
      : IMC >= 20 || IMC < 25
      ? 0
      : 1
  }

  calcularIMCMujer(IMC){
    return IMC < 19
      ? -1
      : IMC >= 19 || IMC < 24
      ? 0
      : 1
  }

  //*Métodos set de cada parámetro, excepto de NSS.

 //*esMayorDeEdad(): indica si es mayor de edad, devuelve un booleano. 
  esMayorDeEdad(){
    this.edad >= 18 ? true : false;
  }

  //*comprobarSexo(char  sexo):  comprueba  que  el  sexo  introducido  es  correcto. 
  //Devolver  el  valor  en booleano. No será visible al exterior.
  comprobarSexo(sexo){
    return sexo === 'H' || sexo === 'M' ? true : false;
  }

  /*
  *generaNSS(): genera una expresión de 8 caracteres con números y letras al azar.
    Este método será invocado cuando se construya el objeto.
    Puedes dividir el método en partes para que te sea más fácil.
    No será visible al exterior.  */
  generarNSS(){
    
  }

  //*toString(): devuelve toda la información del objeto.
  toString(){

  }

}
