'use client'
import { handleCart } from '@/actions/server/cart';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';

const AddtoCard = ({product}) => {

    const {data:session , status} =useSession();
    const router = useRouter();
    const path =usePathname();
    const islogin=status=='authenticated';
    const [loading ,setLoading]= useState();

    const add2cart=async()=>{
        setLoading(true);

        if(islogin) {
           const result =await  handleCart({product, inc:true});
           if(result.success){
            alert(product.title)
           }
           setLoading(false);
        }
        else{
            router.push(`/login?callbackUrl=${path}`)
        }
        

    }
  return (
    <button disabled={status=='loading'|| loading}  className="btn btn-primary " onClick={add2cart} >Add to Cart</button>
  );
};

export default AddtoCard;