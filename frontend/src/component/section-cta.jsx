function CTA() {
    return (
        <div 
            className="w-full flex flex-col justify-center items-center gap-2.5 py-10 px-4 bg-center bg-cover" 
            style={{ backgroundImage: "url('../src/assets/img/bg-cta.png')" }}
        >
            <div className="w-full max-w-6xl flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16">
                {/* Text section */}
                <div className="flex flex-col justify-center items-center gap-4 text-center md:text-left">
                    <div className="text-[#333c3f] text-lg md:text-xl font-bold font-['Source Sans Pro'] leading-relaxed">
                        Daftar Menjadi Pembaca Sekarang Juga!<br /> ~Buka Buku, Buka Dunia~
                    </div>
                    <div className="flex flex-col gap-3">
                        <ul className="text-left">
                                <li className="flex flex-items">
                                    <img src="../src/assets/img/checklist.png" alt="anim" className="w-7 mr-2" />
                                    <p>Meningkatkan wawasan & pengetahuan</p>
                                </li>
                                <li className="flex flex-items">
                                    <img src="../src/assets/img/checklist.png" alt="anim" className="w-7 mr-2" />
                                    <p>Mengembangkan imajinasi dan kreativitas</p>
                                </li>
                                <li className="flex flex-items">
                                    <img src="../src/assets/img/checklist.png" alt="anim" className="w-7 mr-2" />
                                    <p>Mengurangi stres</p>
                                </li>
                                <li className="flex flex-items items-center">
                                    <img src="../src/assets/img/checklist.png" alt="anim" className="w-7 mr-2"/>
                                    <p>Meningkatkan kemampuan berbahasa</p>
                                </li>
                        </ul>
                    </div>
                </div>

                {/* Image section */}
                <div className="w-full max-w-[250px] h-auto md:max-w-[255px] flex-shrink-0">
                    <img 
                        src="../src/assets/img/img-cta-1.png" 
                        alt="CTA Image" 
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </div>
    );
}

export default CTA;