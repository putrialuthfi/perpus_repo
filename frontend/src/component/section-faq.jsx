import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "/src/App.css"

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Apa itu SiPerpus?",
      answer:
        "SiPerpus ialah sebuah website perpustakaan yang dirancang untuk mempermudah proses pengelolaan dan pelayanan perpustakaan. Melalui platform ini, pengguna dapat dengan mudah mencari, meminjam buku, memeriksa ketersediaan buku, serta mengakses riwayat peminjaman buku.",
    },
    {
      question: "Layanan apa saja yang tersedia di SiPerpus?",
      answer:
        "SiPerpus menyediakan layanan peminjaman buku secara online, akses ke buku digital (e-book), dan berita informasi buku terbaru.",
    },
    {
      question: "Apakah selain warga domisili Kabupaten Bekasi dapat ikut meminjam buku?",
      answer:
        "Ya, tentu saja bisa. Selagi peminjam sudah memiliki akun, siapapun bisa menggunakan fitur yang tersedia.",
    },
    {
      question: "Apakah ada persyaratan dalam meminjam buku di SiPerpus?",
      answer:
        "Cukup dengan membuat akun di SiPerpus, siapapun bisa melakukan peminjaman buku.",
    },
    {
      question: "Keterlambatan dalam pengembalian buku apakah dikenakan sanksi?",
      answer:
        "Keterlambatan dalam pengembalian buku akan dikenakan denda senilai Rp5000.00;- per bukunya.",
    },
  ];

  return (
    <>
        <div className="text-[#333c3f] text-xl md:text-2xl font-bold font-['Source Sans Pro'] my-6">
                <p className="text-[#27A37F] font-semibold mb-2">Tanya SiPerpus</p>
                Frequently Asked Question (FAQ) 😊
        </div>
        <div className="flex flex-row gap-3 w-full my-4">
            <div className="w-1/5  pt-20 flex justify-end">
                {/* <img 
                    src="../src/assets/img/illus-faq-1.png" 
                    alt="CTA Image" 
                    className="w-3/5 h-auto"
                />     */}
            </div>             
            <div className="w-full lg:w-3/5 mx-auto text-left">
            {faqData.map((faq, index) => (
                <div key={index} className="border border-[#2A7C76] my-4 py-3 px-4 rounded-2xl">
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleFaq(index)}
                    >
                        <h3 className="text-sm font-semibold">{faq.question}</h3>
                        {activeIndex === index ? (
                            <FaChevronUp className="text-gray-500" />
                        ) : (
                            <FaChevronDown className="text-gray-500" />
                        )}
                    </div>
                    <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                        {activeIndex === index && (
                            <p className="mt-3 text-gray-600">{faq.answer}</p>
                        )}
                    </div>
                </div>
            ))}
            </div>
            <div className="w-1/5 pt-20">
                {/* <img 
                    src="../src/assets/img/illus-faq-3.png" 
                    alt="Illus FAQ" 
                    className="w-2/5  h-auto"
                />     */}
            </div>  
        </div>
    </>
  );
};

export default FAQ;