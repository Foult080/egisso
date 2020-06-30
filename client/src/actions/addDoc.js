import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

export const addDoc = ({ collection }) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  const body = JSON.stringify(collection);
  try {
    const res = axios
      .post("/api/controller", body, config)
      .then(res => {
        console.log(res.headers);
        
        const url = window.URL.createObjectURL(new Blob([res.data]));
        console.log(res.data);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', uuidv4()+'.xml');
        document.body.appendChild(link);
        link.click();
        
      });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};