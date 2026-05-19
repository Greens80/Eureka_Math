require('dotenv').config();
const express = require('express');
const Anthropic = require('@anthropic-ai/sdk');
const path = require('path');

const app = express();
app.use(express.json({ limit: '10mb' }));
app.use(express.static(path.join(__dirname)));

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// Lesson-by-lesson breakdown for all Grade 4 Eureka Math modules.
// Each entry describes the specific concept taught so the tutor is precisely focused.
const LESSON_MAP = {
  1: {
    name: "Place Value, Rounding, and Algorithms for Addition and Subtraction",
    totalLessons: 19,
    moduleOverview: `Tools: place value chart, vertical number line, tape diagram.
Key vocabulary: digit, period, place value, standard form, expanded form, word form, round, estimate, sum, difference, algorithm.
Parent tip: Ask "What digit is in the _____ place?" and "What are the two nearest multiples of _____ that this number falls between?"`,
    lessons: {
      1:  "Understanding that a digit in one place represents ten times the value of the same digit one place to its right. Use place value charts and place value disks to show 10 ones = 1 ten, 10 tens = 1 hundred, etc. up to 1,000,000.",
      2:  "Reading and writing numbers to 1,000,000 in standard form, expanded form, and word form. Recognizing the structure of number periods (ones, thousands, millions) separated by commas.",
      3:  "Naming numbers within 1,000,000 using place value language. Identifying the value of each digit. Writing numbers in all three forms given any one form.",
      4:  "Comparing multi-digit numbers up to 1,000,000 using >, <, and = symbols. Aligning digits by place value to compare. Ordering a set of numbers from least to greatest.",
      5:  "Finding 1,000 more/less and 10,000 more/less and 100,000 more/less than a given number mentally using the place value chart.",
      6:  "Rounding to the nearest ten thousand and hundred thousand using a vertical number line. Finding the two nearest multiples, identifying the midpoint, and deciding which multiple the number is closer to.",
      7:  "Rounding to any place value (hundreds, thousands, ten-thousands, hundred-thousands) using the vertical number line strategy. Applying rounding in context.",
      8:  "Rounding multi-digit numbers to any place value — extended practice and application including real-world contexts. Justifying rounding decisions.",
      9:  "Solving addition word problems using the standard algorithm with regrouping. Modeling with tape diagrams. Estimating with rounding to check reasonableness.",
      10: "Using the standard addition algorithm to add numbers up to 1,000,000, including problems requiring multiple regroups. Assessing reasonableness of answers.",
      11: "Solving multi-step addition word problems. Using tape diagrams to model, the standard algorithm to compute, and rounding to estimate.",
      12: "Introduction to the standard subtraction algorithm. Decomposing (regrouping) once. Connecting the algorithm to place value disks and tape diagrams.",
      13: "Subtracting with decomposing (regrouping) in up to two places. Understanding that when a digit is not large enough, you regroup from the next larger place.",
      14: "Subtracting with decomposing across zeros (e.g., 4,000 − 1,364). Breaking apart the minuend to make regrouping possible.",
      15: "Fluently applying the standard subtraction algorithm with multiple regroups including across zeros. Solving word problems with tape diagrams.",
      16: "Solving two-step word problems with addition and subtraction using tape diagrams. Writing equations with a letter for the unknown. Assessing reasonableness.",
      17: "Solving additive comparison word problems (how many more/fewer) using tape diagrams and the standard algorithms.",
      18: "Solving multi-step word problems requiring both addition and subtraction. Determining which operations are needed. Writing statements to answer questions.",
      19: "Creating and solving multi-step word problems from given tape diagrams and equations. Explaining reasoning.",
    },
  },
  2: {
    name: "Unit Conversions and Problem Solving with Metric Measurement",
    totalLessons: 5,
    moduleOverview: `Conversion rule: larger unit → smaller unit = MULTIPLY; smaller unit → larger unit = DIVIDE.
Conversions: 1 km = 1,000 m; 1 m = 100 cm; 1 m = 1,000 mm; 1 kg = 1,000 g; 1 L = 1,000 mL.
Tools: place value chart, tape diagram, number line.
Parent tip: Ask "Are we going to a bigger or smaller unit? Smaller unit = multiply."`,
    lessons: {
      1: "Expressing metric length measurements in terms of a smaller unit (km→m, m→cm, m→mm). Adding and subtracting mixed unit length measurements (e.g., 3 km 400 m + 2 km 750 m). Using tape diagrams and the standard algorithm.",
      2: "Expressing metric mass measurements in terms of a smaller unit (kg→g). Solving addition and subtraction word problems involving mass with mixed units. Recording in a table.",
      3: "Expressing metric capacity measurements in terms of a smaller unit (L→mL). Solving word problems involving capacity with mixed units. Connecting to multiplication.",
      4: "Knowing and relating metric units to place value units. Expressing measurements given in a larger unit in terms of a smaller unit (e.g., 3.5 km = 3,500 m). Connecting the metric system's base-10 structure to place value.",
      5: "Solving multi-step word problems involving length, mass, and capacity. Choosing the correct operation. Using tape diagrams and letters for unknowns. Mixed units across all three measurement types.",
    },
  },
  3: {
    name: "Multi-Digit Multiplication and Division",
    totalLessons: 43,
    moduleOverview: `Tools: place value disks, area model, partial products, tape diagram, DMSB (Divide-Multiply-Subtract-Bring down).
Key vocabulary: factor, product, quotient, remainder, divisor, dividend, area model, partial product, multiplicative comparison, prime, composite.
Parent tip: "Estimate first — about how many?" and "Can you draw an area model?"`,
    lessons: {
      1:  "Investigating the formula for area of a rectangle (Area = length × width) and perimeter (P = 2l + 2w or P = 2(l+w)). Distinguishing area (square units) from perimeter (linear units).",
      2:  "Solving multiplicative comparison word problems using area and perimeter formulas. 'The garden is 3 times as long as it is wide.' Drawing and labeling diagrams.",
      3:  "Solving multi-step real-world problems requiring area and perimeter. Writing equations with letters for unknowns.",
      4:  "Interpreting and representing patterns when multiplying by 10, 100, and 1,000. Using place value charts to show how digits shift left when multiplied by powers of 10.",
      5:  "Multiplying multiples of 10, 100, and 1,000 by single-digit numbers (e.g., 40 × 6, 300 × 7, 5,000 × 8). Using place value understanding and basic facts.",
      6:  "Multiplying two-digit multiples of 10 by two-digit multiples of 10 using the area model (e.g., 30 × 40). Connecting to place value.",
      7:  "Using place value disks to represent two-digit by one-digit multiplication. Understanding regrouping at each place value.",
      8:  "Using place value disks to represent three- and four-digit by one-digit multiplication. Recording the process with the standard algorithm alongside the disks.",
      9:  "Connecting the area model (partial products) to the standard multiplication algorithm for 3-digit × 1-digit. Writing partial products and combining them.",
      10: "Multiplying 3- and 4-digit numbers by 1-digit numbers using the standard algorithm. Estimating first, then computing, then checking reasonableness.",
      11: "Connecting the area model to partial products for 2-digit × 2-digit multiplication. Writing all four partial products (ones × ones, tens × ones, ones × tens, tens × tens).",
      12: "Explaining how the area model relates to the standard algorithm for two-digit by two-digit multiplication. Transitioning from four partial products to two partial products.",
      13: "Solving multi-step word problems using multiplication. Writing equations with a letter for the unknown. Using estimation to check.",
      14: "Understanding division with remainders using equal-group models and number lines. Interpreting what the remainder means in context.",
      15: "Solving division problems with remainders using array and area models. Relating division to multiplication (6 × ? + r = dividend).",
      16: "Dividing two-digit dividends by one-digit divisors with a remainder in the ones place using place value disks and the standard algorithm.",
      17: "Dividing two-digit dividends requiring decomposing a remainder in the tens place. Understanding when a digit in the quotient is zero.",
      18: "Finding whole number quotients and remainders for two-digit ÷ one-digit. Recording using the DMSB steps: Divide, Multiply, Subtract, Bring down.",
      19: "Explaining remainders by using place value understanding. Connecting the algorithm steps to the meaning of division.",
      20: "Solving division problems with three-digit dividends and no remainders using the area model. Decomposing the dividend into friendly parts.",
      21: "Solving division problems with three-digit dividends and remainders using the area model and the standard long division algorithm.",
      22: "Finding factor pairs for numbers to 100. Defining factor (a number that divides evenly into another) and understanding that every number has at least two factors (1 and itself).",
      23: "Using division and the associative property to test for factors. Finding all factor pairs systematically. Identifying numbers with exactly two factors (prime) vs. more than two factors (composite).",
      24: "Determining whether a whole number is a multiple of another number. Listing multiples and identifying patterns. Understanding the relationship: if 4 is a factor of 24, then 24 is a multiple of 4.",
      25: "Exploring properties of prime and composite numbers to 100 using the Sieve of Eratosthenes. Identifying all primes to 100.",
      26: "Dividing multiples of 10, 100, and 1,000 by single-digit numbers mentally (e.g., 320 ÷ 8, 4,200 ÷ 6). Using basic facts and place value understanding.",
      27: "Dividing three-digit dividends by one-digit divisors using place value disks and the standard algorithm, including decomposing a remainder in the hundreds place.",
      28: "Dividing three-digit dividends by divisors of 2, 3, 4, and 5 using the standard long division algorithm. Recording all DMSB steps clearly.",
      29: "Dividing four-digit dividends by one-digit divisors (2–5) using the standard algorithm, with up to three decompositions.",
      30: "Solving division problems with a zero in the dividend (e.g., 3,045 ÷ 5) or a zero in the quotient. Understanding what happens when a digit cannot be divided.",
      31: "Interpreting division word problems as either 'number of groups unknown' or 'group size unknown.' Drawing tape diagrams to model both types.",
      32: "Finding whole number quotients and remainders with divisors 6, 7, 8, and 9. Solving one-step division word problems with larger divisors.",
      33: "Explaining how the area model of division connects to the steps of the long division algorithm for three- and four-digit dividends.",
      34: "Solving multi-step word problems with larger divisors. Interpreting remainders in context (when to round up, round down, report as a fraction, or ignore).",
      35: "Solving multi-step word problems that combine multiplication and division. Identifying which operation to use from context.",
      36: "Solving mixed multi-step word problems with all four operations. Assessing reasonableness using estimation.",
      37: "Transitioning from four partial products to two partial products (the standard two-line form) for two-digit × two-digit multiplication.",
      38: "Multiplying two-digit by two-digit numbers using four partial products and the area model. Decomposing both factors into tens and ones.",
      39: "Multiplying two-digit by two-digit numbers — extended practice with the area model and connecting to the standard algorithm.",
      40: "Multiplying two-digit multiples of 10 by two-digit numbers (e.g., 30 × 47). Using the area model and understanding place value shifts.",
      41: "Multiplying by two-digit numbers where one factor has a zero in the ones place. Connecting area model to algorithm notation.",
      42: "Multiplying two-digit by two-digit numbers — moving from area model to standard algorithm. Writing two partial products (ones row and tens row).",
      43: "Fluently multiplying two-digit by two-digit numbers using the standard algorithm. Solving word problems requiring two-digit × two-digit multiplication.",
    },
  },
  4: {
    name: "Angle Measure and Plane Figures",
    totalLessons: 16,
    moduleOverview: `Tools: protractor, ruler, straightedge.
Key vocabulary: point, line, line segment, ray, angle, vertex, degree, acute, right, obtuse, straight, reflex, parallel, perpendicular, polygon, triangle, quadrilateral, symmetry, line of symmetry.
Parent tip: "Estimate first — is it bigger or smaller than 90°?" and "Do any sides look like railroad tracks (parallel)?"`,
    lessons: {
      1:  "Identifying and drawing points, lines, line segments, and rays. Understanding that a line goes on forever in both directions; a ray goes on forever in one direction; a line segment has two endpoints.",
      2:  "Defining angles as the union of two rays sharing a common endpoint (vertex). Identifying angles in shapes and in real-world objects. Using correct notation (∠ABC).",
      3:  "Identifying and classifying angles by type: acute (less than 90°), right (exactly 90°), obtuse (more than 90° but less than 180°), and straight (exactly 180°).",
      4:  "Measuring and sketching angles using a protractor. Aligning the center hole with the vertex and one ray along the baseline. Reading the correct scale (two scales on a protractor — choose based on whether angle opens left or right).",
      5:  "Measuring angles that require reading the inner or outer scale of the protractor accurately. Sketching angles of a given measure.",
      6:  "Using angle addition: when two angles share a vertex and a ray, their measures add. Finding an unknown angle measure when the whole angle and one part are known. Writing addition/subtraction equations.",
      7:  "Solving problems involving unknown angle measures using addition and subtraction. Applying the angle addition postulate in context.",
      8:  "Identifying parallel lines (lines that never intersect, always the same distance apart) and perpendicular lines (lines that intersect at exactly 90°). Using symbols ∥ and ⊥.",
      9:  "Drawing parallel and perpendicular lines. Identifying parallel and perpendicular sides in polygons and real-world objects.",
      10: "Classifying triangles by the measure of their angles: acute triangle (all angles acute), right triangle (one right angle), obtuse triangle (one obtuse angle).",
      11: "Classifying triangles by the length of their sides: equilateral (all sides equal), isosceles (at least two sides equal), scalene (no sides equal). Combining angle and side classifications.",
      12: "Defining and classifying quadrilaterals: trapezoid (at least one pair of parallel sides), parallelogram (two pairs of parallel sides), rectangle (parallelogram with 4 right angles), rhombus (parallelogram with 4 equal sides), square (rectangle and rhombus).",
      13: "Understanding the hierarchy of quadrilaterals: every square is a rectangle and a rhombus; every rectangle is a parallelogram; every parallelogram is a quadrilateral. Using a Venn diagram.",
      14: "Defining line symmetry: a line of symmetry divides a figure into two mirror-image halves. Identifying lines of symmetry in shapes and letters. Counting lines of symmetry.",
      15: "Drawing lines of symmetry and completing symmetric figures. Folding to test for symmetry.",
      16: "Identifying symmetric figures in real-world contexts. Creating symmetric designs. Reviewing and connecting all angle and shape concepts from the module.",
    },
  },
  5: {
    name: "Fraction Equivalence, Ordering, and Operations",
    totalLessons: 41,
    moduleOverview: `Tools: fraction strips, area models, number lines, tape diagrams.
Key vocabulary: numerator, denominator, equivalent fractions, simplest form, benchmark, common denominator, mixed number, improper fraction, like fractions, unlike fractions.
Parent tip: "If I split each piece into ___ equal parts, how many total?" and "Is this fraction closer to 0, 1/2, or 1?"`,
    lessons: {
      1:  "Decomposing fractions into unit fractions and sums of unit fractions (e.g., 3/4 = 1/4 + 1/4 + 1/4). Using fraction strips and area models. Writing fractions as sums in multiple ways.",
      2:  "Decomposing fractions into sums of fractions in more than one way. Recording decompositions with equations. Understanding that 5/3 = 3/3 + 2/3 = 1 + 2/3.",
      3:  "Decomposing and composing fractions greater than 1. Understanding mixed numbers and improper fractions as representations of the same quantity.",
      4:  "Converting between mixed numbers and improper fractions using number lines and area models. (e.g., 2 3/4 = 11/4 because 2 wholes = 8/4, and 8/4 + 3/4 = 11/4).",
      5:  "Adding and subtracting fractions with like denominators (same denominator). The denominator stays the same; only the numerators are added or subtracted.",
      6:  "Adding and subtracting fractions with like denominators in word problems. Using tape diagrams to model. Writing complete equations and statements.",
      7:  "Adding fractions to make a whole number or a number greater than 1. Understanding that the result may need to be written as a mixed number.",
      8:  "Comparing fractions using benchmarks (0, 1/2, 1). Deciding whether a fraction is closer to 0, closer to 1/2, or closer to 1 by comparing numerator to denominator.",
      9:  "Comparing fractions with the same numerator but different denominators (e.g., 3/4 vs. 3/8). Larger denominator means smaller pieces, so the fraction is smaller.",
      10: "Comparing fractions with the same denominator but different numerators. More pieces of the same size means the fraction is larger.",
      11: "Creating equivalent fractions by multiplying BOTH the numerator AND denominator by the same number. Using area models and number lines. (e.g., 1/2 = 2/4 = 3/6 = 4/8).",
      12: "Explaining why multiplying the numerator and denominator by the same number gives an equivalent fraction (multiplying by n/n = multiplying by 1, which doesn't change the value).",
      13: "Generating equivalent fractions for a given fraction. Finding the simplest form by dividing numerator and denominator by their greatest common factor.",
      14: "Comparing fractions with unlike denominators by finding equivalent fractions with a common denominator. The LCD (least common denominator) method.",
      15: "Comparing two fractions by converting both to the same denominator. Recording comparisons with >, <, =.",
      16: "Ordering 3 or more fractions with unlike denominators from least to greatest or greatest to least. Justifying the order.",
      17: "Finding and using equivalent fractions to add fractions with unlike denominators (denominators that are multiples of each other, e.g., halves and fourths).",
      18: "Adding fractions with unlike denominators where one denominator is a multiple of the other. Rewriting one fraction to have the same denominator as the other.",
      19: "Subtracting fractions with unlike denominators (one is a multiple of the other). Finding a common denominator before subtracting.",
      20: "Adding and subtracting fractions with unlike denominators in word problems. Using tape diagrams, number lines, and equations.",
      21: "Adding mixed numbers with like denominators (e.g., 2 3/4 + 1 2/4). Adding whole numbers and fractional parts separately.",
      22: "Subtracting mixed numbers with like denominators — no regrouping needed (e.g., 3 4/5 − 1 2/5).",
      23: "Subtracting mixed numbers with like denominators requiring regrouping (renaming one whole as a fraction, e.g., 4 1/4 − 1 3/4: rename 4 1/4 as 3 5/4).",
      24: "Adding mixed numbers with unlike denominators where one denominator is a multiple of the other.",
      25: "Subtracting mixed numbers with unlike denominators. Converting to common denominators then subtracting, with regrouping as needed.",
      26: "Solving multi-step word problems with mixed numbers involving both addition and subtraction.",
      27: "Multiplying a unit fraction by a whole number (e.g., 4 × 1/3 = 4/3). Understanding as repeated addition.",
      28: "Multiplying a non-unit fraction by a whole number (e.g., 4 × 2/5 = 8/5). Writing the answer as a mixed number when greater than 1.",
      29: "Solving word problems involving multiplying a fraction by a whole number. Modeling with tape diagrams.",
      30: "Multiplying a whole number by a fraction — extended practice. Creating word problems from equations.",
      31: "Solving multi-step word problems with fraction multiplication and addition or subtraction.",
      32: "Adding and subtracting fractions with denominators that are not multiples of each other. Finding the LCD by listing multiples of each denominator.",
      33: "Adding mixed numbers with unlike denominators where neither denominator is a multiple of the other.",
      34: "Subtracting mixed numbers with unlike denominators, with regrouping as needed.",
      35: "Solving word problems requiring adding and subtracting fractions with unlike denominators.",
      36: "Multi-step fraction word problems — combining multiplication, addition, and subtraction of fractions.",
      37: "Adding and subtracting fractions on number lines. Locating fractions and mixed numbers precisely.",
      38: "Interpreting a fraction as division (e.g., 3 ÷ 4 = 3/4). Solving word problems where the quotient is a fraction.",
      39: "Solving word problems where the solution is a fraction representing division. Writing division equations and fraction answers.",
      40: "Line plots with fractional data. Reading and interpreting line plots with fractions of a unit (1/2, 1/4, 1/8). Solving addition and subtraction questions from line plot data.",
      41: "Creating and interpreting line plots with fractional data. Solving multi-step questions using line plot data. Module review and synthesis.",
    },
  },
  6: {
    name: "Decimal Fractions",
    totalLessons: 7,
    moduleOverview: `Tools: place value chart (extended to hundredths), 10-column strip (tenths), 10×10 grid (hundredths), number line.
Key vocabulary: tenth, hundredth, decimal point, decimal fraction, equivalent decimal, compare.
Parent tip: Ask "How many tenths? How many hundredths?" and trace the place value chart to the right of the decimal point.`,
    lessons: {
      1: "Exploring tenths: 1 whole = 10 tenths; 1/10 = 0.1. Using the place value chart extended to tenths. Writing fractions with denominator 10 as decimals. Reading decimals aloud ('three tenths' = 0.3 = 3/10).",
      2: "Using the area model (10-column strip) to show tenths. Locating tenths on the number line. Adding tenths (e.g., 0.3 + 0.5 = 0.8 = 8/10). Connecting to place value.",
      3: "Exploring hundredths: 1 tenth = 10 hundredths; 1/100 = 0.01. Extending the place value chart to hundredths. Writing fractions with denominator 100 as decimals (e.g., 37/100 = 0.37).",
      4: "Using the 10×10 grid to model hundredths. Identifying tenths and hundredths in the same decimal (e.g., 0.43 = 4 tenths 3 hundredths). Writing mixed decimals (e.g., 2.47 = two and forty-seven hundredths).",
      5: "Comparing decimals to hundredths using place value. Comparing digit by digit from left to right. Recording comparisons with >, <, =. Ordering a set of decimals.",
      6: "Relating fractions and decimals: converting tenths to hundredths (e.g., 3/10 = 30/100 = 0.30). Recognizing that 1/4 = 25/100 = 0.25, 1/2 = 50/100 = 0.50, 3/4 = 75/100 = 0.75.",
      7: "Adding and comparing decimal fractions to hundredths. Solving word problems with decimals. Connecting decimal notation to money (dollars and cents). Module review.",
    },
  },
  7: {
    name: "Exploring Measurement with Multiplication",
    totalLessons: 4,
    moduleOverview: `Customary conversions: 1 ft = 12 in; 1 yd = 3 ft; 1 lb = 16 oz; 1 gal = 4 qt; 1 qt = 2 pt; 1 pt = 2 c; 1 min = 60 sec; 1 hr = 60 min.
Tools: tape diagram, conversion table, area model, standard algorithm.
Parent tip: "How many of the smaller unit fit into one bigger unit? So if we have ___ bigger units, we multiply by ___."`,
    lessons: {
      1: "Converting larger customary units to smaller units using multiplication: feet to inches (× 12), yards to feet (× 3), pounds to ounces (× 16). Using the area model and standard algorithm to multiply.",
      2: "Converting larger customary units of capacity to smaller units: gallons to quarts (× 4), quarts to pints (× 2), pints to cups (× 2). Also converting hours to minutes (× 60) and minutes to seconds (× 60). Multi-step conversions.",
      3: "Solving multi-step word problems involving customary measurement conversions. Identifying the correct conversion factor and operation. Using tape diagrams.",
      4: "Solving mixed-unit multi-step word problems (e.g., problems that mix length, weight, and capacity). Synthesizing multiplication and measurement concepts. Module review.",
    },
  },
};

