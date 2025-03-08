import { FaArrowRight} from 'react-icons/fa';

export const Footer = () => {
    return(
        <>
        <footer className="bg-slate-50 mt-10">
            <div className="mx-5 md:mx-auto md:container py-10 flex flex-col md:flex-row md:gap-5">
                <div className="flex flex-col gap-5">
                <span className="text-2xl font-bold">MyLogo</span>
                    <div className="flex gap-7">
                        <a href="" className="hover:underline">Terms</a> 
                        <a href="" className="hover:underline">Privacy Policy</a>
                    </div>
                    <div className="flex flex-col gap-5">
                        <span className="font-semibold text-lg">Subscribe to our newsletter</span>
                        <p>Get occasional product updates and tutorials to your inbox.</p>
                        <div className="flex flex-col relative w-1/2">
                        <input type="text" placeholder="Enter email" className="bg-white rounded-2xl border-1 border-gray-200 px-5 py-3 shadow-2xl"></input>
                       <button className='absolute bg-emerald-400 p-3 rounded-2xl right-1 top-1'><FaArrowRight className='text-white'/></button>
                        </div>
                    </div>

                </div>
                <div className='flex flex-col lg:flex-row gap-10 mt-10'>
                    <div className='flex min-w-max gap-20'>
                        <div>
                        <div className='font-bold mb-5'>Platform</div>
                        <ul className='[&>li]:my-4'>
                            <li>Data management</li>
                            <li>Data annotation</li>
                            <li>Model evaluation</li>
                            <li>Agents</li>
                        </ul>
                    </div>
                    <div>
                    <div className='font-bold mb-5'>Platform</div>
                    <ul className='[&>li]:my-4'>
                            <li>Data management</li>
                            <li>Data annotation</li>
                            <li>Model evaluation</li>
                            <li>Agents</li>
                        </ul>
                    </div>

{/* Modalities

Multimodal
Image
Video
Document & text
Audio
DICOM & NIfTI */}
                    </div>
                    <div className='flex gap-20'>
                        <div>
                        <div className='font-bold mb-5'>Platform</div>
                        <ul className='[&>li]:my-4'>
                            <li>Data management</li>
                            <li>Data annotation</li>
                            <li>Model evaluation</li>
                            <li>Agents</li>
                        </ul>
                    </div>
                    <div>
                    <div className='font-bold mb-5'>Platform</div>
                    <ul className='[&>li]:my-4'>
                            <li>Data management</li>
                            <li>Data annotation</li>
                            <li>Model evaluation</li>
                            <li>Agents</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}