// =======================================
// HW8 JavaScript — Holden Hrabak
// =======================================

// STEP 4: GREETING MESSAGE (time-based)
function showGreeting(name) {
  const hour = new Date().getHours();
  let greeting =
    hour < 12 ? "Good morning" :
    hour < 18 ? "Good afternoon" : "Good evening";
  return `${greeting}, my name is ${name}! Welcome to my portfolio!`;
}
document.getElementById("greetingMessage").textContent = showGreeting("Holden Hrabak");

// STEP 1: ADD SKILL FEATURE
document.getElementById("addSkillBtn").addEventListener("click", () => {
  const skillInput = document.getElementById("newSkill");
  const skill = skillInput.value.trim();
  if (skill) {
    const col = document.createElement("div");
    col.className = "col-md-3 col-6";
    col.innerHTML = `<div class="card skill-card text-center p-3"><div class="card-body fw-bold">${skill}</div></div>`;
    document.getElementById("skillList").appendChild(col);
    skillInput.value = "";
  }
});

// STEP 2 & 3: PROJECT LOOP + COMPARATORS
const projects = [
  {
    title: "Ransomware Dashboard",
    desc: "An R-based dashboard visualizing cybersecurity trends.",
    img: "Ransomware_trends.png",
    modal: "#project1Modal"
  },
  {
    title: "Battleship Game",
    desc: "A C-based console Battleship game with grid logic.",
    img: "Battleship_code.png",
    modal: "#project2Modal"
  }
];

const projectContainer = document.getElementById("projectContainer");
projects.forEach(p => {
  const card = document.createElement("div");
  card.className = "col-md-6";
  card.innerHTML = `
    <div class="card shadow-sm h-100">
      <img src="${p.img}" class="card-img-top" alt="${p.title}">
      <div class="card-body">
        <h5 class="card-title">${p.title}</h5>
        <p class="card-text">${p.desc}</p>
        <button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="${p.modal}">Learn More</button>
      </div>
    </div>`;
  projectContainer.appendChild(card);
});

// STEP 5: DYNAMIC TABLE GENERATION
function buildTable(id, data, headers) {
  const table = document.getElementById(id);
  let html = "<thead><tr>";
  headers.forEach(h => html += `<th>${h}</th>`);
  html += "</tr></thead><tbody>";
  data.forEach(row => {
    html += "<tr>";
    row.forEach(cell => html += `<td>${cell}</td>`);
    html += "</tr>";
  });
  html += "</tbody>";
  table.innerHTML = html;
}

buildTable("educationTable", [
  ["Northern Arizona University", "B.S. Software Engineering", "2023 - 2028"],
  ["Northern Arizona University", "B.S. Data Science", "2023 - 2028"],
  ["Northern Arizona University", "Minor in Cybersecurity", "2023 - 2028"],
  ["Northern Arizona University", "Minor In Mathematics", "2023 - 2028"]
], ["University", "Degree", "Duration"]);

buildTable("experienceTable", [
  ["NAU", "Resident Assistant", "2024 - Present"],
  ["Mountainside Fitness", "Front Desk Associate", "2022 - 2023"],
  ["Contemporary Allergy & Asthma", "Clerical Assistant", "2022 - Present"]
], ["Company", "Position", "Duration"]);

// STEP 4: RESUME DOWNLOAD TRACKER
let downloadCount = 0;
const downloadBtn = document.getElementById("downloadResume");
downloadBtn.addEventListener("click", () => {
  downloadCount++;
  document.getElementById("downloadCount").textContent = downloadCount;
  alert("Your resume is downloading!");
});

// BONUS: DARK MODE TOGGLE
const darkBtn = document.getElementById("darkModeToggle");
darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  darkBtn.textContent = document.body.classList.contains("dark-mode")
    ? "Light Mode"
    : "Dark Mode";
});

// BONUS: CUSTOMIZATION PANEL
document.getElementById("fontSizeRange").addEventListener("input", e => {
  document.body.style.fontSize = `${e.target.value}px`;
});
document.getElementById("bgColorPicker").addEventListener("input", e => {
  document.body.style.backgroundColor = e.target.value;
});

// BONUS: FADE-IN EFFECT ON SCROLL
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("is-visible");
  });
});
document.querySelectorAll(".fade-in-section").forEach(sec => observer.observe(sec));
