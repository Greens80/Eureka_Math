// ── Lesson data (Grade 4 LESSON_MAP) ──
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
      1: "Expressing metric length measurements in terms of a smaller unit (km→m, m→cm, m→mm). Adding and subtracting mixed unit length measurements. Using tape diagrams and the standard algorithm.",
      2: "Expressing metric mass measurements in terms of a smaller unit (kg→g). Solving addition and subtraction word problems involving mass with mixed units.",
      3: "Expressing metric capacity measurements in terms of a smaller unit (L→mL). Solving word problems involving capacity with mixed units.",
      4: "Knowing and relating metric units to place value units. Expressing measurements given in a larger unit in terms of a smaller unit. Connecting the metric system's base-10 structure to place value.",
      5: "Solving multi-step word problems involving length, mass, and capacity. Choosing the correct operation. Using tape diagrams and letters for unknowns.",
    },
  },
  3: {
    name: "Multi-Digit Multiplication and Division",
    totalLessons: 43,
    moduleOverview: `Tools: place value disks, area model, partial products, tape diagram, DMSB (Divide-Multiply-Subtract-Bring down).
Key vocabulary: factor, product, quotient, remainder, divisor, dividend, area model, partial product, multiplicative comparison, prime, composite.
Parent tip: "Estimate first — about how many?" and "Can you draw an area model?"`,
    lessons: {
      1:  "Investigating the formula for area of a rectangle (Area = length × width) and perimeter (P = 2l + 2w). Distinguishing area (square units) from perimeter (linear units).",
      2:  "Solving multiplicative comparison word problems using area and perimeter formulas. Drawing and labeling diagrams.",
      3:  "Solving multi-step real-world problems requiring area and perimeter. Writing equations with letters for unknowns.",
      4:  "Interpreting and representing patterns when multiplying by 10, 100, and 1,000. Using place value charts to show how digits shift left.",
      5:  "Multiplying multiples of 10, 100, and 1,000 by single-digit numbers (e.g., 40 × 6, 300 × 7, 5,000 × 8). Using place value understanding and basic facts.",
      6:  "Multiplying two-digit multiples of 10 by two-digit multiples of 10 using the area model (e.g., 30 × 40).",
      7:  "Using place value disks to represent two-digit by one-digit multiplication. Understanding regrouping at each place value.",
      8:  "Using place value disks to represent three- and four-digit by one-digit multiplication. Recording with the standard algorithm alongside the disks.",
      9:  "Connecting the area model (partial products) to the standard multiplication algorithm for 3-digit × 1-digit.",
      10: "Multiplying 3- and 4-digit numbers by 1-digit numbers using the standard algorithm. Estimating first, then computing, then checking reasonableness.",
      11: "Connecting the area model to partial products for 2-digit × 2-digit multiplication. Writing all four partial products.",
      12: "Explaining how the area model relates to the standard algorithm for two-digit by two-digit multiplication. Transitioning from four partial products to two.",
      13: "Solving multi-step word problems using multiplication. Writing equations with a letter for the unknown.",
      14: "Understanding division with remainders using equal-group models and number lines. Interpreting what the remainder means in context.",
      15: "Solving division problems with remainders using array and area models. Relating division to multiplication.",
      16: "Dividing two-digit dividends by one-digit divisors with a remainder in the ones place using place value disks and the standard algorithm.",
      17: "Dividing two-digit dividends requiring decomposing a remainder in the tens place.",
      18: "Finding whole number quotients and remainders for two-digit ÷ one-digit. Recording using DMSB steps: Divide, Multiply, Subtract, Bring down.",
      19: "Explaining remainders by using place value understanding. Connecting the algorithm steps to the meaning of division.",
      20: "Solving division problems with three-digit dividends and no remainders using the area model.",
      21: "Solving division problems with three-digit dividends and remainders using the area model and standard long division algorithm.",
      22: "Finding factor pairs for numbers to 100. Defining factor and understanding that every number has at least two factors (1 and itself).",
      23: "Using division and the associative property to test for factors. Identifying numbers with exactly two factors (prime) vs. more than two (composite).",
      24: "Determining whether a whole number is a multiple of another number. Listing multiples and identifying patterns.",
      25: "Exploring properties of prime and composite numbers to 100 using the Sieve of Eratosthenes.",
      26: "Dividing multiples of 10, 100, and 1,000 by single-digit numbers mentally (e.g., 320 ÷ 8, 4,200 ÷ 6).",
      27: "Dividing three-digit dividends by one-digit divisors using place value disks and the standard algorithm, including decomposing a remainder in the hundreds place.",
      28: "Dividing three-digit dividends by divisors of 2, 3, 4, and 5 using the standard long division algorithm. Recording all DMSB steps clearly.",
      29: "Dividing four-digit dividends by one-digit divisors (2–5) using the standard algorithm, with up to three decompositions.",
      30: "Solving division problems with a zero in the dividend (e.g., 3,045 ÷ 5) or a zero in the quotient.",
      31: "Interpreting division word problems as either 'number of groups unknown' or 'group size unknown.' Drawing tape diagrams to model both types.",
      32: "Finding whole number quotients and remainders with divisors 6, 7, 8, and 9.",
      33: "Explaining how the area model of division connects to the steps of the long division algorithm for three- and four-digit dividends.",
      34: "Solving multi-step word problems with larger divisors. Interpreting remainders in context.",
      35: "Solving multi-step word problems that combine multiplication and division.",
      36: "Solving mixed multi-step word problems with all four operations. Assessing reasonableness using estimation.",
      37: "Transitioning from four partial products to two partial products (the standard two-line form) for two-digit × two-digit multiplication.",
      38: "Multiplying two-digit by two-digit numbers using four partial products and the area model.",
      39: "Multiplying two-digit by two-digit numbers — extended practice with the area model and connecting to the standard algorithm.",
      40: "Multiplying two-digit multiples of 10 by two-digit numbers (e.g., 30 × 47). Using the area model.",
      41: "Multiplying by two-digit numbers where one factor has a zero in the ones place. Connecting area model to algorithm notation.",
      42: "Multiplying two-digit by two-digit numbers — moving from area model to standard algorithm.",
      43: "Fluently multiplying two-digit by two-digit numbers using the standard algorithm. Solving word problems.",
    },
  },
  4: {
    name: "Angle Measure and Plane Figures",
    totalLessons: 16,
    moduleOverview: `Tools: protractor, ruler, straightedge.
Key vocabulary: point, line, line segment, ray, angle, vertex, degree, acute, right, obtuse, straight, reflex, parallel, perpendicular, polygon, triangle, quadrilateral, symmetry, line of symmetry.
Parent tip: "Estimate first — is it bigger or smaller than 90°?" and "Do any sides look like railroad tracks (parallel)?"`,
    lessons: {
      1:  "Identifying and drawing points, lines, line segments, and rays. Understanding that a line goes on forever in both directions; a ray in one direction; a line segment has two endpoints.",
      2:  "Defining angles as two rays sharing a common endpoint (vertex). Identifying angles in shapes and real-world objects. Using correct notation (∠ABC).",
      3:  "Classifying angles by type: acute (less than 90°), right (exactly 90°), obtuse (more than 90° but less than 180°), and straight (exactly 180°).",
      4:  "Measuring and sketching angles using a protractor. Aligning the center hole with the vertex and one ray along the baseline. Reading the correct scale.",
      5:  "Measuring angles that require reading the inner or outer scale of the protractor accurately. Sketching angles of a given measure.",
      6:  "Using angle addition: when two angles share a vertex and a ray, their measures add. Finding an unknown angle measure when the whole angle and one part are known.",
      7:  "Solving problems involving unknown angle measures using addition and subtraction. Applying the angle addition concept in context.",
      8:  "Identifying parallel lines (never intersect) and perpendicular lines (intersect at exactly 90°). Using symbols ∥ and ⊥.",
      9:  "Drawing parallel and perpendicular lines. Identifying parallel and perpendicular sides in polygons and real-world objects.",
      10: "Classifying triangles by the measure of their angles: acute (all angles acute), right (one right angle), obtuse (one obtuse angle).",
      11: "Classifying triangles by side length: equilateral (all equal), isosceles (at least two equal), scalene (no sides equal). Combining angle and side classifications.",
      12: "Defining and classifying quadrilaterals: trapezoid, parallelogram, rectangle, rhombus, square. Understanding the hierarchy.",
      13: "Understanding the hierarchy of quadrilaterals: every square is a rectangle and a rhombus; every rectangle is a parallelogram. Using a Venn diagram.",
      14: "Defining line symmetry: a line of symmetry divides a figure into two mirror-image halves. Identifying lines of symmetry in shapes and letters.",
      15: "Drawing lines of symmetry and completing symmetric figures. Folding to test for symmetry.",
      16: "Identifying symmetric figures in real-world contexts. Reviewing and connecting all angle and shape concepts from the module.",
    },
  },
  5: {
    name: "Fraction Equivalence, Ordering, and Operations",
    totalLessons: 41,
    moduleOverview: `Tools: fraction strips, area models, number lines, tape diagrams.
Key vocabulary: numerator, denominator, equivalent fractions, simplest form, benchmark, common denominator, mixed number, improper fraction, like fractions, unlike fractions.
Parent tip: "If I split each piece into ___ equal parts, how many total?" and "Is this fraction closer to 0, 1/2, or 1?"`,
    lessons: {
      1:  "Decomposing fractions into unit fractions and sums of unit fractions (e.g., 3/4 = 1/4 + 1/4 + 1/4). Using fraction strips and area models.",
      2:  "Decomposing fractions into sums of fractions in more than one way. Recording decompositions with equations.",
      3:  "Decomposing and composing fractions greater than 1. Understanding mixed numbers and improper fractions as representations of the same quantity.",
      4:  "Converting between mixed numbers and improper fractions using number lines and area models (e.g., 2 3/4 = 11/4).",
      5:  "Adding and subtracting fractions with like denominators. The denominator stays the same; only numerators are added or subtracted.",
      6:  "Adding and subtracting fractions with like denominators in word problems. Using tape diagrams.",
      7:  "Adding fractions to make a whole number or a number greater than 1.",
      8:  "Comparing fractions using benchmarks (0, 1/2, 1). Deciding whether a fraction is closer to 0, 1/2, or 1.",
      9:  "Comparing fractions with the same numerator but different denominators (e.g., 3/4 vs. 3/8). Larger denominator = smaller pieces = smaller fraction.",
      10: "Comparing fractions with the same denominator but different numerators.",
      11: "Creating equivalent fractions by multiplying BOTH the numerator AND denominator by the same number. Using area models and number lines.",
      12: "Explaining why multiplying numerator and denominator by the same number gives an equivalent fraction (multiplying by n/n = 1).",
      13: "Generating equivalent fractions. Finding simplest form by dividing numerator and denominator by their greatest common factor.",
      14: "Comparing fractions with unlike denominators by finding equivalent fractions with a common denominator.",
      15: "Comparing two fractions by converting both to the same denominator. Recording with >, <, =.",
      16: "Ordering 3 or more fractions with unlike denominators from least to greatest. Justifying the order.",
      17: "Finding and using equivalent fractions to add fractions with unlike denominators (denominators that are multiples of each other).",
      18: "Adding fractions with unlike denominators where one denominator is a multiple of the other.",
      19: "Subtracting fractions with unlike denominators (one is a multiple of the other).",
      20: "Adding and subtracting fractions with unlike denominators in word problems. Using tape diagrams, number lines, and equations.",
      21: "Adding mixed numbers with like denominators. Adding whole numbers and fractional parts separately.",
      22: "Subtracting mixed numbers with like denominators — no regrouping needed.",
      23: "Subtracting mixed numbers with like denominators requiring regrouping (renaming one whole as a fraction).",
      24: "Adding mixed numbers with unlike denominators where one denominator is a multiple of the other.",
      25: "Subtracting mixed numbers with unlike denominators. Converting to common denominators, with regrouping as needed.",
      26: "Solving multi-step word problems with mixed numbers involving both addition and subtraction.",
      27: "Multiplying a unit fraction by a whole number (e.g., 4 × 1/3 = 4/3). Understanding as repeated addition.",
      28: "Multiplying a non-unit fraction by a whole number (e.g., 4 × 2/5 = 8/5). Writing the answer as a mixed number when greater than 1.",
      29: "Solving word problems involving multiplying a fraction by a whole number. Modeling with tape diagrams.",
      30: "Multiplying a whole number by a fraction — extended practice.",
      31: "Solving multi-step word problems with fraction multiplication and addition or subtraction.",
      32: "Adding and subtracting fractions with denominators that are not multiples of each other. Finding the LCD.",
      33: "Adding mixed numbers with unlike denominators where neither denominator is a multiple of the other.",
      34: "Subtracting mixed numbers with unlike denominators, with regrouping as needed.",
      35: "Solving word problems requiring adding and subtracting fractions with unlike denominators.",
      36: "Multi-step fraction word problems — combining multiplication, addition, and subtraction of fractions.",
      37: "Adding and subtracting fractions on number lines. Locating fractions and mixed numbers precisely.",
      38: "Interpreting a fraction as division (e.g., 3 ÷ 4 = 3/4). Solving word problems where the quotient is a fraction.",
      39: "Solving word problems where the solution is a fraction representing division.",
      40: "Line plots with fractional data. Reading and interpreting line plots with fractions of a unit (1/2, 1/4, 1/8).",
      41: "Creating and interpreting line plots with fractional data. Solving multi-step questions using line plot data. Module review.",
    },
  },
  6: {
    name: "Decimal Fractions",
    totalLessons: 7,
    moduleOverview: `Tools: place value chart (extended to hundredths), 10-column strip (tenths), 10×10 grid (hundredths), number line.
Key vocabulary: tenth, hundredth, decimal point, decimal fraction, equivalent decimal, compare.
Parent tip: Ask "How many tenths? How many hundredths?" and trace the place value chart to the right of the decimal point.`,
    lessons: {
      1: "Exploring tenths: 1 whole = 10 tenths; 1/10 = 0.1. Using the place value chart extended to tenths. Writing fractions with denominator 10 as decimals.",
      2: "Using the area model (10-column strip) to show tenths. Locating tenths on the number line. Adding tenths.",
      3: "Exploring hundredths: 1 tenth = 10 hundredths; 1/100 = 0.01. Extending the place value chart. Writing fractions with denominator 100 as decimals.",
      4: "Using the 10×10 grid to model hundredths. Identifying tenths and hundredths in the same decimal (e.g., 0.43 = 4 tenths 3 hundredths).",
      5: "Comparing decimals to hundredths using place value. Comparing digit by digit from left to right. Recording with >, <, =.",
      6: "Relating fractions and decimals: converting tenths to hundredths (e.g., 3/10 = 30/100 = 0.30). Recognizing 1/4 = 0.25, 1/2 = 0.50, 3/4 = 0.75.",
      7: "Adding and comparing decimal fractions to hundredths. Solving word problems with decimals. Connecting to money (dollars and cents). Module review.",
    },
  },
  7: {
    name: "Exploring Measurement with Multiplication",
    totalLessons: 4,
    moduleOverview: `Customary conversions: 1 ft = 12 in; 1 yd = 3 ft; 1 lb = 16 oz; 1 gal = 4 qt; 1 qt = 2 pt; 1 pt = 2 c; 1 min = 60 sec; 1 hr = 60 min.
Tools: tape diagram, conversion table, area model, standard algorithm.
Parent tip: "How many of the smaller unit fit into one bigger unit? So if we have ___ bigger units, we multiply by ___."`,
    lessons: {
      1: "Converting larger customary units to smaller using multiplication: feet to inches (× 12), yards to feet (× 3), pounds to ounces (× 16). Using the area model and standard algorithm.",
      2: "Converting customary capacity units: gallons to quarts (× 4), quarts to pints (× 2), pints to cups (× 2). Also hours to minutes (× 60) and minutes to seconds (× 60).",
      3: "Solving multi-step word problems involving customary measurement conversions. Identifying the correct conversion factor. Using tape diagrams.",
      4: "Solving mixed-unit multi-step word problems combining length, weight, and capacity. Synthesizing multiplication and measurement concepts. Module review.",
    },
  },
};

