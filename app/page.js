import Link from "next/link";

  export const metadata = {
    title: "Zeyad Maher",
    description: "The personal website of Zeyad Maher - Web Developer specialized in modern web technologies.",
    keywords: ["Zeyad Maher", "Web Developer", "Frontend Developer", "Next.js", "React", "Portfolio"],
    authors: [{ name: "Zeyad Maher" }],
    robots: "index, follow",
    openGraph: {
      title: "Zeyad Maher",
      description: "Explore the personal website and portfolio of Zeyad Maher, a passionate web developer.",
      url: "https://zeyad-profile.vercel.app/", // غيّر هذا لرابط موقعك الحقيقي
      siteName: "Zeyad Maher",
      locale: "en_US",
      type: "website",
    },
    icons: {
      icon: "/favicon.ico", // تأكد أن هذا الملف موجود داخل مجلد public
    },
  };

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        style={{ backgroundColor: "#212121" }}
        className="flex flex-col lg:flex-row justify-evenly items-center p-5 lg:p-10 min-h-screen text-white relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-400 rounded-full animate-ping"></div>
        </div>

        <div className="w-full lg:w-72 xl:w-96 z-10 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl pt-4 font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent animate-pulse">
            Zeyad
          </h1>
          <h1 className="pl-0 lg:pl-2 mb-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent animate-pulse">
            Maher
          </h1>
          <p className="mt-4 text-base sm:text-lg leading-relaxed opacity-90 hover:opacity-100 transition-opacity duration-300">
            I am a passionate Front-End Web Developer with experience in
            building responsive and modern websites using HTML, CSS, JavaScript,
            Bootstrap, Tailwind CSS, React, and Next.js. I enjoy turning ideas
            into reality through clean, efficient, and user-friendly web
            interfaces. I am always eager to learn new technologies and improve
            my skills to deliver high-quality digital solutions
          </p>
          <div className="mt-8">
       <Link href={'/projects'}>
              <button className="cssbuttons-io-button">
                view projects
                <div className="icon">
                  <svg
                    height={24}
                    width={24}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </button>
       </Link>
          </div>
        </div>

        <div className="relative z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
            <img
              src="/photos/IMG-20250613-WA0000.jpg"
              alt="profile img"
              className="relative z-10 transition-transform duration-500 hover:scale-105 hover:rotate-2"
              style={{
                height: "300px",
                width: "300px",
                borderRadius: "50%",
                border: "solid 3px #FFB70F",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>

      {/* Hobbies Section */}
      <div
        style={{ backgroundColor: "#f8f9fa" , padding: '0'}}
        className="flex flex-col justify-evenly text-gray-800 py-16 px-4 sm:px-8"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 mt-15 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            This is my hobbies
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center group cursor-pointer transform transition-all duration-300 hover:scale-110 hover:-translate-y-2">
            <div className="bg-white rounded-full p-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-300 mb-4">
              <img
                src="/photos/coding.png"
                className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-300 group-hover:rotate-12"
                alt="Frontend Developer"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-1">
              Front-end
            </h3>
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-700">
              Developer
            </h3>
          </div>

          <div className="flex flex-col items-center text-center group cursor-pointer transform transition-all duration-300 hover:scale-110 hover:-translate-y-2">
            <div className="bg-white rounded-full p-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-300 mb-4">
              <img
                src="/photos/photo.png"
                className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-300 group-hover:rotate-12"
                alt="Photo Editor"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-emerald-700 mb-1">
              Photo
            </h3>
            <h3 className="text-xl sm:text-2xl font-semibold text-emerald-700">
              Editor
            </h3>
          </div>

          <div className="flex flex-col items-center text-center group cursor-pointer transform transition-all duration-300 hover:scale-110 hover:-translate-y-2">
            <div className="bg-white rounded-full p-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-300 mb-4">
              <img
                src="/photos/video.png"
                className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-300 group-hover:rotate-12"
                alt="Video Editor"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-indigo-700 mb-1">
              Video
            </h3>
            <h3 className="text-xl sm:text-2xl font-semibold text-indigo-700">
              Editor
            </h3>
          </div>

          <div className="flex flex-col items-center text-center group cursor-pointer transform transition-all duration-300 hover:scale-110 hover:-translate-y-2">
            <div className="bg-white rounded-full p-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-300 mb-4">
              <img
                src="/photos/3D.png"
                className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-300 group-hover:rotate-12"
                alt="3D Creator"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-amber-600 mb-1">
              3D
            </h3>
            <h3 className="text-xl sm:text-2xl font-semibold text-amber-600">
              Creator
            </h3>
          </div>


        </div>




        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 mt-15 bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent">
            This is my programme language
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center group cursor-pointer transform transition-all duration-300 hover:scale-110 hover:-translate-y-2">
            <div className="bg-white rounded-full p-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-300 mb-4">
              <img
                src="/photos/gif/html (1).gif"
                className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-300 group-hover:rotate-12"
                alt="Frontend Developer"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-1">
              Html
            </h3>
          </div>

          <div className="flex flex-col items-center text-center group cursor-pointer transform transition-all duration-300 hover:scale-110 hover:-translate-y-2">
            <div className="bg-white rounded-full p-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-300 mb-4">
              <img
                src="/photos/gif/css.gif"
                className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-300 group-hover:rotate-12"
                alt="Photo Editor"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-emerald-700 mb-1">
              Css
            </h3>

          </div>

          <div className="flex flex-col items-center text-center group cursor-pointer transform transition-all duration-300 hover:scale-110 hover:-translate-y-2">
            <div className="bg-white rounded-full p-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-300 mb-4">
              <img
                src="/photos/js.png"
                className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-300 group-hover:rotate-12"
                alt="Video Editor"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-indigo-700 mb-1">
              Js
            </h3>
          </div>

          <div className="flex flex-col items-center text-center group cursor-pointer transform transition-all duration-300 hover:scale-110 hover:-translate-y-2">
            <div className="bg-white rounded-full p-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-300 mb-4">
              <img
                src="/photos/python.png"
                className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-300 group-hover:rotate-12"
                alt="3D Creator"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-amber-600 mb-1">
              Python
            </h3>
          </div>


        </div>






        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 mt-15 bg-gradient-to-r from-amber-300 to-amber-600 bg-clip-text text-transparent">
            This is my frameworks
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-300 to-amber-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center group cursor-pointer transform transition-all duration-300 hover:scale-110 hover:-translate-y-2">
            <div className="bg-white rounded-full p-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-300 mb-4">
              <img
                src="/photos/gif/physics.gif"
                className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-300 group-hover:rotate-12"
                alt="Frontend Developer"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-1">
              React
            </h3>
          </div>

          <div className="flex flex-col items-center text-center group cursor-pointer transform transition-all duration-300 hover:scale-110 hover:-translate-y-2">
            <div className="bg-white rounded-full p-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-300 mb-4">
              <img
                src="/photos/next.png"
                className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-300 group-hover:rotate-12"
                alt="Photo Editor"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-emerald-700 mb-1">
              Next Js
            </h3>

          </div>

          <div className="flex flex-col items-center text-center group cursor-pointer transform transition-all duration-300 hover:scale-110 hover:-translate-y-2">
            <div className="bg-white rounded-full p-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-300 mb-4">
              <img
                src="/photos/tailwind-css.svg"
                className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-300 group-hover:rotate-12"
                alt="Video Editor"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-indigo-700 mb-1">
              Tailwind Css
            </h3>
          </div>

          <div className="flex flex-col items-center text-center group cursor-pointer transform transition-all duration-300 hover:scale-110 hover:-translate-y-2">
            <div className="bg-white rounded-full p-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-300 mb-4">
              <img
                src="/photos/bootstrap-5-logo-icon.webp"
                className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-300 group-hover:rotate-12"
                alt="3D Creator"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-amber-600 mb-1">
              Bootstrap
            </h3>
          </div>


        </div>




        {/* Tools Section */}
        <div className="mt-20">
          <div className="text-center ">
            <h1 className="text-4xl mb-1 mt-5 sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              This is tools
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-teal-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center justify-center">
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

            <div  className="flex flex-col items-center justify-center">
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
