import * as React from 'react';
import Product from './Product';
import Seed from '../data/seed';

class ProductList extends React.Component {
    render() {
        let product = Seed().products[0];
        return (
            <div class="lista p-8 flex">
                <Product
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    votes={product.votes}
                />
            </div>
        );
    }
}

export default ProductList;