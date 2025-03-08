import { FaSearch, FaArrowRight } from 'react-icons/fa';

export const Cards = () => {
    return (
        // <section className="max-w-screen mt-15">
        //     <div className="mx-5 md:mx-auto md:container overflow-x-auto scroll-smooth no-scrollbar">
        //         <div className="flex gap-10 w-500">
        //             <div className='flex flex-col gap-10 h-auto rounded-xl border-1 border-gray-200 bg-slate-100 shadow-2xl shadow-gray-300 py-10 px-7 group hover:scale-x-102 transition-transform duration-700'>
        //                     <div className="flex items-center justify-between ">
        //                         <div className='flex items-center gap-5'>
        //                             <FaSearch className='text-green-500'/>
        //                             <span className='text-xl font-bold'>Manage & Curate</span>
        //                         </div>
        //                             <FaArrowRight className='text-green-500 group-hover:translate-x-2 transition-transform duration-500'/>
                               
        //                     </div>
        //                     <div className='bg-white p-5 rounded-xl'>
        //                         <img className='w-auto h-70' src="https://images.prismic.io/encord/ZzTYEK8jQArT01Pn_datacurationcardasset.avif?auto=format%2Ccompress&fit=max&w=656&h=600&fm=webp"/>

        //                     </div>
        //             </div>
        //             <div className='flex flex-col gap-10 h-auto w-85 rounded-xl border-1 border-gray-200 bg-slate-100 shadow-2xl shadow-gray-300 py-10 px-7 group hover:scale-x-102 transition-transform duration-700'>
        //                     <div className="flex items-center justify-between">
        //                         <div className='flex items-center gap-5'>
        //                             <FaSearch className='text-green-500'/>
        //                             <span className='text-xl font-bold'>Manage & Curate</span>
        //                         </div>
        //                             <FaArrowRight className='text-green-500 group-hover:translate-x-2 transition-transform duration-500'/>
                               
        //                     </div>
        //                     <div className='bg-white p-5 rounded-xl'>
        //                         <img className='w-auto h-70' src="https://images.prismic.io/encord/ZzTYEK8jQArT01Pn_datacurationcardasset.avif?auto=format%2Ccompress&fit=max&w=656&h=600&fm=webp"/>

        //                     </div>
        //             </div>
        //             <div className='flex flex-col gap-10 h-auto w-85 rounded-xl border-1 border-gray-200 bg-slate-100 shadow-2xl shadow-gray-300 py-10 px-7 group hover:scale-x-102 transition-transform duration-700'>
        //                     <div className="flex items-center justify-between">
        //                         <div className='flex items-center gap-5'>
        //                             <FaSearch className='text-green-500'/>
        //                             <span className='text-xl font-bold'>Manage & Curate</span>
        //                         </div>
        //                             <FaArrowRight className='text-green-500 group-hover:translate-x-2 transition-transform duration-500'/>
                               
        //                     </div>
        //                     <div className='bg-white p-5 rounded-xl'>
        //                         <img className='w-auto h-70' src="https://images.prismic.io/encord/ZzTYEK8jQArT01Pn_datacurationcardasset.avif?auto=format%2Ccompress&fit=max&w=656&h=600&fm=webp"/>

        //                     </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
<section className="max-w-screen mt-15">
  <div className="mx-5 md:mx-auto md:container overflow-x-auto md:overflow-x-hidden scroll-smooth scrollbar-hide">
    <div className="flex gap-5 w-max md:w-full">
      {[1, 2, 3].map((item) => (
        <div key={item} className="flex flex-col gap-5 h-auto min-w-[280px] md:w-1/3 rounded-xl border border-gray-200 bg-slate-100 shadow-2xl shadow-gray-300 py-10 px-7 group">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <FaSearch className="text-green-500" />
              <span className="text-xl font-bold">Manage & Curate</span>
            </div>
            <FaArrowRight className="text-green-500 group-hover:translate-x-2 transition-transform duration-500" />
          </div>
          <div className="bg-white p-5 rounded-xl">
            <img className="w-auto h-70" src="https://images.prismic.io/encord/ZzTYEK8jQArT01Pn_datacurationcardasset.avif?auto=format%2Ccompress&fit=max&w=656&h=600&fm=webp" />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


    )
}