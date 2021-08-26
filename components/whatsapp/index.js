import Link from 'next/link'


const WhatsappButton = () => {
    return (

        <Link href="https://api.whatsapp.com/send?phone=6281293652526&text=nama%20:%0AInformasi%20yang%20ingin%20ditanyakan%20:">
        <button className="w-16 h-16 rounded-full z-50  fixed right-5 bottom-8 items-center flex justify-center" style={{backgroundColor:"#25D366   "}}>
            <img src="/assets/wa-icon.png" className="w-4/6 h-4/6 " style={{ objectFit: "contain" }} />
        </button>
        </Link>
    );
}

export default WhatsappButton;