// ── Grade 5 lesson map ──
const LESSON_MAP_G5 = {
  1: {
    name: "Place Value and Decimal Fractions",
    totalLessons: 16,
    moduleOverview: `Tools: place value chart (through millionths), area model, number line.
Key vocabulary: thousandths, ten-thousandths, millionths, standard form, expanded form, word form, round.
Parent tip: Ask "What is the value of each digit?" and "Which place value are we rounding to?"`,
  },
  2: {
    name: "Multi-Digit Whole Number and Decimal Fraction Operations",
    totalLessons: 29,
    moduleOverview: `Tools: area model, place value chart, standard algorithm.
Key vocabulary: decimal, multiply, divide, estimate, product, quotient, remainder.
Parent tip: "Estimate first using rounding." and "Does your answer make sense?"`,
  },
  3: {
    name: "Addition and Subtraction of Fractions",
    totalLessons: 16,
    moduleOverview: `Tools: fraction strips, number lines, area models.
Key vocabulary: unlike denominators, least common denominator, equivalent fractions, mixed numbers.
Parent tip: "Find a common denominator first." and "Can you simplify your answer?"`,
  },
  4: {
    name: "Multiplication and Division of Fractions and Decimal Fractions",
    totalLessons: 38,
    moduleOverview: `Tools: area models, tape diagrams, number lines.
Key vocabulary: multiply fractions, divide fractions, unit fraction, reciprocal, scaling.
Parent tip: "Multiply numerators and denominators." and "Dividing by a fraction is the same as multiplying by its reciprocal."`,
  },
  5: {
    name: "Addition and Multiplication with Volume and Area",
    totalLessons: 25,
    moduleOverview: `Tools: unit cubes, area models, nets.
Key vocabulary: volume, cubic units, rectangular prism, composite solid, area.
Parent tip: "V = l × w × h" and "Can you break this shape into smaller parts?"`,
  },
  6: {
    name: "Problem Solving with the Coordinate Plane",
    totalLessons: 32,
    moduleOverview: `Tools: coordinate plane, ruler.
Key vocabulary: x-axis, y-axis, origin, ordered pair, coordinate, quadrant.
Parent tip: "Remember: go right first (x), then up (y) — 'over and up!'"`,
  },
};

