"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function Signup() {
    const { register, handleSubmit } = useForm();
    let router = useRouter();

    const saveUser = async (user) => {
        try {
            console.log(user);
            const response = await axios.post("/api/auth", user);
            console.log(response.data);

            if(response.data.success){
                router.push('/login')
            }else{
                alert('signup failed please try again')
            }
        } catch (error) {
            console.error('Error saving user:', error);
        }
    };

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center text-center overflow-hidden"
        style={{
            height: "90vh",
            background: "linear-gradient(to right, #6a11cb, #2575fc)",
            color: "#fff",
        }}>
            <form onSubmit={handleSubmit(saveUser)}>

                <div className="mb-3">
                <label className="form-label">Business Email Address</label> <br />
                <input className="form-control px-5 py-2 text-center"
                    {...register("businessEmailAddress")}
                    placeholder="Enter your business email"
                />
                </div>

                <div className="mb-3">
                <label className="form-label">Company Name</label> <br />
                <input className="form-control px-4 py-2 text-center"
                    {...register("companyName")}
                    placeholder="Enter your company name"
                />
                </div>

               <div className="mb-3">
                <label className="form-label">Full Name</label> <br />
                <input className="form-control px-5 py-2 text-center"
                    {...register("fullName")}
                    placeholder="Enter your full name"
                />
                </div >
                    
                    <div className="mb-3">
                <label className="form-label">Email</label> <br />
                <input className="form-control px-5 py-2 text-center"
                    {...register("user_email")}
                    placeholder="Enter your email"
                /> 
                </div>
                
                <div className="mb-3">
                <label className="form-label">Password</label> <br />
                <input className="form-control px-5 py-2 text-center" 
                    {...register("user_password")}
                    type="password"
                    placeholder="Enter your password"
                /> 
                </div>

                <br />
                <button type="submit" className="btn w-100 " style={{backgroundColor : "#4F3130" , color : 'white'}}>Signup</button>
            </form>
        </div>
    );
}
