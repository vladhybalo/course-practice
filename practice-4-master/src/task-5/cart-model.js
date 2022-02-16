import Subject from "./subject.js";
import { status } from "../task-1.js";

export default class Cart {
    constructor() {
        this.baseUrl = "http://localhost:3001/cart/items/";
        this.subject = new Subject();
        this.items = [];
        this.loading = false;
    }

    _state() {
        this.loading = !this.loading;
        this._notify();
    }

    _ajax(url, method = "GET", data = null, middleware = () => {}) {
        this._state();
        const state = () => {

        }
        const params = {
            method,
            mode: "cors",
            headers: { "Content-type": "application/json" }
        };
        if (data) {
            params.body = JSON.stringify(data);
        }

        return window.fetch(url, params)
            .then(status)
            .then(response => response.status === 200 ? response.json() : null)
            .then(middleware)
            // .then(this._state) - помилка в консолі
            .then(() => {
                this._state();
            })
            .catch(err => {
                console.error(err);
                this._state();
            });
    }

    _notify() {
        this.subject.notifyObservers();
    }

    register(...args) {
        this.subject.add(...args);
    }

    getItems() {
        return this.items;
    }

    getTotalQuantity() {
        // Change me!
        return this.items.reduce((prev, cur) => prev + cur.quantity, 0);
    }

    getTotalPrice() {
        // Change me!
        return this.items.reduce((prev, cur) => prev + cur.price, 0);
    }

    load() {
        // Change me!
        this._ajax(this.baseUrl, "GET", null, a => {
            this.items = a;
            return this.items;
        });
    }
    
    addItem(item) {
        // Change me!
        this._ajax(this.baseUrl, "POST", item, () => this.items.push(item));
    }

    _getItemIndex(id) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].id === id) {
                return i;
            }
        }
        return this.items.length;
    }

    updateItem(itemId, item) {
        // Change me!
        // якшо не стрелочна ф-ція, то не працює
        this._ajax(`${this.baseUrl}${itemId}`, "PUT", item, (() =>
            this.items.splice(this._getItemIndex(itemId), 1, item)));
    }

    removeItem(itemId) {
        // Change me!
        this._ajax(`${this.baseUrl}${itemId}`, "DELETE", null, () =>
            this.items.splice(this._getItemIndex(itemId), 1));
    }

    removeAll() {
        // Change me!
        this._ajax(this.baseUrl, "DELETE", null, () => {
            this.items = [];
            return this.items;
        });
    }
}