const MODULE_LESSON_COUNTS_G4 = Object.fromEntries(
  Object.entries(LESSON_MAP).map(([k, v]) => [k, v.totalLessons])
);
const MODULE_LESSON_COUNTS_G5 = Object.fromEntries(
  Object.entries(LESSON_MAP_G5).map(([k, v]) => [k, v.totalLessons])
);

// For backward compatibility
const MODULE_LESSON_COUNTS = MODULE_LESSON_COUNTS_G4;

// ── Grade 4 module options HTML ──
const G4_MODULE_OPTIONS = `
  <option value="">-- Pick your module --</option>
  <option value="1">Module 1 – Place Value &amp; Addition/Subtraction (19 lessons)</option>
  <option value="2">Module 2 – Metric Measurement (5 lessons)</option>
  <option value="3">Module 3 – Multiplication &amp; Division (43 lessons)</option>
  <option value="4">Module 4 – Angles &amp; Shapes (16 lessons)</option>
  <option value="5">Module 5 – Fractions (41 lessons)</option>
  <option value="6">Module 6 – Decimals (7 lessons)</option>
  <option value="7">Module 7 – Measurement with Multiplication (4 lessons)</option>
`;

// ── Grade 5 module options HTML ──
const G5_MODULE_OPTIONS = `
  <option value="">-- Pick your module --</option>
  <option value="1">Module 1 – Place Value &amp; Decimal Fractions (16 lessons)</option>
  <option value="2">Module 2 – Multi-Digit Operations with Decimals (29 lessons)</option>
  <option value="3">Module 3 – Addition &amp; Subtraction of Fractions (16 lessons)</option>
  <option value="4">Module 4 – Multiplication &amp; Division of Fractions (38 lessons)</option>
  <option value="5">Module 5 – Volume and Area (25 lessons)</option>
  <option value="6">Module 6 – Coordinate Plane (32 lessons)</option>
`;

// ── Grade 4 test topic areas ──
const TEST_TOPICS_G4 = [
  { module: 1, name: "Place Value & Rounding" },
  { module: 1, name: "Addition & Subtraction Algorithms" },
  { module: 2, name: "Metric Measurement" },
  { module: 3, name: "Multiplication" },
  { module: 3, name: "Division & Remainders" },
  { module: 3, name: "Factors, Multiples, Prime & Composite" },
  { module: 4, name: "Angles & Shapes" },
  { module: 5, name: "Fractions" },
  { module: 6, name: "Decimals" },
];

// ── Grade 5 test topic areas ──
const TEST_TOPICS_G5 = [
  { module: 1, name: "Decimal Place Value" },
  { module: 2, name: "Multi-Digit Multiplication & Division" },
  { module: 3, name: "Adding & Subtracting Fractions with Unlike Denominators" },
  { module: 4, name: "Multiplying Fractions" },
  { module: 4, name: "Dividing Fractions" },
  { module: 5, name: "Volume of Rectangular Prisms" },
  { module: 6, name: "Coordinate Plane" },
];

// ── Build homework system prompt ──
function buildSystemPrompt(module, lesson, grade) {
  grade = grade || 4;
  const lessonMap = grade === 5 ? LESSON_MAP_G5 : LESSON_MAP;
  const mod = lessonMap[module];
  let moduleText;

  if (mod) {
    const lessonDetail = lesson && mod.lessons && mod.lessons[lesson]
      ? `\nTHIS SPECIFIC LESSON (Lesson ${lesson} of ${mod.totalLessons}):\n${mod.lessons[lesson]}`
      : lesson
        ? `\nLesson ${lesson} of ${mod.totalLessons}. Focus on concepts appropriate to this point in the module sequence.`
        : '';

    moduleText = `The student is working on Grade ${grade} Module ${module}: "${mod.name}"${lesson ? `, Lesson ${lesson}` : ''}.

MODULE OVERVIEW AND PARENT GUIDANCE:
${mod.moduleOverview}
${lessonDetail}`;
  } else {
    moduleText = `The student is working on Grade ${grade} Eureka Math. No specific module was selected — ask the student what topic they are working on.`;
  }

  return `You are a warm, encouraging, and patient Eureka Math tutor for a ${grade}th grade student (approximately ${grade + 5}-${grade + 6} years old). Your name is "Math Buddy."

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
- Place value: "What digit is in the _____ place?" "What are the two nearest multiples of _____?"
- Multiplication: "What's a good estimate first?" "Can you draw an area model for this?"
- Division: "What's the first step in D-M-S-B?" "About how many times does ___ go into ___?"
- Fractions: "Is this fraction closer to 0, to one-half, or to 1?" "What do we multiply top AND bottom by?"
- Angles: "Estimate first — is this angle bigger or smaller than 90°?"
- Measurement/conversion: "Are we going to a bigger or smaller unit?"
- Decimals: "How many tenths? How many hundredths?"

LANGUAGE AND TONE RULES:
- Use simple, clear language a ${grade}th grader can understand
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
- Reference the Read-Draw-Write (RDW) strategy for word problems

Remember: Your goal is for the student to feel confident and capable. Every child can do math — they just need the right questions.`;
}

