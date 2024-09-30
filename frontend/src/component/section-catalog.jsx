function SectionCatalog() {
  return (
    <div className="grid grid-cols-5 gap-4 mt-6 px-8">
        <div className="border rounded-2xl h-76">
          <div className="relative h-56">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="card-image"
              className="object-cover w-full h-full rounded-t-2xl"
            />
          </div>
          <div className="p-4">
            <div className="text-lg font-semibold text-blue-gray mb-2">
              UI/UX Review Check
            </div>
            <div>
              The place is close to Barceloneta Beach and bus stop just 2 min
              by walk and near to &quot;Naviglio&quot; where you can enjoy the
              main night life in Barcelona.
            </div>
            <div className="pt-4 flex flex-items">
              <button className="bg-[#27A37F] text-white hover:bg-blue-700 font-bold py-2 px-4 rounded">
                Read More
              </button>
              <button className="bg-[#27A37F] text-white hover:bg-blue-700 font-bold py-2 px-4 rounded">
                Read More
              </button>
            </div>
          </div>
        </div>
    </div>
  );
}

export default SectionCatalog;
