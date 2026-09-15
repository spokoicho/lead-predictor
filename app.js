const form = document.querySelector("#leadForm");
const engagement = document.querySelector("#engagement");
const engagementOutput = document.querySelector("#engagementOutput");
const engagementLabel = document.querySelector("#engagementLabel");
const resetButton = document.querySelector("#resetButton");
const result = document.querySelector("#result");
const scoreElement = document.querySelector("#score");
const scoreRing = document.querySelector("#scoreRing");
const statusElement = document.querySelector("#status");
const resultTitle = document.querySelector("#resultTitle");
const resultText = document.querySelector("#resultText");

const scoreProfiles = [
  {
    minimum: 80,
    status: "Hot lead",
    title: "Make this lead a priority.",
    text: "Strong fit and buying intent suggest a timely, personal sales conversation."
  },
  {
    minimum: 55,
    status: "Warm lead",
    title: "Worth a focused follow-up.",
    text: "Good signals are present. Nurture the relationship and resolve the remaining uncertainty."
  },
  {
    minimum: 0,
    status: "Cold lead",
    title: "Keep this lead in nurture.",
    text: "The buying signals are still early. Share useful content before investing direct sales time."
  }
];

function selectedNumber(name) {
  return Number(new FormData(form).get(name) || 0);
}

function calculateScore() {
  const companyFit = selectedNumber("companyFit");
  const engagementScore = Number(engagement.value) * 3;
  const budget = Number(document.querySelector("#budget").value);
  const timeline = Number(document.querySelector("#timeline").value);
  return Math.min(100, companyFit + engagementScore + budget + timeline);
}

function renderResult(score, animate = true) {
  const profile = scoreProfiles.find(item => score >= item.minimum);

  if (animate) {
    result.classList.add("updating");
    window.setTimeout(() => result.classList.remove("updating"), 160);
  }

  scoreElement.textContent = score;
  scoreRing.style.setProperty("--score", score);
  statusElement.textContent = profile.status;
  resultTitle.textContent = profile.title;
  resultText.textContent = profile.text;
}

function updateEngagement() {
  const value = Number(engagement.value);
  engagementOutput.textContent = `${value} / 10`;
  engagementLabel.textContent = value >= 8 ? "Highly active" : value >= 5 ? "Active" : value >= 2 ? "Occasional" : "Inactive";
}

form.addEventListener("submit", event => {
  event.preventDefault();
  renderResult(calculateScore());
});

engagement.addEventListener("input", updateEngagement);

form.addEventListener("change", () => {
  renderResult(calculateScore(), false);
});

resetButton.addEventListener("click", () => {
  form.reset();
  updateEngagement();
  renderResult(calculateScore());
  document.querySelector('input[name="companyFit"]').focus();
});

updateEngagement();
renderResult(calculateScore(), false);
