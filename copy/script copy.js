let stage = 1;
let lastScene = "";
const sound = document.getElementById("pageSound");

function playSound() {
  sound.currentTime = 0;
  sound.play();
}

// TOGGLE FULL INTRO
function toggleFullIntro(btn) {
  const full = document.getElementById("fullIntro");
  full.classList.toggle("show");

  // Swap arrow
  btn.textContent = full.classList.contains("show") ? '▲' : '▼';
}

// REFERENCSES BTN
function toggleRefs(btn) {
  const content = btn.nextElementSibling;
  content.classList.toggle("show");

  btn.textContent = content.classList.contains("show")
    ? btn.textContent.replace("▼", "▲")
    : btn.textContent.replace("▲", "▼");
}


// SHOW SCENARIO MENU
function showScenarioMenu() {
  document.getElementById("intro").classList.remove("active");
  document.getElementById("scenarioMenu").classList.add("active");
  playSound();
}

// START SCENARIO
function startScenario(num) {
  document.getElementById("scenarioMenu").classList.remove("active");
  if (num === 1) {
    document.getElementById("scene1").classList.add("active");
    stage = 1;
  } else {
    document.getElementById("scene2").classList.add("active");
    stage = 2;
  }
  playSound();
}

// SHOW RESULT
function showResult(choice, chosenText, btn) {
  if (btn) {
    document.querySelectorAll(".option-panel button").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
  }

  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  lastScene = stage === 1 ? "scene1" : "scene2";

  let img = "";
  let explanation = "";
  let extraArrow = "";

  // SCENARIO 1 OPTIONS
  if (choice === "r1a") {
    img = "images/distracted.gif";
    explanation = `<p class="justified center-text">You spend more time scrolling than intended...</p>`;
    extraArrow = generateArrow("fullR1a", "Many users report that they spend more time scrolling than they intended, a pattern driven both by design features like infinite scroll and by deeper psychological responses to digital engagement (GCFGlobal, n.d.). In Mental Health and Technology: How to Curb Digital Addiction, Dr. Sanam Hafeez (n.d.) explains that constant notifications, endless content, and the compulsion to stay connected can contribute to digital addiction, where users experience symptoms such as difficulty disconnecting, decreased productivity, and withdrawal‑like anxiety when away from their devices. This excessive use can also have detrimental effects on well‑being: constant comparison with others online and overexposure to digital stimuli have been linked to increased anxiety, lower self‑esteem, disrupted sleep, and high stress levels (Hafeez, n.d.; Mayo Clinic Staff, n.d.). These psychological impacts highlight why many scholars and mental health professionals emphasize the need for intentional technology use, healthy boundaries, and strategies to curb digital overuse in order to protect mental health in the digital age (Hafeez, n.d.; CTR Institute, n.d.).");
  }

  if (choice === "r1b") {
    img = "images/focused.gif";
    explanation = `<p class="justified center-text">You maintain focus and complete your task...</p>`;
    extraArrow = generateArrow("fullR1b", "Maintaining focus and completing a task requires effective attention control and sustained concentration, which research shows are crucial for academic and everyday success. According to an NIH study, practicing sustained attention tasks improves task performance and reduces distractibility, especially in conditions where multitasking or irrelevant stimuli might otherwise divert attention (Brand et al., 2022). Sustained attention engages neural networks in the prefrontal and parietal cortex that support the ability to stay on task and filter out distractions over time, a process essential for completing complex tasks efficiently (Robertson & O’Connell, 2010; Egner, 2023). Practical lifestyle and cognitive strategies—such as minimizing multitasking, scheduling focused work blocks, getting adequate sleep, and practicing mindfulness—are also linked to sharper concentration and task completion ability, as outlined by experts at Harvard Health (Harvard Health Publishing, 2023). These combined findings suggest that maintaining focus is both a trainable cognitive skill and a lifestyle‑supported behavior, enabling individuals to resist distraction and achieve their study or work goals.");
  }

  if (choice === "r1c") {
    img = "images/resisting.gif";
    explanation = `<p class="justified center-text">You delay watching content, partially resisting...</p>`;
    extraArrow = generateArrow("fullR1c", "When users choose to save content for later or delay watching, it reflects a moment of self‑control negotiation between immediate desire and other goals. Research on binge‑watching indicates that this behavior exists on a spectrum between impulse and intentional delay, where individuals often struggle to balance gratification with goal‑directed actions. Studies show that binge‑watching frequency and duration are influenced by factors like self‑regulation deficits, the use of viewing as a reward or form of procrastination, and subsequent regret about delayed tasks (Merrill & Rubenking, 2019). Lower self‑control and procrastination motives predict more frequent binge‑watching, suggesting that delaying content consumption can be part of a larger pattern of postponing responsibilities (Merrill & Rubenking, 2019). Moreover, individual traits such as immediate gratification tendencies are linked to a stronger engagement in binge‑watching even when negative attitudes toward the behavior exist, indicating that people may delay but still ultimately yield to watching in pursuit of immediate rewards (Shim & Jung, 2018). Finally, research on self‑control and viewing experiences suggests that people with higher trait self‑control report less negative affect (e.g., guilt, conflict with other goals) during binge‑watching than those with lower self‑control, highlighting how self‑regulation impacts both delay decisions and emotional responses to media consumption (Lades et al., 2022).");
  }

// SCENARIO 2 OPTIONS
if (choice === "r2a") {
  img = "images/limited.gif";
  explanation = `<p class="justified center-text">Understanding becomes limited due to personalized recommendations.</p>`;
  extraArrow = generateArrow(
    "fullR2a",
    "Personalized recommendations are designed to tailor content based on users’ past behavior and preferences, but this tailoring can also limit users’ exposure to diverse information and constrain understanding by repeatedly presenting similar patterns of content. Research on recommender systems shows that while personalized recommendations can improve convenience and decision efficiency, they may also shape users’ perceptions and behaviors in subtle ways by reinforcing existing interests and narrowing the scope of information encountered, which can reduce cognitive engagement with unfamiliar or challenging content (Zhao et al., 2025). Studies have further suggested that when recommendation algorithms prioritize highly relevant content, users may experience a filter bubble effect that reinforces familiar viewpoints and reduces interaction with broader perspectives, potentially limiting critical understanding and decision‑making diversity over time (Pariser, 2011; filter bubble literature). In some contexts, excess personalization has been linked to information fatigue and privacy concerns, which can also diminish users’ trust and comprehension of the content environment (ResearchGate findings on personalization and trust concerns)."
  );
}

if (choice === "r2b") {
  img = "images/balanced.gif";
  explanation = `<p class="justified center-text">You gain a broader understanding by seeking multiple viewpoints.</p>`;
  extraArrow = generateArrow(
    "fullR2b",
    "Gaining a broader understanding often requires actively seeking out multiple viewpoints rather than relying on a single narrative, a skill that enhances critical thinking and contextual awareness. Research on perspective-taking and multiple perspectives indicates that when individuals consider alternative viewpoints, they deepen their comprehension of events and concepts, moving beyond personal assumptions toward more nuanced interpretations of information (Learner Variability Project, n.d.). Exposure to different perspectives encourages learners to ask questions, suspend judgment, and engage in open dialogue, which in turn expands cognitive flexibility and reduces the limitations of echo chambers that can form through personalized algorithms (Maryville University, 2022; Digital Promise Global, n.d.). Studies on cognitive and social psychology further suggest that perspective-taking is linked to empathy, improved interpersonal understanding, and reduced biases, helping individuals integrate diverse experiences and viewpoints into their own reasoning processes (Perspective-taking research, n.d.; Selman, n.d.). Altogether, intentional perspective-seeking supports broader understanding and helps individuals move beyond narrow informational silos toward more reflective, informed decision-making."
  );
}


  document.getElementById("result").innerHTML = `
    <p class="justified"><strong>You chose:</strong> ${chosenText}</p>
    <img src="${img}" class="scene-img">
    ${explanation}
    ${extraArrow}
    <div class="option-panel" style="margin-top:20px;">
      <button onclick="goBack()">Back</button>
      <button onclick="nextScene()">Continue</button>
    </div>
  `;

  document.getElementById("result").classList.add("active");
  playSound();
}

// GENERATE TOGGLE ARROW BUTTON HTML
function generateArrow(id, fullText) {
  return `
    <div style="text-align:center; margin-top:10px;">
      <button onclick="toggleFullText('${id}', this)" class="interactive-btn arrow-btn">▼ More Info</button>
    </div>
    <p class="justified full-text" id="${id}">
      ${fullText}
    </p>
  `;
}

// TOGGLE FULL TEXT WITH ARROW SWAP
function toggleFullText(id, btn) {
  const full = document.getElementById(id);
  full.classList.toggle("show");

  btn.textContent = full.classList.contains("show") ? '▲ More Info' : '▼ More Info';
}

// NAVIGATION
function goBack() {
  document.getElementById("result").classList.remove("active");
  document.getElementById(lastScene).classList.add("active");
}

function nextScene() {
  document.getElementById("result").classList.remove("active");
  if (stage === 1) {
    document.getElementById("scene2").classList.add("active");
    stage = 2;
  } else {
    document.getElementById("final").classList.add("active");
  }
  playSound();
}

