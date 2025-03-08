import { FaArrowRight} from 'react-icons/fa';

export const Hero = () => {
    return(
        <main className="max-w-screen h-auto lg:h-screen mx-auto bg-gradient-to-tl from-green-50 to-white-200">
            <div className="mx-5 md:mx-auto md:container pt-15 flex flex-col lg:flex-row gap-5 items-center justify-between">
                <div className="flex flex-col text-center items-center justify-center mx-auto lg:text-left lg:items-start">
                    <div className='bg-green-100 shadow-4xl text-xs text-gray-600 font-semibold flex items-center gap-3 p-2 rounded-4xl group'>New 🚨 Upcoming Webinar | How to build agentic data workflows
                    <FaArrowRight className='group-hover:scale-125 duration-300 transition-transform'/></div>
                    <h1 className="text-4xl font-semibold mt-10 sm:text-5xl lg:text-6xl">The fastest way to <span className='text-green-500'>manage, curate and annotate</span> AI data</h1>
                    <p className="pt-7 font-light leading-snug">Manage, curate, and label multimodal data such as image, video, audio, document, text and DICOM files – all on one platform. Transform petabytes of unstructured data into high quality data for training, fine-tuning, and aligning AI models, fast.</p>
                    <div className="flex flex-col relative w-96 mt-10 px-10 lg:px-0 lg:items-start">
                            <input type="text" placeholder="Enter email" className="bg-white rounded-2xl border-1 w-full border-gray-200 px-5 py-3 shadow-2xl"></input>
                            <button className='absolute bg-emerald-400 p-3 rounded-2xl right-11 top-1 lg:right-1'><FaArrowRight className='text-white'/></button>
                    </div>
                </div>
                <div>
                        <img className='w-[2000px] h-[400px]' src="https://images.prismic.io/encord/ZzHjga8jQArT0rON_Frame1000004420.png?auto=format%2Ccompress&fit=max"/>
                        </div>
            </div>
        </main>
    )
}