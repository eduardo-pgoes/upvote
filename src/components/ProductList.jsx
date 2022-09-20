import * as React from 'react';
import Product from './Product';
import Seed from '../data/seed';

class ProductList extends React.Component {
    render() {
        const products = Seed().products.sort((a, b) => (
            b.votes - a.votes
        ));
        const productComponents = products.map((product => (
                <Product
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    votes={product.votes}
                />
        )));
        return (
            <div class="lista p-8 flex flex-col">
                {productComponents}
            </div>
        );
    }
}

export default ProductList;