import "/src/App.css";

function Service() {
    return (
        <div id="service" className="scrool-service w-full flex flex-wrap justify-center items-center gap-16 my-12">
            <div className="w-60 h-auto relative flex flex-col items-center">
                <div className="w-60 h-[362px] px-[30px] pt-[135.89px] pb-[136.11px] bg-[#bbcb8a] rounded-3xl shadow-lg backdrop-blur-md flex flex-col justify-center items-center">
                    <div className="text-[#121212] text-[34px] font-bold font-['Source Sans Pro']">2448+</div>
                    <div className="text-[#121212] text-xl font-semibold font-['Source Sans Pro']">jumlah koleksi buku</div>
                </div>
                <img className="w-20 h-auto absolute -top-6" src="../src/assets/img/emot-1.png" />
            </div>
            <div className="w-60 h-auto relative flex flex-col items-center">
                <div className="w-60 h-[362px] px-[30px] pt-[135.89px] pb-[136.11px] bg-[#A9B8F7] rounded-3xl shadow-lg backdrop-blur-md flex flex-col justify-center items-center">
                    <div className="text-[#121212] text-[34px] font-bold font-['Source Sans Pro']">1000+</div>
                    <div className="text-[#121212] text-xl font-semibold font-['Source Sans Pro']">peminjam buku dari dalam & luar daerah</div>
                </div>
                <img className="w-24 h-24 absolute -top-8" src="../src/assets/img/emot-2.png" />
            </div>

            <div className="w-60 h-auto relative flex flex-col items-center">
                <div className="w-60 h-[362px] px-[30px] pt-[135.89px] pb-[136.11px] bg-[#F7C4A9] rounded-3xl shadow-lg backdrop-blur-md flex flex-col justify-center items-center">
                    <div className="text-[#121212] text-[34px] font-bold font-['Source Sans Pro']">10+</div>
                    <div className="text-[#121212] text-xl font-semibold font-['Source Sans Pro']">taman asri untuk baca di tempat</div>
                </div>
                <img className="w-20 h-auto absolute -top-8" src="../src/assets/img/emot-3.png" />
            </div>
        </div>
    );
}

export default Service;
