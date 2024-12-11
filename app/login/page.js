"use client";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function Login() {
    const { register, handleSubmit } = useForm();

    
    const checkUser = async (user1) => {
        const loginData = {
            user_email: user1.user_email,
            user_password: user1.user_password,
            action: "login",
        };
    
        axios.post("/api/auth", loginData)
            .then((resp) => {
                if (resp.data.success) {
                    console.log("User authenticated");
                    toast.success("User authenticated successfully");
                } else {
                    toast.error("Email not found or incorrect password");
                }
            })
            .catch((err) => {
                console.error("Error during login:", err);
                toast.error("An error occurred while processing your request");
            });
    };
    

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center text-center overflow-hidden"
        style={{
            height: "90vh",
            background: "#9C92A3",
            color: "#fff",
        }} >
            <form onSubmit={handleSubmit(checkUser)}>

                <div className="mb-3">
                <label className="form-label">Email</label> <br />
                <input className="form-control"
                {...register("user_email")} placeholder="Enter your email" />
                </div>

              <div className="mb-3">
                <label className="form-label">Password</label> <br />
                <input className="form-control"
                    {...register("user_password")}
                    type="password"
                    placeholder="Enter your password"
                /> </div>
        
                <button  type="submit" className="btn w-100 " style={{backgroundColor : "#4F3130" , color : 'white'}}>LOGIN</button>
            </form>
        </div>
    );
}
