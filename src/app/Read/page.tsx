import Header from "@/app/header";
import Footer from "@/app/footer";
import Image from "next/image";
import backgroundImg from "../../../public/paper.jpeg";


const Read = () => {
    return (
        <div className="relative">
            <div className="absolute w-full h-full top-0 left-0 z-0" style={{ filter: 'blur(3px)' }}>
                <Image
                src={backgroundImg}
                alt="Background Image"
                className="filter brightness-100"
                />
            </div>
            <div className="relative flex flex-col justify-center items-center w-full pt-8 text-white">
                <div className="font-bold text-4xl pt-5 pb-5">
                    <h1 className="read-head-1">
                        works
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Read;