import { IoLinkSharp } from "react-icons/io5";
import { AiOutlineRotateLeft, AiOutlineRadiusUpleft } from "react-icons/ai";

export default function ElementSpaceing() {
  return (
    <section className="py-2 w-full border-dark-border-color border-t" >
      <div className="px-4">
        <div>
          <div className="flex space-x-2">
            <div className="flex items-center space-x-2 p-1 bg-dark-sliders-bg rounded border border-transparent hover:border-dark-border-color">
              <span title="Width" className="font-mono text-dark-text-color">W</span>
              <span>
                <input
                  type="number"
                  name=""
                  id=""
                  className="bg-transparent font-mono text-dark-text-color outline-none"
                  min="0"
                  max="100"
                />
              </span>
            </div>

            <div className="flex items-center space-x-2 p-1 px-2 bg-dark-sliders-bg rounded border border-transparent hover:border-dark-border-color">
              <span title="Height" className="font-mono text-dark-text-color">H</span>
              <span>
                <input
                  type="number"
                  name=""
                  id=""
                  className="bg-transparent font-mono text-dark-text-color outline-none"
                  min="0"
                  max="100"
                />
              </span>
            </div>

            <div className="flex items-center rotate-90 space-x-2 p-1">
              <button className="font-mono text-dark-text-color" title="Chain" > <IoLinkSharp /> </button>
            </div>
          </div>
        </div>

      </div>

      <div className="px-4">
        <div>
          <div className="flex space-x-2">
            <div className="flex items-center space-x-2 p-1 bg-dark-sliders-bg rounded border border-transparent hover:border-dark-border-color">
              <span title="Left And Right" className="font-mono text-dark-text-color">X</span>
              <span>
                <input
                  type="number"
                  name=""
                  id=""
                  className="bg-transparent font-mono text-dark-text-color outline-none"
                  min="0"
                  max="100"
                />
              </span>
            </div>

            <div className="flex space-x-2 p-1 bg-dark-sliders-bg rounded border border-transparent hover:border-dark-border-color">
              <span title="Top And Bottom" className="font-mono text-dark-text-color">Y</span>
              <span>
                <input
                  type="number"
                  name=""
                  id=""
                  className="bg-transparent font-mono text-dark-text-color outline-none"
                  min="0"
                  max="100"
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 flex">
        <div>
          <div className="flex space-x-2">
            <div className="flex items-center space-x-2 p-1 bg-dark-sliders-bg rounded border border-transparent hover:border-dark-border-color">
              <span title="Rotate" className="font-mono text-dark-text-color"><AiOutlineRotateLeft/></span>
              <span>
                <input
                  type="number"
                  name=""
                  id=""
                  className="bg-transparent font-mono text-dark-text-color outline-none"
                  min="0"
                  max="100"
                />
              </span>
            </div>

          </div>
        </div>

        <div>
          <div className="flex space-x-2">
            <div className="flex items-center space-x-2 p-1 bg-dark-sliders-bg rounded border border-transparent hover:border-dark-border-color">
              <span title="Radius" className="font-mono text-dark-text-color"><AiOutlineRadiusUpleft/></span>
              <span>
                <input
                  type="number"
                  name=""
                  id=""
                  className="bg-transparent font-mono text-dark-text-color outline-none"
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
