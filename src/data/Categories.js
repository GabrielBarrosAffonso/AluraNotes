

class Categories {
    constructor(){
        this.categories = []
        this._subscribers = []
    }

    subscribe(func){
        this._subscribers.push(func);
    }

    notify(){
        this._subscribers.forEach(func => func(this.categories))
    }

    addCategory(newCategory){
        this.categories.push(newCategory)
        this.notify()
    }
}

export default Categories