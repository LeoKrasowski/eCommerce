import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categores from "./components/Categores";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Chair gray',
          img: 'Chair_Gray.jpg',
          desc: 'A comfortable and stylish gray chair.',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Wall art',
          img: 'Wall_Art.jpg',
          desc: 'Nice wall art.',
          category: 'chairs',
          price: '25.99'
        },
        {
          "id": 3,
          "title": "Wooden dining table",
          "img": "Wooden_Dining_Table.jpg",
          "desc": "A sturdy wooden table perfect for dining.",
          "category": "tables",
          "price": "89.99"
        },
        {
          "id": 4,
          "title": "Leather sofa",
          "img": "Leather_Sofa.jpg",
          "desc": "A plush blue sofa that seats three.",
          "category": "sofas",
          "price": "299.99"
        },
        {
          "id": 5,
          "title": "Modern desk lamp",
          "img": "Modern_Desk_Lamp.jpg",
          "desc": "A sleek modern lamp for your desk.",
          "category": "lamps",
          "price": "79.99"
        },
        {
          "id": 6,
          "title": "Vintage coffee table",
          "img": "Vintage_Coffee_Table.jpg",
          "desc": "A comfortable vintage coffee table.",
          "category": "beds",
          "price": "199.99"
        },
        {
          "id": 7,
          "title": "Glass bookshelf",
          "img": "Glass_Bookshelf.jpg",
          "desc": "A tall bookshelf with plenty of storage space.",
          "category": "shelves",
          "price": "79.99"
        },
        {
          "id": 8,
          "title": "Ceramic vase",
          "img": "Ceramic_Vase.jpg",
          "desc": "A classic ceramic vase.",
          "category": "dressers",
          "price": "19.99"
        },

      ]
    }

    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categores chooseCategory={this.chooseCategory} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>

    );
  }

  chooseCategory(category) {
    console.log(category)
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }
}


export default App;
