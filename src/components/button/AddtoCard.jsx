'use client'
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const AddtoCard = ({product}) => {

    const {data:session , status} =useSession();


    
    const router = useRouter();
    const path =usePathname();

    const add2cart=()=>{

        if(status=='authenticated') {
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