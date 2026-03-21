'use server'

import { authOptions } from "@/lib/authOptions";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

const { connect, collections } = require("@/lib/dbconnect")

const cartCollection = connect(collections.CART)


export const handleCart = async ({ product, inc = true }) => {

    const user = await getServerSession(authOptions);
    if (!user) return null;

    const query = { email: user?.email, productId: product._id };
    const dataExist = await cartCollection.findOne(query);
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
        const newData = {
            productId: product?._id,
            email: user?.email,
            title: product?.title,
            quantity: 1,
            image: product?.image,
            price: product.price - (product.price * product.discount) / 100,
            username: user?.user.name
        }
        const result = await cartCollection.insertOne(newData)
        return { success: result?.acknowledged }
    }
}

export const getCart = async () => {
    const user = await getServerSession(authOptions);
    if (!user) return [];

    const result = await cartCollection.find({ email: user?.email }).toArray();

    return result.map(item => ({
        ...item,
        _id: item._id.toString()
    }));
}

export const deleteItems = async (id) => {
    const user = await getServerSession(authOptions);
    if (!user) return [];

    if ( id?.length !== 24) {
        return null;
    }


    const result = await cartCollection.deleteOne({ _id: new ObjectId(id) });

    if(Boolean(result.deletedCount)){
        revalidatePath('/cart')
    }

    return {success:Boolean(result.deletedCount)}

}