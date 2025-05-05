import "./configfolder/firebaseinit.js"
import homeView from "./view/homeView.js";
import page from "./lib/page.js";
import layoutView from "./view/layoutView.js";
import catsView from "./view/catsView.js";

page(layoutView);

page('/', homeView);
page('/cats', catsView);

page();
