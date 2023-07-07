import { React } from "react";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

export function IntroPage() {
  /** History for route. */
  const history = useHistory();

  return (
    <div>
      <div
        style={{
          width: "800px",
          margin: "auto",
          fontFamily: "Calibri",
          textAlign: "justify",
        }}
      >
        <h3 className="header"> Perceptual Speed Test Tool</h3>
        <p className="text">
          {" "}
          Perceptual Speed (PS) is the cognitive ability related to comparison
          tasks as higher Perceptual Speed means greater accuracy in identifying
          different objects or patterns.
        </p>
        <p className="text">
          This Perceptual Speed Test Tool is a ReactJS App that measures PS
          through a set of questions adapted from Ekstrom et al.'s "Manual for
          Kit of Reference Tests for Cognitive Factors", featuring
          identification of words with certain letters, number comparison, and
          shape recognition.
        </p>
        <p className="text">
          Click on Start to begin the test sequence or choose a test in
          particular from the menu.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          margin: "auto",
          justifyContent: "center",
        }}
      >
        <Button
          variant="outlined"
          size="large"
          onClick={() => {
            history.replace("/perceptual-speed-find-a/");
          }}
          className="buttonText"
          style={{ marginLeft: "1em" }}
        >
          Start
        </Button>
      </div>
    </div>
  );
}
