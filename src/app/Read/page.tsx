import Header from "../header";
import Footer from "../footer";
import Image from "next/legacy/image";
import backgroundImg from "../../../public/paper.jpeg";
import Read_items from "../../components/read_items";

const Read = () => {
    return (
        <div className="relative">
            <div className="absolute w-full h-full top-0 left-0 z-0" style={{ filter: 'blur(3px)' }}>
                <Image
                src={backgroundImg}
                alt="Background Image"
                objectFit="cover"
                className="filter brightness-100"
                />
            </div>
            <div className="relative flex flex-col justify-center items-center w-full pt-8 text-white">
                <Header/>
                <div className="font-bold text-4xl pt-5 pb-5">
                    <h1 className="read-head-1">
                        works
                    </h1>
                    {/* <div>
                        <Read_items/>
                    </div> */}
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Read;