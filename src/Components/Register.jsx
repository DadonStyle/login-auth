import NotyfContext from '../utill/NotyfContext';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";

export const Register = () => {
    const notyf = useContext(NotyfContext);
    const { register, handleSubmit } = useForm();

    const send = async (credential) =>{
        try{
            console.log(credential)
            const response = await axios.post('http://localhost:8080/register',credential)
            console.log(response)
            notyf.success(response.data)
        }catch(err){
            notyf.error(err.response.data)
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit(send)}>
            <h1>Welcome! Please register</h1>
            <input type="text" placeholder="Email" {...register("email")}/><br></br>
            <input type="text" placeholder="password" {...register("password")}/><br></br>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}