import { Description } from "./template.js";
import { Template } from "./template.js";

document.addEventListener("DOMContentLoaded", e => {
    console.log(e.target);
    console.table(Description);
    Template.printF();
});