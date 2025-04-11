// パッセージ定義とオプション
const passages = [
  "Yesterday, my family went to [the] park near our house. We brought [a] blanket and some food to enjoy a picnic. My sister saw [a] dog running around and wanted to play with it. We sat under [the] big tree and listened to birds singing. I opened [an] orange juice bottle, but it spilled on my pants. After lunch, we played [ ] soccer with other kids. It was [a] nice way to spend the afternoon. Before leaving, we took [a] photo together. I really liked [the] weather and the fresh air. It was [a] perfect day."
];

// パッセージが20個になるまで複製（テスト用）
while (passages.length < 20) {
  passages.push(passages[0]);
}

const blankOptions = ["a", "an", "the"];

function parsePassage(passageText) {
  const parts = passageText.split(/\[([^\]]*)\]/);
  let segments = [], answers = [];
  for (let i = 0; i < parts.length; i++) {
    if (i % 2 === 0) {
      segments.push(parts[i]);
    } else {
      answers.push(parts[i].trim());
      segments.push(null);
    }
  }
  return { segments, answers };
}

let currentPassageObj;
let userAnswers = [];

// 🟡 修正: 統計を収集するように設定（adminに反映させるため）
let statsActive = true;

let totalScore = parseInt(localStorage.getItem("totalScore")) || 0;
let totalQuestions = parseInt(localStorage.getItem("totalQuestions")) || 0;

function renderPassage(passageObj) {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";
  let html = "";
  let blankCount = 0;
  passageObj.segments.forEach(seg => {
    if (seg === null) {
      html += `<select data-index="${blankCount}">
                 <option value=""></option>`;
      blankOptions.forEach(opt => {
        html += `<option value="${opt}">${opt}</option>`;
      });
      html += `</select>`;
      blankCount++;
    } else {
      html += seg;
    }
  });
  container.innerHTML = `<p>${html}</p>`;
  userAnswers = new Array(passageObj.answers.length).fill("");
}

function pickRandomPassage() {
  const idx = Math.floor(Math.random() * passages.length);
  return parsePassage(passages[idx]);
}

function initSession() {
  currentPassageObj = pickRandomPassage();
  renderPassage(currentPassageObj);
  document.getElementById("score-display").innerText = "";
  document.getElementById("next-btn").style.display = "none";
}

function checkAnswers() {
  const selects = document.querySelectorAll("#quiz-container select");
  selects.forEach(select => {
    const idx = select.getAttribute("data-index");
    userAnswers[idx] = select.value.trim(); // 選択値取得
  });

  let score = 0;
  currentPassageObj.answers.forEach((correct, idx) => {
    // ✅ 修正: 空白 "" も明示的に正答と比較
    if ((userAnswers[idx] || "") === (correct.trim() || "")) {
      score++;
    }
  });

  document.getElementById("score-display").innerText = `Your Score: ${score} / ${currentPassageObj.answers.length}`;

  if (statsActive) {
    totalScore += score;
    totalQuestions += currentPassageObj.answers.length;
    localStorage.setItem("totalScore", totalScore);
    localStorage.setItem("totalQuestions", totalQuestions);
  }
}

// 🔁 イベントバインドと初期化（DOMContentLoadedで確実に）
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submit-btn").addEventListener("click", function () {
    checkAnswers();
    document.getElementById("next-btn").style.display = "inline-block";
  });

  document.getElementById("next-btn").addEventListener("click", function () {
    initSession();
  });

  initSession();
});
