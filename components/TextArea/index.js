const TextArea = (props) => {
    return ( 
        <textarea value={props.value} class="px-3 my-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full border-2 border-gray-200" rows="5"></textarea>


     );
}
 
export default TextArea;