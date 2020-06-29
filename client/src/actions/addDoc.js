import axios from "axios";


export const addDoc = ({ collection }) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
  
    const body = JSON.stringify(collection);
    try {
      const res = axios.post("/api/controller", body, config);
      console.log(res);
    } catch (err) {
        console.log(err);
    }
};