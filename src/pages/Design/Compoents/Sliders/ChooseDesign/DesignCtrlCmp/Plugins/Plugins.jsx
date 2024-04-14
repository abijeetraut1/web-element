import { FaFacebookMessenger } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGoogleads } from "react-icons/si";
import { SiGooglemaps } from "react-icons/si";

const PluginsArray = [
    {
        name: "Messenger",
        icon: <FaFacebookMessenger className="text-blue-500" />,
    },
    {
        name: "Whatsapp",
        icon: <IoLogoWhatsapp className="text-green-500" />,
    },
    {
        name: "Google Ads",
        icon: <SiGoogleads className="text-yellow-500" />,
    },
    {
        name: "Google Map",
        icon: <SiGooglemaps className="text-green-500" />,
    },
];

export default function Plugins() {
    return (
        <section className="flex flex-wrap justify-center space-y-2 p-2">
            {PluginsArray && PluginsArray.map((plugin) => (
                <div key={plugin.name}
                    className="select-none w-full flex justify-between text-center bg-white text-slate-900 font-semibold font-sans text-sm shadow-lg rounded-lg ring-1 ring-slate-900/5 px-4 py-3 dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-200"
                >
                    <div className="space-x-2 flex justify-between items-center ">
                        <span>{plugin.icon}</span>
                        <span>{plugin.name}</span>
                    </div>
                    <div>
                        <div className="h-3 w-3 rounded-full bg-green-600"></div>
                    </div>
                </div>
            ))}
        </section>

    )
}
