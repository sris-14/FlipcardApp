const cards = [
      { question: "What does HTML stand for?",    answer: "HyperText Markup Language" },
      { question: "What does CSS stand for?",      answer: "Cascading Style Sheets" },
      { question: "What does JS stand for?",       answer: "JavaScript — makes pages interactive!" },
      { question: "How do you select an element?", answer: "document.getElementById('id')" },
      { question: "What is a function in JS?",     answer: "A reusable block of code" }
    ];

    let currentIndex = 0;
    let isFlipped    = false;
    let gotItCount   = 0;
    let hardCount    = 0;

    function flipCard() {
      const card = document.getElementById('myCard');
      if (!isFlipped) {
        card.classList.add('flipped');
        isFlipped = true;
      } else {
        card.classList.remove('flipped');
        isFlipped = false;
      }
    }

    function markGotIt() {
      gotItCount++;
      goToNextCard();
    }

    function markHard() {
      hardCount++;
      goToNextCard();
    }

    function goToNextCard() {
      currentIndex = (currentIndex + 1) % cards.length;
      isFlipped = false;

      document.getElementById('myCard').classList.remove('flipped');
      document.getElementById('questionText').innerText = cards[currentIndex].question;
      document.getElementById('answerText').innerText   = cards[currentIndex].answer;
      document.getElementById('score').innerText =
        `Got it: ${gotItCount} | Hard: ${hardCount}`;
      document.getElementById('progress').innerText =
        `Card ${currentIndex + 1} of ${cards.length}`;
    }