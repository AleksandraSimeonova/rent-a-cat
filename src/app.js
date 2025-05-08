import "./config/firebaseInit.js";
import homeView from "./view/homeView.js";
import page from "./lib/page.js";
import layoutView from "./view/layoutView.js";
import catsView from "./view/catsView.js";
import loginView from "./view/loginView.js";
import { authMiddleware } from "./middleware/authMiddleware.js";

page(authMiddleware)
page(layoutView);

page('/', homeView);
page('/cats', catsView);
page('/login', loginView);
page();
