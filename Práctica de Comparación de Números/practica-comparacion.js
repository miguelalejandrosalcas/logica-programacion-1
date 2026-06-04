let numero1 = parseInt(prompt("Digite un  número por favor"));
let numero2 = parseInt(prompt("Digite un  número por favor"));
let numero3 = parseInt(prompt("Digite un  número por favor"));

const formaAsc = document.getElementById("forma-asc");
const formaDesc = document.getElementById("forma-desc");
    
if (numero1 >= numero2 && numero2 >= numero3) {
    formaAsc.textContent = `De mayor a menor ${numero1}, ${numero2}, ${numero3}`;
    formaDesc.textContent = `De menor a mayor ${numero3}, ${numero2}, ${numero1}`;
} else if (numero3 >= numero2 && numero2 >= numero1){
    formaAsc.textContent = `De mayor a menor ${numero3}, ${numero2}, ${numero1}`;
    formaDesc.textContent = `De menor a mayor ${numero1}, ${numero2}, ${numero3}`;
} else if (numero2 >= numero1 && numero1 >= numero3){
    console.log(numero2, numero1, numero3);
    console.log(numero3, numero2, numero1);
    formaAsc.textContent = `De mayor a menor ${numero2}, ${numero1}, ${numero3}`;
    formaDesc.textContent = `De menor a mayor ${numero3}, ${numero1}, ${numero2}`;
}






