import React, {Component} from 'react';
import Title from "./Title";
import {ProductConsumer} from "../Context";
import {Product} from "./Product";




export  class ProductList extends Component{
    render(){
        return (
           <>
               <div className="p-5">
                   <div className="container">
                        <Title name = "our " title="products"/>
                        <div className="row">
                           <ProductConsumer>
                               {value=>{
                                 return value.products.map( product =>{
                                     return <Product key={product.id} product = {product}/>
                                 })
                               }}
                           </ProductConsumer>
                       </div>
                   </div>
               </div>
           </>
        );
    }
}