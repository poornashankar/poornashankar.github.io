// EDUCATION
const education = [
  "Postdoc (Pursuing) – Multimedia University, Malaysia",
  "M.Tech (CSE) – JNTU Hyderabad, 2014",
  "Ph.D – SRTM University, Nanded, 2012",
  "M.Phil – Bharathi Vidyapeeth, Rank 1",
  "MCA – University of Madras",
  "B.Sc Mathematics – Annamalai University",
  "Diploma in Computer Engineering – Thiagarajar Polytechnic"
];

// CERTIFICATIONS
const certifications = [
  "Certified GenAI – Harvard D³ Institute",
  "Microsoft Technology Specialist",
  "Microsoft Educator",
  "IBM Rational Suite Expert",
  "NPTEL Elite – Design Thinking",
  "LinkedIn Certifications – ML, GenAI, Prompt Engineering, GitHub"
];

// PROFILES
const profiles = [
  "Dean – Artificial Intelligence",
  "Head – Computer Engineering",
  "Dean – Research & Development",
  "Convener – International Conference NTAI 2025"
];

// POSITIONS
const positions = [
  "Professor, Dean AI & HoD Computer Engineering (2025–Present)",
  "Professor & Dean R&D – ICEM Pune",
  "Vice Principal & HoD – ICEM Pune",
  "Associate Professor & HoD – Hyderabad & Pune"
];

// PATENTS
const patents = [
  "IMS Technology Smart Cane – Granted",
  "AI-Based Intelligent Disinfecting Room – Granted",
  "AI Powered Smart Medicine Dispenser",
  "Aeroponic System for Plant Cultivation",
  "AI-Based Skin Cancer Detection Device"
];

// PUBLICATIONS
const publications = [
  "Analysis of ANN Algorithms in Tumor Prediction",
  "Climate Data Prediction using ANN",
  "Big Data Performance Challenges",
  "Stock Price Prediction using LSTM & ARIMA",
  "AI in Modern Education – Scopus Indexed"
];

// FUNCTION TO RENDER LISTS
function renderList(id, data) {
  const ul = document.getElementById(id);
  if (!ul) return;
  data.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
}

// CALLS
renderList("education", education);
renderList("certifications", certifications);
renderList("profiles", profiles);
renderList("positions", positions);
renderList("patents", patents);
renderList("publications", publications);
