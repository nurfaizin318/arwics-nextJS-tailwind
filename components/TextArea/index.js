const TextArea = (props) => {
    return ( 
        <textarea 
        value={props.value} 
        className="px-3 my-1 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full border-2 border-gray-200" 
        rows="7"
        onChange={props.onChange}>

        </textarea>
        

     );
}
 
export default TextArea;