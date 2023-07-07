import React from "react";
import { useHistory } from "react-router-dom";

import { Model, StylesManager } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.css";

import { genNumber } from "../numberGeneration.js";
import { updateParticipantPSNumbers } from "../updateParticipant.js";
import { json } from "../surveys/PS_numbers_json.js";

StylesManager.applyTheme("defaultV2");

/** Computes final score. */
function calcScore(ans, res) {
  let score = 0;
  let qname = "question1_";

  for (let index = 0; index < 48; index++) {
    let name = qname + String(index + 1);

    if (res[name]) {
      if (ans[index] === res[name]) {
        score++;
      }
    }
  }
  return score;
}

export function PerceptualSpeedNumbersPage() {
  let answers = [];
  let numbers = [];

  // Get numbers for comparison
  for (let index = 1; index < json.pages.length; index++) {
    numbers.push(String(genNumber()));
    let n = numbers[index - 1].split("‎");
    let n1 = parseInt(n[0]);
    let n2 = parseInt(n[5]);

    if (n1 === n2) {
      answers.push(true);
    } else {
      answers.push(false);
    }

    json.pages[index].elements[0].title = String(numbers[index - 1]);
  }

  // Get history for route
  const history = useHistory();

  async function onComplete(survey) {
    let uid = localStorage.getItem("uid");

    let results = JSON.stringify(survey.data);

    const score = calcScore(answers, survey.data);

    console.log("PS Numbers Results: " + results, score, survey.timeSpent);

    updateParticipantPSNumbers(score, survey.timeSpent, uid);
    history.replace("/perceptual-speed-shapes/");
  }

  // get survey model
  const model = new Model(json);

  model.onStarted.add(() => {
    model.showNavigationButtons = false;
  });

  return (
    <div className="container">
      <Survey model={model} onComplete={onComplete} />
    </div>
  );
}
