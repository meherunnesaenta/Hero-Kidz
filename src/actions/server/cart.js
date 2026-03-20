'use server'

import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

const { connect, collections } = require("@/lib/dbconnect")

const cartCollection = connect(collections.CART)

export const handleCart = async ({ product, inc = true }) => {
    const user = await getServerSession(authOptions);
    if (!user) return null;

    const query = { email: user?.email, productId: product._id };
    const dataExist = await cartCollection.findOne(query);
    console.log('here is the user ',user?.user?.name);
    if (dataExist) {

        const updateData = {
            $inc: {
                quantity: inc ? 1 : -1
            }
        }

        const result = await cartCollection.updateOne(query, updateData);
        return { success: Boolean(result.modifiedCount) }
    }
    else {
        const newData ={
            productId:product?._id,
            email : user?.email,
            title: product?.title,
            quantity:1,
            image:product?.image,
            price:product.price -(product.price*product.discount)/100,
            username:user?.user.name 
        }
        const result =await cartCollection.insertOne(newData)
        return {success:result?.acknowledged}
    }
}