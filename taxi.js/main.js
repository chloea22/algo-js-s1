let playlist = ["Anissa", "Mauvaise", "Benefice", "Scarface", "Colombes"]

    class Character {
        constructor(name, pv) {
            this.name = name
            this.pv = pv
        }
    
        trajet() {
            let nbChangementTaxi = 0
            let nbFeuxRouges = 0
    
            while (nbFeuxRouges < 30 && this.pv > 0) {
                nbFeuxRouges++
                let random = Math.floor(Math.random() * playlist.length)
                console.log(" Au feu rouge " + nbFeuxRouges + ", musique : " + playlist[random])
                
                if (playlist[random] === playlist[0]) {
                    this.pv -= 1;
                    nbChangementTaxi++
                    console.log(this.name + " change de taxi. ")
                }
    
                if (this.pv === 0) {
                    console.log(this.name + " explose. ")
                    break
                }
            }
    
            if (nbFeuxRouges === 30) {
                console.log(this.name + " est arrivé après " + nbChangementTaxi + " changements de taxi. Et " + this.pv + " pv restants ")
            }
        }
    }
    
    let John = new Character("John", 10)
    console.log(John)
    console.log(this.pv)
    John.trajet()