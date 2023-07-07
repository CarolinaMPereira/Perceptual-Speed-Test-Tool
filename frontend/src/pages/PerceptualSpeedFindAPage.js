import React from "react";
import { useHistory } from "react-router-dom";

import { Model, StylesManager } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.css";

import { findA } from "../findA.js";
import { updateParticipantPSLetterA } from "../updateParticipant.js";
import { json } from "../surveys/PS_find_A_json.js";

StylesManager.applyTheme("defaultV2");

/** Computes final score. */
function calcScore(results) {
  let score = 0;
  let qname = "question1_";
  const jsonRes = JSON.parse(results);

  for (let index = 1; index < 26; index++) {
    let name = qname + String(index);

    if (jsonRes[name])
      for (let e = 0; e < jsonRes[name].length; e++) {
        const element = jsonRes[name][e];
        if (element.includes("a")) {
          score++;
        }
      }
  }
  return score;
}

export function PerceptualSpeedFindAPage() {
  // Populate choices with words
  for (let index = 1; index < json.pages.length; index++) {
    json.pages[index].elements[0].choices = findA();
  }

  // Get survey model
  const model = new Model(json);

  // Get history for route
  const history = useHistory();

  // Submit on end of survey and redirect for next step
  async function onComplete(survey) {
    let uid = localStorage.getItem("uid");

    let results = JSON.stringify(survey.data);

    const score = calcScore(results);
    console.log("PS Find A results: " + results, score, survey.timeSpent);

    updateParticipantPSLetterA(score, survey.timeSpent, uid);

    history.replace("/perceptual-speed-numbers/");
  }

  return (
    <div className="container">
      <Survey model={model} onComplete={onComplete} />
    </div>
  );
}
