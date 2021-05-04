const Textinputs = (props) => {
    return ( 
        <input 
        onChange={props.onChange}
        value={props.value}
        type="text" 
        name={props.name}
        placeholder={props.placeholder} 
        className="px-3 my-1 py-3 placeholder-blueGray-300 text-blueGray-600 relative text-gray-700 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full border-2 border-gray-100" />
     );
}
 
export default Textinputs;