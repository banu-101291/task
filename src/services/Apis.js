import { commonrequest } from "./ApiCall";
import {BACKEND_URL} from "./helper";


export const registerfunction = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/user/register`,data)
}

export const sentOtpFunction = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/user/sendotp`,data)
}

// export const sentOtpFunction = async (data) => {
//     const response = await commonrequest("POST", `${BACKEND_URL}/user/sendotp`, data);
//     if (response.error) {
//       console.error("Error sending OTP:", response);
//       return response;
//     }
//     return response.data;
//   };

export const userVerify = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/user/login`,data)
}