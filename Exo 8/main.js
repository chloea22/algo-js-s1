class Pokemon {
    constructor(name, attack, defense, hp) {
      this.name = name
      this.attack = attack
      this.defense = defense
      this.hp = hp
    }
  
    attackPokemon(target) {
      let damage = this.attack - target.defense
      if (damage > 0) {
        target.hp -= damage
        return damage
      } else {
        return 0;
      }
    }
  }
  
    let pikachu = new Pokemon("Pikachu", 30, 75 , 5)
        console.log(pikachu)

    let kenji = new Pokemon("Kenji", 50, 35, 30)
        console.log(kenji)
  
    let degats = 15
    pikachu.hp -= degats

    let damagepikachutokenji = pikachu.attackPokemon(kenji)
        console.log(pikachu.name + " attack " + kenji.name)
        console.log(kenji.name + " a " + kenji.hp)

    if(kenji.hp < 0 ) {
        console.log(kenji.name + " est mort ")
    }

    let damagekenjitopikachu = kenji.attackPokemon(pikachu)
        console.log(kenji.name + " attaque " + pikachu.name)
        console.log(pikachu.name + "  a " + kenji.attack)

    if(pikachu.hp < 0 ) {
        console.log(pikachu.name + " est mort ")
    }
