import React, {Component} from 'react';
import {storeProducts,detailProduct} from "./data";


const ProductContex = React.createContext();
//Provider
//consumer

class ProductProvider extends Component {
    state ={
        products:storeProducts,
        detailProduct:detailProduct
    }
    handleDetail = ()=>{
        console.log('hello from detail');
    }
    addToCart = ()=>{
        console.log('hello from add to cart');
    }
    render() {
        return (
            <ProductContex.Provider value = {{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContex.Provider>
        );
    }
}


const ProductConsumer = ProductContex.Consumer;

export{ProductProvider,ProductConsumer};