// ── Build test system prompt ──
function buildTestSystemPrompt(grade) {
  grade = grade || 4;
  const topics = grade === 5 ? TEST_TOPICS_G5 : TEST_TOPICS_G4;
  const topicList = topics.map(t => `- ${t.name} (Module ${t.module})`).join('\n');

  const exampleJson = grade === 4
    ? `{"grade":4,"overallScore":75,"topics":[{"module":1,"name":"Place Value & Rounding","score":85,"level":"proficient","correct":2,"total":2,"suggestedProblems":["Round 234,567 to the nearest ten-thousand","Write 45,008 in expanded form"]},{"module":2,"name":"Metric Measurement","score":60,"level":"developing","correct":1,"total":2,"suggestedProblems":["Convert 3 km 400 m to meters"]}]}`
    : `{"grade":5,"overallScore":75,"topics":[{"module":1,"name":"Decimal Place Value","score":85,"level":"proficient","correct":2,"total":2,"suggestedProblems":["Write 3.047 in expanded form","Round 4.836 to the nearest hundredth"]},{"module":3,"name":"Adding & Subtracting Fractions with Unlike Denominators","score":60,"level":"developing","correct":1,"total":2,"suggestedProblems":["Add 2/3 + 3/4"]}]}`;

  return `You are Math Buddy, conducting a Grade ${grade} Eureka Math assessment. Your goal is to evaluate the student's understanding across all major topic areas in a fun and encouraging way.

ASSESSMENT STRUCTURE:
Ask 2 questions per topic area. The topics are:
${topicList}

RULES:
- Ask questions one at a time. After the student answers, give brief encouraging feedback ("Great try!" or "Almost — the answer was X. Let's keep going!") and move to the next question.
- Keep the tone warm and encouraging, like a friendly quiz game.
- Do NOT use the Socratic method here — this is an assessment, so tell them if they got it right or wrong after each answer.
- Keep questions age-appropriate for Grade ${grade} students.
- After ALL questions are done, thank the student and tell them their report card is being generated.

SCORING:
- Score each topic out of 100% based on how many questions they got correct (0/2 = 0%, 1/2 = 50%, 2/2 = 100%).
- Levels: score >= 80 = "proficient", score 60-79 = "developing", score < 60 = "needs support"
- Overall score = average of all topic scores.
- For suggestedProblems: provide 2 practice problems for any topic where score < 100%.

FINAL STEP — VERY IMPORTANT:
After all questions are answered and you've thanked the student, output the report card data EXACTLY in this format (on its own lines, with no extra text around it):

===REPORT_CARD_START===
${exampleJson}
===REPORT_CARD_END===

The JSON must include ALL ${topics.length} topics with their scores.`;
}

// ── API Key management ──
const KEY_STORAGE = 'mathbuddy_apikey';
const USERS_STORAGE = 'mathbuddy_users';
const SESSION_STORAGE = 'mathbuddy_session';

function getApiKey() {
  return localStorage.getItem(KEY_STORAGE) || '';
}

function saveApiKey(key) {
  localStorage.setItem(KEY_STORAGE, key.trim());
}

function clearApiKey() {
  localStorage.removeItem(KEY_STORAGE);
}

// ── User management ──
function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_STORAGE) || '{}');
  } catch { return {}; }
}

function saveUsers(users) {
  localStorage.setItem(USERS_STORAGE, JSON.stringify(users));
}

function getCurrentUser() {
  try {
    return JSON.parse(sessionStorage.getItem(SESSION_STORAGE) || 'null');
  } catch { return null; }
}

function setCurrentUser(user) {
  if (user) {
    sessionStorage.setItem(SESSION_STORAGE, JSON.stringify(user));
  } else {
    sessionStorage.removeItem(SESSION_STORAGE);
  }
}

// ── Password hashing ──
async function hashPassword(password) {
  const saltedPassword = 'mathbuddy:' + password;
  const msgBuffer = new TextEncoder().encode(saltedPassword);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// ── State ──
let selectedModule = null;
let selectedLesson = null;
let selectedGrade = 4;
let inputMethod = 'type';
let photoBase64 = null;
let photoMediaType = null;
let conversationHistory = [];
let testConversationHistory = [];
let isStreaming = false;
let isTestStreaming = false;
let currentMode = 'homework'; // 'homework' or 'test'

// ── DOM refs ──
const keyScreen = document.getElementById('key-screen');
const loginScreen = document.getElementById('login-screen');
const setupScreen = document.getElementById('setup-screen');
const chatScreen = document.getElementById('chat-screen');
const testScreen = document.getElementById('test-screen');
const reportScreen = document.getElementById('report-screen');

const apiKeyInput = document.getElementById('api-key-input');
const saveKeyBtn = document.getElementById('save-key-btn');
const changeKeyBtn = document.getElementById('change-key-btn');
const moduleSelect = document.getElementById('module-select');
const lessonInput = document.getElementById('lesson-input');
const startBtn = document.getElementById('start-btn');
const backBtn = document.getElementById('back-btn');
const newProblemBtn = document.getElementById('new-problem-btn');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');
const chatSubtitle = document.getElementById('chat-subtitle');
const photoInput = document.getElementById('photo-input');
const photoPreview = document.getElementById('photo-preview');
const photoPlaceholder = document.getElementById('photo-placeholder');
const clearPhotoBtn = document.getElementById('clear-photo-btn');

// Test screen refs
const testBackBtn = document.getElementById('test-back-btn');
const finishTestBtn = document.getElementById('finish-test-btn');
const testMessages = document.getElementById('test-messages');
const testInput = document.getElementById('test-input');
const testSendBtn = document.getElementById('test-send-btn');
const testSubtitle = document.getElementById('test-subtitle');

// Student header refs
const studentHeader = document.getElementById('student-header');
const genericHeader = document.getElementById('generic-header');
const studentAvatar = document.getElementById('student-avatar');
const studentGreeting = document.getElementById('student-greeting');
const studentGradeBadge = document.getElementById('student-grade-badge');
const reportCardBtn = document.getElementById('report-card-btn');
const takeTestBtn = document.getElementById('take-test-btn');
const logoutBtn = document.getElementById('logout-btn');
const retestBanner = document.getElementById('retest-banner');
const retestBannerText = document.getElementById('retest-banner-text');
const retestNowBtn = document.getElementById('retest-now-btn');

// Setup grade buttons
const setupGrade4Btn = document.getElementById('setup-grade-4');
const setupGrade5Btn = document.getElementById('setup-grade-5');

// ── All screens list ──
const ALL_SCREENS = [keyScreen, loginScreen, setupScreen, chatScreen, testScreen, reportScreen];

// ── Screen helper ──
function showScreen(screen) {
  ALL_SCREENS.forEach(s => {
    s.classList.remove('active');
    s.style.display = '';
  });
  screen.classList.add('active');
  if (screen === chatScreen || screen === testScreen) {
    screen.style.display = 'flex';
  }
}

// ── Startup ──
(function init() {
  if (!getApiKey()) {
    showScreen(keyScreen);
  } else {
    const user = getCurrentUser();
    if (!user) {
      showScreen(loginScreen);
    } else {
      setupStudentHeader(user);
      showScreen(setupScreen);
    }
  }
})();

// ── Key screen ──
saveKeyBtn.addEventListener('click', () => {
  const key = apiKeyInput.value.trim();
  if (!key.startsWith('sk-')) {
    alert('That doesn\'t look like a valid API key. It should start with "sk-".');
    return;
  }
  saveApiKey(key);
  apiKeyInput.value = '';
  // Go to login screen after saving
  showScreen(loginScreen);
});

apiKeyInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') saveKeyBtn.click();
});

changeKeyBtn.addEventListener('click', () => {
  clearApiKey();
  showScreen(keyScreen);
});

// ── Login screen ──
let loginMode = 'login'; // 'login' or 'register'
let registerGrade = 4;

const toggleLoginBtn = document.getElementById('toggle-login-btn');
const toggleRegisterBtn = document.getElementById('toggle-register-btn');

