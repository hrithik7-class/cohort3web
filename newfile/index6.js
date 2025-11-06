import * as z from "zod";
import express from "express"
import jwt from "jsonwebtoken"
import { fa } from "zod/v4/locales";

const secureEmail = z.email();
const SecurePassword = z.string().min(6);

function verifyData(username, password) {
    const verifyEmail = secureEmail.safeParse(username);
    const verifyPassword = SecurePassword.safeParse(password)
    if (!verifyEmail.success || !verifyPassword.success) return null;

    const signature = jwt.sign({ username }, password)
    return signature;
}

function decodeIt(token) {
    const value = jwt.decode(token);
    if (value) {
        return true;
    }
    else {
        return false;
    }
}

function verifyIt(token, password) {
   
    let ans = true
    try {
         const value = jwt.verify(token, password);

        
    } catch (error) {
        ans = false;
    }
    return ans;
}



const jwtToken = verifyData("hrithik@gmail.com", "123456");
console.log(jwtToken)
console.log(decodeIt(jwtToken))
console.log(verifyIt(jwtToken))
// console.log(store)