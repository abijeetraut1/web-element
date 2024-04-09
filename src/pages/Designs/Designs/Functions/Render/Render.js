import {
    changeAltImage
} from "../popupEditor/ChangeAltImage/ChangeAltImage";
import { PopupEditorTriggerer } from "../popupEditor/PopupEditorTriggerer/PopupEditorTriggerer";

function RenderTheCodes(page, IDS, html, css) {
    const renderParentElement = document.getElementById("edit-space");
    // const previousIDS = {
    //     home: [],
    //     about: [],
    //     contact: [],
    //     login: []
    // };

    IDS.forEach(id => {
        const RenderHtmlElement = document.createElement("div");
        RenderHtmlElement.id = id + "-html-structure";

        RenderHtmlElement.onload = changeAltImage(id)
        RenderHtmlElement.onclick = (event) => PopupEditorTriggerer(event, true);

        const RenderCssElement = document.createElement("style");
        RenderCssElement.id = id + "-style-structure";

        // render the parent nodes
        renderParentElement.insertAdjacentElement("beforeend", RenderHtmlElement);
        renderParentElement.insertAdjacentElement("beforeend", RenderCssElement);

        // render the codes into the parent nodes
        RenderHtmlElement.insertAdjacentHTML("beforeend", html);
        RenderCssElement.insertAdjacentHTML("beforeend", css);

        // if (page === "home") {
        //     previousIDS.home.push(id)
        // } else if (page === "about") {
        //     previousIDS.about.push(id)
        // } else if (page === "contact") {
        //     previousIDS.contact.push(id)
        // } else if (page === "login") {
        //     previousIDS.login.push(id)
        // }
    });
}

function CleanDom(page) {
    const previousIDS = {
        home: [],
        about: [],
        contact: [],
        login: []
    };

    if (page === "home") {
        // if (previousIDS.home.length === 0) return;
        previousIDS.home.forEach(id => {
            const node = document.getElementById(id + "-html-structure");
            node.remove();
        });
    } else if (page === "about") {
        // if (previousIDS.about.length === 0) return;
        previousIDS.about.forEach(id => {
            const node = document.getElementById(id + "-html-structure");
            node.remove();
        });
    }
}

export function Render(page, IDS, pageCode) {

    if (!(pageCode.codes)) return;

    const html = JSON.parse(pageCode.codes.html);
    const css = JSON.parse(pageCode.codes.css);

    CleanDom(page);
    RenderTheCodes(page, IDS, html, css);
}