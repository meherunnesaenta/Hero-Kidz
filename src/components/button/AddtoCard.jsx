'use client'
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const AddtoCard = ({product}) => {
    
    const isLogin =true;
    const router = useRouter();
    const path =usePathname();

    const add2cart=()=>{
        if(isLogin) {
            alert(product._id);
        }
        else{
            router.push(`/login?callbackUrl=${path}`)
        }
        

    }
  return (
    <button className="btn btn-primary " onClick={add2cart} >Add to Cart</button>
  );
};

export default AddtoCard;