

const OptionButton = (props) => {

    const {onEditing,setOnEditing,index,indexEdit,cancleEdit,editabled,onDelete} = props;
    return (
        <div className="h-10 w-full px-1  flex items-center ">
            <button className={` ${onEditing && indexEdit == index ? "" : "hidden"} h-8 w-8 bg-blue-600 rounded-full flex justify-center items-center m-1`} onClick={cancleEdit}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <button className={` ${editabled?"":"hidden"} h-8 w-8 bg-green-700 rounded-full flex justify-center items-center m-1`} onClick={setOnEditing}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="white">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
            </button>
            <button className="h-8 w-8 bg-red-600 rounded-full flex justify-center items-center m-1" onClick={onDelete} >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="white">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
            </button>


        </div>
    );
}

export default OptionButton;