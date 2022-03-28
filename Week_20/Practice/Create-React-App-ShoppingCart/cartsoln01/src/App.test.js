import { render, screen, within } from '@testing-library/react';
import App from './App';
import Products from "./Components/products.jsx";
import {urlTest} from "./Components/products.jsx";
import {rest} from "msw";
import {setupServer} from "msw/node";

//console.log(urlTest);

const prodResponse = rest.get(urlTest, (req, res, ctx) => {
    return res(ctx.json([{id:2}]))
});

const handlers = [prodResponse];
//console.log(handlers);
const server = new setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
//console.log(server);


test('mock products', async() => {
    render(<Products/>);
    const prod = await screen.getByText("Product List");
    //console.log(prod);
    expect(prod).toBeVisible();
});
test('mock cart', async() => {
    render(<Products/>);
    const prod = await screen.getByText("Cart Contents");
    expect(prod).toBeVisible();
});
test('mock list', async() => {
    render(<Products/>);
    const prod = await screen.getByRole("list", {name: /products/i});
    expect(prod).toBeVisible();
});
test('mock apples', async() => {
    render(<Products/>);
    const prod = await screen.getByRole("list", {name: /products/i});
    const { getAllByRole } = within(prod);
    const inventory = getAllByRole('listitem');
    const allProds = inventory.map(inv => inv.textContent);
    console.log(allProds);
    const apples = 'Apples_:$3_Stock=10';
    expect(allProds[0]).toEqual(apples);
});
