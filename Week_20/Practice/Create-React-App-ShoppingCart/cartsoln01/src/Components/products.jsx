import React from "react";
//import ReactBootstrap from "react-bootstrap";
import axios from "axios";
import {
    Card,
    Accordion,
    Button,
    Container,
    Row,
    Col,
    Image,
    Input,
  } from "react-bootstrap";

    // simulate getting products from DataBase
  const products = [
    { name: "Apples_:", country: "Italy", cost: 3, instock: 10 },
    { name: "Oranges:", country: "Spain", cost: 4, instock: 3 },
    { name: "Beans__:", country: "USA", cost: 2, instock: 5 },
    { name: "Cabbage:", country: "USA", cost: 1, instock: 8 },
  ];
  
  const useDataApi = (initialUrl, initialData) => {
    const { useState, useEffect, useReducer } = React;
    const [url, setUrl] = useState(initialUrl);
  
    const [state, dispatch] = useReducer(dataFetchReducer, {
      isLoading: false,
      isError: false,
      data: initialData,
    });
    console.log(`useDataApi called`);
    useEffect(() => {
      console.log("useEffect Called");
      let didCancel = false;
      const fetchData = async () => {
        dispatch({ type: "FETCH_INIT" });
        try {
          const result = await axios(url);
          console.log("FETCH FROM URl");
          if (!didCancel) {
            dispatch({ type: "FETCH_SUCCESS", payload: result.data });
          }
        } catch (error) {
          if (!didCancel) {
            dispatch({ type: "FETCH_FAILURE" });
          }
        }
      };
      fetchData();
      return () => {
        didCancel = true;
      };
    }, [url]);
    return [state, setUrl];
  };
  const dataFetchReducer = (state, action) => {
    switch (action.type) {
      case "FETCH_INIT":
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case "FETCH_SUCCESS":
        return {
          ...state,
          isLoading: false,
          isError: false,
          data: action.payload,
        };
      case "FETCH_FAILURE":
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      default:
        throw new Error();
    }
  };
  
  const Products = (props) => {
    const [items, setItems] = React.useState(products);
    const [cart, setCart] = React.useState([]);
    const [total, setTotal] = React.useState(0);

    //  Fetch Data
    const { Fragment, useState, useEffect, useReducer } = React;
    const [query, setQuery] = useState("http://localhost:1337/api/products");
    //data/isloading/isError = data, doFetch = setData
    const [{ data, isLoading, isError }, doFetch] = useDataApi(
      "http://localhost:1337/api/products",
      {
        data: [],
      }
    );
    console.log(`Rendering Products ${JSON.stringify(data)}`);
    // Fetch Data
    const addToCart = (e) => {
      let name = e.target.name;
      let item = items.filter((item) => item.name == name);
      if(item[0].instock == 0) return;
      item[0].instock -= 1;
      console.log(`add to Cart ${JSON.stringify(item)}`);
      setCart([...cart, ...item]);
      //doFetch(query);
    };
    const deleteCartItem = (index) => {
      let newCart = cart.filter((item, i) => index != i);
      let target = cart.filter((item, val) => index == val);
      let newItems = items.map((item, val) => {
        if(item.name == target[0].name) item.instock += 1;
        return item;
      });
      //console.log(newItems);
      setCart(newCart);
      setItems(newItems);
    };
    const photos = ["apple.png", "orange.png", "beans.png", "cabbage.png"];
  
    let list = items.map((item, index) => {
      let n = index + 1049;
      let nurl = "https://picsum.photos/id/" + n + "/50/50";
  
      return (
        <li key={index}>
          <Image src={photos[index]} width={70} roundedCircle></Image>
          <Button variant="primary" size="large">
            {item.name}${item.cost}_Stock={item.instock}
          </Button>
          <input name={item.name} type="submit" onClick={addToCart}></input>
        </li>
      );
    });

    //=========Cart=============
    const Cart = (props) => {
      //const { Card, Accordion, Button } = 'react-bootstrap';
      let data = props.location.data ? props.location.data : products;
      console.log(`data:${JSON.stringify(data)}`);

      return <Accordion defaultActiveKey="0">{list}</Accordion>;
    };

    let cartList = cart.map((item, index) => {
        console.log(item);
        console.log(index);
        return (
            <Card key={index}>
            <Card.Header>
              <Accordion.Item eventKey={1+index}>
                  <Accordion.Header>
                  {item.name}
                  </Accordion.Header>
              </Accordion.Item>
            </Card.Header>
            <Accordion.Collapse
                onClick={() => deleteCartItem(index)}
                eventKey={1 + index}
            >
                <Card.Body>
                $ {item.cost} from {item.country}
                </Card.Body>
            </Accordion.Collapse>
            </Card>
        );
    });
  
    let finalList = () => {
      let total = checkOut();
      let final = cart.map((item, index) => {
        return (
          <div key={index} index={index}>
            {item.name}
          </div>
        );
      });
      return { final, total };
    };
  
    const checkOut = () => {
      let costs = cart.map((item) => item.cost);
      const reducer = (accum, current) => accum + current;
      let newTotal = costs.reduce(reducer, 0);
      console.log(`total updated to ${newTotal}`);
      //cart.map((item, index) => deleteCartItem(index));
      return newTotal;
    };
  
    let cleanCart = () => {
      console.log("*********************");
      console.log(items);
      //let newItems = items.filter(item => item.instock != 0);
      //console.log(newItems);
      setCart([]);
      //setItems(newItems);
    };
    // TODO: implement the restockProducts function
    const restockProducts = (url) => {
      doFetch(url);
      console.log("********************"+items)
      let added = data.data.map(item => {
        console.log(item);
        console.log(item.attributes);
        let {name, country, cost, instock} = item.attributes;
        return {name, country, cost, instock};
      });
      console.log(added);
      setItems([...added]);
    };
  
    return (
      <Container>
        <Row>
          <Col>
            <h1>Product List</h1>
            <ul style={{ listStyleType: "none" }}>{list}</ul>
          </Col>
          <Col>
            <h1>Cart Contents</h1>
            <Accordion>{cartList}</Accordion>
          </Col>
          <Col>
            <h1>CheckOut </h1>
            <Button onClick={cleanCart}>CheckOut $ {finalList().total}</Button>
            <div> {finalList().total > 0 && finalList().final} </div>
          </Col>
        </Row>
        <Row>
          <form
            onSubmit={(event) => {
              restockProducts(`${query}`);
              console.log(`Restock called on ${query}`);
              event.preventDefault();
            }}
          >
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <button type="submit">ReStock Products</button>
          </form>
        </Row>
      </Container>
    );
  };
  export default Products;
  