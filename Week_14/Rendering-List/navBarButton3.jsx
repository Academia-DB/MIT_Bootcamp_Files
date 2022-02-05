// Ex 3 - write out all items with their stock number
// provide a button and use onClick={moveToCart} to move 1 item into the Shopping Cart
// use React.useState to keep track of items in the Cart.
// use React.useState to keep track of Stock items
// list out the Cart items in another column
function NavBar({ stockitems }) {
  const [cart, setCart] = React.useState([]);
  const [stock, setStock] = React.useState(stockitems);
  const { Button } = ReactBootstrap;
  // event apple:2
  const moveToCart = e => {
    let [name, num] = e.target.innerHTML.split(":"); // innerHTML should be format name:3
    if(num <= 0) return;
    // use newStock = stock.map to find "name" and decrease number in stock by 1
    let item = stock.filter((item) => item.name == name);
    // only if instock is >=  do we move item to Cart and update stock
    let newStock = stock.map((item) => {
      if (item.name == name) {
        item.instock--;
      }
      return item;
    });
    setStock(...newStock);
    setCart(...cart, ...item);
    console.log(`Cart: ${JSON.stringify(cart)}`);
  };
  const updatedList = menuItems.map((item, index) => {
    return (
      <Button key={index} onClick={moveToCart}>
        {item.name}:{item.instock}
      </Button>
    );
  });
  // note that React needs to have a single Parent
  return (
    <>
      <ul key="stock" style={{ listStyleType: "none" }}>{updatedList}</ul>
      <h1>Shopping Cart</h1>
      <Cart cartitems={cart}> Cart Items</Cart>
    </>
  );
}
function Cart({ cartitems }) {
  const { Card, Button } = ReactBootstrap;
  console.log("rendering Cart");
  const updatedList = cartitems.map((item, index) => {
    return <Button key={index}>{item.name}</Button>;
  });
  return (
    <ul style={{ listStyleType: "none" }} key="cart">
      {updatedList}
    </ul>
  );
}
const menuItems = [
  { name: "apple", instock: 2 },
  { name: "pineapple", instock: 3 },
  { name: "pear", instock: 0 },
  { name: "peach", instock: 3 },
  { name: "orange", instock: 1 }
];
ReactDOM.render(
  <NavBar stockitems={menuItems} />,
  document.getElementById("root")
);
