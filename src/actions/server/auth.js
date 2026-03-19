'use server'
import { collections, connect } from "@/lib/dbconnect";
import bcrypt from 'bcrypt'

export const postUser=async (payload)=>{
    const {name ,email,password}=payload
    if(!email && !password ) return null;
    const isExist =await connect(collections.USERS).findOne({email});
    if(isExist){
        return null;
    }

    const newUser ={
        provider:'credentials',
        name ,
        email,
        password: await bcrypt.hash(password,15),
        role:'user'
       
    }

    const result =await connect(collections.USERS).insertOne(newUser);
     if(result.acknowledged){
        
    return {
        ...result , insertedId:result.insertedId.toString()
    }
     }
}


export const loginUser=async(payload)=>{
    const {email,password}=payload;
    if(!email,!password) return null;
    
    const user =await connect(collections.USERS).findOne({email});
    if(!user) return null

    const isExist = await bcrypt.compare(password,user.password);
    if(isExist)
        return user;
    else
        return null;
}