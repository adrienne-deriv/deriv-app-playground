class Errors {
    errors: { [key: string]: string[] };

    constructor() {
        this.errors = {};
    }

    add(attribute: string, message: string) {
        if (!this.has(attribute)) {
            this.errors[attribute] = [];
        }

        if (this.errors[attribute].indexOf(message) === -1) {
            this.errors[attribute].push(message);
        }
    }

    all() {
        return this.errors;
    }

    first(attribute: string) {
        if (this.has(attribute)) {
            return this.errors[attribute][0];
        }
        return null;
    }

    get(attribute: string) {
        if (this.has(attribute)) {
            return this.errors[attribute];
        }

        return [];
    }

    has(attribute: string) {
        return Object.prototype.hasOwnProperty.call(this.errors, attribute);
    }
}

export default Errors;
