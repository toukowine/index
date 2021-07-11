'use strict';

{
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const btn2 = document.getElementById('btn2');
  const result2 = document.getElementById('result2');
  const scoreLabel = document.querySelector('#result2 > p');

  const quizSet = shuffle([

    {q: 'British Columbia州で生産量最大のぶどう品種は？', c: ['Merlot', 'Cabernet Franc', 'Pinot Noir', 'Cabernet Sauvignon']},
    {q: 'Niagara Escarpmentを含む産地は？', c: ['Niagara Peninsula', 'Lake Erie North Shore', 'Okanagan Valley', 'Prince Edward County']},
    {q: 'オンタリオ州で最も生産量の多いアイスワイン用ぶどう品種？', c: ['Vidal', 'Pinot Gris', 'Cabernet Franc', 'Riesling']},
    {q: 'Ontario州にある産地は？', c: ['Niagara Peninsula', 'Similkameen Valley', 'Gulf Islands', 'Fraser Valley']},
    {q: 'カナダで最大の栽培面積の産地は？', c: ['Niagara Peninsula', 'Okanagan Valley', 'Prince Edward County', 'Similkameen Valley']},
    {q: 'ブリティッシュ・コロンビア州の産地は？', c: ['Okanagan Valley', 'Prince Edward County', 'Niagara Peninsula', 'Lake Erie North Shore']},
    {q: 'Niagara Escarpmentともう一つは？', c: ['Niagara-on-the-Lake', 'Niagara-no-taki', 'Niagara-on-the-rocks', 'Niagara-on-the-beach']},
    {q: 'British Columbia州にある産地は？', c: ['Fraser Valley', 'Lake Erie North Shore', 'Prince Edward County', 'South Islands']},
    {q: 'Ontario州にある産地は？', c: ['Prince Edward County', 'Gulf Islands', 'Fraser Valley', 'Okanagan Valley']},
    {q: 'アイスワイン用ぶどうの収穫時の気温は？', c: ['-8℃', '8℃', '-5℃', '-10℃']},
    {q: 'Vidalの交配は？', c: ['UgniBlanc × Seibel4986', 'UgniBlanc × Seibel2764', 'PinotBlanc × Seibel4986', 'PinotBlanc × Seibel2764']},
    {q: 'カナダのワイン法にて原産州を表示する際の最低使用比率は？', c: ['100％', '75％', '85％', '95％']},
    {q: 'カナダについて正しいものを選んでください？', c: ['VQAに沿ったワイン生産が行われているのはオンタリオ州とブリテッィシュ・コロンビア州だけである', 'モントリオール付近にもワイナリーがある', 'オンタリオ州ではアイスワインのぶどう収穫は、1月中旬から2月初旬が多い', 'Nova Scotia州とQuebec州にワイン産地が集中している']},
    {q: 'カナダの高品質なワインの認証制度に関係する機関は？', c: ['VQA', 'PDO', 'AVA', 'WO']},
    {q: 'Ontario州にある産地は？', c: ['Lake Erie North Shore', 'Gulf Islands', 'Fraser Valley', 'Vancouver Island']},
    {q: 'カナダで最東のワイン産地は？', c: ['Prince Edward County', 'Fraser Valley', 'Prince Edward County', 'Okanagan Valley']},
    {q: 'Ontario州最大のブドウ品種は？', c: ['Chardonnay', 'Pinot Noir', 'Riesling', 'Merlot']},
    {q: 'ジョンシラーが最初のワイン造りを始めた州は？', c: ['Ontario', 'Quebec', 'British Columbia', 'kent']},
    {q: 'カナダのジョンシラーといえば何年？', c: ['1811', '1832', '1843', '1620']},
    {q: 'カナダのワイナリー数は？', c: ['約750', '約75', '約1200', '約120']},
    // {q: 'Cantenac Brown ボルドー何級？', c: ['3', '2', '4', '5']},
    // {q: 'Palmer ボルドー何級？', c: ['3', '2', '4', '5']},
    // {q: 'La Lagune ボルドー何級？', c: ['3', '2', '4', '5']},
    // {q: 'Desmirail ボルドー何級？', c: ['3', '2', '4', '5']},
    // {q: 'Calon-Segur ボルドー何級？', c: ['3', '2', '4', '5']},
    // {q: 'Ferriere ボルドー何級？', c: ['3', '2', '4', '5']},
    // {q: 'Marquis d’Alesme Becker ボルドー何級？', c: ['3', '2', '4', '5']},
    // {q: 'St-Pierre ボルドー何級？', c: ['4', '2', '3', '5']},
    // {q: 'Talbot ボルドー何級？', c: ['4', '2', '3', '5']},










  ]);
  let currentNum = 0;
  let isAnswered;
  let score = 0;

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
  }

  function checkAnswer(li) {
    if (isAnswered) {
      return;
    }
    isAnswered = true;

    if (li.textContent === quizSet[currentNum].c[0]) {
      li.classList.add('correct');
      score++;
    } else {
      li.classList.add('wrong');
    }

    btn2.classList.remove('disabled');
  }

  function setQuiz() {
    isAnswered = false;

    question.textContent = quizSet[currentNum].q;

    while (choices.firstChild) {
      choices.removeChild(choices.firstChild);
    }

    const shuffledChoices = shuffle([...quizSet[currentNum].c]);
    shuffledChoices.forEach(choice => {
      const li = document.createElement('li');
      li.textContent = choice;
      li.addEventListener('click', () => {
        checkAnswer(li);
      });
      choices.appendChild(li);
    });

    if (currentNum === quizSet.length - 1) {
      btn2.textContent = 'Show Score';
    }
  }

  setQuiz();

  btn2.addEventListener('click', () => {
    if (btn2.classList.contains('disabled')) {
      return;
    }
    btn2.classList.add('disabled');

    if (currentNum === quizSet.length - 1) {
      scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`;
      result2.classList.remove('hidden');
    } else {
      currentNum++;
      setQuiz();
    }
  });
}
