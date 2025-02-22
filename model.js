const model_texts = {
    kiddie_ride: "When I look at this Kiddie Ri, it reminds me of my childhood, when me and my sister went to the doctor, or the night market, we’re always excited to try on different mini cars. These gaming machines are often installed on the street, beside the clinic, the medicine shop for parents to let kids play on it as a reward.",
    eggtart: "Egg tart is one of my favorite desserts. It is not always available in bakeries, but commonly available in Chinese bakeries and bake shops.",
    lucky_charm: "I captured this for documenting my curiosity toward the history and the culture of the Mexican bakery culture.",
    newsstand: "The newsstand stores news in the public space and to me, it serves as a station where the residents can connect and gather to consume new knowledge every day.",
}

document.addEventListener("DOMContentLoaded", function () {
    // Get the URL query string
    const urlParams = new URLSearchParams(window.location.search);
    
    // Get the 'model' parameter from the URL
    const modelName = urlParams.get("model");

    // Check if a model name is provided
    if (modelName) {
        // Construct the model path
        const modelPath = `assets/models/${modelName}.glb`;

        // Create a new model-viewer element
        const modelViewer = document.createElement("model-viewer");

        // Set attributes
        modelViewer.setAttribute("alt", "");
        modelViewer.setAttribute("src", modelPath);
        modelViewer.setAttribute("ar", "");
        modelViewer.setAttribute("shadow-intensity", "1");
        modelViewer.setAttribute("camera-controls", "");
        modelViewer.setAttribute("touch-action", "pan-y");

        // Append the element to the body
        document.body.appendChild(modelViewer);
    } else {
        console.error("No model parameter found in the URL.");
    }

    // check if model has a text
    console.log(model_texts[modelName])
    if (model_texts[modelName]) {
        document.getElementById("model_text").textContent = model_texts[modelName]
    }
});
