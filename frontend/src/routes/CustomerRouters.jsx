import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { Cart } from '../customer/components/cart/Cart'
import Navigation from '../customer/components/navigation/Navbar'
import { Footer } from '../customer/components/footer/Footer'
import { Product } from '../customer/components/product/Product'
import { ProductDetails } from '../customer/components/productDetails/ProductDetails'
import { Checkout } from '../customer/components/checkout/Checkout'
import { Order } from '../customer/components/order/Order'
import { OrderDetails } from '../customer/components/order/OrderDetails'

export const CustomerRouters = () => {
    return (
        <div>
            <div>
                <Navigation />
            </div>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product />} />
                <Route path='/product/:productId' element={<ProductDetails />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/account/order' element={<Order />} />
                <Route path='/account/order/:orderId' element={<OrderDetails />} />

            </Routes>
            <div>
                <Footer />
            </div>
        </div>
    )
}
