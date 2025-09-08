document.getElementById("diagnosisForm").addEventListener("submit", function(e) {
  e.preventDefault(); // ページリロード防止

  // カテゴリごとのスコアを初期化
  const scores = {
    cat1: 0,
    cat2: 0,
    cat3: 0,
    cat4: 0,
    cat5: 0,
    cat6: 0
  };

  // 各チェックボックスを集計
  for (let cat in scores) {
    const checkboxes = document.querySelectorAll(`input[name="${cat}"]:checked`);
    scores[cat] = checkboxes.length;
  }

  // 最大スコアのカテゴリを判定
  let maxCat = null;
  let maxScore = -1;
  for (let cat in scores) {
    if (scores[cat] > maxScore) {
      maxScore = scores[cat];
      maxCat = cat;
    }
  }

  // 診断結果を定義
  const messages = {
    cat1: "✨ 完璧主義タイプ：理想が高く、自分に厳しすぎる傾向があります。",
    cat2: "✨ 自己犠牲タイプ：人のために頑張りすぎてしまう傾向があります。",
    cat3: "✨ 時間に追われるタイプ：効率を求めすぎて焦りがちです。",
    cat4: "✨ 我慢強さタイプ：無理してでも耐えてしまう傾向があります。",
    cat5: "✨ 他人評価タイプ：人の目や評価を気にしやすい傾向があります。",
    cat6: "✨ 責任感タイプ：何でも背負い込みやすい傾向があります。"
  };

  // 結果を表示
  const resultDiv = document.getElementById("result");
  if (maxScore === 0) {
    resultDiv.innerHTML = "<p>✔が選ばれていません。もう一度チェックしてください。</p>";
  } else {
    resultDiv.innerHTML = `<h2>診断結果</h2><p>${messages[maxCat]}</p>`;
  }
});
