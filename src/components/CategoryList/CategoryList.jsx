import React, { Component } from 'react'
import "./style.css"

class CategoryList extends Component{
    constructor(){
        super();
        this.state = {categories:[]}
        this._newCategories = this._newCategories.bind(this)
    }

    componentDidMount(){
        this.props.categories.subscribe(this._newCategories)
    }

    componentWillUnmount(){
        this.props.categories.unsubscribe(this._newCategories)
    }

    _newCategories(categories){
        this.setState({...this.state,categories})
    }

    _handleEventInput(e){
        if(e.keyCode === 13){
            let categoryValue = e.target.value
            this.props.addCategory(categoryValue)
        }
    }

    render(){
        return(
            <div className="categories-list">
                <input className="categories-input" type="text" placeholder="Adicionar Categoria" onKeyUp={this._handleEventInput.bind(this)}/>
                <ul className="categories-ul">
                    { this.state.categories.map((category, index) => {
                        return(
                            <li className="category-name" key={index}>{category}</li>
                        )
                    })
                    }
                </ul>
            </div>
        )
    }
}

export default CategoryList