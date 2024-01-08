import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import './UpdateForm.css'
const UpdateForm = () => {

    const {id} = useParams()
    const [ContactName,setName] = useState()
    const [ContactEmail,setEmail] = useState()
    const [Phone,setPhone] = useState()
    const [Address,setAddress] = useState()
    const [Pic,setPic] = useState()
    const navigate = useNavigate()

    useEffect(()=> {
        axios.get('https://orange-tuna-kit.cyclic.app/api/v1/readContactById/'+id)
            .then(result => {console.log(result)
                setName(result.data[0].ContactName)
                setEmail(result.data[0].ContactEmail)
                setPhone(result.data[0].Phone)
                setAddress(result.data[0].Address)
                setPic(result.data[0].Pic)
            })
            .catch(err => console.log(err))
    },[])


    const Update = (e) =>{
        e.preventDefault();
        axios.post("https://drab-cyan-cougar-tutu.cyclic.app/api/v1/updateContact/"+id,{ContactName,ContactEmail,Phone,Address,Pic})
            .then(result =>{
                console.log(result)
                navigate("/")
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <div className="login-dark">
                <form onSubmit={Update}>
                    <h2 className="sr-only">Update Contact</h2>
                    <div className="illustration"><i className="icon ion-ios-locked-outline"></i></div>
                    <label>Name</label>
                    <div className="form-group"><input
                        className="form-control" type="text"
                        placeholder="Name" value={ContactName}
                        onChange={(e) => setName(e.target.value)} />
                    </div>
                    <label>Email</label>
                    <div className="form-group"><input
                        className="form-control" type="email"
                        placeholder="Email" value={ContactEmail}
                        onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <label>Phone Number</label>
                    <div className="form-group"><input
                        className="form-control" type="text"
                        placeholder="Phone Number" value={Phone}
                        onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <label>Address</label>
                    <div className="form-group"><input
                        className="form-control" type="text"
                        placeholder="Address" value={Address}
                        onChange={(e) => setAddress(e.target.value)} /></div>
                    <label>Image</label>
                    <div className="form-group"><input
                        className="form-control" type="text"
                        placeholder="Image" value={Pic}
                        onChange={(e) => setPic(e.target.value)} /></div>
                    <div className="form-group text-center">
                        <button className="btn btn-primary btn-block">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateForm;