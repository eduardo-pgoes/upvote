import * as React from 'react';

class Product extends React.Component {
    render() {
        return (
            <div class="flex w-screen bg-green-800 item p-8 mx-auto rounded-md shadow-sm">
                <div class="image">
                    <img alt="foto aleatória" src="https://ui-avatars.com/api/?background=random"/>
                </div>
                <div class="description place-content-start flex items-start pl-6 flex-col flex-auto text-white">
                    <h1 class="flex-grow justify-start">João</h1>
                    <p class="flex-grow justify-start">Descrição do produto...</p>
                </div>
            </div>
        );
    }
}

export default Product;