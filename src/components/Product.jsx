import * as React from 'react';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi/'

class Product extends React.Component {
    render() {
        return (
            <div class="flex flex-row m-6 w-1/2 bg-green-800 item p-6 mx-auto rounded-md text-white shadow-sm">
                <div class="image flex-initial justify-center self-center">
                    <img alt="foto aleatória" src="https://ui-avatars.com/api/?background=random"/>
                </div>
                <div class="description flex items-start justify-center pl-6 pt-px flex-col flex-auto">
                    <h1 class="font-bold">{this.props.title}</h1>
                    <p>{this.props.description}</p>
                    <h1 class="font-bold">{this.props.votes} votos.</h1>
                </div>
                <div class="p-4 space-y-2 mx-auto">
                    <FiArrowUp/>
                    <FiArrowDown/>
                </div>
            </div>
        );
    }
}

export default Product;