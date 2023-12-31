import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import { IntroPage } from "./pages/IntroPage";
import { PerceptualSpeedFindAPage } from "./pages/PerceptualSpeedFindAPage";
import { PerceptualSpeedNumbersPage } from "./pages/PerceptualSpeedNumbersPage";
import { PerceptualSpeedShapesPage } from "./pages/PerceptualSpeedShapesPage";

import "bootstrap/dist/css/bootstrap.css";
import $ from "jquery";

import * as Survey from "survey-core";

import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";
import "jquery-bar-rating/dist/themes/css-stars.css";
import "jquery-bar-rating/dist/themes/fontawesome-stars.css";
import "pretty-checkbox/dist/pretty-checkbox.css";

import "select2/dist/js/select2.js";
import "jquery-bar-rating";

import { v4 as uuid } from "uuid";

import * as widgets from "surveyjs-widgets";
import { Button } from "@mui/material";
import { createParticipant } from "./createParticipant";
import { createTable } from "./createTable";

window["$"] = window["jQuery"] = $;
require("jquery-ui/ui/widgets/datepicker.js");

widgets.prettycheckbox(Survey);
widgets.select2(Survey, $);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey, $);
widgets.jqueryuidatepicker(Survey, $);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey, $);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey, $);
widgets.bootstrapslider(Survey);

const user_id = uuid();
localStorage.setItem("uid", user_id);
console.log("Your UID: ", user_id);

export default function PhantomEffectApp() {
  createTable().then(() => {
    createParticipant(user_id);
  });

  return (
    <Router>
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header"></div>
            <ul className="nav navbar-nav">
              <li>
                <Link to="/introduction">Home</Link>
              </li>
              <li>
                <Link to="/perceptual-speed-find-a/">Find A Test</Link>
              </li>
              <li>
                <Link to="/perceptual-speed-numbers/">
                  Number Comparison Test
                </Link>
              </li>
              <li>
                <Link to="/perceptual-speed-shapes/">
                  Shape Recognition Test
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="app-content">
          <Switch>
            <Route exact path="/">
              <IntroPage />
            </Route>
            <Route path="/introduction">
              <IntroPage />
            </Route>
            <Route path="/perceptual-speed-find-a">
              <PerceptualSpeedFindAPage />
            </Route>
            <Route path="/perceptual-speed-numbers">
              <PerceptualSpeedNumbersPage />
            </Route>
            <Route path="/perceptual-speed-shapes">
              <PerceptualSpeedShapesPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