function buildSystemPrompt(module, lesson) {
  const mod = LESSON_MAP[module];
  let moduleText;

  if (mod) {
    const lessonDetail = lesson && mod.lessons[lesson]
      ? `\nTHIS SPECIFIC LESSON (Lesson ${lesson} of ${mod.totalLessons}):\n${mod.lessons[lesson]}`
      : lesson
        ? `\nLesson ${lesson} of ${mod.totalLessons} in this module. Focus on the concepts most appropriate to this point in the module sequence.`
        : '';

    moduleText = `The student is working on Grade 4 Module ${module}: "${mod.name}"${lesson ? `, Lesson ${lesson}` : ''}.

MODULE OVERVIEW AND PARENT GUIDANCE:
${mod.moduleOverview}
${lessonDetail}`;
  } else {
    moduleText = `The student is working on Grade 4 Eureka Math. No specific module or lesson was selected — ask the student what topic they are working on so you can tailor your guidance.`;
  }

  return `You are a warm, encouraging, and patient Eureka Math tutor for a 4th grade student (approximately 9-10 years old). Your name is "Math Buddy."

${moduleText}

CORE TUTORING PHILOSOPHY — SOCRATIC METHOD:
You NEVER give the answer directly. Instead, you guide the student to discover the answer themselves through questions, hints, and encouragement. This builds real understanding, not just answer-getting.

YOUR TUTORING FLOW:
1. UNDERSTAND: First ask what the problem is asking and what the student already knows
2. CONNECT: Ask what strategy or tool from class might help (place value chart, area model, number line, protractor, fraction strips, etc.)
3. GUIDE: Ask leading questions step by step — one question at a time
4. ENCOURAGE: Celebrate every correct step with genuine praise ("Yes! You've got it!" "That's exactly right!")
5. REDIRECT: If wrong, never say "wrong" — say "Hmm, let me ask you this..." or "Interesting! Let's check that together..." then give a hint
6. CHECK: After solving, ask the student to explain WHY the method works and then give a similar practice problem

QUESTIONING STRATEGIES BY MODULE:
- Place value questions: "What digit is in the tens place?" "What are the two nearest multiples of 100?"
- Multiplication: "What's a good estimate first?" "Can you draw an area model for this?"
- Division: "What's the first step in D-M-S-B?" "About how many times does ___ go into ___?"
- Fractions: "Is this fraction closer to 0, to one-half, or to 1?" "What do we multiply top AND bottom by?"
- Angles: "Estimate first — is this angle bigger or smaller than 90°?"
- Measurement/conversion: "Are we going to a bigger or smaller unit?"
- Decimals: "How many tenths? How many hundredths?"

LANGUAGE AND TONE RULES:
- Use simple, clear language a 4th grader can understand
- Be warm, patient, and encouraging — never frustrating or condescending
- Use short sentences and short paragraphs
- Use emojis sparingly to keep it fun (✨ 🌟 👍 🤔 💡)
- When a student struggles, reassure them: "This is a tricky one! Let's figure it out together."
- Keep each response SHORT — one question or hint at a time, not a wall of text
- NEVER show the full solution in one response

COMPREHENSION CHECK (after solving):
Once the problem is solved, say "Awesome work! 🌟 Now let me check if you REALLY understand this." Then:
1. Ask them to explain the concept in their own words
2. Give them a similar but slightly different practice problem
3. Guide them through it with fewer hints than the first one

EUREKA MATH APPROACH:
- Honor the Concrete → Pictorial → Abstract progression
- Reference tools students use in class: place value charts, area models, number lines, fraction strips, protractors, 10-frames
- Use Eureka Math vocabulary students know from class
- Reference the Read-Draw-Write (RDW) strategy for word problems: Read the problem, Draw a model, Write a number sentence and statement

Remember: Your goal is for the student to feel confident and capable. Every child can do math — they just need the right questions to guide them there.`;
}

