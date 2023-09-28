class pokemon {
    constructor(name, attack, defense, hp, luck){
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
    }
 }


let pikachu = new pokemon ("Pikachu", 120, 300, 20) 
        console.log(pikachu)


let kenji = new pokemon ("Kenji", 210, 150 , 40)
        console.log(kenji)


while(pikachu.hp > 0 || kenji.hp > 0) {
    attackPokemon = pikachu.attack - kenji.defense
        kenji.hp -= attackPokemon

        if (kenji.hp < 0) {
            console.log("Kenji est mort.")
            break
        } else {
            console.log( kenji.name + " a " + kenji.hp + " hp ")
        }


    attackPokemon = kenji.attack - pikachu.defense
        pikachu.hp -= attackPokemon

        if (pikachu.hp < 0) {
           console.log("Pikachu est mort.")
            break
        } else {
            console.log( pikachu.name + " a " + pikachu.hp + " hp ")
        }

}