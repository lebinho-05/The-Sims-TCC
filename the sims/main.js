// página

title = document.querySelector("title")
body = document.querySelector("body")
cab = document.querySelector("header")
textoCab = document.querySelector("header > label")
pag = document.querySelector("main")
style = document.querySelector("style")

// variáveis

page = null

cardsNomes = [

    "simom",

]

cardsGenero = {

    simom: "o",
    alice: "a"

}

cardsImgsAlts = {

    simom: "homem sério de cabelos e olhos pretos com bigode de pontas enroladas",
    alice: "mulher sorridente de óculos verdes e cabelos ruivos cacheados com brincos dourados"

}

// classe para controlar o CSS da página

class Page {

    _refresh() {

        this.pageCSS = `

            body{

                ${this.bodyCSS}

            }

            header{

                ${this.headerCSS}

                label > {
                
                    ${this.headerLabelCSS}

                }
                
            }

            main{

                ${this.mainCSS}

            }

        ` 

    }

    constructor() {

        this.bodyCSS = `

            margin: 0px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 90vh;

        `

        this.headerLabelCSS = `
        
            font-size: 25px;
        
        `

        this.headerCSS = `
        
            display: flex;
            align-items: center;
            justify-content: center;
            height: 15%;
            width: 85%;
        
        `

        this.mainCSS = `
        
            display: flex;
            align-items: center;
            justify-content: space-around;
            height: 85%;
            width: 85%;
            border: 3px solid black;
            padding: 1%;

            > article{

                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                border: 3px solid black;
                width: 13.5%;
                height: 60%;
                padding: 1.5%;

                > h1{

                    font-size: 30px;

                }

                > img{

                    height: 60%;

                }

                > div {

                    display: flex;
                    align-items: center;
                    justify-content: space-evenly;
                    height: 20%;
                    width: 100%;

                    > button{

                        border-radius: 5px;
                        width: 70%;
                        height: 70%;
                        cursor: pointer;
            
                    }

                }

            }

        `

        this._refresh()

    }

    game() {
        
        this.mainCSS += `
        
            background-color: #c5c5c5;   
       
        `

        this.bodyCSS += `
        
            background-color: grey;
        
        `

        this._refresh()

    }

}

// classe para controlar o player

class Player {

    constructor(nome) {

        this.data = {

            nome: nome,
            saude: 100,
            inteligencia: 45,
            habilidade_para_cozinhar: 35,
            aparencia: 55,
            higiene: 100,
            fome: 100,
            energia: 100

        }

        

    }

    get nome() {

        return this.data[nome]

    }

    get saude() {

        return this.data[saude]

    }

    get inteligencia() {

        return this.data[inteligencia]

    }

    get habilidade_para_cozinhar() {

        return this.data[habilidade_para_cozinhar]

    }

    get aparencia() {

        return this.data[aparencia]

    }

    get higiene() {

        return this.data[higiene]

    }

    get fome() {

        return this.data[fome]

    }

    get energia() {

        return this.data[energia]

    }

    set nome(value) {

        this.data[nome] = value

    }

    set saude(value) {

        if ((value < 100)) {

            this.data[saude] = value

        }
    
    }

    set inteligencia(value) {

        if ((value < 100)) {

            this.data[inteligencia] = value

        }

    }

    set habilidade_para_cozinhar(value) {

        if ((value < 100)) {

            this.data[habilidade_para_cozinhar] = value

        }

    }

    set aparencia(value) {

        if ((value < 100)) {

            this.data[aparencia] = value

        }

    }

    set higiene(value) {

        if ((value < 100)) {

            this.data[higiene] = value

        }

    }

    set fome(value) {

        if ((value < 100)) {

            this.data[fome] = value

        }

    }

    cozinhar(value) {

       if (this.habilidade_para_cozinhar >= 65) {

            if (random(65)) {

                fogo()

            } else {

                this.fome = (+value)
                this.higiene = (-3)
                this.saude = (Number.parseInt((+value)/2))
                this.habilidade_para_cozinhar = (+3)

            }

        } else {

        
            if (random(40)) {

                fogo()

            } else {

                this.fome = (+value)
                this.higiene = (-5)
                this.saude = (Number.parseInt((+value)/2))
                this.habilidade_para_cozinhar = (+5)

            }

        }

    }

    lavar(value) {

        this.higiene = (+value)
        this.saude = (Number.parseInt((+value)/2))
 
    }

}

// funções

function random(value) {

    return (Math.random() >= (value / 100))

}

function fogo() {
    
    title.innerHTML = "Apague o fogo!!"
    textoCab.textContent = "Sua Casa Está Pegando Fogo!!"

}

function escolher(nome) {
    
    console.log(`${nome} escolhid${cardsGenero[nome]}`)
    player = (new Player(nome))
    page.game()
    

    title.innerHTML = `The Sims - ${nome}`
    textoCab.innerHTML = ""
    pag.innerHTML = ""
    style.textContent = page.pageCSS

}

function start() {

    page = (new Page())
    cardInnerHTML = ""

    for (nome in cardsNomes){

        cardInnerHTML += `

            <article id="card-${cardsNomes[nome]}">
                
                <h1>${cardsNomes[nome]}</h1>
                <img src="src/${cardsNomes[nome]}.png" alt="${cardsImgsAlts[cardsNomes[nome]]}">
                <div>
                    <button id="btn-${cardsNomes[nome]}"> Jogue com ${cardsGenero[cardsNomes[nome]]} ${cardsNomes[nome]} </button>
                </div>

            </article>

        `

    }

    title.innerHTML = "Escolha Seu Personagem"

    textoCab.innerHTML = `

     <h1>Escolha Seu Personagem</h1>

    `

    pag.innerHTML = cardInnerHTML

    style.textContent = page.pageCSS
    
}

// criação da página

start()

for (nome in cardsNomes){

    btn = document.getElementById(`btn-${cardsNomes[nome]}`)
    btn.addEventListener("click", () => escolher(cardsNomes[nome]))
    console.log(cardsNomes[nome])

}