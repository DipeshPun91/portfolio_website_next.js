import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MyService() {
  return (
    <>
      <Header />
      <section>
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap justify-center lg:w-3/5 mx-auto border-b mb-10 border-gray-200">
            <div className="rounded-lg p-6 m-4 flex sm:flex-row flex-col items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="effect-inner sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-green-100 text-accent flex-shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width={60}
                  height={60}
                >
                  <path
                    d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h1 className="text-4xl sm:text-5xl mb-4 font-bold uppercase title">
                  01.
                </h1>
                <h2 className="text-2xl sm:text-3xl mb-4 font-semibold uppercase">
                  Web Development
                </h2>
                <p className="leading-relaxed text-base">
                  Creating dynamic, responsive websites and applications to meet
                  diverse business needs.
                </p>
              </div>
            </div>

            <div className="rounded-lg p-6 m-4 flex sm:flex-row flex-col items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h1 className="text-4xl sm:text-5xl mb-4 font-bold uppercase title">
                  02.
                </h1>
                <h2 className="text-2xl sm:text-3xl mb-4 font-semibold uppercase">
                  UI/UX Design
                </h2>
                <p className="leading-relaxed text-base">
                  Crafting intuitive and engaging user interfaces to enhance
                  user experiences.
                </p>
              </div>
              <div className="effect-inner sm:w-32 sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-green-100 text-accent flex-shrink-0">
                <svg
                  viewBox="0 0 2050 2050"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  width={70}
                  height={70}
                >
                  <path d="M696.3,1060.9l.3-.2a114.1,114.1,0,0,1,161.5,0l.6.5,85.7,88.7,204.9-204.8a114.3,114.3,0,0,1,161.5,0l275.3,275.7V654.6c0-113.4-92.3-205.7-205.7-205.7H669.6c-113.4,0-205.7,92.3-205.7,205.7v642.7ZM809.9,668.7a82.2,82.2,0,1,1-82.2,82.2A82.2,82.2,0,0,1,809.9,668.7Z" />
                  <path d="M794.3,1124.1a24.3,24.3,0,0,0-34,.1L465.8,1423.6c13.8,100.2,99.9,177.5,203.8,177.5h585.8Z" />
                  <path d="M1247.2,1008.7a24.5,24.5,0,0,0-34.3,0l-205.9,206,373.5,386.4c113.4,0,205.6-92.3,205.6-205.7v-47.2Z" />
                </svg>
              </div>
            </div>

            <div className="rounded-lg p-6 m-4 flex sm:flex-row flex-col items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="effect-inner sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-green-100 text-accent flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  width={60}
                  height={60}
                >
                  <path d="M61.936,345.186h388.128c14.81,0,26.822-12.019,26.822-26.828V89.967c0-14.797-12.012-26.81-26.822-26.81H61.936c-14.81,0-26.81,12.012-26.81,26.81v228.39C35.127,333.167,47.126,345.186,61.936,345.186z M76.126,99.189h359.749v203.649H76.126V99.189z" />
                  <path d="M508.025,419.609l-47.841-42.468c-3.076-2.722-7.5-4.266-12.171-4.266H63.98c-4.664,0-9.095,1.544-12.164,4.266L3.968,419.609C1.405,421.874,0,424.792,0,427.811v14.797c0,3.456,3.608,6.234,8.064,6.234h495.874c4.468,0,8.063-2.778,8.063-6.234v-14.797C512,424.792,510.588,421.874,508.025,419.609z M201.137,424.621l13.848-18.721h87.733l13.829,18.721H201.137z" />
                  <path d="M189.143,200.96l-4.442-0.633c-11.374-1.588-15.449-5.55-15.449-11.354c0-6.545,4.69-11.241,13.221-11.241c7.038,0,13.342,2.095,20.139,6.544l1.728-0.373l5.936-9.146l-0.253-1.721c-6.671-5.069-16.683-8.392-27.177-8.392c-17.297,0-28.417,10.113-28.417,25.322c0,13.956,9.139,21.74,25.322,23.962l4.456,0.62c11.608,1.601,15.31,5.55,15.31,11.607c0,7.032-5.804,12.108-15.81,12.108c-9.392,0-17.423-4.57-22.854-8.886l-1.728,0.114l-7.664,8.899l0.246,1.861c6.551,6.17,18.538,11.101,30.886,11.101c20.892,0,31.638-11.101,31.638-26.05C214.232,210.833,205.327,203.168,189.143,200.96z" />
                  <polygon points="229.928,165.986 228.693,167.219 228.693,248.776 229.928,250.01 282.554,250.01 283.794,248.776 283.794,238.149 282.554,236.915 244.016,236.915 243.275,236.162 243.275,214.915 244.016,214.175 276.51,214.175 277.75,212.94 277.75,202.314 276.51,201.08 244.016,201.08 243.275,200.326 243.275,179.827 244.016,179.087 282.554,179.087 283.794,177.846 283.794,167.219 282.554,165.986 " />
                  <path d="M328.54,164.644c-14.462,0-25.329,6.905-29.658,20.246c-1.728,5.19-2.228,9.886-2.228,23.107c0,13.222,0.5,17.918,2.228,23.108c4.329,13.342,15.196,20.246,29.658,20.246c14.576,0,25.436-6.905,29.766-20.246c1.734-5.19,2.234-9.886,2.234-23.108c0-13.221-0.5-17.917-2.234-23.107C353.977,171.549,343.116,164.644,328.54,164.644z M344.224,227.263c-2.348,6.81-7.284,11-15.683,11c-8.284,0-13.221-4.19-15.576-11c-0.981-3.089-1.481-7.412-1.481-19.266c0-11.987,0.5-16.177,1.481-19.278c2.354-6.797,7.291-10.987,15.576-10.987c8.399,0,13.335,4.19,15.683,10.987c0.981,3.101,1.494,7.291,1.494,19.278C345.718,219.852,345.205,224.174,344.224,227.263z" />
                </svg>
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h1 className="text-4xl sm:text-5xl mb-4 font-bold uppercase title">
                  03.
                </h1>
                <h2 className="text-2xl sm:text-3xl mb-4 font-semibold uppercase">
                  SEO Optimization
                </h2>
                <p className="leading-relaxed text-base">
                  Enhancing website visibility and search engine rankings
                  through strategic optimization techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
