import React, {Component} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from "../Context";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export class Product extends Component {
    render() {
        const{id, title, img, price, inCart} = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5" onClick={()=>console.log('u clicked me on the img cont')
                    }>
                        <Link to="/details">
                            <img src={img} className="img-fluid max-width: 100% height: auto" alt="card-img-top "/>
                        </Link>
                        <button
                            className="cart-btn"
                            // the same like (inCart ? true : false)
                            disabled={ !!inCart }
                            onClick={()=>{
                                console.log('added to the cart');
                            }}>
                        {inCart ? (<p className="text-capitalize mb-0" disabled>
                                {""}
                                in cart
                        </p>
                        ):(<FontAwesomeIcon icon={faCartPlus} />)}
                        </button>
                    </div>
                    {/* card footer*/}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                            <h5 className="text-green font-italic mb-0">
<span className="mr-1">$</span>
                                {price}
                            </h5>
                    </div>
                </div>
            </ProductWrapper>
        );
    }
}

const ProductWrapper = styled.div`

`