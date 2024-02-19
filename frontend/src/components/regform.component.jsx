import axios from 'axios';
import {useForm} from 'react-hook-form';
import { Link } from "react-router-dom";
//import './regform.component.css'
export function Registration(){
    const{
        register,
        handleSubmit,
        formState:{errors}

    }=useForm();
    function handleData(values){
        axios({
            method:"post",
            url:"http://127.0.0.1:5000/customerregister",
            data:values,
            
        })
        alert('data saved')
        window.location.reload();
        // alert(JSON.stringify(data))
    }
    return(
        <div className='w-100 container'>
            <div className='row'>
            <div className='col-6 border border-1 border-primary mt-2'>
            <img src={require("../../src/assets/images/regpic.jpg")} width="450px" height="680"></img> 
            </div>
            <div className='col-6 border border-1 border-primary mt-2'>
            <h2 style={{"textAlign": "center", "color": "black" }} className='mb-3'>Sign Up</h2>
            <form onSubmit={handleSubmit((values)=>{handleData(values)})}>
                <div>
                    <label className="form-label mb-3">fullname</label>
                    <input type="text" className="form-control mb-3" {...register("FullName",{required:true})}></input>
                </div>
                <div>
                    <label className="form-label mb-3">Email</label>
                    <input type="email" className="form-control mb-3" {...register("Email",{required:true})}></input>
                </div>
                <div>
                    <label className="form-label mb-3">UserName</label>
                    <input type="text" className="form-control mb-3" {...register("UserName",{required:true})}></input>
                </div>
                <div>
                    <label className="form-label mb-3">Password</label>
                    <input type="password" className="form-control mb-3" {...register("Password",{required:true})}></input>
                </div>
                <div>
                    <label className="form-label mb-3">RepPass</label>
                    <input type="password" className="form-control mb-3" {...register("RepeatPassword",{required:true})}></input>
                </div>
                <div>
                <input type="checkbox" className='mb-3'></input><samp>I agree to the terms of users</samp>
                </div>
                <div>
                    <input type="submit" value="signup" className="btn btn-primary btn-lg mt-1"></input>
                    {/*<input type="submit" value="signin" className="btn btn-light btn-lg mt-4"></input>*/}
                    <Link to="/sighin">Login</Link>
                </div>
            </form>
            </div>
            </div>
        </div>
    )
}
/*import { useRef } from "react"
import './regform.component.css';
import axios from "axios";
export function Registration() {
    const nameref = useRef()
    const emailref = useRef()
    const usernameref = useRef()
    const passwordref = useRef()
    const rpref = useRef()
    function handleSubmit(){
        
        let obj={
            nameref: nameref.current.value,
            emailref: emailref.current.value,
            usernameref: usernameref.current.value,
            passwordref: passwordref.current.value,
            rpref: rpref.current.value,
        
        }
        axios({
            method: 'post',
            url: 'http://127.0.0.1:5000/customerregister',
            data: obj
            /*console.log(data)
        })
        
        console.log(obj)
        alert ("data saved")
    }
 
    return (
        <div class="container"> 
            <form onSubmit={(data)=>handleSubmit(data)}>
                <div className="row">
                    <div className="col-6 border border-1 border-primary rounded img-banner w-25 ">
                    </div>
                    <div className="col-6">
                        <h2 style={{"textAlign": "center", "color": "black" }}>Sign Up</h2>
                        <div class="mb-3">
                            <label  class="form-label">Full Name</label>
                            <input type="text" class="form-control" ref={nameref} placeholder="Name...."></input>
                        </div>
                        <div class="mb-3">
                            <label  class="form-label">Email address</label>
                            <input type="email" class="form-control" ref={emailref} placeholder="Email address...."></input>
                        </div>
                        <div class="mb-3">
                            <label  class="form-label">Username</label>
                            <input type="text" class="form-control" ref={usernameref} placeholder="Username...."></input>
                        </div>
                        <div class="mb-3">
                            <label  class="form-label">Password</label>
                            <input type="password"  class="form-control" ref={passwordref} placeholder="*****"></input>
                        </div>
                        <div class="mb-3">
                            <label  class="form-label">Repeat Password</label>
                            <input type="password"  class="form-control" placeholder="*****" ref={rpref}></input>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" ></input>
                            <label className="form-check-label" for="gridCheck">
                                I agree to the terms of user
                            </label>
                        </div>
                        <div>
                            <input type="submit" value="Submit"></input>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )


}*/