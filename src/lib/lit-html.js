import {render as baseRender, html} from "../../node_modules/lit-html/lit-html.js"

let rootElement = document.getElementById('root');

function render(templateResult){

    return baseRender(templateResult, rootElement)
}

export{
    baseRender,
    render, 
    html
}