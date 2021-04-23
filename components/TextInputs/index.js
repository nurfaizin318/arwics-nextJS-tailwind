const Textinputs = (props) => {
    return ( 
        <input 
        value={props.value}
        type="text" 
        placeholder={props.placeholder} 
        className="px-3 my-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full border-2 border-gray-100" />
     );
}
 
export default Textinputs;