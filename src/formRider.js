import {Processor} from "./processor.js";
import {CustomError} from "./customError.js";

let formRiderJSLocation = import.meta.url.slice(0, -12);
//===================================================================================================

let pathToJSONConfig = formRiderJSLocation + "/formRiderJsonConfig.json";
fetch(pathToJSONConfig, {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
    }
})
    .then((response) => {
        let style = "font-size:15px"
        console.log("%cFormRider.js loaded successfully, thank you for using it, Happy validating ❤️ ", style);
        return response.json();
    })
    .then((formRiderConfigs) => {
        new Processor(formRiderConfigs);
    })
    .catch((error) => {
        //TODO : if fetch request is 404 show something
        console.log(error);
    })

// new Processor(pathToJSONConfig);
