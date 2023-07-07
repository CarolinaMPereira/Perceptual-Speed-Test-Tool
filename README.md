[![License: GPL-3.0](https://badgen.net/github/license/CarolinaMPereira/Perceptual-Speed-Test-Tool)](https://www.gnu.org/licenses/gpl-3.0)
[![Last release](https://badgen.net/github/release/CarolinaMPereira/Perceptual-Speed-Test-Tool)](https://github.com/CarolinaMPereira/Perceptual-Speed-Test-Tool)

# Visual Working Memory Test Tool

Perceptual Speed (PS) is the cognitive ability related to comparison tasks as higher Perceptual Speed means greater accuracy in identifying different objects or patterns.
This Perceptual Speed Test Tool is a ReactJS App that measures PS through a set of questions adapted from [Ekstrom et al.][1], featuring identification of words with certain letters, number comparison, and shape recognition.

[1]: https://apps.dtic.mil/sti/citations/AD0410915 "Manual for Kit of Reference Tests for Cognitive Factors (Ekstrom et al., 1963)"

## Preview

## Run the application

In order to save results in the PostgreSQL database, please create a `.env` file as shown in the sample provided.

Clone the repository and open the folder:

```bash
git clone https://github.com/CarolinaMPereira/Perceptual-Speed-Test-Tool.git
cd Perceptual-Speed-Test-Tool
```

Initialize backend:

```bash
cd backend
npm i
npm run start
```

Initialize frontend in another terminal tab:

```bash
cd Perceptual-Speed-Test-Tool/frontend
npm i
npm run start
```

Open http://localhost:3000/ in your web browser.
