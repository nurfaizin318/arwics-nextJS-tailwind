import React,{useState,useEffect} from 'react';


const ButtonTotop = () => {


  const [visible, setVisible] = useState(false);



  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


    useEffect(() => {
      document.addEventListener("scroll", () => {
        const handleVisible = window.scrollY < 200 ? false : true;
        setVisible(handleVisible)
        return () => {
          window.removeEventListener("scroll", handleScrollEvent, true);
     }
      })
    
      }, []);


      
    return (
        <button
            onClick={scrollToTop}
            className={`fixed ${visible ? "visible" : "invisible"} transition duration-700 right-10 bottom-20 z-50 bg-gray-800 h-12 w-12 flex justify-center items-center rounded-full  p-3 shadow-md `}>
           <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="#FAFAFA">
  <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" fillRule="evenodd" />
</svg>
        </button>
    );
}

export default ButtonTotop;