class HomeRenovation {
    constructor(budget) {
        Object.assign(this, {
            budget,
            tasks: [],
            completedTasks: []
        })
    }
    addTask(description, cost, priority) {
        cost = Number(cost);
        priority = Number(priority);

        if (cost > this.budget) {
            return `Not enough budget to add '${description}' task.`
        } else {
            this.tasks.push({ description, cost, priority });
            this.budget -= cost;
            return `The task '${description}' has been successfully added to the renovation plan.`
        }
    }
    markTaskAsCompleted(description) {
        const task = this.tasks.find(t => t.description === description);
        if (!task) {
            throw new Error(`Task '${description}' not found in the renovation plan.`);
        } else {
            const ind = this.tasks.findIndex(t => t.description === description);
            this.tasks.splice(ind, 1);
            this.completedTasks.push(task);
            return `The task '${description}' has been successfully completed.`
        }
    }
    getPriorityTasksCount(minimalPriority) {
        minimalPriority = Number(minimalPriority);
        if (minimalPriority <= 0) {
            return `The priority cannot be zero or negative.`;
        } else {
            const tasksCount = this.tasks.map(t => t.priority >= minimalPriority);
            if (tasksCount.length === 0) {
                return `No tasks found with priority ${minimalPriority} or higher.`
            } else {
                return `You have ${tasksCount.length} tasks to prioritize.`
            }
        }
    }
    renovationSummary() {
        if (this.completedTasks.length === 0) {
            throw new Error(`No tasks have been completed yet!`);
        } else {
            return `Budged left $${this.budget}.\nYou have completed ${this.completedTasks.length} tasks.\nPending tasks in the renovation plan:\n${this.tasks.map(t => `${t.description} - Cost: ${t.cost}, Priority: ${t.priority}`).join('\n')}`;
        }
    }
}

const renovation = new HomeRenovation(10000);
console.log(renovation.addTask("Paint walls", 1500, 2));
console.log(renovation.addTask("Install new windows", 5000, 1));
console.log(renovation.markTaskAsCompleted("Paint walls"));
console.log(renovation.renovationSummary());