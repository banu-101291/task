import axios from "axios";

export const commonrequest = async(methods,url,body,header)=>{
    let config = {
        method:methods,
        url,
        headers:header ? header 
        :{
            "Content-Type":"application/json"
        },
        data:body
    }

    // axios instance
    return axios(config).then((data)=>{
        return data
    }).catch((error)=>{
        return error
    })



}

// 
// import axios from "axios";

// export const commonrequest = async (method, url, body = null, headers = {}) => {
//     try {
//         const response = await axios({
//             method,
//             url,
//             headers: {
//                 "Content-Type": "application/json",
//                 ...headers, // Allow custom headers to be merged
//             },
//             data: body, // Only include data if the body is provided
//         });
//         return response.data; // Return only relevant data
//     } catch (error) {
//         console.error("API Request Error:", error.response?.data || error.message);
//         throw error.response?.data || error.message; // Throw specific error data
//     }
// };
