import { RxPadding, RxMargin } from "react-icons/rx";
import { IoLinkSharp } from "react-icons/io5";

export default function ElementSpaceing() {
  return (
    <section >
      <div>
        <span className="text-white text-semibold">Element Spacing</span>
      </div>
      <div>
        <div className="text-bold space-x-2 text-dark-text-color ">
          <span>Margin</span>
        </div>
        <div className="flex">
       
       
          <div className="space-x-2 p-2 w-100% hover:rounded border border-dark-sliders-bg-color hover:border-dark-button-bg-color">
            <span className="font-bold text-dark-text-color">x</span>
            <span><input type="number" name="" id="" className=" bg-transparent font-bold text-dark-text-color outline-none" min="0" max="100" /></span>
          </div>


        </div>
      </div>

    </section>
  )
}
