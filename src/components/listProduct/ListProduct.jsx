import React, { useState, useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase'
import Product from '../product/Product'
const ListProduct = () => {
    const [products, setProducts] = useState([])
    async function getData() {
        var products = [];
        const querySnapshot = await getDocs(collection(db, "products"));
        querySnapshot.forEach((doc) => {
            products.push(doc.data());
        });
        return products;
    }
    useEffect(() => {
        getData()
            .then(products => {
                setProducts(products);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <div className='home__row'>
            {
                products && products.map(product => {
                    return <Product key={product.id} product={product} />
                })
            }
        </div>
    )
}
export default ListProduct