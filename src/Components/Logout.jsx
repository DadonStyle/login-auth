import NotyfContext from '../utill/NotyfContext';
import { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";

export const Logout = () => {
    const notyf = useContext(NotyfContext);
    const history = useHistory();
    const [logged] = useState(localStorage.length)
    
    const logout = () =>{
        if(logged>0){
            localStorage.clear()
            notyf.success('logged out successfully')
            history.push("/login")
            return <div></div>
        }else{
            notyf.error('To logout you need to login first!')
            history.push("/login")
            return <div></div>
        }
    }
    
    return(
        <div>
          {logout()} //why it renders twice ?
        </div>
    )
}