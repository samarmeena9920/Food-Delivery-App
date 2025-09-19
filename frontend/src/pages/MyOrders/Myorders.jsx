import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext';
import './MyOrders.css'
import axios from 'axios';
import { assets } from '../../assets/assets';

const Myorders = () => {
    const { url, token } = useContext(StoreContext);

    const [data, setData] = useState([]);

    const fetchOrders = async () => {
        try {
            const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
            setData(response.data.data);
            //console.log(response.data.data);
        } catch (error) {
            console.error("Failed to fetch orders:", error);
        }
    }

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token])

    return (
        <div className="my-orders">
            <h2>Orders</h2>
            <div className="container">
                {/* Mapping through the orders data to display each order */}
                {data.map((order, index) => {
                    return (
                        <div key={index} className="my-orders-order">
                            <img src={assets.parcel_icon} alt="" />
                            {/* looping the array of orders  */}
                            <p>
                                {order.items.map((item, index) => {
                                    if (index === order.items.length - 1) {
                                        return item.name + " X " + item.quantity;
                                    } else { // If it's not the last item, add a comma
                                        return item.name + " X " + item.quantity + ",";
                                    }
                                })}
                            </p>
                            <p>${order.amount}.00</p>
                            <p>items: {order.items.length}</p>
                            <p>
                                <span>&#x25cf;</span>
                                <b> {order.status}</b>
                            </p>
                            <button onClick={fetchOrders}>Track Order</button>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Myorders