function setLoginMode(mode) {
  loginMode = mode;
  const registerNameSection = document.getElementById('register-name-section');
  const registerGradeSection = document.getElementById('register-grade-section');
  const registerConfirmSection = document.getElementById('register-confirm-section');
  const loginTitle = document.getElementById('login-title');
  const loginSubtitle = document.getElementById('login-subtitle');
  const loginSubmitBtn = document.getElementById('login-submit-btn');
  const loginError = document.getElementById('login-error');

  loginError.style.display = 'none';

  if (mode === 'login') {
    toggleLoginBtn.classList.add('active');
    toggleRegisterBtn.classList.remove('active');
    registerNameSection.style.display = 'none';
    registerGradeSection.style.display = 'none';
    registerConfirmSection.style.display = 'none';
    loginTitle.textContent = 'Welcome Back!';
    loginSubtitle.textContent = 'Log in to continue your math journey! 🌟';
    loginSubmitBtn.textContent = 'Log In 🚀';
    document.getElementById('login-password').autocomplete = 'current-password';
  } else {
    toggleLoginBtn.classList.remove('active');
    toggleRegisterBtn.classList.add('active');
    registerNameSection.style.display = 'block';
    registerGradeSection.style.display = 'block';
    registerConfirmSection.style.display = 'block';
    loginTitle.textContent = 'New Student!';
    loginSubtitle.textContent = 'Create your account to start learning! 🌟';
    loginSubmitBtn.textContent = 'Create Account 🚀';
    document.getElementById('login-password').autocomplete = 'new-password';
  }
}

toggleLoginBtn.addEventListener('click', () => setLoginMode('login'));
toggleRegisterBtn.addEventListener('click', () => setLoginMode('register'));

// Register grade buttons
document.querySelectorAll('#register-grade-section .grade-select-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#register-grade-section .grade-select-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    registerGrade = parseInt(btn.dataset.grade);
  });
});

const loginSubmitBtn = document.getElementById('login-submit-btn');
loginSubmitBtn.addEventListener('click', handleLoginSubmit);

document.getElementById('login-password').addEventListener('keydown', e => {
  if (e.key === 'Enter') handleLoginSubmit();
});
document.getElementById('login-confirm') && document.getElementById('login-confirm').addEventListener('keydown', e => {
  if (e.key === 'Enter') handleLoginSubmit();
});

async function handleLoginSubmit() {
  const loginError = document.getElementById('login-error');
  const usernameRaw = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value;
  const username = usernameRaw.toLowerCase();

  loginError.style.display = 'none';

  if (!username || !password) {
    showLoginError('Please fill in all fields.');
    return;
  }

  if (loginMode === 'register') {
    const displayName = document.getElementById('register-displayname').value.trim();
    const confirm = document.getElementById('login-confirm').value;

    if (!displayName) { showLoginError('Please enter a display name.'); return; }
    if (password.length < 4) { showLoginError('Password must be at least 4 characters.'); return; }
    if (password !== confirm) { showLoginError('Passwords do not match.'); return; }

    const users = getUsers();
    if (users[username]) { showLoginError('That username is already taken. Try another!'); return; }

    const passwordHash = await hashPassword(password);
    const newUser = {
      displayName,
      passwordHash,
      grade: registerGrade,
      reportCard: null,
      homeworkSessions: {},
      retestSuggested: [],
    };
    users[username] = newUser;
    saveUsers(users);

    const sessionUser = { username, ...newUser };
    setCurrentUser(sessionUser);
    setupStudentHeader(sessionUser);
    showScreen(setupScreen);
  } else {
    const users = getUsers();
    const user = users[username];
    if (!user) { showLoginError('Username not found. Did you mean to register?'); return; }

    const passwordHash = await hashPassword(password);
    if (passwordHash !== user.passwordHash) { showLoginError('Incorrect password. Try again!'); return; }

    const sessionUser = { username, ...user };
    setCurrentUser(sessionUser);
    setupStudentHeader(sessionUser);
    showScreen(setupScreen);
  }
}

function showLoginError(msg) {
  const loginError = document.getElementById('login-error');
  loginError.textContent = msg;
  loginError.style.display = 'block';
}

// ── Student header ──
const AVATARS = ['🦊', '🐼', '🦁', '🐯', '🐸', '🦋', '🐬', '🦄', '🐙', '🦅'];

function getAvatarForUser(username) {
  let sum = 0;
  for (let i = 0; i < username.length; i++) sum += username.charCodeAt(i);
  return AVATARS[sum % AVATARS.length];
}

function setupStudentHeader(user) {
  if (!user) {
    studentHeader.style.display = 'none';
    genericHeader.style.display = 'block';
    return;
  }

  studentHeader.style.display = 'block';
  genericHeader.style.display = 'none';

  studentAvatar.textContent = getAvatarForUser(user.username);
  studentGreeting.textContent = `Hi, ${user.displayName}! 🎉`;
  const grade = user.grade || 4;
  studentGradeBadge.textContent = `${user.displayName}'s Grade ${grade}`;

  // Set grade selection to match user's grade
  selectedGrade = grade;
  updateGradeUI(grade);

  // Retest banner
  updateRetestBanner(user);
}

function updateRetestBanner(user) {
  if (!user || !user.retestSuggested || user.retestSuggested.length === 0) {
    retestBanner.style.display = 'none';
    return;
  }
  const grade = user.grade || 4;
  const lessonMap = grade === 5 ? LESSON_MAP_G5 : LESSON_MAP;
  const modNum = user.retestSuggested[0];
  const modData = lessonMap[modNum];
  const modName = modData ? modData.name : `Module ${modNum}`;
  retestBannerText.textContent = `You've been practicing ${modName}! Ready to test what you know? 🎯`;
  retestBanner.style.display = 'flex';
}

reportCardBtn.addEventListener('click', () => {
  showReportScreen();
});

takeTestBtn.addEventListener('click', () => {
  startTestMode();
});

retestNowBtn.addEventListener('click', () => {
  startTestMode();
});

logoutBtn.addEventListener('click', () => {
  setCurrentUser(null);
  studentHeader.style.display = 'none';
  genericHeader.style.display = 'block';
  showScreen(loginScreen);
});

// ── Grade selection on setup screen ──
function updateGradeUI(grade) {
  if (grade === 5) {
    setupGrade4Btn.classList.remove('active');
    setupGrade5Btn.classList.add('active');
    moduleSelect.innerHTML = G5_MODULE_OPTIONS;
  } else {
    setupGrade4Btn.classList.add('active');
    setupGrade5Btn.classList.remove('active');
    moduleSelect.innerHTML = G4_MODULE_OPTIONS;
  }
  lessonInput.value = '';
  document.getElementById('lesson-range-hint').textContent = '';
}

setupGrade4Btn.addEventListener('click', () => {
  selectedGrade = 4;
  updateGradeUI(4);
  // Update user grade if logged in
  const user = getCurrentUser();
  if (user) {
    user.grade = 4;
    setCurrentUser(user);
    const users = getUsers();
    if (users[user.username]) {
      users[user.username].grade = 4;
      saveUsers(users);
    }
    studentGradeBadge.textContent = `${user.displayName}'s Grade 4`;
  }
});

setupGrade5Btn.addEventListener('click', () => {
  selectedGrade = 5;
  updateGradeUI(5);
  // Update user grade if logged in
  const user = getCurrentUser();
  if (user) {
    user.grade = 5;
    setCurrentUser(user);
    const users = getUsers();
    if (users[user.username]) {
      users[user.username].grade = 5;
      saveUsers(users);
    }
    studentGradeBadge.textContent = `${user.displayName}'s Grade 5`;
  }
});

// ── Module → lesson range ──
moduleSelect.addEventListener('change', () => {
  const mod = parseInt(moduleSelect.value);
  const lessonCounts = selectedGrade === 5 ? MODULE_LESSON_COUNTS_G5 : MODULE_LESSON_COUNTS_G4;
  const maxLessons = lessonCounts[mod];
  const hint = document.getElementById('lesson-range-hint');
  if (maxLessons) {
    lessonInput.max = maxLessons;
    hint.textContent = `(1–${maxLessons})`;
    if (parseInt(lessonInput.value) > maxLessons) lessonInput.value = '';
  } else {
    lessonInput.max = 43;
    hint.textContent = '';
  }
});

