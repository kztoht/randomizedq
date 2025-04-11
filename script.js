// 20パッセージの定義
const passages = [
  "Yesterday, my family went to [the] park near our house. We brought [a] blanket and some food to enjoy a picnic. My sister saw [a] dog running around and wanted to play with it. We sat under [the] big tree and listened to birds singing. I opened [an] orange juice bottle, but it spilled on my pants. After lunch, we played [ ] soccer with other kids. It was [a] nice way to spend the afternoon. Before leaving, we took [a] photo together. I really liked [the] weather and the fresh air. It was [a] perfect day."
  // ※ 実際はここに残り19のパッセージを追加してください
];

// テスト用として、パッセージ数が20未満の場合は同じものを複製
while (passages.length < 20) {
  passages.push(passages[0]);
}

// 選択肢は "a", "an", "the" の3択
const blankOptions = ["a", "an", "the"];

/**
 * parsePassage:
 * passageText を分割し、正答部分については trim() して余分な空白がないようにします
 */
function parsePassage(passageText) {
  const parts = passageText.split(/\[([^\]]*)\]/);
  let segments = [];
  let answers = [];
  for (let i = 0; i < parts.length; i++) {
    if (i % 2 === 0) {
      segments.push(parts[i]);
    } else {
      // trim() して余計な空白を除去（正解が空文字列の場合は "" となる）
      answers.push(parts[i].trim());
      segments.push(null);
    }
  }
  return { segments, answers };
}

let currentPassageObj;
let userAnswers = [];

// 統計用変数：localStorageから初期化（admin.html で参照）
let statsActive = false;  // index.html上では、採点後の更新のみ行います
let totalScore = parseInt(localStorage.getItem("totalScore")) || 0;
let totalQuestions = parseInt(localStorage.getItem("totalQuestions")) || 0;

// パッセージを描画する関数
function renderPassage(passageObj) {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";
  let html = "";
  let blankCount = 0;
  passageObj.segments.forEach(seg => {
    if (seg === null) {
      // 初期選択肢は空文字列（冠詞不要）に設定
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
  // ユーザー回答配列を初期化
  userAnswers = new Array(passageObj.answers.length).fill("");
}

// ランダムにパッセージを選ぶ関数
function pickRandomPassage() {
  const idx = Math.floor(Math.random() * passages.length);
  return parsePassage(passages[idx]);
}

// セッションの初期化
function initSession() {
  currentPassageObj = pickRandomPassage();
  renderPassage(currentPassageObj);
  document.getElementById("score-display").innerText = "";
  document.getElementById("next-btn").style.display = "none";
}

// 採点関数
function checkAnswers() {
  const selects = document.querySelectorAll("#quiz-container select");
  selects.forEach(select => {
    const idx = select.getAttribute("data-index");
    // trim() を使って、選択肢の値の前後の空白を除去
    userAnswers[idx] = select.value.trim();
  });
  
  let score = 0;
  currentPassageObj.answers.forEach((correct, idx) => {
    // 正答とユーザーの回答ともに trim() を実施して比較
    if (userAnswers[idx] === correct.trim()) score++;
  });
  
  document.getElementById("score-display").innerText = `Your Score: ${score} / ${currentPassageObj.answers.length}`;
  
  // 統計収集が有効なら localStorage に統計データを更新
  if (statsActive) {
    totalScore += score;
    totalQuestions += currentPassageObj.answers.length;
    localStorage.setItem("totalScore", totalScore);
    localStorage.setItem("totalQuestions", totalQuestions);
  }
}

// イベントリスナーの設定
document.getElementById("submit-btn").addEventListener("click", function() {
  checkAnswers();
  document.getElementById("next-btn").style.display = "inline-block";
});

document.getElementById("next-btn").addEventListener("click", function() {
  initSession();
});

// 初期セッション開始
initSession();
