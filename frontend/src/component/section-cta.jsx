function CTA() {
    return (
        <div 
            className="w-full flex flex-col justify-center items-center gap-2.5 py-10 px-4 bg-center bg-cover" 
            style={{ backgroundImage: "url('../src/assets/img/bg-cta.png')" }}
        >
            <div className="w-full max-w-6xl flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16">
                {/* Text section */}
                <div className="flex flex-col justify-center items-center gap-4 text-center md:text-left">
                    <div className="text-[#333c3f] text-xl md:text-2xl font-bold font-['Source Sans Pro'] leading-relaxed">
                        Daftar Menjadi Pembaca Sekarang Juga.<br />Buka Buku, Buka Dunia.
                    </div>
                    <div className="flex flex-col gap-3">
                        {["Meningkatkan wawasan & pengetahuan", "Mengembangkan imajinasi dan kreativitas", "Mengurangi stres", "Meningkatkan kemampuan berbahasa"].map((text, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <div className="w-4 h-4 p-0.5 bg-[#f8f8f8] rounded-full flex justify-center items-center">
                                    <div className="w-3 h-3 bg-[#333c3f] rounded-full"></div>
                                </div>
                                <div className="text-[#333c3f] text-lg md:text-xl font-semibold">
                                    {text}
                                </div>
                            </div>
                        ))}
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