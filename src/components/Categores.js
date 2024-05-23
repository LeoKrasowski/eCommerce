import React, { Component } from 'react'

export class Categores extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'All'
                },
                {
                    key: 'chairs',
                    name: 'Chairs'
                },
                {
                    key: 'tables',
                    name: 'Tables'
                },
                {
                    key: 'sofa',
                    name: 'Sofas'
                },
                {
                    key: 'bookshelf',
                    name: 'Bookshelf'
                },
                {
                    key: 'lamp',
                    name: 'Lamps'
                },
                {
                    key: 'art',
                    name: 'Arts'
                },
                {
                    key: 'vase',
                    name: 'Vases'
                },

            ]
        }
    }

    render() {
        return (
            <div className='categories'>
                {this.state.categories.map(el => (
                    <div key={el.key}>{el.name}</div>
                ))}
            </div>
        )
    }
}

export default Categores
