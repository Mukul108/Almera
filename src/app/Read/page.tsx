'use client'
import Header from "../header";
import Footer from "../footer";
import Image from "next/legacy/image";
import Animation from "../../styles/ani2.json"
import backgroundImg from "../../../public/bg.png";
import Lottie from 'lottie-react';
import Read_items from "../../components/read_items";
import read from '../../styles/Read.module.css'
import Bgread from '../../components/bgread'

const Read = () => {
    return (
    <div className={read.comb}>
            <div className="absolute w-full h-full top-0 left-0 z-0 overflow-hidden" style={{ filter: 'blur(3px)' }}>
                    <Image
                    src={backgroundImg}
                    alt="Background Image"
                    objectFit="cover"
                    className="filter brightness-100"
                    />
                    {/* GRADIENT BG */}
                </div>
                <div className="relative flex flex-col justify-center items-center w-full pt-8 text-white">
                    <Header/>
                    <div className="font-bold text-4xl pt-5 pb-5 flex">
                        <p className="h-full justify-center ">Explore New Ideas...</p>
                    </div>
                    <div className="w-full justify-center items-center">
                            <Read_items/>
                    </div>
                    <Footer/>
            </div>
        </div>
    )
}

export default Read;