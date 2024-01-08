import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import FullscreenLoader from "../Common/FullscreenLoader.jsx";
import {SuccessToast} from "../../helper/ValidationHelper.jsx";
import {ToastContainer} from "react-toastify";

const ViewAll = () => {

    const [contacts,setContacts] = useState([])

    useEffect(()=> {
        axios.get("https://orange-tuna-kit.cyclic.app/api/v1/readContact")
            .then(result => setContacts(result.data))
            .catch(err => console.log(err))
    },[])

    const handleDelete = (id) =>{
        axios.get("https://orange-tuna-kit.cyclic.app/api/v1/deleteContact/"+id)
            .then(res => {console.log(res)
                    SuccessToast("Delete Success")
                window.location.reload()
                })
            .catch(err => console.log(err))
    }


    if(contacts.length>=0){
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 mt-2 mb-2">
                        <div className="card list-card">
                            <div className="card-header pb-0">
                                <h4>Contact List</h4>
                            </div>
                            <div className="card-body">
                                <table className="table align-content-center justify-content-center">
                                    <thead>
                                    <tr>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Contacts</th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Numbers</th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Addresses</th>
                                        <th className="text-secondary opacity-7">Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        contacts.map((cont)=>{
                                            return(
                                                // eslint-disable-next-line react/jsx-key
                                                <tr>
                                                    <td>
                                                        <div className="d-flex  animated fadeInUp px-2 py-1">
                                                            <div>
                                                                <img src={cont.Pic} className="avatar avatar-sm me-3 w-50" alt="user1"/>
                                                            </div>
                                                            <div className="d-flex flex-column justify-content-center">
                                                                <h6 className="mb-0 text-sm">{cont.ContactName}</h6>
                                                                <p className="text-xs text-secondary mb-0">{cont.ContactEmail}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <h6 className="mb-0 animated fadeInUp text-sm"> {cont.Phone}</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="mb-0 animated fadeInUp text-sm"> {cont.Address}</h6>
                                                    </td>
                                                    <td>
                                                        <div className="btn-group animated fadeInUp" role="group" aria-label="Basic example">
                                                            <button className="btn btn-danger rounded w-50 m-2" onClick={() => handleDelete(cont._id)}>Delete</button>
                                                            <Link to={`/update/${cont._id}`} className="btn btn-primary rounded w-50 m-2">Update</Link>
                                                            <ToastContainer/>
                                                        </div>
                                                    </td>

                                                </tr>
                                            )
                                        })

                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else{
        return (
            <div>
                <FullscreenLoader/>
            </div>
        )
    }
};

export default ViewAll;