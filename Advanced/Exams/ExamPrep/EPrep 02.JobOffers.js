
class JobOffers {
    constructor(employer, position) {
        Object.assign(this, {
            employer,
            position,
            jobCandidates: []
        })
    }
    jobApplication(candidates) {
        console.log(candidates);
        let added = [];
        candidates.forEach(candidate => {
            let [name, education, yearsExperience] = candidate.split('-');
            yearsExperience = Number(yearsExperience);
            const employee = this.jobCandidates.find(obj => obj.name === name);
            if (employee) {
                if (employee.yearsExperience < yearsExperience) employee.yearsExperience = yearsExperience;
            } else {
                this.jobCandidates.push({ name, education, yearsExperience });
            }
            added.push(name);
        })
        return `You successfully added candidates: ${[...new Set(added)].join(', ')}.`;
    }
    jobOffer(chosen) {
        let [name, minimalExperience] = chosen.split('-');
        minimalExperience = Number(minimalExperience);
        const employee = this.jobCandidates.find(obj => obj.name === name);
        if (!employee) {
            throw new Error(`${name} is not in the candidates list!`);
        } else if (employee.yearsExperience < minimalExperience) {
            throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`)
        } else {
            employee.yearsExperience = 'hired';
        }
        return `Welcome aboard, our newest employee is ${name}.`
    }
    salaryBonus(name) {
        const employee = this.jobCandidates.find(obj => obj.name === name);
        if (!employee) {
            throw new Error(`${name} is not in the candidates list!`);
        } else if (employee.education === 'Bachelor') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`
        } else if (employee.education === 'Master') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`
        } else {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`
        }
    }
    candidatesDatabase() {
        if (this.jobCandidates.length === 0) {
            throw new Error(`Candidate Database is empty!`);
        } else {
            const sorted = this.jobCandidates.sort((a, b) => a.name.localeCompare(b.name));
            return `Candidates list:\n${sorted.map(candidate => `${candidate.name}-${candidate.yearsExperience}`).join('\n')}`
        }
    }
}


let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Jordan Cole-High School-5", "Daniel Jones-Bachelor-18"]));
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.jobOffer("Jordan Cole-4"));
console.log(Jobs.salaryBonus("Jordan Cole"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.candidatesDatabase());