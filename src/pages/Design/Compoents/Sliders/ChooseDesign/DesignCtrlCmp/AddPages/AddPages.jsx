import { RxCross1 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import { IoMdArrowDropright } from "react-icons/io";

const ecommerce = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Shop',
        path: '/shop'
    },
    {
        title: 'Product Category',
        path: '/shop/category/:categoryId'
    },
    {
        title: 'Product Detail',
        path: '/shop/product/:productId'
    },
    {
        title: 'Cart',
        path: '/cart'
    },
    {
        title: 'Checkout',
        path: '/checkout'
    },
    {
        title: 'About Us',
        path: '/about'
    },
    {
        title: 'Contact Us',
        path: '/contact'
    },
    {
        title: 'FAQs',
        path: '/faqs'
    },
    {
        title: 'Privacy Policy',
        path: '/privacy-policy'
    },
    {
        title: 'Terms and Conditions',
        path: '/terms-and-conditions'
    },
    {
        title: 'Shipping Information',
        path: '/shipping-info'
    },
    {
        title: 'Returns and Refunds Policy',
        path: '/returns-and-refunds'
    },
];


const websiteTypes = ["E-Commerce"];


export default function AddPages() {

    return (
        <>
            <div className="px-2">
                <div className="flex space-x-2 pb-2 overflow-x-auto">
                    {websiteTypes && websiteTypes.map((type) => (
                        <div key={type}>
                            <button
                                className="select-none hover:bg-hover-color w-full flex justify-between text-center font-semibold font-sans text-sm shadow-lg rounded-lg ring-1 ring-slate-900/5 px-4 py-3 bg-slate-800 dark:highlight-white/5 text-slate-200"
                            >{type}</button>
                        </div>
                    ))}
                </div>

                <div className="space-y-2">
                    {ecommerce && ecommerce.map(page => (
                        <div key={page.title} className="select-none w-full flex justify-between text-center bg-white hover:bg-hover-color text-slate-900 font-semibold font-sans text-sm shadow-lg rounded-lg ring-1 ring-slate-900/5 px-4 py-3 dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-200">
                            <div className="space-x-2 flex items-center">
                                <button><IoMdArrowDropright /></button>
                                <span>{page.title}</span>
                            </div>
                            <div>
                                <button><RxCross1 className="font-bold" /></button>
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    className="mt-2 cursor-pointer text-center font-semibold p-2 text-dark-text-color rounded w-full bg-dark-button-bg"
                >
                    <button><FaPlus /></button>
                </div>
            </div>
        </>

    )
}