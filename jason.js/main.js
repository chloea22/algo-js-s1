class tueur {
    constructor(name, pv) {
        this.name = name
        this.pv = pv
    }
}


let prenoms = ["chloe", "maria", "rayan", "woury", "benjamin"]


class Character {
    constructor(name) {
        this.name = name
    }
}


let Jason = new tueur("Jason", 100)
console.log(Jason)


let Nerd = new Character("Nerd")
console.log(Nerd)

let Sportif = new Character("Sportif")
console.log(Sportif)

let Blonde = new Character("Blonde")
console.log(Blonde) 


if (Jason.pv <= 0) {
    console.log(" Les survivants ont gagnés et Jason est mort. ")
} else {
    console.log(" Jason a tué tous les survivants. ")
}