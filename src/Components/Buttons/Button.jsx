import React from 'react'

export default function button({ buttonName, icon }) {
    return (
        <button
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
            {icon && <icon/>}
            <span>{buttonName}</span>
        </button>
    )
}
