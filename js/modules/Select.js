export class Select {
    static #instances = new Map();
    #selectorInstance = null;

    constructor(selector, options = {}) {
        this.selector = selector;
        this.options = options;

        if (Select.#instances.has(selector)) {
            console.error('Select instance already exists!');
            return;
        }

        this.#init()
    }

    getValue() {
        if (!this.#selectorInstance) return null;
        return this.#selectorInstance.getValue(true);
    }

    static existSelector(selector) {
        return Select.#instances.has(selector);
    }

    static getInstance(selector) {
        return Select.#instances.get(selector) || null;
    }

    #init() {
        this.#selectorInstance = new Choices(this.selector, this.options);
        Select.#instances.set(this.selector, this.#selectorInstance);
    }

    destroy() {
        if (this.#selectorInstance) {
            this.#selectorInstance.destroy();
            Select.#instances.delete(this.selector);
            this.#selectorInstance = null;
        }
    }
}