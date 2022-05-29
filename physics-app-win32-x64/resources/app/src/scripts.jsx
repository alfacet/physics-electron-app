const K = document.getElementById('K')
const L = document.getElementById('L')
const E = document.getElementById('E')
const TE = document.getElementById('TE')

const result = document.getElementById('result')

class Equations {
    constructor(cond_termica, lado, espessura, temp_externa) {
        this.cond_termica = cond_termica
        this.lado = lado
        this.espessura = espessura
        this.temp_externa = temp_externa
    }

    fluxoCalor() {
        let fluxo = this.cond_termica * 6 * Math.pow(this.lado, 2) * Math.abs(this.temp_externa - 25)
        fluxo = fluxo / this.espessura

        /*console.log(this.cond_termica);
        console.log(this.lado);
        console.log(this.temp_externa);
        console.log(this.espessura);*/

        return fluxo
    }

    resultadoWatt() {
        let watt = this.fluxoCalor() * 4.184
        
        return watt
    }
}

let potencia = new Equations(2, 2, 3, 25)
console.log(potencia.resultadoWatt())



function calculate() {
    /*let potencia = new Equations(K, L, E, TE);

    document.getElementById('result').innerHTML = JSON.stringify(potencia.resultadoWatt())*/

    let cond_termica = K.value
    let lado = L.value
    let espessura = E.value
    let temp_externa = TE.value

    let potencia = new Equations(cond_termica, lado, espessura, temp_externa)
    
    console.log(isNaN(potencia.resultadoWatt()))

    if (isNaN(potencia.resultadoWatt()) == false) {
        if (temp_externa == 25) 
            result.innerHTML = "Ops! A potência será de 0 W. A temperatura externa é a mesma que 25°C ;)"

        else if (temp_externa < 25) {
            if (potencia.resultadoWatt() < 1000) 
                result.innerHTML = `A potência necessária será de ${potencia.resultadoWatt().toFixed(1)} W`
                
            else result.innerHTML = `A potência necessária será de ${potencia.resultadoWatt().toFixed(1) / 1000} kW`
        }
        else result.innerHTML = "Erro: A temperatura externa está superior a 25°C!"
    }
        
    else result.innerHTML = "Erro: Insira os dados corretamente!"
}
