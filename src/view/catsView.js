import { render, html } from "../lib/lit-html.js";

const template = () => html`
<div>Cats</div>
`

export default function(ctx){
    ctx.render(template())
}