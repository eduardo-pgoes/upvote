import * as React from 'react';

class Product extends React.Component {
    render() {
        return (
            <div class="flex w-screen bg-green-800 item p-8 mx-auto rounded-md shadow-sm">
                <div class="image">
                    <img alt="foto aleatória" src="https://ui-avatars.com/api/?background=random"/>
                </div>
                <div class="description flex items-start pl-6 pt-px flex-col flex-auto text-white">
                    <h1 class="font-bold">Fritadeira elétrica</h1>
                    <p>Descrição do produto...</p>
                </div>
            </div>
        );
    }
}

export default Product;