// ── Tab switching ──
document.querySelectorAll('.method-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.method-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.method-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    inputMethod = tab.dataset.method;
    document.getElementById(`method-${inputMethod}`).classList.add('active');
  });
});

// ── Photo upload ──
photoInput.addEventListener('change', e => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    const dataUrl = ev.target.result;
    photoBase64 = dataUrl.slice(dataUrl.indexOf(',') + 1);
    photoMediaType = file.type || 'image/jpeg';
    photoPreview.src = dataUrl;
    photoPreview.style.display = 'block';
    photoPlaceholder.style.display = 'none';
    clearPhotoBtn.style.display = 'inline-block';
  };
  reader.readAsDataURL(file);
});

clearPhotoBtn.addEventListener('click', () => {
  photoBase64 = null;
  photoMediaType = null;
  photoPreview.style.display = 'none';
  photoPlaceholder.style.display = 'block';
  clearPhotoBtn.style.display = 'none';
  photoInput.value = '';
});

// ── Start homework session ──
startBtn.addEventListener('click', startSession);

function startSession() {
  selectedModule = parseInt(moduleSelect.value) || null;
  selectedLesson = parseInt(lessonInput.value) || null;

  let initialUserMessage = null;
  let imageData = null;

  if (inputMethod === 'type') {
    const text = document.getElementById('problem-text').value.trim();
    if (!text) { alert('Please type your math problem first! ✏️'); return; }
    initialUserMessage = `I need help with this problem: ${text}`;
  } else if (inputMethod === 'photo') {
    if (!photoBase64) { alert('Please take or upload a photo of your problem first! 📷'); return; }
    imageData = { base64: photoBase64, mediaType: photoMediaType };
  } else if (inputMethod === 'number') {
    const page = document.getElementById('page-number').value.trim();
    const num = document.getElementById('problem-number').value.trim();
    if (!page || !num) { alert('Please enter the page number and problem number! 🔢'); return; }
    initialUserMessage = `I need help with page ${page}, problem number ${num}. I'll describe it to you.`;
  }

  currentMode = 'homework';
  showScreen(chatScreen);

  const grade = selectedGrade || 4;
  const moduleNamesG4 = {
    1: 'Module 1 – Place Value', 2: 'Module 2 – Metric Measurement',
    3: 'Module 3 – Multiplication & Division', 4: 'Module 4 – Angles & Shapes',
    5: 'Module 5 – Fractions', 6: 'Module 6 – Decimals', 7: 'Module 7 – Measurement',
  };
  const moduleNamesG5 = {
    1: 'Module 1 – Place Value & Decimals', 2: 'Module 2 – Multi-Digit Operations',
    3: 'Module 3 – Adding/Subtracting Fractions', 4: 'Module 4 – Multiplying/Dividing Fractions',
    5: 'Module 5 – Volume and Area', 6: 'Module 6 – Coordinate Plane',
  };
  const moduleNames = grade === 5 ? moduleNamesG5 : moduleNamesG4;
  const modLabel = selectedModule ? moduleNames[selectedModule] : `Grade ${grade} Eureka Math`;
  chatSubtitle.textContent = modLabel + (selectedLesson ? `, Lesson ${selectedLesson}` : '');

  conversationHistory = [];
  chatMessages.innerHTML = '';
  appendBuddyMessage("Hi! I'm Math Buddy! 🦉 I'm so excited to work on math with you today!\n\nI'll never just give you the answer — we'll figure it out together, step by step. You've got this! 💪");

  if (imageData) {
    appendUserImageMessage(imageData.base64, imageData.mediaType);
    streamToAnthropic(buildImageMessages(imageData.base64, imageData.mediaType), true);
  } else if (inputMethod === 'number') {
    appendBuddyMessage("Great! Can you describe what the problem says? Tell me the numbers and what it's asking you to find.");
  } else {
    appendUserMessage(initialUserMessage);
    conversationHistory.push({ role: 'user', content: initialUserMessage });
    streamToAnthropic(conversationHistory, false);
  }
}

function buildImageMessages(base64, mediaType) {
  return [{
    role: 'user',
    content: [
      { type: 'image', source: { type: 'base64', media_type: mediaType, data: base64 } },
      { type: 'text', text: "I took a photo of my homework problem. Please read it and guide me through it step by step — but don't give me the answer! Ask me questions to help me figure it out." },
    ],
  }];
}

// ── Navigation: Back from chat screen ──
backBtn.addEventListener('click', () => {
  // Track homework session for retest suggestion
  if (selectedModule) {
    const user = getCurrentUser();
    if (user) {
      trackHomeworkSession(user, selectedModule);
    }
  }
  showScreen(setupScreen);
});

newProblemBtn.addEventListener('click', () => {
  // Track homework session for retest suggestion
  if (selectedModule) {
    const user = getCurrentUser();
    if (user) {
      trackHomeworkSession(user, selectedModule);
    }
  }
  showScreen(setupScreen);
  document.getElementById('problem-text').value = '';
  clearPhotoBtn.click();
  document.getElementById('page-number').value = '';
  document.getElementById('problem-number').value = '';
});

// ── Track homework sessions for retest suggestion ──
function trackHomeworkSession(user, module) {
  if (!module) return;
  const users = getUsers();
  const storedUser = users[user.username];
  if (!storedUser) return;

  if (!storedUser.homeworkSessions) storedUser.homeworkSessions = {};
  storedUser.homeworkSessions[module] = (storedUser.homeworkSessions[module] || 0) + 1;

  // Check if we should add to retestSuggested
  const sessions = storedUser.homeworkSessions[module];
  if (sessions >= 3) {
    const reportCard = storedUser.reportCard;
    let shouldSuggest = false;
    if (!reportCard) {
      shouldSuggest = true;
    } else {
      const topicForModule = reportCard.topics ? reportCard.topics.find(t => t.module === module) : null;
      if (!topicForModule || topicForModule.score < 80) {
        shouldSuggest = true;
      }
    }
    if (shouldSuggest) {
      if (!storedUser.retestSuggested) storedUser.retestSuggested = [];
      if (!storedUser.retestSuggested.includes(module)) {
        storedUser.retestSuggested.push(module);
      }
    }
  }

  users[user.username] = storedUser;
  saveUsers(users);

  // Update session user
  const updatedUser = { ...user, ...storedUser, username: user.username };
  setCurrentUser(updatedUser);
  updateRetestBanner(updatedUser);
}

// ── Send message (homework) ──
sendBtn.addEventListener('click', sendMessage);

chatInput.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
});

chatInput.addEventListener('input', () => {
  chatInput.style.height = 'auto';
  chatInput.style.height = Math.min(chatInput.scrollHeight, 120) + 'px';
});

function sendMessage() {
  if (isStreaming) return;
  const text = chatInput.value.trim();
  if (!text) return;
  appendUserMessage(text);
  conversationHistory.push({ role: 'user', content: text });
  chatInput.value = '';
  chatInput.style.height = 'auto';
  streamToAnthropic(conversationHistory, false);
}

