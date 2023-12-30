class footballTeam {
    constructor(clubName, country) {
        Object.assign(this, {
            clubName,
            country,
        })
        this.invitedPlayers = [];
    }
    newAdditions(players) {
        let invited = [];
        for (const player of players) {
            let [name, age, playerValue] = player.split('/');
            age = Number(age);
            playerValue = Number(playerValue);
            if (!this.invitedPlayers.find(pl => pl.name === name)) {
                this.invitedPlayers.push({ name, age, playerValue});
                invited.push(name);
            } else {
                let ind = this.invitedPlayers.findIndex(pl => pl.name === name);
                if (this.invitedPlayers[ind].playerValue < playerValue) this.invitedPlayers[ind].playerValue = playerValue;
            }
        }

        return `You successfully invite ${invited.join(', ')}.`;
    }
    signContract(player) {
        let [name, offer] = player.split('/');
        offer = Number(offer);
    
        let existingPlayer = this.invitedPlayers.find(pl => pl.name === name);
        if (!existingPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
        if (existingPlayer.playerValue > offer) {
            let priceDifference = existingPlayer.playerValue - offer;
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`);
        }
        existingPlayer.playerValue = 'Bought';

        return `Congratulations! You sign a contract with ${name} for ${offer} million dollars.`;
    }
    ageLimit(name, age) {
        if (!this.invitedPlayers.find(pl => pl.name === name)) {
            throw new Error(`${name} is not invited to the selection list!`);
        } else {
            let ind = this.invitedPlayers.findIndex(pl => pl.name === name);
            if (this.invitedPlayers[ind].age < age) {
                let diff = age - this.invitedPlayers[ind].age;
                if (diff < 5) {
                    return `${name} will sign a contract for ${diff} years with ${this.clubName} in ${this.country}!`
                } else if (diff > 5) {
                    return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
                }
            } else {
                return `${name} is above age limit!`
            }
        }
    }
    transferWindowResult() {
        let output = 'Players list:';
        this.invitedPlayers.forEach(pl => output += `\nPlayer ${pl.name}-${pl.playerValue}`)

        return output;
    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Lionel Messi/60"));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.signContract("Barbukov/10"));

