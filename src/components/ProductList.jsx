import * as React from 'react';
import Product from './Product';

class ProductList extends React.Component {
    render() {
        return (
            <div class="lista p-8 flex">
                <Product></Product>
            </div>
        );
    }
}

export default ProductList;