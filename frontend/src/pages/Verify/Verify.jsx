import React, { use, useContext, useEffect } from 'react'
import './Verify.css'

const Verify = () => {

    const [searchParams,setSearchParams] = useSearchParams();
    const  success  = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const {url} = useContext(StoreContext);

    const verifyPayment = async ()=>{
        const response = await axios.post(url+"/api/order/verify",{success,orderId});
        if(response.data.success){
            navigate("/myorders");
        }
        else{
            navigate("/");
        }
    }

    useEffect(()=>{
        verifyPayment();
    },[])
  return (
    <div className='verify'>
      
    </div>
  )
}

export default Verify
