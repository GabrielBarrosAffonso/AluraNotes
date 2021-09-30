import React, { Component } from 'react'


class CategoryList extends Component{

    _handleEventInput(e){
        if(e.keyCode === 13){
            console.log("add Ctegory")
            let categoryValue = e.target.value
            this.props.addCategory(categoryValue)
        }
    }

    render(){
        return(
            <div>
                <ul>
                    { this.props.categories.map((category, index) => {
                        return(
                            <li className="category-name" key={index}>{category}</li>
                        )
                    })
                    }
                </ul>
                <input type="text" placeholder="Adicionar Categoria" onKeyUp={this._handleEventInput.bind(this)}/>
            </div>
        )
    }
}

export default CategoryList