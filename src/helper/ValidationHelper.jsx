import {toast} from "react-toastify";

class ValidationHelper{
    isEmpty(value){
        return value.length === 0;
    }

    SuccessToast(msg){
        toast.success(msg, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    ErrorToast(msg){
        toast.error(msg, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
}

export const {isEmpty,SuccessToast,ErrorToast} = new ValidationHelper();