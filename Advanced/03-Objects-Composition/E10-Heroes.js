function solve() {
     
        let heroes = {
            fighter: (name) => {
                let fighter = {
                    name,
                    health: 100, 
                    stamina: 100,
                    fight: () => {
                        console.log(`${name} slashes at the foe!`);
                        fighter.stamina --
                    }
                }
                return fighter;
            },
            mage: (name) => {
                let mage = {
                    name, 
                    health: 100, 
                    mana: 100, 
                    cast: (spell) => {
                        console.log(`${name} cast ${spell}`);
                        mage.mana --
                    }
                }
                return mage;
            }
        }
    
        return heroes;
    }
    
    let create = solve();
    const scorcher = create.mage("Scorcher");
    scorcher.cast("fireball")
    scorcher.cast("thunder")
    scorcher.cast("light")
    
    const scorcher2 = create.fighter("Scorcher 2");
    scorcher2.fight()
    
    console.log(scorcher2.stamina);
    console.log(scorcher.mana);
    
    