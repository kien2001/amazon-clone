import React, { Suspense } from 'react'
import './home.css'
const Home = () => {
    const ListProduct = React.lazy(() => {
        return new Promise(resolve => {
            setTimeout(() => resolve(import("../listProduct/ListProduct")), 1000);
        });
    }
    );
    return (
        <div className="home">
            <div className="home__container">
                <img src="https://co-well.vn/wp-content/uploads/2019/10/Key-Features-of-an-E-commerce-Platform.png" alt="" className='home__image' />
                <div className='home__row'>
                    <Suspense fallback={<img src='https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw340' />}>
                        <ListProduct />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

export default Home