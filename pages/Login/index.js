


const Login = () => {
    return (
        <div className="h-screen w-screen bg-blue-400 flex justify-center items-center ">
            <div className=" lg:w-1/2 xs:w-full md:w-1/3 xl:w-1/4 h-96 bg-gray-50 rounded-lg p-5 text-center mx-1 flex justify-center items-center">
                <div>
                    <span className=" text-gray-700 text-3xl">
                        Login
                     </span>
                    <form>
                        <input type="text" placeholder="Username / Email" className="px-3 my-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" />
                        <input type="text" placeholder="Password" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" />
                        <button type="submit" className="bg-blue-400 w-32 h-12 rounded-lg m-5 text-gray-50 shadow-lg">
                            Submit
                     </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;