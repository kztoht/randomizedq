// 20パッセージの定義
const passages = [
  "Yesterday, my family went to [the] park near our house. We brought [a] blanket and some food to enjoy a picnic. My sister saw [a] dog running around and wanted to play with it. We sat under [the] big tree and listened to birds singing. I opened [an] orange juice bottle, but it spilled on my pants. After lunch, we played [ ] soccer with other kids. It was [a] nice way to spend the afternoon. Before leaving, we took [a] photo together. I really liked [the] weather and the fresh air. It was [a] perfect day."
  // ※ 実際はここに残り19のパッセージを追加してください
];

// テスト用として、パッセージ数が20未満の場合は同じものを複製
while(passages.length < 20) {
  passages.push(passages[0]);
}

// 修正：選択肢は "a", "an", "the" の3択のみとする
const blankOptions = ["a", "an", "the"];

// パッセージ解析：角括弧 [ ] で囲まれた部分を正答として抽出し、テキスト部分と分割
function parsePassage(passageText) {
  const parts = passageText.split(/\[([^\]]*)\]/);
  let segments = [];
  let answers = [];
  for (let i = 0; i < parts.length; i++) {
    if (i % 2 === 0) {
      segments.push(parts[i]);
    } else {
      answers.push(parts[i]);
      segments.push(null);
    }
  }
  return { segments, answers };
}

let currentPassageObj;
let userAnswers = [];

// パッセージを画面に描画する関数
function renderPassage(passageObj) {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";
  let html = "";
  let blankCount = 0;
  passageObj.segments.forEach(seg => {
    if (seg === null) {
      // select 要素の最初の option は空文字列（＝冠詞不要の正答）として設定
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

// ランダムにパッセージを選ぶ
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

// 採点関数：各選択肢と正答を比較してスコアを算出
function checkAnswers() {
  const selects = document.querySelectorAll("#quiz-container select");
  selects.forEach(select => {
    const idx = select.getAttribute("data-index");
    userAnswers[idx] = select.value;
  });
  let score = 0;
  currentPassageObj.answers.forEach((correct, idx) => {
    if (userAnswers[idx] === correct) score++;
  });
  document.getElementById("score-display").innerText = `Your Score: ${score} / ${currentPassageObj.answers.length}`;
}

// イベントリスナーの設定
document.getElementById("submit-btn").addEventListener("click", function() {
  checkAnswers();
  document.getElementById("next-btn").style.display = "inline-block";
});

document.getElementById("next-btn").addEventListener("click", function() {
  initSession();
});

// 初期セッションの開始
initSession();
