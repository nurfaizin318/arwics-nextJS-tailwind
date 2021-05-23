import React,{useState} from 'react'

const SuccessPopUp = ({visible}) => {


   
    const handleClick= async ()=>{
        await setVisibleToast(false);
        await window.location.reload()

    }
    const [visibleToast,setVisibleToast]= useState(visible)

    return (
        <div className={`${visibleToast?"":"hidden"} w-44 h-12 fixed left-10 bottom-10 bg-green-500 z-50  flex `}>
            <div className="h-full w-3/4 text-gray-50 flex justify-center items-center">
                Success
      </div>
            <button onClick={handleClick} className="h-full w-1/4 text-gray-50 flex justify-center items-center text-2xl bg-green-600">
                x
      </button>
        </div>
    );
}

export default SuccessPopUp;