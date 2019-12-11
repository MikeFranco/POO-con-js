class Persona{
  
  constructor(NSS=this.generarNSS(), nombre='', edad=0, sexo='H', peso=0, altura=0){
    this.NSS = NSS;
    this.nombre = nombre;
    this.edad = edad;
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
      : IMC >= 20 && IMC < 25
      ? 0
      : 1
  }

  calcularIMCMujer(IMC){
    return IMC < 19
      ? -1
      : IMC >= 19 && IMC < 24
      ? 0
      : 1
  }

  esMayorDeEdad(){
    return this.edad >= 18;
  }

  comprobarSexo(sexo){
    return sexo === 'H' || sexo === 'M';
  }

  generarNSS(){
    return Math.random().toString(36).substr(2, 8);
  }

  setNuevoValor(llave, valor){
    this[llave] = valor;
  }

  toString(){
    return `Hola, mi nombre es ${this.nombre || undefined}, tengo ${this.edad}. Mi sexo es ${this.sexo}, peso ${this.peso} y mido ${this.altura}`
  }

}

const yo = new Persona();
console.log(yo.toString());