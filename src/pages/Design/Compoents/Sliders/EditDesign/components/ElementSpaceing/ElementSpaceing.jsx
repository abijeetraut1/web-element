import { IoLinkSharp } from "react-icons/io5";

export default function ElementSpaceing() {
  return (
    <section className="p-2 border-b">
      <div>
        <span className="text-slate-200 font-bold">Element Spacing</span>
      </div>

      <div className="py-3 px-4">
        <div>
          <div className="flex space-x-2">
            <div className="flex space-x-2 p-1 px-2 bg-dark-sliders-bg rounded border border-transparent hover:border-dark-border-color">
              <span className="font-bold text-dark-text-color">H</span>
              <span>
                <input
                  type="number"
                  name=""
                  id=""
                  className="bg-transparent font-bold text-dark-text-color outline-none"
                  min="0"
                  max="100"
                />
              </span>
            </div>

            <div className="flex space-x-2 p-1 bg-dark-sliders-bg rounded border border-transparent hover:border-dark-border-color">
              <span className="font-bold text-dark-text-color">W</span>
              <span>
                <input
                  type="number"
                  name=""
                  id=""
                  className="bg-transparent font-bold text-dark-text-color outline-none"
                  min="0"
                  max="100"
                />
              </span>
            </div>

            <div className="flex items-center rotate-90 space-x-2 p-1">
              <button className="font-bold text-dark-text-color" title="Chain" > <IoLinkSharp /> </button>
            </div>
          </div>
        </div>

        <div className="py-2 space-y-2">
          <div className="space-x-2 flex items-center text-dark-text-color ">
            <span className="font-mono tracking-wide">Padding</span>
          </div>

          <div className="flex space-x-2">
            <div className="flex space-x-2 p-1 px-2 bg-dark-sliders-bg rounded border border-transparent hover:border-dark-border-color">
              <span className="font-bold text-dark-text-color">X</span>
              <span>
                <input
                  type="number"
                  name=""
                  id=""
                  className="bg-transparent font-bold text-dark-text-color outline-none"
                  min="0"
                  max="100"
                />
              </span>
            </div>

            <div className="flex space-x-2 p-1 bg-dark-sliders-bg rounded border border-transparent hover:border-dark-border-color">
              <span className="font-bold text-dark-text-color">Y</span>
              <span>
                <input
                  type="number"
                  name=""
                  id=""
                  className="bg-transparent font-bold text-dark-text-color outline-none"
                  min="0"
                  max="100"
                />
              </span>
            </div>

            <div className="flex items-center rotate-90 space-x-2 p-1">
              <button className="font-bold text-dark-text-color" title="Chain" > <IoLinkSharp /> </button>
            </div>
          </div>

        </div>

        <div className="py-2 space-y-2">
          <div className="space-x-2 flex items-center text-dark-text-color ">
            <span className="font-bold tracking-wide">Rotate</span>
          </div>

          <div className="flex space-x-2">
            <div className="flex space-x-2 p-1 px-2 bg-dark-sliders-bg rounded border border-transparent active:border-dark-border-color">
              <span className="font-bold text-dark-text-color">X</span>
              <span>
                <input
                  type="number"
                  name=""
                  id=""
                  className="bg-transparent font-bold text-dark-text-color outline-none"
                  min="0"
                  max="100"
                />
              </span>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}
