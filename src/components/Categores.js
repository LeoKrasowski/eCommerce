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
                    key: 'sofas',
                    name: 'Sofas'
                },
                {
                    key: 'shelves',
                    name: 'Shelves'
                },
                {
                    key: 'lamps',
                    name: 'Lamps'
                },
                {
                    key: 'arts',
                    name: 'Arts'
                }
            ]
        }
    }

    render() {
        return (
            <div className='categories'>
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}> {el.name}</div>
                ))}
            </div>
        )
    }
}

export default Categores
