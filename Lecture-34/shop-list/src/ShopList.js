import React, { Component } from 'react'
import Form from './Form';
import { v4 as uuid } from 'uuid';
import './ShopList.css';




class ShopList extends Component {

    constructor() {

        super();

        this.state = {
            items: [
                {
                    name: 'Potato',
                    qty: '5',
                    id:uuid()
                },
                {
                    name: 'Mangoes',
                    qty: '10',
                    id: uuid()
                },
                {
                    name: 'Oranges',
                    qty: '2',
                    id:uuid()
                }
            ]
        }
    }

    createItemHandler = (item) => {

        item = {
            ...item,
            id:uuid()
        }
        
        const newItems = [
            ...this.state.items,
            item
        ];

        this.setState({ items: newItems });

    }

    deleteItemHandler = (id) => {
        console.log(id);
        const newItems = this.state.items.filter((item) => item.id !== id);
        
        this.setState({ items: newItems });
    }



    render() {

        let listItems = this.state.items.map((item) => {

            let id = uuid();

            return <li
                key={id}
                // onClick={this.deleteItemHandler.bind(this,item.id)}
                onClick={()=>this.deleteItemHandler(item.id)}
            >Name: {item.name} | Quantity : {item.qty}</li>
        })


        return (
            <div >
                
                <h1>Shop List</h1>

                <ul>

                    {listItems}

                </ul>

               <Form createItem ={this.createItemHandler} />

            </div>
        )
    }
}

export default ShopList;
