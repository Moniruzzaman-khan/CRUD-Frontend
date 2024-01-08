import './CreateForm.css'
import {useState} from "react";
import axios from "axios";
import {SuccessToast} from "../../helper/ValidationHelper.jsx";
import {ToastContainer} from "react-toastify";
import {useNavigate} from "react-router-dom";
const CreateForm = () => {

    const [ContactName,SetContactName] = useState();
    const [ContactEmail,SetContactEmail] = useState();
    const [Phone,SetPhone] = useState();
    const [Address,SetAddress] = useState();
    const [Pic,SetPic] = useState();
    const navigate = useNavigate()

    const Submit = (e) =>{
        e.preventDefault();
        axios.post("https://orange-tuna-kit.cyclic.app/api/v1/createContact",{ContactName,ContactEmail,Phone,Address,Pic})
            .then(result =>{
                console.log(result)
                SuccessToast("Data Save Success")
                navigate("/");
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div className="login-dark">
                <form onSubmit={Submit}>
                    <h2 className="sr-only">Create Contact</h2>
                    <div className="illustration"><i className="icon ion-ios-locked-outline"></i></div>
                    <label>Name</label>
                    <div className="form-group"><input onChange={(e) => SetContactName(e.target.value)} className="form-control" type="text"
                                                       placeholder="Name"/></div>
                    <label>Email</label>
                    <div className="form-group"><input onChange={(e) => SetContactEmail(e.target.value)} className="form-control" type="email"
                                                       placeholder="Email"/></div>
                    <label>Phone Number</label>
                    <div className="form-group"><input onChange={(e) => SetPhone(e.target.value)} className="form-control" type="text"
                                                       placeholder="Phone Number"/></div>
                    <label>Address</label>
                    <div className="form-group"><input onChange={(e) => SetAddress(e.target.value)} className="form-control" type="text"
                                                       placeholder="Address"/></div>
                    <label>Image</label>
                    <div className="form-group"><input onChange={(e) => SetPic(e.target.value)} className="form-control" type="text"
                                                       placeholder="Image"/></div>
                    <div className="form-group text-center">
                        <button className="btn btn-primary btn-block">Save</button>
                        <ToastContainer />
                    </div>
                   </form>
            </div>
        </div>
    );
};

export default CreateForm;