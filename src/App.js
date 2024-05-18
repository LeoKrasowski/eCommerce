import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Chair gray',
          img: '',
          desc: 'Some text about gray chair.',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Chair green',
          img: '',
          desc: 'Some text about green chair.',
          category: 'chairs',
          price: '45.99'
        },
        {
          "id": 3,
          "title": "Table Wooden",
          "img": "",
          "desc": "A sturdy wooden table perfect for dining.",
          "category": "tables",
          "price": "89.99"
        },
        {
          "id": 4,
          "title": "Sofa Blue",
          "img": "",
          "desc": "A plush blue sofa that seats three.",
          "category": "sofas",
          "price": "299.99"
        },
        {
          "id": 5,
          "title": "Lamp Modern",
          "img": "",
          "desc": "A sleek modern lamp for your desk.",
          "category": "lamps",
          "price": "29.99"
        },
        {
          "id": 6,
          "title": "Bed Queen Size",
          "img": "",
          "desc": "A comfortable queen-size bed with a modern frame.",
          "category": "beds",
          "price": "399.99"
        },
        {
          "id": 7,
          "title": "Bookshelf Tall",
          "img": "",
          "desc": "A tall bookshelf with plenty of storage space.",
          "category": "shelves",
          "price": "79.99"
        },
        {
          "id": 8,
          "title": "Dresser White",
          "img": "",
          "desc": "A classic white dresser with six drawers.",
          "category": "dressers",
          "price": "129.99"
        },
        {
          "id": 9,
          "title": "Coffee Table Glass",
          "img": "",
          "desc": "A stylish coffee table with a glass top.",
          "category": "tables",
          "price": "59.99"
        }
      ]
    }
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>

    );
  }

}

export default App;
