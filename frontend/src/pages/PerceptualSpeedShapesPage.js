import React from "react";

import { Model, StylesManager } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.css";

import { genShape } from "../shapeGeneration.js";
import { json } from "../surveys/PS_shapes_json.js";
import { updateParticipantPSShapes } from "../updateParticipant.js";

StylesManager.applyTheme("defaultV2");

/** Computes final score. */
function calcScore(ans, res) {
  let score = 0;
  let questionName = "question";

  for (let index = 0; index < 48; index++) {
    let name = questionName + String(index + 1);

    if (res[name]) {
      if (ans[index] === res[name]) {
        score++;
      }
    }
  }
  return score;
}

export function PerceptualSpeedShapesPage() {
  let ans = [];

  // Populate options with shapes
  const shapes = genShape();
  for (let index = 1; index < json.pages.length; index++) {
    for (let j = 0; j < 5; j++) {
      json.pages[index].elements[0].imageLink = shapes[index - 1][0];
      json.pages[index].elements[1].choices[j].imageLink =
        shapes[index - 1][1][j];
    }
    if (shapes[index - 1][0] === shapes[index - 1][1][0]) {
      ans.push("A");
    } else if (shapes[index - 1][0] === shapes[index - 1][1][1]) {
      ans.push("B");
    } else if (shapes[index - 1][0] === shapes[index - 1][1][2]) {
      ans.push("C");
    } else if (shapes[index - 1][0] === shapes[index - 1][1][3]) {
      ans.push("D");
    } else {
      ans.push("E");
    }
  }

  // Submit result in the end of survey and redirect
  async function onComplete(survey) {
    let uid = localStorage.getItem("uid");

    let results = JSON.stringify(survey.data);

    const score = calcScore(ans, survey.data);

    console.log("PS Shapes Results: " + results, score, survey.timeSpent);

    updateParticipantPSShapes(score, survey.timeSpent, uid);
  }

  const model = new Model(json);

  return (
    <div className="container">
      <Survey model={model} onComplete={onComplete} />
    </div>
  );
}
