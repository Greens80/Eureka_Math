const steps = [
  {
    title: "Step 1: Set up the division problem",
    content: `Look at: 2,456 ÷ 14

In long division, we write it like this:
    ___
14 | 2456

The 14 is outside (the divisor)
The 2456 is inside (the dividend)
We'll write the answer (quotient) on top

Start from the LEFT. Can 14 go into 2? No.
Can 14 go into 24? Yes!`,
    question: "How many times does 14 go into 24?",
    correctAnswer: 1,
    isFinalStep: false
  },
  {
    title: "Step 2: Multiply and subtract",
    content: `We found that 14 goes into 24 one time.

Now multiply: 14 × 1 = 14

      1
14 | 2456
    -14↓`,
    question: "What is 24 - 14?",
    correctAnswer: 10,
    isFinalStep: false
  },
  {
    title: "Step 3: Bring down and divide again",
    content: `We subtracted 14 from 24 and got 10.

Now bring down the next digit (5):
      1
14 | 2456
    -14↓
      105

We now have 105 to divide by 14.`,
    question: "How many times does 14 go into 105?",
    correctAnswer: 7,
    isFinalStep: false
  },
  {
    title: "Step 4: Multiply and subtract again",
    content: `We found that 14 goes into 105 seven times.

Now multiply: 14 × 7 = 98

      17
14 | 2456
    -14↓
      105
      -98↓`,
    question: "What is 105 - 98?",
    correctAnswer: 7,
    isFinalStep: false
  },
  {
    title: "Step 5: Bring down and divide one more time",
    content: `We subtracted 98 from 105 and got 7.

Now bring down the next digit (6):
      17
14 | 2456
    -14↓
      105
      -98↓
       76

We now have 76 to divide by 14.`,
    question: "How many times does 14 go into 76?",
    correctAnswer: 5,
    isFinalStep: false
  },
  {
    title: "Step 6: Final answer",
    content: `We found that 14 goes into 76 five times.

Now multiply: 14 × 5 = 70
Then subtract: 76 - 70 = 6

      17_
14 | 2456
    -14↓
      105
      -98↓
       76
      -70
        6

What is your final answer?`,
    question: "Enter your quotient and remainder:",
    correctAnswer: null,
    isFinalStep: true
  }
];

let currentStep = 0;

function showStep(stepNum) {
  const step = steps[stepNum];
  document.getElementById('step-number').textContent = `Step ${stepNum + 1} of ${steps.length}`;
  
  // Set step content
  const contentHTML = `
    <p style="font-size: 15px; font-weight: 500; color: #333; margin: 0 0 16px;">${step.title}</p>
    <p style="font-size: 14px; color: #666; line-height: 1.6; margin: 0; white-space: pre-wrap; font-family: 'Courier New', monospace;">${step.content}</p>
  `;
  document.getElementById('step-content').innerHTML = contentHTML;
  
  document.getElementById('question-text').textContent = step.question;
  document.getElementById('step-feedback').textContent = '';
  
  const inputContainer = document.getElementById('input-container');
  
  if (step.isFinalStep) {
    inputContainer.innerHTML = `
      <div style="flex: 1;">
        <input type="number" id="step-answer" placeholder="Quotient" style="width: 100%; padding: 8px 12px; font-size: 14px; border-radius: 4px; border: 1px solid #90caf9; margin-bottom: 8px;"/>
        <input type="number" id="step-remainder" placeholder="Remainder" style="width: 100%; padding: 8px 12px; font-size: 14px; border-radius: 4px; border: 1px solid #90caf9;"/>
      </div>
      <button onclick="checkStepAnswer()" style="padding: 8px 16px; font-size: 14px; border-radius: 4px; border: 1px solid #90caf9; background: white; cursor: pointer; color: #1976d2; font-weight: 500; height: fit-content;">Check</button>
    `;
    document.getElementById('step-answer').focus();
  } else {
    inputContainer.innerHTML = `
      <input type="number" id="step-answer" placeholder="Enter your answer" style="flex: 1; padding: 8px 12px; font-size: 14px; border-radius: 4px; border: 1px solid #90caf9;"/>
      <button onclick="checkStepAnswer()" style="padding: 8px 16px; font-size: 14px; border-radius: 4px; border: 1px solid #90caf9; background: white; cursor: pointer; color: #1976d2; font-weight: 500;">Check</button>
    `;
    document.getElementById('step-answer').focus();
  }
  
  document.getElementById('step-question').style.display = 'block';
  
  const progress = ((stepNum + 1) / steps.length) * 100;
  document.getElementById('progress-bar').style.width = progress + '%';
  
  document.getElementById('prev-btn').disabled = stepNum === 0;
  document.getElementById('next-btn').disabled = stepNum === steps.length - 1;
  
  document.getElementById('prev-btn').style.opacity = stepNum === 0 ? '0.5' : '1';
  document.getElementById('next-btn').style.opacity = stepNum === steps.length - 1 ? '0.5' : '1';
}

function checkStepAnswer() {
  const step = steps[currentStep];
  const feedback = document.getElementById('step-feedback');
  
  if (step.isFinalStep) {
    const quotient = parseInt(document.getElementById('step-answer').value);
    const remainder = parseInt(document.getElementById('step-remainder').value);
    
    if (isNaN(quotient) || isNaN(remainder)) {
      feedback.textContent = 'Please enter both the quotient and remainder';
      feedback.style.color = '#d32f2f';
      return;
    }
    
    if (quotient === 175 && remainder === 6) {
      feedback.innerHTML = '✓ Perfect! You got it! 2,456 ÷ 14 = 175 R 6';
      feedback.style.color = '#388e3c';
      feedback.style.fontWeight = '500';
    } else {
      feedback.innerHTML = `Not quite. The correct answer is 175 R 6. Check your work!`;
      feedback.style.color = '#d32f2f';
    }
  } else {
    const userAnswer = parseInt(document.getElementById('step-answer').value);
    const correctAnswer = step.correctAnswer;
    
    if (isNaN(userAnswer)) {
      feedback.textContent = 'Please enter a number';
      feedback.style.color = '#f57f17';
      return;
    }
    
    if (userAnswer === correctAnswer) {
      feedback.innerHTML = '✓ Correct! Great job!';
      feedback.style.color = '#388e3c';
      feedback.style.fontWeight = '500';
    } else {
      feedback.textContent = `Not quite. The answer is ${correctAnswer}. Try again or move to the next step.`;
      feedback.style.color = '#d32f2f';
    }
  }
}

function nextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
}

function previousStep() {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
}

document.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    const activeElement = document.activeElement;
    if (activeElement.id === 'step-answer' || activeElement.id === 'step-remainder') {
      checkStepAnswer();
    }
  }
});

// Initialize first step
document.addEventListener('DOMContentLoaded', function() {
  showStep(0);
});
