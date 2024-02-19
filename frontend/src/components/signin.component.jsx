import { Link } from "react-router-dom";
import {useForm} from 'react-hook-form';
import axios from "axios";
export function Signin(){
    const{
        register,
        handleSubmit,
        formState:{errors}

    }=useForm();
    function handleData(values){
        axios({
            method:"get",
            url:"http://127.0.0.1:5000/customerregister",
            data:values,
            
        })
        alert('data saved')
        window.location.reload();
        // alert(JSON.stringify(data))s
    }

    return(
        <div>
            <div>
                <label className="form-label">UserName</label>
                <input type="text" className="form-control" {...register("Username",{required:true})}></input>
            </div>
            <div>
                <label className="form-label">Email</label>
                <input type="email" className="form-control" {...register("Email",{required:true})}></input>
            </div>
            <div>
                <label className="form-label">Password</label>
                <input type="password" className="form-control" {...register("Password",{required:true})}></input>
            </div>
            <div>
                <input type="submit" value="login" className="btn btn-primary"></input>
                <Link to="/signup">Create a new account</Link>
            </div>
        </div>
    )
}
