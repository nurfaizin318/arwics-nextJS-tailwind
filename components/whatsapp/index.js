import Link from 'next/link'


const WhatsappButton = () => {
    return (

        <Link href="https://wa.me/message/UI7UK3GGX3KXK1">
        <button className="w-16 h-16 rounded-full z-50 bg-gray-50 fixed right-5 bottom-8 items-center flex justify-center" >
            <img src="/assets/wa-icon.png" className="w-4/6 h-4/6 " style={{ objectFit: "contain" }} />
        </button>
        </Link>
    );
}

export default WhatsappButton;