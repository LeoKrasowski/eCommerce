import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categores from "./components/Categores";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
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
          category: 'arts',
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
          "category": "tables",
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
          "category": "arts",
          "price": "19.99"
        },

      ],
      showFullItem: false
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categores chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.showFullItem && <ShowFullItem />}
        <Footer />
      </div>
    )
  }

  onShowItem() {
    this.setState({ showFullItem: !this.state.showFullItem })
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
    }


    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
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
