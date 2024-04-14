import Chatgpt from "../../../../../../../assets/logo/chatgpt/Chatgpt";

export default function ChatGPT() {
    return (
        <section className="flex bg-dark-button-bg w-3/5">
            <div>
                <Chatgpt />
            </div>
            <div>
                <textarea id="prompt" />
            </div>
            <div>
                <button><Chatgpt /></button>
            </div>
        </section>
    )
}
