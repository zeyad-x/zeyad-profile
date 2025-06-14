import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
     

      {/* Hobbies Section */}
      <div
        style={{ backgroundColor: "#f8f9fa" , padding: '0'}}
        className="flex flex-col justify-evenly text-gray-800 py-16 px-4 sm:px-8"
      >
   
        {/* Tools Section */}
        <div className="mt-5">
          <div className="text-center ">
            <h1 className="text-7xl mb-1 mt-5 sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              Projects
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-teal-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto">
            <Link href={'/tools/to-do'}>
            <div className="flex flex-col items-center justify-center rotate-z-2">
              <div className="e-card playing relative overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl w-full max-w-sm">
                <div className="image absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-20"></div>
                <div className="wave absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-300 to-purple-300 animate-pulse"></div>
                <div className="wave absolute bottom-1 left-0 w-full h-2 bg-gradient-to-r from-purple-300 to-blue-300 animate-pulse"></div>
                <div className="wave absolute bottom-2 left-0 w-full h-2 bg-gradient-to-r from-blue-300 to-purple-300 animate-pulse"></div>

                <div className="infotop relative z-10 p-8 text-white text-center">
                  <div className="flex justify-center mb-4">
                    <div style={{ transform: "translateY(-7rem)" }} className="bg-white rounded-full p-4 shadow-lg">
                      <img 
                        src="/photos/list.png"
                        className="w-16 h-16 sm:w-20 sm:h-20"
                        alt="To Do List"
                      />
                    </div>
                  </div>
                  <h3 style={{ transform: "translateY(-7rem)" }} className="text-2xl sm:text-3xl font-bold mb-4">
                    To Do List
                  </h3>
                  <p style={{ transform: "translateY(-7rem)" }} className="text-sm sm:text-base opacity-90 leading-relaxed">
                    نظام قائمة المهام الخاص بي يساعدك على تنظيم يومك وزيادة
                    إنتاجيتك بسهولة
                  </p>
                </div>
              </div>
            </div>
            </Link>

          <Link href={'/tools/photo-edit'}>
              <div  className="flex flex-col items-center justify-center rotate-z-2">
                <div className="e-card playing relative overflow-hidden bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl w-full max-w-sm">
                  <div className="image absolute inset-0 bg-gradient-to-br from-green-400 to-teal-500 opacity-20"></div>
                  <div className="wave absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-green-300 to-teal-300 animate-pulse"></div>
                  <div className="wave absolute bottom-1 left-0 w-full h-2 bg-gradient-to-r from-teal-300 to-green-300 animate-pulse"></div>
                  <div className="wave absolute bottom-2 left-0 w-full h-2 bg-gradient-to-r from-green-300 to-teal-300 animate-pulse"></div>
  
                  <div className="infotop relative z-10 p-8 text-white text-center">
                    <div className="flex justify-center mb-4">
                      <div style={{ transform: "translateY(-7rem)" }} className="bg-white rounded-full p-4 shadow-lg">
                        <img 
                          src="/photos/editp.png"
                          className="w-16 h-16 sm:w-20 sm:h-20"
                          alt="Photo Edit Color"
                        />
                      </div>
                    </div>
                    <h3 style={{ transform: "translateY(-7rem)" }} className="text-2xl sm:text-3xl font-bold mb-2">
                      Photo Edit
                    </h3>
                    <h3 style={{ transform: "translateY(-7rem)" }} className="text-2xl sm:text-3xl font-bold mb-4">Color</h3>
                    <p style={{ transform: "translateY(-7rem)" }} className="text-sm sm:text-base opacity-90 leading-relaxed">
                      برنامج بسيط لمعالجه الوان الصور
                    </p>
                  </div>
                </div>
              </div>
          </Link>

{/* <div className="animate-rotate animate-duration-500 w-full px-4 py-2 rounded-md cursor-pointer transition-all duration-300 ease-out hover:scale-100 transform rotate-[90deg] opacity-50"></div> */}


          <Link href={'/projects/pry-time'}>
              <div  className="flex flex-col items-center justify-center  rotate-3dg rotate-z-2 ">
                <div className="e-card playing relative overflow-hidden bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl w-full max-w-sm">
                  <div className="image absolute inset-0 bg-gradient-to-br from-green-400 to-teal-500 opacity-20"></div>
                  <div className="wave absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-green-300 to-teal-300 animate-pulse"></div>
                  <div className="wave absolute bottom-1 left-0 w-full h-2 bg-gradient-to-r from-teal-300 to-green-300 animate-pulse"></div>
                  <div className="wave absolute bottom-2 left-0 w-full h-2 bg-gradient-to-r from-green-300 to-teal-300 animate-pulse"></div>
  
                  <div className="infotop relative z-10 p-8 text-white text-center">
                    <div className="flex justify-center mb-4">
                      <div style={{ transform: "translateY(-7rem)" }} className="bg-white rounded-full p-4 shadow-lg">
                        <img 
                          src="/photos/mosque.png"
                          className="w-16 h-16 sm:w-20 sm:h-20"
                          alt="Photo Edit Color"
                        />
                      </div>
                    </div>
                    <h3 style={{ transform: "translateY(-7rem)" }} className="text-2xl sm:text-3xl font-bold mb-2">
                      Pry
                    </h3>
                    <h3 style={{ transform: "translateY(-7rem)" }} className="text-2xl sm:text-3xl font-bold mb-4">Time</h3>
                    <p style={{ transform: "translateY(-7rem)" }} className="text-sm sm:text-base opacity-90 leading-relaxed">
                      تطبيق لعرض اوقات الصلاه
                    </p>
                  </div>
                </div>
              </div>
          </Link>

      



          </div>
        </div>
           <img
              src="/photos/footer-banner.webp"
              className=""
              style={{ width: "100%" }}
            />
      </div>


    </div>
  );
}
