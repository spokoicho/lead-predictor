# LeadPredictor

An interactive lead scoring calculator that helps sales teams estimate a prospect's conversion potential.

## Features

- Scores company fit, engagement, budget and purchase timeline
- Produces an instant 0–100 lead score
- Classifies leads as Hot, Warm or Cold
- Explains the strongest buying signals
- Responsive, accessible and dependency-free

## Run locally

Open `index.html` in a modern browser. No build step is required.

## Deployment

The project is configured for Netlify and can be deployed directly from the repository root.

## Project structure

- `index.html` — semantic application markup
- `styles.css` — responsive visual design
- `app.js` — scoring model and interface logic
- `netlify.toml` — deployment and security headers

## Scoring model

The score combines four weighted factors: company fit (30%), engagement (30%), budget (20%) and timeline (20%). The result is intended as a prioritization aid, not a guarantee of conversion.

## License

Created as an educational project.
