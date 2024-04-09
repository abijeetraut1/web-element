import {
    nanoid
} from "@reduxjs/toolkit";
import axios from "axios";
// import ai from "../../../../../Images/ai.png"

export function changeAltImage(id, clickedNode) {
    try {
        const imageClass = [];
        const imageIds = [];
        const imageInlineStyles = [];
        
        const selectedDOM = document.getElementById(id + "-html-structure");
        const imgTag = selectedDOM.querySelectorAll("img");
        const aTag = selectedDOM.querySelectorAll("a");

        // added preventdefault because if it contains link it blocks the link execution
        aTag.forEach((el, i) => {
            el.href = el.textContent.replaceAll(" ", "-").toLowerCase();
            el.onclick = (element) => {
                element.preventDefault();
            }
        })

        imgTag.forEach((img, i) => {
            if (img.getAttribute("isChanged") === false || !img.getAttribute("isChanged")) {
                // img.src = ai;

                const insertImage = document.createElement("input");
                insertImage.type = "file";
                insertImage.id = "image-" + nanoid() + "-inserter";
                insertImage.setAttribute("isChanged", false);
                insertImage.setAttribute("accept", "image/png, image/gif, image/jpeg");
                // attribute position is because we previously extracted classes, ids, and styles to insert those element into previous image index
                insertImage.setAttribute("position", i);
                insertImage.oninput = (element) => changeTagWhenUpload(element);
                img.insertAdjacentElement("afterend", insertImage);

                img.remove();
            }

            if (img.id || !img.id) {
                imageIds.push({
                    index: i,
                    id: img.id
                });
            }

            if (img.classList) {
                imageClass.push({
                    index: i,
                    class: img.classList.value
                });
            };

            if(img.style){
                imageInlineStyles.push({
                    index: i,
                    style: img.style
                })
            }
            
            if(!clickedNode) return;
            clickedNode.parentNode.parentNode.parentNode.remove();
        });

        return {
            imageIds,
            imageClass,
            imageInlineStyles
        }
    } catch (err) {
        return;
    }
}


async function changeTagWhenUpload(element) {
    const uploadedImage = element.target.files[0];
    const imageFormData = new FormData();
    imageFormData.append("image", uploadedImage);

    // sends the image to the database
    const sendImage = await axios.post(import.meta.UPLOAD_CUSTOMIZATION_IMAGE, imageFormData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })

    const imageTag = document.createElement("img");

    imageTag.setAttribute("isChanged", true);

    // on bubble click it will delete the node and got back to the input file form
    imageTag.ondblclick = (Node) => {
        createInputFileNode(Node);
        Node.target.remove();
    }
    console.log(sendImage.data.message)
    imageTag.src = import.meta.GET_CUSTOMIZATION_IMAGE + sendImage.data.message;
    element.target.insertAdjacentElement("afterend", imageTag);

    // remove the input:files NODE
    element.target.remove();
}


function createInputFileNode(Node) {
    const insertImage = document.createElement("input");
    insertImage.type = "file";
    insertImage.id = "image-" + nanoid() + "-inserter";
    insertImage.setAttribute("isChanged", false);
    insertImage.setAttribute("accept", "image/png, image/gif, image/jpeg");
    insertImage.onchange = (NodeEvent) => changeTagWhenUpload(NodeEvent);
    Node.target.insertAdjacentElement("afterend", insertImage);
}