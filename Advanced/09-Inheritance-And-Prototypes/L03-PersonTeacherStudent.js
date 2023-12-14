function classExtend() {
    class Person {
        constructor(name, email) {
            Object.assign(this, { name, email });
        }
        toString() {
            if (this.course) {
                return `${this.constructor.name} (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
            } else if (this.subject) {
                return `${this.constructor.name} (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
            } else {
                return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`;
            }
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email),
                this.subject = subject
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email),
                this.course = course
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}