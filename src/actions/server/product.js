'use server'

import { collections, connect } from "@/lib/dbconnect";
import { ObjectId } from "mongodb";

export const getProducts =async()=>{
    const products =await connect(collections.PRODUCTS).find().toArray();
       const safeProducts = products.map(product => ({
        ...product,
        _id: product._id.toString(), 
    }));

    return safeProducts;
}

export const getSingleProducts =async(id)=>{
      if (!id || id.length !== 24) {
    return null;
  }
    const query = {_id : new ObjectId(id)};
    const product =await connect(collections.PRODUCTS).findOne(query);
    return { ...product, _id: product._id.toString() } || {};
}