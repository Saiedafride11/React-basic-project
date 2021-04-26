import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // var name = "Dr Mahfuz";

  // var person = {
  //   name: "kamal",
  //   job: "ACI"
  // }

  // var person2 = {
  //   name : "jamal",
  //   job : "ppppp"
  // }

  // var style = {
  //   color : 'red',
  //   backgroundColor : 'green'
  // }

  const nayoks = ['anwar', 'janwar', 'tanwar', 'bappi', 'almgir'];

  const products = [
    {name : 'Photoshop', price : '$90'},
    {name: 'Illustator', price: '$80'},
    {name: 'pdf', price:'$30'}
  ];

  const productNames = products.map(product => product.name);
  console.log(productNames);

  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>{(2+2) * 2}</h1>
        <h1>{name}</h1>
        <h1 style={style}>{person.name + " " + person.job}</h1>
        <h1 style={{backgroundColor: 'blue', color: 'white'}}>{person2.name + " " + person2.job}</h1> */}

        <p>I am react Developer</p>
        <Users></Users>
        <Counter></Counter>

        <ul>
          {/* <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li> */}

          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
        </ul>

        <ul>
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>

        {
           products.map(pd => <Product product={pd}></Product>)
        }
       

        {/* <Product name={products[0].name} price={products[0].price}></Product> */}

        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product> */}

        <Person name="kamal" nayika="kumaliiiiii"></Person>
        <Person name="jamal" nayika="peraaaaaa"></Person>
        <Person name={nayoks[0]}></Person>
        <Person></Person>
        
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // console.log('Hi');
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h1>Dynamic Users{users.length}</h1>
      {
        // console.log(users)
        users.map(user => <li>{user.name}</li>)
      }
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(10);
  // const handleClick = () => console.log('click');

  // const handleClick = () => {
  //   const newCount = count + 1;
  //   setCount(newCount)
  // };

  // const handleClick = () => setCount(count + 1);

  // const handleDecrease = () => setCount(count - 1);

  return (
    <div>
      <h2>Count: {count} </h2>
      {/* <button onClick={handleClick}>Increase</button> */}
      <button onClick={ () => setCount(count + 1)}>Increase</button>

      {/* <button onClick={handleDecrease}>Decrease</button> */}
      <button onClick={ () => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Product(props){
  const productStyle = {
    border: '1px solid grey',
    borderRadious : '5px',
    backgroundColor:'lightgrey',
    height: '200px',
    width: '200px',
    float:'left'
  }
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
        {/* <h2>{props.name}</h2> */}

        {/* <h2>{props.product.name}</h2>
        <h4>{props.product.price}</h4> */}

        <h2>{name}</h2>
        <h4>{price}</h4>
        <button>Buy Now</button>
    </div>
  )
}



function Person(props){
  const personStyle = {
    border: '1px solid green',
    margin: '10px'
  }
  return (
    <div style={personStyle}>
    {/* <div style={{border: '1px solid red', margin: '10px'}}> */}
      <h1>Nayok {props.name}</h1>
      <h3>Nayika {props.nayika}</h3>
    </div>
  )
}

export default App;
