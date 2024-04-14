import text_design from "./../../../../../../../assets/test/test-design.png";
import { BsThreeDots } from "react-icons/bs";
import "./scrollbar_size.css";
import Button from "../../../../../../../Components/Buttons/Button";

export default function TemplatesCtrl() {
    return (
        <div className="space-y-2 h-full p-2">
            <div className="space-y-2">
                <div className="relative rounded-t-lg overflow-hidden bg-contain">
                    <button className="absolute top-0 right-0 mt-2 mr-2" title="Uploader Info">
                        <BsThreeDots className="text-2xl" />
                    </button>
                    <div>
                        <img src={text_design} alt="please-reload" draggable="true"/>
                    </div>
                    <Button buttonName="use" style="w-full "/>
                </div>
            </div>
        </div>
    )
}