// ── Direct Anthropic API streaming (homework) ──
async function streamToAnthropic(messages, isImageRequest) {
  const apiKey = getApiKey();
  if (!apiKey) {
    appendBuddyMessage("Oops! I can't find your API key. Let me take you back to set it up.");
    setTimeout(() => { clearApiKey(); showScreen(keyScreen); }, 1500);
    return;
  }

  isStreaming = true;
  sendBtn.disabled = true;
  const typingEl = appendTypingIndicator(chatMessages);

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify({
        model: 'claude-opus-4-5',
        max_tokens: 1024,
        stream: true,
        system: buildSystemPrompt(selectedModule, selectedLesson, selectedGrade),
        messages,
      }),
    });

    typingEl.remove();

    if (!response.ok) {
      const errBody = await response.json().catch(() => ({}));
      if (response.status === 401) {
        appendBuddyMessage("❌ That API key doesn't seem to work. Let me take you back to fix it.");
        setTimeout(() => { clearApiKey(); showScreen(keyScreen); }, 1800);
      } else {
        appendBuddyMessage(`Hmm, something went wrong (${response.status}: ${errBody.error?.message || 'unknown error'}). Please try again!`);
      }
      return;
    }

    const buddyBubble = appendBuddyMessage('', true, chatMessages);
    let fullText = '';

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop();

      for (const line of lines) {
        if (!line.startsWith('data: ')) continue;
        const json = line.slice(6).trim();
        if (json === '[DONE]' || !json) continue;
        try {
          const evt = JSON.parse(json);
          if (evt.type === 'content_block_delta' && evt.delta?.type === 'text_delta') {
            fullText += evt.delta.text;
            buddyBubble.innerHTML = formatMessage(fullText);
            scrollToBottom(chatMessages);
          }
        } catch {}
      }
    }

    // Save assistant turn to history
    if (isImageRequest) {
      conversationHistory.push(...messages);
    }
    if (fullText) {
      conversationHistory.push({ role: 'assistant', content: fullText });
    }

    checkForComprehensionTrigger(fullText);
  } catch (err) {
    typingEl?.remove();
    appendBuddyMessage("Oops! I had trouble connecting. Check your internet and try again. 🔄");
    console.error(err);
  } finally {
    isStreaming = false;
    sendBtn.disabled = false;
    chatInput.focus();
  }
}

// ── Test mode ──
function startTestMode() {
  const user = getCurrentUser();
  const grade = user ? (user.grade || 4) : selectedGrade || 4;

  currentMode = 'test';
  testConversationHistory = [];
  testMessages.innerHTML = '';
  testSubtitle.textContent = `Grade ${grade} Assessment`;

  showScreen(testScreen);

  appendTestBuddyMessage(`Hi! I'm Math Buddy in Assessment Mode! 🦉📝\n\nI'm going to ask you some math questions to see how you're doing. There are no tricks here — just answer your best and I'll give you feedback along the way.\n\nLet's get started! Ready? 🚀`);

  // Start the test by sending an initial prompt
  const startMsg = "Please start the assessment now.";
  testConversationHistory.push({ role: 'user', content: startMsg });
  streamTestToAnthropic(testConversationHistory);
}

testBackBtn.addEventListener('click', () => {
  showScreen(setupScreen);
});

finishTestBtn.addEventListener('click', async () => {
  if (isTestStreaming) return;
  await generateReportCardNow();
});

testSendBtn.addEventListener('click', sendTestMessage);

testInput.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendTestMessage(); }
});

testInput.addEventListener('input', () => {
  testInput.style.height = 'auto';
  testInput.style.height = Math.min(testInput.scrollHeight, 120) + 'px';
});

function sendTestMessage() {
  if (isTestStreaming) return;
  const text = testInput.value.trim();
  if (!text) return;
  appendTestUserMessage(text);
  testConversationHistory.push({ role: 'user', content: text });
  testInput.value = '';
  testInput.style.height = 'auto';
  streamTestToAnthropic(testConversationHistory);
}

async function streamTestToAnthropic(messages) {
  const apiKey = getApiKey();
  if (!apiKey) {
    appendTestBuddyMessage("Oops! I can't find your API key.");
    return;
  }

  const user = getCurrentUser();
  const grade = user ? (user.grade || 4) : selectedGrade || 4;

  isTestStreaming = true;
  testSendBtn.disabled = true;
  finishTestBtn.disabled = true;
  const typingEl = appendTypingIndicator(testMessages);

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify({
        model: 'claude-opus-4-5',
        max_tokens: 2048,
        stream: true,
        system: buildTestSystemPrompt(grade),
        messages,
      }),
    });

    typingEl.remove();

    if (!response.ok) {
      const errBody = await response.json().catch(() => ({}));
      appendTestBuddyMessage(`Hmm, something went wrong (${response.status}: ${errBody.error?.message || 'unknown error'}). Please try again!`);
      return;
    }

    const buddyBubble = appendTestBuddyMessage('', true);
    let fullText = '';
    let reportCardFound = false;

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop();

      for (const line of lines) {
        if (!line.startsWith('data: ')) continue;
        const json = line.slice(6).trim();
        if (json === '[DONE]' || !json) continue;
        try {
          const evt = JSON.parse(json);
          if (evt.type === 'content_block_delta' && evt.delta?.type === 'text_delta') {
            fullText += evt.delta.text;

            // Check for report card marker while streaming
            if (!reportCardFound && fullText.includes('===REPORT_CARD_START===')) {
              reportCardFound = true;
            }

            // Display text without the report card block
            const displayText = stripReportCardBlock(fullText);
            buddyBubble.innerHTML = formatMessage(displayText);
            scrollToBottom(testMessages);
          }
        } catch {}
      }
    }

    // Save assistant turn
    if (fullText) {
      testConversationHistory.push({ role: 'assistant', content: fullText });
    }

    // Process report card if present
    if (reportCardFound && fullText.includes('===REPORT_CARD_END===')) {
      const reportCard = extractReportCard(fullText);
      if (reportCard) {
        saveReportCard(reportCard);
        setTimeout(() => showReportScreen(), 1500);
      }
    }

  } catch (err) {
    typingEl?.remove();
    appendTestBuddyMessage("Oops! I had trouble connecting. Check your internet and try again. 🔄");
    console.error(err);
  } finally {
    isTestStreaming = false;
    testSendBtn.disabled = false;
    finishTestBtn.disabled = false;
    testInput.focus();
  }
}

async function generateReportCardNow() {
  const apiKey = getApiKey();
  if (!apiKey) return;

  const user = getCurrentUser();
  const grade = user ? (user.grade || 4) : selectedGrade || 4;

  isTestStreaming = true;
  testSendBtn.disabled = true;
  finishTestBtn.disabled = true;

  const finishMsg = "The student has clicked 'Finish Test'. Please evaluate all answers given so far and output the complete report card JSON now, even if not all questions were asked. Output the ===REPORT_CARD_START=== ... ===REPORT_CARD_END=== block.";

  const messages = [...testConversationHistory, { role: 'user', content: finishMsg }];

  appendTestBuddyMessage("Generating your report card... 📊");

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify({
        model: 'claude-opus-4-5',
        max_tokens: 2048,
        stream: false,
        system: buildTestSystemPrompt(grade),
        messages,
      }),
    });

    if (!response.ok) {
      appendTestBuddyMessage("Could not generate report card. Please try again.");
      return;
    }

    const data = await response.json();
    const fullText = data.content?.[0]?.text || '';

    const reportCard = extractReportCard(fullText);
    if (reportCard) {
      saveReportCard(reportCard);
      showReportScreen();
    } else {
      appendTestBuddyMessage("I had trouble generating your report card. Please try taking the full test!");
    }
  } catch (err) {
    appendTestBuddyMessage("Oops! Something went wrong generating your report card.");
    console.error(err);
  } finally {
    isTestStreaming = false;
    testSendBtn.disabled = false;
    finishTestBtn.disabled = false;
  }
}

function stripReportCardBlock(text) {
  const startMarker = '===REPORT_CARD_START===';
  const endMarker = '===REPORT_CARD_END===';
  const startIdx = text.indexOf(startMarker);
  if (startIdx === -1) return text;
  const endIdx = text.indexOf(endMarker);
  if (endIdx === -1) {
    // Marker started but not ended yet — strip from start marker to end
    return text.slice(0, startIdx).trim();
  }
  return (text.slice(0, startIdx) + text.slice(endIdx + endMarker.length)).trim();
}

function extractReportCard(text) {
  const startMarker = '===REPORT_CARD_START===';
  const endMarker = '===REPORT_CARD_END===';
  const startIdx = text.indexOf(startMarker);
  const endIdx = text.indexOf(endMarker);
  if (startIdx === -1 || endIdx === -1) return null;
  const jsonStr = text.slice(startIdx + startMarker.length, endIdx).trim();
  try {
    return JSON.parse(jsonStr);
  } catch (e) {
    console.error('Failed to parse report card JSON:', e, jsonStr);
    return null;
  }
}

