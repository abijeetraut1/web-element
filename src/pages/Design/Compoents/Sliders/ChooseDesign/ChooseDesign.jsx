import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiSidebar } from 'react-icons/fi';
import { setChooseDesignIsOpen } from '../../../../../reduxFunctions/PageControls/pageControls';

export default function ChooseDesign() {
    const dispatch = useDispatch();
    const designPage = useSelector(state => state.pageControls.designPage);
    const section = useSelector(state => state.pageControls.designSection);
    const page = useSelector(state => state.pageControls.isPage);
    const isFilterActive = useSelector(state => state.pageControls.isFilterActive);
    const open = useSelector(state => state.pageControls.isChooseDesignIsOpen);

    return (
        <aside className={`md:w-1/2 lg:w-1/2 xl:w-2/5 2xl:w-1/6 fixed top-13 left-0 ${open ? "w-full bg-dark-sliders" : "w-0 bg-transparent"} duration-300 l-0 h-screen px-3 pt-4 shadow-zinc-950 z-1 backdrop-opacity-100`} >
            <div className="sm:col-span-3 inset-0 backdrop-blur-md">
                <div className='flex items-center justify-between space-x-2'>
                    <div className="flex items-center justify-between space-x-2">
                        <button
                            className='border:solid border border-white bg-dark-sliders p-2 rounded-md'
                            onClick={() => dispatch(setChooseDesignIsOpen())}
                        >
                            <FiSidebar className='text-white text-xl ' />
                        </button>
                    </div>

                </div>

            </div>


            {/* {open && <section id="choose-deign" className="h-3/4 overflow-auto rounded-md">
                {isProtected && <p>Fetching codes</p>}
                {(error && isFilterActive === false) && <p className="text-white">server error please wait we are fixing it.</p>}

                {(codes && isFilterActive === false) && codes.map((code, i) => (
                    <div key={code.name.replaceAll(" ", "-")} className="bg-white p-2 my-4 rounded" >
                        <div>
                            <img src={`${process.env.REACT_APP_IMAGE_URL}/${JSON.parse(code.images)[0]}`} alt="image_cannot_be_shown" />
                        </div>
                        <div className="bg-white py-3 ">
                            <div className="flex justify-between">
                                <div>
                                    <div>
                                        <h3 className="font-bold capitalize">{code.name}</h3>
                                    </div>
                                    <div>
                                        <h5 className="text-slate-500 cursor-pointer">Abijeet Raut</h5>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h4><span className="font-bold">Rating</span>: {code.rating}</h4>
                                    </div>
                                    <div>
                                        <h4><span className="font-bold">Used By: </span>: {code.usedBy}</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="flex space-x-1">
                                <button className="w-1/2 rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Rate
                                </button>
                                <button
                                    className="w-1/2 rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    value={code.slug}
                                    onClick={(el) => renderCodes(el.target.value, section)}
                                >
                                    Use
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                {(codes && isFilterActive === false) && <div>
                    <button
                        className="w-full rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={() => {
                            dispatch(setPage("more"));
                        }}
                    >
                        More
                    </button>
                </div>}
                {isFilterActive && <Filter />}
            </section>} */}

        </aside>
    )
}
