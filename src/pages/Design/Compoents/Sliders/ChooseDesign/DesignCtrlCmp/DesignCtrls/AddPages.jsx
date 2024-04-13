import { RxCross1 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import { IoMdArrowDropright } from "react-icons/io";

const Pages = [
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



export default function AddPages() {

    return (
        <div className="space-y-2">
            <div className="space-y-2">
                {Pages && Pages.map(page => (
                    <div key={page.title} className="flex justify-between font-semibold p-2 text-dark-text rounded w-full bg-dark-border">
                        <div className="space-x-2">
                            <button><IoMdArrowDropright /></button>
                            <span>{page.title}</span>
                        </div>
                        <div>
                            <button><RxCross1 className="font-bold" /></button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center font-semibold p-2 text-dark-text rounded w-full bg-dark-border">
                <button><FaPlus /></button>
            </div>
        </div>
    )
}