app.post('/api/chat', async (req, res) => {
  const { messages, module, lesson } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'messages array required' });
  }

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('Access-Control-Allow-Origin', '*');

  try {
    const systemPrompt = buildSystemPrompt(module, lesson);

    const stream = await client.messages.stream({
      model: 'claude-opus-4-7',
      max_tokens: 1024,
      system: systemPrompt,
      messages: messages,
      thinking: { type: 'adaptive' },
    });

    for await (const event of stream) {
      if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
        res.write(`data: ${JSON.stringify({ text: event.delta.text })}\n\n`);
      }
    }

    res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
    res.end();
  } catch (err) {
    console.error('Chat error:', err);
    res.write(`data: ${JSON.stringify({ error: 'Something went wrong. Please try again.' })}\n\n`);
    res.end();
  }
});

app.post('/api/analyze-image', async (req, res) => {
  const { imageBase64, mediaType, module, lesson } = req.body;

  if (!imageBase64 || !mediaType) {
    return res.status(400).json({ error: 'imageBase64 and mediaType required' });
  }

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('Access-Control-Allow-Origin', '*');

  try {
    const systemPrompt = buildSystemPrompt(module, lesson);

    const stream = await client.messages.stream({
      model: 'claude-opus-4-7',
      max_tokens: 1024,
      system: systemPrompt,
      thinking: { type: 'adaptive' },
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'image',
              source: {
                type: 'base64',
                media_type: mediaType,
                data: imageBase64,
              },
            },
            {
              type: 'text',
              text: 'I took a photo of my homework problem. Can you see what problem I need help with? Please read it and then start guiding me through it step by step — but don\'t give me the answer! Ask me questions to help me figure it out.',
            },
          ],
        },
      ],
    });

    for await (const event of stream) {
      if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
        res.write(`data: ${JSON.stringify({ text: event.delta.text })}\n\n`);
      }
    }

    res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
    res.end();
  } catch (err) {
    console.error('Image analysis error:', err);
    res.write(`data: ${JSON.stringify({ error: 'Could not read the image. Please try again or type the problem.' })}\n\n`);
    res.end();
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Eureka Math Homework Helper running at http://localhost:${PORT}`);
});
