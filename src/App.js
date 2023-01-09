  import React from "react";
  import Cart from "./Cart";
  import NavBar from "./NavBar";
  import Footer from "./Footer";
  import firebase from 'firebase/compat/app';
  import 'firebase/compat/auth';
  import 'firebase/compat/firestore';
  




  class App extends React.Component {
    constructor(){
      super();
      this.state = {
          products:[],
          loading: true,
          theme: 'dark',
          // newtheme: ''
      }
      
    }

    componentDidMount (){
    firebase
      .firestore()
      .collection('products')
      // .where('price','>=',20000)
      .orderBy('price')
      .onSnapshot((snapshot) => {
        // console.log(snapshot.docs);
        snapshot.docs.map((doc) => {
          console.log(doc.data())
        });
        const products = snapshot.docs.map((doc) => {
          const doct = doc.data();
          doct['id'] = doc.id;
          return doct;
        })
        this.setState({
          products,
          loading:false
        });
      })

    }

    addProduct = ()=>{
      firebase
      .firestore()
      .collection('products')
      .add(
        {
          img: '',
          title: 'Keyboard',
          price: 300,
          quantity:2
        })
        .then((docKey) =>
        {
          console.log("product is added",docKey);
        })

      
    }
  handleIncreaseQuantity =  (product) => {

    const { products } = this.state;
    const index = products.indexOf(product);
    // products[index].quantity += 1;
    // this.setState({products});

    const docUpd = firebase.firestore().collection('products').doc(products[index].id);

    docUpd.update({
      quantity:products[index].quantity + 1
    })
    .then( (docKey) => {
      console.log("Updated Successfully",docKey);
    } )



  }
  handleDecreaseQuantity = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].quantity > 0){
      
      const docUpd = firebase.firestore().collection('products').doc(products[index].id);

      docUpd.update({
        quantity: products[index].quantity - 1
      })

    }

    


  }
  handleDelete = (id) =>
  {
  const{ products } = this.state;
  const docUpd = firebase.firestore().collection('products').doc(id);
  docUpd.delete();
  
  }
  
  getCartCount = () => {
    const {products} = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.quantity;
    })

    return count;
  }

  getPrice = () => {
    const {products} = this.state;
    let price = 0 ; 
    products.forEach((product) =>{
      price += (product.price * product.quantity);
    }
    )
    return price ;
  }


  primaryThemeFunction = () => {
    localStorage.setItem('theme','light');
     this.setState({})
  }
  secondaryThemeFunction = () => {
    localStorage.setItem('theme','dark');
    this.setState({});
  }

 
  render(){
    const {products, loading} = this.state;
    // console.log("log from render",localStorage.getItem(theme));
    // localStorage.setItem(theme,'dark');

    return (
      <div className="App">
        <NavBar 
        count = {this.getCartCount()}
        mes = {localStorage.getItem('theme')}
        primaryTheme = {this.primaryThemeFunction}
        secondaryTheme = {this.secondaryThemeFunction}
       
        />
        
        <Cart 
        products = {products}
        onIncreaseQuantity = {this.handleIncreaseQuantity}
        onDecreaseQuantity = {this.handleDecreaseQuantity}
        onDeleteButton = {this.handleDelete}
        />

        {loading && <h1>please wait we are loading your products..</h1>}
        <Footer 
          mes = {localStorage.getItem('theme')}
          price = {this.getPrice()}
        />
      </div>

      
      

    )
  }
  }

  export default App;