function saveReportCard(reportCard) {
  const user = getCurrentUser();
  if (!user) return;

  reportCard.date = new Date().toISOString();

  const users = getUsers();
  if (users[user.username]) {
    users[user.username].reportCard = reportCard;
    // Clear retestSuggested for modules that now have score >= 80
    if (users[user.username].retestSuggested && reportCard.topics) {
      users[user.username].retestSuggested = users[user.username].retestSuggested.filter(modNum => {
        const topic = reportCard.topics.find(t => t.module === modNum);
        return !topic || topic.score < 80;
      });
    }
    saveUsers(users);
  }

  const updatedUser = { ...user, reportCard };
  setCurrentUser(updatedUser);
}

// ── Report card screen ──
function showReportScreen() {
  const user = getCurrentUser();
  renderReportCard(user);
  showScreen(reportScreen);
}

function renderReportCard(user) {
  const reportContent = document.getElementById('report-content');

  if (!user || !user.reportCard) {
    reportContent.innerHTML = `
      <div class="report-empty">
        <div class="report-empty-icon">📊</div>
        <h2>No Assessment Yet</h2>
        <p>Take your first test to see your report card!</p>
        <button class="start-btn" onclick="startTestMode()">🎯 Take Test</button>
      </div>
    `;
    return;
  }

  const rc = user.reportCard;
  const grade = rc.grade || user.grade || 4;
  const dateStr = rc.date ? new Date(rc.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Recently';
  const overallScore = rc.overallScore || 0;
  const overallLevel = scoreToLevel(overallScore);
  const overallColor = scoreToColor(overallScore);

  let topicsHtml = '';
  if (rc.topics && rc.topics.length > 0) {
    topicsHtml = rc.topics.map((topic, idx) => {
      const color = scoreToColor(topic.score);
      const level = scoreToLevel(topic.score);
      const problemsHtml = topic.suggestedProblems && topic.suggestedProblems.length > 0
        ? `<div class="suggested-problems" id="problems-${idx}">
            <p class="suggested-label">Practice these problems:</p>
            <ul class="problem-list">
              ${topic.suggestedProblems.map(p => `<li>${escapeHtml(p)}</li>`).join('')}
            </ul>
          </div>`
        : '';
      const retakeBtn = topic.score < 80
        ? `<button class="retake-module-btn" onclick="startTestMode()">Retake Test</button>`
        : '';
      return `
        <div class="report-topic-card">
          <div class="report-topic-header">
            <div class="report-topic-name">${escapeHtml(topic.name)}</div>
            <div class="report-topic-score">
              <span class="score-pct" style="color:${color}">${topic.score}%</span>
              <span class="level-badge" style="background:${color}20;color:${color}">${level}</span>
            </div>
          </div>
          <div class="progress-bar-track">
            <div class="progress-bar-fill" style="width:0%;background:${color}" data-width="${topic.score}"></div>
          </div>
          <div class="report-topic-footer">
            <span class="correct-count">${topic.correct ?? '?'}/${topic.total ?? 2} correct</span>
            ${retakeBtn}
          </div>
          ${problemsHtml}
        </div>
      `;
    }).join('');
  }

  reportContent.innerHTML = `
    <div class="report-header">
      <h2>📊 ${escapeHtml(user.displayName)}'s Report Card</h2>
      <p class="report-date">${dateStr} • Grade ${grade} Assessment</p>
    </div>
    <div class="overall-score-block" style="border-color:${overallColor}">
      <div class="overall-score-num" style="color:${overallColor}">${overallScore}%</div>
      <div class="overall-level" style="color:${overallColor}">${overallLevel}</div>
      <div class="overall-label">Overall Score</div>
    </div>
    <div class="report-topics-list">
      ${topicsHtml}
    </div>
    <div class="report-actions">
      <button class="start-btn report-action-btn" onclick="showScreen(setupScreen)">📚 Homework Help</button>
      <button class="start-btn report-action-btn secondary-btn" onclick="startTestMode()">🎯 Retake Full Test</button>
    </div>
  `;

  // Animate progress bars
  requestAnimationFrame(() => {
    reportContent.querySelectorAll('.progress-bar-fill').forEach(bar => {
      const targetWidth = bar.dataset.width;
      bar.style.width = targetWidth + '%';
    });
  });
}

function scoreToLevel(score) {
  if (score >= 80) return 'Proficient';
  if (score >= 60) return 'Developing';
  return 'Needs Support';
}

function scoreToColor(score) {
  if (score >= 80) return '#16a34a'; // green
  if (score >= 60) return '#d97706'; // yellow/amber
  return '#dc2626'; // red
}

// ── Test UI helpers ──
function appendTestUserMessage(text) {
  const el = document.createElement('div');
  el.className = 'message user';
  el.innerHTML = `<div class="message-avatar">😊</div><div class="message-bubble">${escapeHtml(text)}</div>`;
  testMessages.appendChild(el);
  scrollToBottom(testMessages);
}

function appendTestBuddyMessage(text, streaming = false) {
  const el = document.createElement('div');
  el.className = 'message buddy';
  el.innerHTML = `<div class="message-avatar">🦉</div><div class="message-bubble">${streaming ? '' : formatMessage(text)}</div>`;
  testMessages.appendChild(el);
  scrollToBottom(testMessages);
  return el.querySelector('.message-bubble');
}

// ── UI helpers ──
function appendUserMessage(text) {
  const el = document.createElement('div');
  el.className = 'message user';
  el.innerHTML = `<div class="message-avatar">😊</div><div class="message-bubble">${escapeHtml(text)}</div>`;
  chatMessages.appendChild(el);
  scrollToBottom(chatMessages);
}

function appendUserImageMessage(base64, mediaType) {
  const el = document.createElement('div');
  el.className = 'message user';
  el.innerHTML = `
    <div class="message-avatar">😊</div>
    <div class="message-bubble">
      <img src="data:${mediaType};base64,${base64}" class="message-image" alt="Homework photo" />
      <div>Here's my homework problem!</div>
    </div>`;
  chatMessages.appendChild(el);
  scrollToBottom(chatMessages);
}

function appendBuddyMessage(text, streaming = false, container) {
  container = container || chatMessages;
  const el = document.createElement('div');
  el.className = 'message buddy';
  el.innerHTML = `<div class="message-avatar">🦉</div><div class="message-bubble">${streaming ? '' : formatMessage(text)}</div>`;
  container.appendChild(el);
  scrollToBottom(container);
  return el.querySelector('.message-bubble');
}

function appendTypingIndicator(container) {
  container = container || chatMessages;
  const el = document.createElement('div');
  el.className = 'message buddy';
  el.innerHTML = `<div class="message-avatar">🦉</div><div class="message-bubble"><div class="typing-dots"><span></span><span></span><span></span></div></div>`;
  container.appendChild(el);
  scrollToBottom(container);
  return el;
}

function appendComprehensionBanner() {
  const el = document.createElement('div');
  el.className = 'comprehension-banner';
  el.textContent = "🌟 Comprehension Check Time! Let's make sure you really understand! 🌟";
  chatMessages.appendChild(el);
  scrollToBottom(chatMessages);
}

function checkForComprehensionTrigger(text) {
  const lower = text.toLowerCase();
  const triggers = ['comprehension check','check your understanding','let me check if you really understand',
    'try a similar problem','practice problem',"you've solved it","you got it","great work! now","awesome work!"];
  if (triggers.some(t => lower.includes(t))) appendComprehensionBanner();
}

function formatMessage(text) {
  let html = escapeHtml(text);
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\n/g, '<br>');
  return html;
}

function escapeHtml(text) {
  return String(text).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function scrollToBottom(container) {
  container = container || chatMessages;
  container.scrollTop = container.scrollHeight;
}
