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
// Module 1 data is sourced directly from the official Eureka Math Grade 5 Module 1
// Teacher Edition, Student Workbook, and Additional Student Materials.
const LESSON_MAP_G5 = {
  1: {
    name: "Place Value and Decimal Fractions",
    totalLessons: 16,
    moduleOverview: `Standards: 5.NBT.1, 5.NBT.2, 5.NBT.3, 5.NBT.4, 5.NBT.7, 5.MD.1
Topics: A (L1-4) Multiplicative Patterns on the Place Value Chart | B (L5-6) Decimal Fractions and Place Value Patterns | C (L7-8) Place Value and Rounding Decimal Fractions | D (L9-10) Adding and Subtracting Decimals | E (L11-12) Multiplying Decimals | F (L13-16) Dividing Decimals
Tools: place value chart (millions → thousandths), place value disks, area model, vertical number line, personal white board, tape diagram
Key vocabulary: thousandths, exponent, base, power, exponential form (e.g. 10³), expanded form (fraction and decimal versions), unit form, word form, decimal fraction, compose/decompose, rename/regroup, standard algorithm, RDW (Read-Draw-Write)
Parent tips from curriculum:
• READ DECIMALS BY THEIR UNIT — say "seven tenths," not "zero point seven." This mirrors whole-number language and builds understanding. "7 tenths + 8 tenths = 15 tenths = 1 and 5 tenths" is correct thinking.
• PLACE VALUE DISKS BRIDGE CONCRETE AND ABSTRACT — if a child struggles, return to drawing disks on the place value chart. A disk labeled "1/10" in the tenths column is more concrete than a digit alone.
• EXPONENTS ARE NOT MULTIPLICATION — 10⁵ = 100,000, NOT 10×5. A common mistake: 10⁴ = 40,000. The exponent tells how many times 10 is used as a factor.
• METRIC CONVERSIONS USE POWERS OF 10 — to convert meters → centimeters multiply by 10² (=100); meters → millimeters multiply by 10³ (=1,000).
• ESTIMATION CONFIRMS DECIMAL PLACEMENT — before computing, estimate by rounding. If 5.1 × 2 ≈ 10, an answer of 1.02 or 102 is unreasonable.`,
    lessons: {
      1:  "Reason concretely and pictorially using place value understanding to relate adjacent base ten units from millions to thousandths. Use place value disks on a chart spanning millions–thousandths to show that each place is 10 times the unit to its right and 1/10 the unit to its left. Tools: place value chart, place value disks. Vocab: thousandths (NEW). Fluency Sprint: Multiply by 10.",
      2:  "Reason abstractly using place value understanding to relate adjacent base ten units from millions to thousandths. Move from concrete disks to abstract place value reasoning; express relationships as equations (e.g., 32.1 × 10 = 321; 3,632.1 ÷ 10 = 363.21). Tools: place value chart. Vocab: 10 times as large, 1/10 as large. Fluency: Multiply and Divide by 10.",
      3:  "Use exponents to name place value units and explain patterns in the placement of the decimal point. Write powers of 10 in exponential form (10¹ through 10⁶); explain why multiplying by 10ⁿ shifts digits n places left and dividing by 10ⁿ shifts digits n places right. Tools: powers-of-10 chart. Vocab: exponent (NEW), base, power, exponential form. Fluency Sprint: Multiply by 3.",
      4:  "Use exponents to denote powers of 10 with application to metric conversions. Convert metric length units using exponents: 1 m = 10² cm = 10³ mm; 1 km = 10³ m. Write conversion equations in exponential form. Tools: meter strip template, place value chart. Vocab: millimeter, centimeter, meter, kilometer, convert/rename. Fluency: Convert Units.",
      5:  "Name decimal fractions in expanded, unit, and word forms by applying place value reasoning. Write decimals (to thousandths) in standard form, expanded form using fractions (3 × 1/10 + 6 × 1/100), expanded form using decimals (3 × 0.1 + 6 × 0.01), unit form (3 tenths 6 hundredths), and word form. Tools: thousands–thousandths place value chart. Vocab: expanded form (fraction and decimal), unit form, word form, decimal fraction. Fluency Sprint: Multiply Decimals by 10, 100, and 1,000.",
      6:  "Compare decimal fractions to the thousandths using like units, and express comparisons with >, <, =. Align decimals by place value; convert to like units to compare (e.g., compare 0.4 and 0.38 by renaming 0.4 as 0.40 = 40 hundredths > 38 hundredths). Order sets of decimals from least to greatest. Tools: place value chart. Vocab: like units, >, <, =.",
      7:  "Round a given decimal to any place using place value understanding and the vertical number line. Identify the two benchmark values (nearest multiples) above and below, find the midpoint, and determine which benchmark is closer. Round to tenths, hundredths, or any specified place. Tools: vertical number line, hundreds–thousandths place value chart. Vocab: round, benchmark, midpoint, approximate. Fluency Sprint: Find the Midpoint.",
      8:  "Round a given decimal to any place using place value understanding and the vertical number line — extended practice with multi-step rounding and real-world measurement contexts. Decompose numbers to find the exact endpoints. Tools: vertical number line, place value chart. Vocab: same as Lesson 7.",
      9:  "Add decimals using place value strategies and relate those strategies to a written method. Connect unit-form language to the standard algorithm ('4 hundredths + 8 hundredths = 12 hundredths = 1 tenth 2 hundredths'). Compose (regroup) across decimal places. Tools: place value chart, place value disks. Vocab: sum, compose, regroup/rename, standard algorithm, like units. Fluency Sprint: Round to the Nearest One.",
      10: "Subtract decimals using place value strategies and relate those strategies to a written method. Decompose (unbundle) across decimal places when the top digit is smaller than the bottom digit. Solve multi-digit decimal subtraction including subtraction from a whole number (e.g., 7 – 0.35). Tools: place value chart, place value disks. Vocab: difference, decompose, unbundle, standard algorithm.",
      11: "Multiply a decimal fraction by single-digit whole numbers using place value disks and the area model, and relate to a written method. Think in units: '4 copies of 3 tenths = 12 tenths = 1.2.' Draw place value disks; record using the area model; connect to the standard algorithm. Tools: place value disks, area model. Vocab: partial products, area model, factor, product.",
      12: "Multiply a decimal fraction by single-digit whole numbers including using estimation to confirm decimal point placement. Estimate first by rounding (e.g., 7.13 × 6 ≈ 7 × 6 = 42), then compute precisely. Check that the exact answer is close to the estimate. Tools: area model. Vocab: estimate, reasonable, decimal point placement. Fluency Sprint: Add Decimals.",
      13: "Divide decimals by single-digit whole numbers involving easily identifiable multiples using place value understanding and relate to a written method. Use unit-form division: '1.8 ÷ 2 = 18 tenths ÷ 2 = 9 tenths = 0.9.' Solve 4.5 ÷ 5 and 6.12 ÷ 6 in unit form. Tools: place value chart, place value disks. Vocab: quotient, divisor, dividend, unit-form division. Fluency Sprint: Subtract Decimals.",
      14: "Divide decimals with a remainder using place value understanding and relate to a written method. When a unit cannot be divided evenly, decompose/unbundle to the next smaller unit (e.g., 5 tenths ÷ 2 — unbundle to 50 hundredths, then divide). Draw place value disks; record with the standard algorithm. Tools: place value disks. Vocab: remainder, decompose/unbundle to next smaller unit.",
      15: "Divide decimals using place value understanding including remainders in the smallest unit. Extend to situations where the remainder appears at the hundredths or thousandths place. Use the standard algorithm alongside place value disks. Tools: place value disks. Vocab: remainder in the smallest unit. Fluency Sprint: Multiply by Exponents.",
      16: "Solve word problems using decimal operations. Apply all four decimal operations (+, –, ×, ÷) to solve multi-step real-world problems. Use the RDW (Read-Draw-Write) strategy: Read the problem, Draw a tape diagram or place value model, Write a number sentence and statement of the solution. Tools: tape diagrams. Vocab: RDW process, tape diagram, multi-step. Fluency Sprint: Multiply and Divide by Exponents.",
    },
  },
  2: {
    name: "Multi-Digit Whole Number and Decimal Fraction Operations",
    totalLessons: 29,
    moduleOverview: `Tools: area model, place value chart, standard algorithm, tape diagram.
Key vocabulary: decimal, multiply, divide, estimate, product, quotient, remainder, standard algorithm.
Parent tip: "Estimate first using rounding — does your answer make sense?" and "Use the area model to check your multiplication."`,
  },
  3: {
    name: "Addition and Subtraction of Fractions",
    totalLessons: 16,
    moduleOverview: `Tools: fraction strips, number lines, area models, tape diagrams.
Key vocabulary: unlike denominators, least common denominator, equivalent fractions, mixed numbers, benchmark.
Parent tip: "Find a common denominator first by listing multiples." and "Use a number line to check whether your answer is reasonable."`,
  },
  4: {
    name: "Multiplication and Division of Fractions and Decimal Fractions",
    totalLessons: 38,
    moduleOverview: `Tools: area models, tape diagrams, number lines, place value charts.
Key vocabulary: multiply fractions, divide fractions, unit fraction, scaling, fraction as division.
Parent tip: "Multiplying by a fraction less than 1 makes the number smaller." and "Dividing by a unit fraction: how many halves are in 3 wholes? Use a tape diagram."`,
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

// ── K-8 Math Curriculum Skills (from Core Knowledge Sequence 2023) ──
const MATH_CURRICULUM = {
  "K": [
    { section: "Counting and Cardinality", skills: ["Know number names and the count sequence.", "Count to 100 by ones and by tens.", "Count forward beginning from a given number within the known sequence.", "Write numbers from 0 to 20.", "Represent a number of objects with a written numeral 0–20.", "Count to tell the number of objects.", "Understand the relationship between numbers and quantities.", "Connect counting to cardinality.", "Count to answer “how many?” questions, Ź With as many as 20 things arranged in a line, a rectangular array, or a circle; Ź With as many as 10 things in a scattered configuration.", "Given a number from 1–20, count out that many objects.", "Compare numbers.", "Identify whether the number of objects in one group is greater than, less than, or equal to the number of objects in another group.", "Compare two numbers between 1 and 10 presented as written numerals."] },
    { section: "Operations and Algebraic Thinking", skills: ["Understand addition as putting together and adding to, and understand subtraction as taking apart and taking from.", "Represent addition and subtraction with: Ź objects Ź fingers Ź mental images Ź drawings Ź sounds (e.g., claps) Ź acting out situations Ź verbal explanations Ź expressions Ź equations", "Solve addition and subtraction word problems (within 10).", "Decompose numbers less than or equal to 10 into pairs in more than one way. Ź Record each decomposition by a drawing or equation.", "For any number from 1 to 9, find the number that makes 10 when added to the given number. Ź Record the answer with a drawing or equation.", "Fluently add and subtract within 5."] },
    { section: "Number and Operations in Base Ten", skills: ["Work with numbers 11–19 to gain foundations for place value.", "Understand that numbers are composed of ten ones and one, two, three, four, five, six, seven, eight, or nine ones.", "Compose and decompose numbers from 11 to 19 into ten ones. Ź Record each composition or decomposition by a drawing or equation."] },
    { section: "Measurement and Data", skills: ["Describe and compare measurable attributes.", "Describe measurable attributes of objects, such as length or weight.", "Describe several measurable attributes of a single object.", "Directly compare two objects with a measurable attribute in common, to see which object has “more of”/“less of” the attribute, and describe the difference.", "Classify objects into given categories.", "Count the numbers of objects in each category and sort the categories by count. V. Geometry", "Identify and describe shapes (squares, circles, triangles, rectangles, hexagons, cubes, cones, cylinders, and spheres).", "Describe objects in the environment using names of shapes, and describe the relative positions of these objects.", "Correctly name shapes regardless of their orientations or overall size.", "Identify shapes as two-dimensional (lying in a plane, “flat”) or three-dimensional (“solid”).", "Analyze, compare, create, and compose shapes.", "Analyze and compare two- and three-dimensional shapes: Ź In different sizes and orientations; Ź Using informal language to describe their similarities, differences, parts and other attributes.", "Model shapes in the world by building shapes from components and drawing shapes.", "Compose simple shapes to form larger shapes."] },
  ],
  "1": [
    { section: "Operations and Algebraic Thinking", skills: ["Represent and solve problems involving addition and subtraction.", "Use addition and subtraction within 20 to solve word problems, with unknowns in all positions, involving situations of Ź adding to Ź taking from Ź putting together Ź taking apart Ź comparing", "Solve word problems that call for Ź addition of three whole numbers (whose sum is less than or equal to 20) Ź equations with a symbol for the unknown number to represent the problem", "Understand and apply properties of operations and the relationship between addition and subtraction.", "Apply properties of operations (commutative and associative) as strategies to add and subtract.", "Understand subtraction as an unknown-addend problem.", "Add and subtract up to 20.", "Relate counting to addition and subtraction.", "Add and subtract within 20 using strategies such as counting on, making ten, decomposing a number to a ten, and creating equivalent known sums.", "Demonstrate fluency for addition and subtraction within 10.", "Work with addition and subtraction equations.", "Understand the meaning of the equal sign.", "Determine if equations involving addition and subtraction are true or false.", "Determine the unknown whole number in an addition or subtraction equation relating three whole numbers. Using objects and drawings Using objects and drawings."] },
    { section: "Number and Operations in Base Ten", skills: ["Extend the counting sequence.", "Count to 120, starting at any number less than 120.", "Read and write numerals from 1–120.", "Represent a number of objects with a written numeral.", "Understand place value.", "Understand that the two digits of a two-digit number represent amounts of tens and ones: 10 as a bundle of ones, the numbers from 11–19 are a ten and ones, and that the multiples of ten refer to the number of tens.", "Compare two two-digit numbers based on meanings of the tens and ones digits. Ź Record the results of comparisons with the symbols >, =, and <.", "Use place value understanding and properties of operations to add and subtract.", "Add within 100, including Ź adding a two-digit number and a one-digit number Ź adding a two-digit number and a multiple of 10", "Relate the strategy to a written method and explain the reasoning used.", "Understand that in adding two-digit numbers sometimes it is necessary to compose a ten.", "Given a two-digit number, mentally find 10 more or 10 less than the number. Ź Explain the reasoning used.", "Subtract multiples of 10 in the range 10–90 from multiples of 10 in the range 10–90 (positive or zero differences). Ź Use concrete models or drawings and strategies based on", "place value", "properties of operations", "the relationship between addition and subtraction Ź Relate the strategy to a written method and explain the reasoning used. Use concrete models or drawings and strategies based on place value, properties of operations, and/ or the relationship between addition and subtraction"] },
    { section: "Measurement and Data", skills: ["Measure lengths indirectly and by iterating length units.", "Order three objects by length.", "Compare the lengths of two objects indirectly by using a third object.", "Express the length of an object as a whole number of length units", "Understand that the length measurement of an object is the number of same-size length units that span it with no gaps or overlaps when laid end to end.", "Tell and write time.", "Tell and write time in hours and half-hours using analog and digital clocks.", "Represent and interpret data.", "Organize, represent, and interpret data with up to three categories. Ź Ask and answer questions about the total number of data points."] },
    { section: "Geometry", skills: ["Reason with shapes (rectangles, squares, trapezoids, triangles, half-circles, quarter-circles, cubes, right rectangular prisms, right circular cones and right circular cylinders) and their attributes.", "Distinguish between defining attributes (e.g., triangles are closed and three-sided) versus non-defining attributes (e.g., color, orientation, overall size). Ź Build and draw shapes to possess defining attributes.", "Compose two-dimensional and three-dimensional shapes to create a composite shape. Ź Compose new shapes from the composite shape.", "Partition circles and rectangles into two and four equal shares. Ź Describe shares using the words halves, fourths, and quarters. Ź Use the phrases half of, fourth of, and quarter of. Ź Describe the whole as two of, or four of the shares. Ź Understand for these examples that decomposing into more equal shares creates smaller shares."] },
  ],
  "2": [
    { section: "Operations and Algebraic Thinking", skills: ["Represent and solve problems involving addition and subtraction.", "Use addition and subtraction within 100 to solve one- and two-step word problems. Ź Solve word problems that involve situations of adding to, taking from, putting together, taking apart, and comparing, with unknowns in all positions. Ź Use equations with a symbol for the unknown number to represent the problem.", "Add and subtract within 20.", "Fluently add and subtract within 20 using mental strategies.", "Work with equal groups of objects to gain foundations for multiplication.", "Determine whether a group of objects (up to 20) has an odd or even number of members. Ź Write an equation to express an even number as a sum of two equal addends.", "Use addition to find the total number of objects arranged in rectangular arrays with up to 5 rows and up to 5 columns. Ź Write an equation to express the total as a sum of equal addends. By end of Grade 2, know from memory all sums of two one-digit numbers."] },
    { section: "Number and Operations in Base Ten", skills: ["Understand place value.", "Understand that the three digits of a three-digit number represent amounts of hundreds, tens, and ones. Ź Count within 1000. Ź Skip-count by 5s, 10s, and 100s.", "Read and write numbers to 1000, using Ź base-ten numerals Ź number names Ź expanded form", "Compare two three-digit numbers based on meanings of the hundreds, tens, and ones digits. Ź Use >, =, and < symbols to record the results of comparisons.", "Use place value understanding and properties of operations to add and subtract.", "Fluently add and subtract within 100. Ź Use strategies based on", "place value", "properties of operations", "relationship between addition and subtraction", "Add up to four two-digit numbers. Ź Use strategies based on", "Add and subtract within 1000. Ź Understand that when adding or subtracting three digit numbers sometimes it is necessary to compose or decompose tens or hundreds. Ź Use concrete models or drawings and strategies based on", "Relate the applied strategy to a written method.", "Mentally add 10 or 100 to a given number 100–900.", "Mentally subtract 10 or 100 from a given number 100–900.", "Explain why addition and subtraction strategies work. Ź Use place value and the properties of operations."] },
    { section: "Measurement and Data", skills: ["Measure and estimate lengths in standard units.", "Measure the length of an object by selecting and using appropriate tools, such as Ź rulers Ź yardsticks Ź meter sticks Ź measuring tape", "Measure the length of an object twice, using length units of different lengths for the two measurements. Ź Describe how the two measurements relate to the size of the unit chosen.", "Estimate lengths, using Ź units of inches Ź feet Ź centimeters Ź meters", "Measure to determine how much longer one object is than another. Ź Express the length difference in terms of a standard length unit.", "Relate addition and subtraction to length.", "Use addition and subtraction within 100 to solve word problems involving lengths (same units).", "Represent whole numbers as lengths from 0 on a number line diagram with equally spaced points corresponding to the numbers 0, 1, 2, etc.", "Represent whole-number sums and differences within 100 on a number line diagram.", "Work with time and money.", "Tell and write time from analog and digital clocks to the nearest five minutes, using a.m. and p.m.", "Solve word problems involving money. Ź Solve problems that include the following forms of currency", "dollar bills", "quarters", "dimes", "nickels", "pennies", "Use $ and ¢ symbols appropriately", "Represent and interpret data.", "Generate measurement data by measuring lengths of several objects to the nearest whole unit. Ź Make repeated measurements of the same object.", "Show the measurements by making a line plot.", "Draw a picture graph and a bar graph (with single-unit scale) to represent a data set with up to four categories.", "Solve simple put together, take apart, and compare problems using information presented in a bar graph. A line plot where the horizontal scale is marked off in whole number units"] },
    { section: "Geometry", skills: ["Reason with shapes and their attributes.", "Recognize and draw shapes having specified attributes, such as Ź a given number of angles Ź a given number of equal faces", "Identify triangles, quadrilaterals, pentagons, hexagons, and cubes.", "Partition a rectangle into rows and columns of same-size squares. Ź Count to find the total number.", "Partition circles and rectangles into two, three, or four equal shares. Ź Describe shares using the words halves, thirds, half of, a third of, etc. Ź Describe the whole as two halves, three thirds, four fourths. Ź Recognize that equal shares of identical wholes need not have the same shape."] },
  ],
  "3": [
    { section: "Operations and Algebraic Thinking", skills: ["Represent and solve problems involving multiplication and division.", "Interpret products of whole numbers as the number of objects in groups.", "Interpret whole-number quotients of whole numbers as the number of objects in each share or the number of shares when partitioned into equal shares.", "Use multiplication and division within 100 to solve word problems, with a symbol for the unknown number, in situations involving Ź equal groups Ź arrays Ź measurement quantities", "Determine the unknown whole number, with a symbol for the unknown number, in a multiplication or division equation relating three whole numbers.", "Understand properties of multiplication and the relationship between multiplication and division.", "Apply properties of operations (commutative, associative, and distributive) as strategies to multiply and divide.", "Understand division as an unknown-factor problem.", "Multiply and divide within 100.", "Fluently multiply and divide within 100.", "Use strategies such as the relationship between multiplication and division or properties of operations.", "Know all products of two one digit numbers.", "Solve problems involving the four operations.", "Solve two-step word problems using the four operations. Ź Represent these problems using equations with a letter standing for the unknown quantity. Ź Assess the reasonableness of answers using mental computation and estimation strategies.", "Identify arithmetic patterns. Ź Describe using properties of operations. Ź Know that the product of an even number multiplied by any number is always even and why an even number multiplied by a number can be decomposed into equal addends. By the end of Grade 3, know from memory all products of two one-digit numbers."] },
    { section: "Number and Operations in Base Ten", skills: ["Use place value understanding and properties of operations to perform multi-digit arithmetic.", "Use place value understanding to round whole numbers to the nearest 10 or 100.", "Fluently add and subtract within 1000, using strategies and algorithms based on Ź place value Ź properties of operations Ź the relationship between addition and subtraction", "Multiply one-digit whole numbers by multiples of 10 in the range 10–90. Ź Use strategies based on place value and properties of operations."] },
    { section: "Number and Operations\u2014Fractions", skills: ["Develop understanding of fractions as numbers.", "Understand a fraction b1 as the quantity formed by 1 part when a whole is partitioned into b equal parts. Ź Understand a fraction ba as the quantity formed by a part of size b1 .", "Understand a fraction as a number on the number line. Ź Represent fractions on a number line diagram. Ź Define the interval between zero and one as the whole and partition into b equal parts. Ź Define ba on a number line with segment lengths b1 and an interval size ba .", "Explain equivalence of fractions in special cases.", "Compare fractions by reasoning about their size. Ź Understand two fractions as equivalent (equal) if", "they are the same size.", "they are on the same point on a number line. Ź Recognize and generate simple equivalent fractions. Ź Explain why the fractions are equivalent. Ź Express whole numbers as fractions, and recognize fractions that are equivalent to whole numbers. Ź Compare two fractions with the same numerator or the same denominator by reasoning about their size.", "Recognize that comparisons are valid only when the two fractions refer to the same whole.", "Record the results of comparisons with the symbols >, =, or <, and justify the conclusions."] },
    { section: "Measurement and Data", skills: ["Solve problems involving measurement and estimation of intervals of time, liquid volumes, and masses of objects.", "Tell and write time to the nearest minute.", "Measure time intervals in minutes.", "Solve word problems involving addition and subtraction of time intervals in minutes.", "Measure and estimate liquid volumes and masses of objects. Ź Use standard units of", "grams (g)", "kilograms (kg)", "liters (l) Ź Add, subtract, multiply, or divide to solve one-step word problems involving masses or volumes that are given in the same unit.", "Represent and interpret data", "Draw a scaled picture graph and a scaled bar graph to represent a data set with several categories. Ź Solve one- and two-step “how many more” and “how many less” problems using information presented in scaled bar graphs.", "Generate measurement data by measuring lengths using rulers marked with halves and fourths of an inch. Ź Show the data by making a line plot, where the horizontal scale is marked off in appropriate units— whole numbers, halves, or quarters.", "Geometric measurement: understand concepts of area and relate area to multiplication and to addition.", "Recognize area as an attribute of plane figures and understand concepts of area measurement. Ź A square with side length of 1 unit", "is called “a unit square”", "is said to have “one square unit” of area", "can be used to measure area Ź A plane figure which can be covered without gaps or overlaps by “n” unit squares is said to have an area of “n” square units.", "Measure areas by counting unit squares.", "Relate area to the operations of multiplication and addition.", "Geometric measurement: recognize perimeter as an attribute of plane figures and distinguish between linear and area measures.", "Solve real world and mathematical problems involving perimeters of polygons.", "Recognize area by tiling.", "Find areas of rectangles by multiplying side lengths.", "Recognize area as additive. Square cm., square m., square in., square ft., and improvised units."] },
    { section: "Geometry", skills: ["Reason with shapes and their attributes.", "Understand that shapes in different categories (e.g., rhombuses, rectangles, and others) may share attributes (e.g., having four sides).", "Understand that the shared attributes can define a larger category (e.g., quadrilaterals).", "Recognize rhombuses, rectangles, and squares as examples of quadrilaterals. Ź Draw examples of quadrilaterals that do not belong to any of these subcategories.", "Partition shapes into parts with equal areas. Ź Express the area of each part as a unit fraction of the whole."] },
  ],
  "4": [
    { section: "Operations and Algebraic Thinking", skills: ["Use the four operations with whole numbers to solve problems.", "Interpret a multiplication equation as a comparison.", "Represent verbal statements of multiplicative comparisons as multiplication equations.", "Multiply or divide to solve word problems with a symbol for the unknown number, involving multiplicative comparison.", "Solve multistep word problems. Ź posed with whole numbers Ź having whole-number answers using the four operations Ź including problems in which remainders must be interpreted", "Represent multistep word problems using equations with a letter standing for the unknown quantity.", "Use mental computation and estimation strategies to assess the reasonableness of answers.", "Gain familiarity with factors and multiples.", "Find all factor pairs for a whole number in the range 1–100.", "Recognize that a whole number is a multiple of each of its factors.", "Determine whether a given whole number in the range 1–100 is a multiple of a given one-digit number.", "Determine whether a given whole number in the range 1–100 is prime or composite.", "Generate and analyze patterns.", "Generate a number or shape pattern that follows a given rule.", "Identify apparent features of the pattern that were not explicit in the rule itself."] },
    { section: "Number and Operations in Base Ten", skills: ["Generalize place value understanding for multi-digit whole numbers.", "Recognize that in a multi-digit whole number, a digit in one place represents ten times what it represents in the place to its right.", "Read and write multi-digit whole numbers, using Ź base-ten numerals Ź number names Ź expanded form", "Compare two multi-digit numbers based on meanings of the digits in each place. Ź Use >, =, and < symbols to record them results of comparisons.", "Use place value understanding to round multi-digit whole numbers to any place.", "Use place value understanding and properties of operations to perform multi-digit arithmetic.", "Fluently add and subtract multi-digit whole numbers using the standard algorithm.", "Multiply a whole number of up to four digits by a one-digit whole number.", "Multiply two two-digit numbers, using strategies based on Ź place value Ź properties of operations", "Illustrate and explain the calculation, by using Ź equations Ź rectangular arrays Ź area models", "Find whole-number quotients and remainders with up to four-digit dividends and one-digit divisors, using strategies based on Ź place value Ź properties of operations Ź relationship between multiplication and division"] },
    { section: "Number and Operations\u2014Fractions", skills: ["Extend understanding of fraction equivalence and ordering. (n × a)", "Explain why a fraction ba is equivalent to a fraction (n by using visual fraction × b) models, with attention to how the number and size of the parts differ. Ź Use this principle to generate equal fractions.", "Compare two fractions with different numerators and different denominators. Ź Recognize that comparisons are valid only when the two fractions refer to the same whole. Ź Record the results of comparisons with symbols >, =, or <, and justify the conclusions.", "Build fractions from unit fractions by applying and extending previous understandings of operations on whole numbers.", "Understand a fraction ba with a > 1 as a sum of fractions b1 . Ź Understand addition and subtraction of fractions as joining and separating parts referring to the same whole. Ź Decompose a fraction into a sum of fractions with the same denominator in more than one way. Ź Add and subtract mixed numbers with like denominators by replacing mixed numbers with equivalent fractions and by using properties of operations. Ź Solve word problems involving addition and subtraction of fractions referring to the same whole and having like denominators.", "Apply and extend previous understandings of multiplication to multiply a fraction by a whole number. Ź Understand a fraction ba as a multiple of b1 . Ź Understand a multiple of ba as a multiple of b1 .", "Use this understanding to multiply a fraction by a whole number. Ź Solve word problems involving multiplication of a fraction by a whole number.", "Understand decimal notation for fractions, and compare decimal fractions.", "Express a fraction with denominator 10 as an equivalent fraction with denominator 100. Ź Use this technique to add two fractions with respective denominators 10 and 100.", "Use decimal notation for fractions with denominators 10 or 100.", "Compare two decimals to hundredths by reasoning about their size.", "Recognize that comparisons are valid only when the two decimals refer to the same whole.", "Record the results of comparisons with the symbols >, =, or <, and justify the conclusions."] },
    { section: "Measurement and Data", skills: ["Solve problems involving measurement and conversion of measurements from a larger unit to a smaller unit.", "Know relative sizes of measurement units within one system of units, including Ź kilometer Ź meter Ź centimeter Ź kilogram Ź gram Ź pound Ź ounce Ź liter Ź milliliter Ź hour Ź minute Ź second", "Within a single system of measurement, express measurements in a larger unit in terms of a smaller unit.", "Use the four operations to solve word problems involving Ź distances Ź intervals of time Ź liquid volumes Ź masses of objects Ź money", "Solve problems that involve simple fractions or decimals, and problems that require expressing measurements given in a larger unit in terms of a smaller unit. Ź Represent measurement quantities using diagrams such as number line diagrams that feature a measurement scale.", "Apply the area and perimeter formulas for rectangles in real world and mathematical problems.", "Represent and interpret data.", "Make a line plot to display a data set of measurements in fractions of a unit 12 , 14 , 18 . Ź Solve problems involving addition and subtraction of fractions by using information presented in line plots. Ź Geometric measurement: understand concepts of angle and measure angles.", "Recognize angles as geometric shapes that are formed wherever two rays share a common endpoint, and understand concepts of angle measurement: Ź An angle is measured with reference to a circle with its center at the common endpoint of the rays, by considering the fraction of the circular arc between the points where the two rays intersect the circle. 1 of a circle is called a “one-degree angle,” and can Ź An angle that turns through 360 be used to measure angles. Ź An angle that turns through “n” one-degree angles is said to have an angle measure of “n” degrees. When an angle is decomposed into nonoverlapping parts, the angle measure of the whole is the sum of the angle measures of the parts.", "Measure angles in whole-number degrees using a protractor. Ź Sketch angles of specified measure.", "Recognize angle measure as additive. Ź Solve addition and subtraction problems to find unknown angles on a diagram in real world and mathematical problems."] },
    { section: "Geometry", skills: ["Draw and identify lines and angles, and classify shapes by properties of their lines and angles.", "Draw points, lines, line segments, rays, angles (right, acute, obtuse), and perpendicular and parallel lines. Ź Identify these in two-dimensional figures.", "Classify two-dimensional figures based on the presence or absence of parallel or perpendicular lines, or the presence or absence of angles of a specified size. Ź Recognize right triangles as a category, and identify right triangles.", "Recognize a line of symmetry for a two-dimensional figure as a line across the figure such that the figure can be folded along the line into matching parts. Ź Identify line-symmetric figures and draw lines of symmetry."] },
  ],
  "5": [
    { section: "Operations and Algebraic Thinking", skills: ["Write and interpret numerical expressions.", "Use parentheses, brackets, or braces in numerical expressions. Ź Evaluate expressions with these symbols.", "Write simple expressions. Ź Record calculations with numbers. Ź Interpret numerical expressions without evaluating them.", "Analyze patterns and relationships.", "Generate two numerical patterns using two given rules.", "Identify apparent relationships between corresponding terms.", "Form ordered pairs consisting of corresponding terms from the two patterns. Ź Graph the ordered pairs on a coordinate plane."] },
    { section: "Number and Operations in Base Ten", skills: ["Understand the place value system.", "Recognize that in a multi-digit number, a digit in the one place represents Ź 10 times as much as it represents in the place to its right Ź One tenth of what it represents in the place to its left", "Explain patterns in the number of zeros of the product when multiplying a number by powers of 10.", "Explain patterns in the placement of the decimal point when a decimal is multiplied or divided by a power of 10.", "Use whole number exponents to denote powers of 10.", "Read, write, and compare decimals to thousandths. Ź Read and write decimals to thousandths, using", "base-ten numerals", "number names", "expanded form", "Compare two decimals to thousandths based on meanings of the digits in each place.", "Use >, =, and < symbols to record the results of comparisons.", "Use place value understanding to round decimals to any place.", "Perform operations with multi-digit whole numbers and with decimals to hundredths.", "Fluently multiply multi-digit whole numbers using the standard algorithm.", "Find whole-number quotients of whole numbers with up to four-digit dividends and two-digit divisors. Ź Use strategies based on", "place value", "properties of operations", "the relationship between multiplication and division Ź Illustrate and explain the calculation by using", "equations", "rectangular arrays", "area models", "Add, subtract, multiply, and divide decimals to hundredths. Ź Use concrete models or drawings and strategies based on", "the relationship between addition and subtraction Ź Relate the strategy to a written method and explain the reasoning used."] },
    { section: "Number and Operations\u2014Fractions", skills: ["Use equivalent fractions as a strategy to add and subtract fractions.", "Add and subtract fractions with unlike denominators (including mixed numbers) by replacing with equivalent fractions. Ź Produce an equivalent sum. Ź Determine the difference of fractions with like denominators.", "Solve word problems involving addition and subtraction of fractions referring to the same whole, including cases of unlike denominators. Ź Use benchmark fractions and number sense of fractions to mentally estimate and assess the reasonableness of answers.", "Apply and extend previous understandings of multiplication and division to multiply and divide fractions.", "Interpret a fraction as division of the numerator by the denominator ba = a ÷ b .", "Solve word problems involving division of whole numbers leading to answers in the form of fractions or mixed numbers.", "Apply and extend previous understandings of multiplication to multiply a fraction or whole number by a fraction. Ź Interpret the product ba × q as a parts of a partition of q into b equal parts. Ź Find the area of a rectangle with fractional side lengths by tiling with unit squares of the appropriate unit fraction side lengths.", "Interpret multiplication as scaling (resizing), by: Ź Comparing the size of a product to the size of one factor. Ź Explaining why multiplying a given number by a fraction greater than 1 results in a product greater than the given number. Ź Explaining why multiplying a given number by a fraction less than 1 results in a product smaller than the given number; (n × a) Ź Relating the principle of fraction equivalence ba = (n to the effect of multiplying × b) a by 1. b", "Solve real world problems involving multiplication of fractions and mixed numbers by using visual fraction models or equations.", "Apply and extend previous understandings of division to divide unit fractions by whole numbers and whole numbers by unit fractions. Ź Interpret division of a unit fraction by a non-zero whole number, and compute such quotients. Ź Interpret division of a whole number by a unit fraction, and compute such quotients. Ź Solve real world problems involving division of unit fractions by non-zero whole numbers and division of whole numbers by unit fractions."] },
    { section: "Measurement and Data", skills: ["Convert like measurement units within a given measurement system.", "Convert among different-sized standard measurement units within a given measurement system, and use these conversions in solving multi-step, real world problems.", "Represent and interpret data.", "Make a line plot to display a data set of measurements in fractions of a unit 12 , 14 , 18 .", "Use operations on fractions for this grade to solve problems involving information presented in line plots.", "Geometric measurement: understand concepts of volume and relate volume to multiplication and to addition.", "Recognize volume as an attribute of solid figures and understand concepts of volume measurement. Ź A cube with side length of 1 unit is called a “unit cube,”", "It has “one cubic unit” of volume", "Can be used to measure volume Ź A solid figure which can be packed without gaps or overlaps using “n” unit cubes has a volume of n cubic units.", "Measure volumes by counting unit cubes, using Ź cubic centimeters Ź cubic inches Ź cubic feet Ź improvised units", "Relate volume to the operations of multiplication and addition and solve real world and mathematical problems involving volume. Ź Find the volume of a right rectangular prism with whole-number side lengths. Ź Represent threefold whole number products as volumes. Ź Apply the formulas V = l × w × h and V = b × h for rectangular prisms to find volumes of right rectangular prisms with whole-number edge lengths. Ź Recognize volume as additive. Ź Find volumes of solid figures composed of two non-overlapping right rectangular prisms. Pack right rectangular prism with unit cubes, and show that the volume is the same as would be found by multiplying the edge lengths, equivalently by multiplying the height by the area of the base Add the volumes of the non-overlapping parts, applying this technique to solve real world problems"] },
    { section: "Geometry", skills: ["Graph Points on the Coordinate Plane to Solve Real World and Mathematical Problems", "Use a pair of perpendicular number lines (axes), to define a coordinate system. Ź Understand that the first number indicates how far to travel from the origin in the direction of one axis. Ź Understand that the second number indicates how far to travel in the direction of the second axis.", "Represent real world and mathematical problems by graphing points in the first quadrant of the coordinate plane. Ź Interpret coordinate values of points in the context of the situation.", "Classify two-dimensional figures into categories based on their properties.", "Understand that attributes belonging to a category of two-dimensional figures also belong to all subcategories of that category.", "Classify two-dimensional figures in a hierarchy based on properties."] },
  ],
  "6": [
    { section: "Ratios and Proportional Relationships", skills: ["Understand ratio concepts and use ratio reasoning to solve problems.", "Understand the concept of a ratio and use ratio language to describe a ratio relationship between two quantities.", "Understand the concept of a unit rate ba associated with a ratio a:b with b ≠ 0, and use rate language in the context of a ratio relationship.", "Use ratio and rate reasoning to solve real-world and mathematical problems. Ź Use equivalent ratios, tape diagrams, double number line diagrams or equations. Ź Make tables of equivalent ratios relating quantities with whole-number measurements. Ź Solve unit rate problems including those involving unit pricing and constant speed. Ź Find a percent of a quantity as a rate per 100. Ź Solve problems involving finding the whole, given a part and the percent. Ź Use ratio reasoning to convert measurement units; manipulate and transform units appropriately when multiplying or dividing quantities."] },
    { section: "The Number System", skills: ["Apply and extend previous understandings of multiplication and division to divide fractions by fractions.", "Interpret and compute quotients of fractions, and solve word problems involving division of fractions by fractions.", "Compute fluently with multi-digit numbers and find common factors and multiples.", "Fluently divide multi-digit numbers using the standard algorithm.", "Fluently add subtract, multiply, and divide multi-digit decimals using the standard algorithm for each operation.", "Find the greatest common factor of two whole numbers less than or equal to 100.", "Find the least common multiple of two whole numbers less than or equal to 12.", "Use the distributive property to express a sum of two whole numbers 1–100 with a common factor as a multiple of a sum of two whole numbers with no common factor.", "Apply and extend previous understandings of numbers to the system of rational numbers.", "Understand that positive and negative numbers are used together to describe quantities having opposite directions or values.", "Use positive and negative numbers to represent quantities in real-world contexts, explaining the meaning of 0 in each situation.", "Understand a rational number as a point on the number line.", "Extend number line diagrams and coordinate axes familiar from previous grades to represent points on the line and in the plane with negative number coordinates. Ź Recognize opposite signs of numbers as indicating locations on opposite sides of 0 on the number line. Ź Recognize that the opposite of the opposite of a number is the number itself. Ź Recognize that 0 is its own opposite. Ź Understand signs of numbers in ordered pairs as indicating locations in quadrants of the coordinate plane. Ź Recognize that when two ordered pairs differ only by signs, the locations of the points are related by reflections across one or both axes. Ź Find and position integers and other rational numbers on a horizontal or vertical number line diagram. Ź Find and position pairs of integers and other rational numbers on a coordinate plane.", "Understand ordering and absolute value of rational numbers. Ź Interpret statements of inequality as statements about the relative position of two numbers on a number line diagram. Ź Write, interpret, and explain statements of order for rational numbers in real-world contexts. Ź Understand the absolute value of a rational number as its distance from 0 on the number line. Ź Interpret absolute value as magnitude for a positive or negative quantity in a realworld situation. Ź Distinguish comparisons of absolute value from statements about order.", "Solve real-world and mathematical problems by graphing points in all four quadrants of the coordinate plane. Ź Include use of coordinates and absolute value to find distances between points with the same first coordinate or the same second coordinate."] },
    { section: "Expressions and Equations", skills: ["Apply and extend previous understandings of arithmetic to algebraic expressions.", "Write and evaluate numerical expressions involving whole-number exponents.", "Write, read, and evaluate expressions in which letters stand for numbers. Ź Write expressions that record operations with numbers and with letters standing for numbers. Ź Identify parts of an expression using mathematical terms (sum, term, product, factor, quotient, coefficient). Ź View one or more parts of an expression as a single entity. Ź Evaluate expressions at specific values of their variables. Include expressions that arise from real world problems and use order of operations when no parentheses are present.", "Apply the properties of operations to generate equivalent expressions.", "Identify when two expressions are equivalent.", "Reason about and solve one-variable equations and inequalities.", "Understand solving an equation or inequality as a process of answering a question: which values from a specified set, if any, make the equation or inequality true?", "Use substitution to determine whether a given number in a specified set makes an equation or inequality true.", "Use variables to represent numbers and write expressions when solving a real-world or mathematical problem.", "Understand that a variable can represent an unknown number, or, depending on the purpose at hand, any number in a specified set.", "Solve real-world and mathematical problems by writing and solving equations of them form x + p = q and px = q for cases in which p, q and x are all nonnegative rational numbers.", "Write an inequality of the form x > c or x < c to represent a constraint or condition in a real-world or mathematical problem.", "Recognize that inequalities of the form x > c or x < c have infinitely many solutions; represent solutions of such inequalities on number line diagrams.", "Represent and analyze quantitative relationships between dependent and independent variables.", "Use variables to represent two quantities in a real-world problem that change in relationship to one another write an equation to express one quantity.", "Thought of as the dependent variable, in terms of the other quantity, thought of as the independent variable.", "Analyze the relationship between the dependent and independent variables using graphs and tables, and relate these to the equation."] },
    { section: "Geometry", skills: ["Solve real-world and mathematical problems involving area, surface area, and volume.", "Find the area of right triangles, other triangles, special quadrilaterals, and polygons by decomposing into triangles or other shapes.", "Find the volume of a right rectangular prism with fractional edge lengths. Ź Show that the volume is the same as would be found by multiplying the edge lengths of the prism. Ź Apply the formulas Volume = length x width x height (V=l x w x h) and Volume = base x height (V=b x h) to find volumes of right rectangular prisms with fractional edge lengths.", "Draw polygons in the coordinate plane given coordinates for the vertices. Ź Use coordinates to find the length of a side joining points with the same first coordinate or the same second coordinate.", "Represent three-dimensional figures using nets made up of rectangles and triangles, and use the nets to find the surface area of these figures. Apply these techniques in the context of solving real-world and mathematical problems. Pack the right rectangular prism with unit cubes of the appropriate unit fraction edge lengths. V. Statistics and Probability", "Develop understanding of statistical variability.", "Recognize a statistical question as one that anticipates variability in the data related to the question and accounts for it in the answers.", "Understand that a set of data collected to answer a statistical question has a distribution which can be described by its center, spread, and overall shape.", "Recognize that a measure of center for a numerical data set summarizes all of its values with a single number, while a measure of variation describes how its values vary with a single number.", "Summarize and describe distributions.", "Display numerical data in plots on a number line, including dot plots, histograms, and box plots.", "Summarize numerical data sets in relation to their context, such as by: Ź Reporting the number of observations. Ź Describing the nature of the attribute under investigation, including how it was measured and its units of measurement. Ź Giving quantitative measures of center (median and/or mean) and variability (interquartile range and/or mean absolute deviation), as well as describing any overall pattern and any striking deviations from the overall pattern with reference to the context in which the data were gathered. Ź Relating the choice of measures of center and variability to the shape of the data distribution and the context in which the data were gathered."] },
  ],
  "7": [
    { section: "Ratios and Proportional Relationships", skills: ["Analyze proportional relationships and use them to solve real-world and mathematical problems.", "Compute unit rates associated with ratios of fractions, including ratios of lengths, areas and other quantities measured in like or different units.", "Recognize and represent proportional relationships between quantities. Ź Decide whether two quantities are in a proportional relationship. Ź Identify the constant of proportionality (unit rate) in tables, graphs, equations, diagrams, and verbal descriptions of proportional relationships. Ź Represent proportional relationships by equations. Ź Explain what a point (x, y) on the graph of a proportional relationship means in terms of the situation, with special attention to the points (0, 0) and (1, r) where r is the unit rate.", "Use proportional relationships to solve multistep ratio and percent problems."] },
    { section: "The Number System", skills: ["p p then – q = q = –q .", "Apply and extend previous understandings of operations with fractions to add, subtract, multiply, and divide rational numbers.", "Apply and extend previous understandings of addition and subtraction to add and subtract rational numbers.", "Represent addition and subtraction on a horizontal or vertical number line diagram. Ź Describe situations in which opposite quantities combine to make 0. Ź Understand p + q as the number located a distance |q| from p.", "Show that a number and its opposite have a sum of 0 (are additive inverses).", "Interpret sums of rational numbers. Ź Understand subtraction of rational numbers as adding the additive inverse, p – q = p + (–q).", "Show that the distance between two rational numbers on the number line is the absolute value of their difference. Ź Apply properties of operations as strategies to add and subtract rational numbers.", "Apply and extend previous understandings of multiplication and division and of fractions to multiply and divide rational numbers. Ź Understand that multiplication is extended from fractions to rational numbers by requiring that operations continue to satisfy the properties of operations.", "Interpret products of rational numbers. Ź Understand that integers can be divided, provided that the divisor is not zero, and every quotient of integers (with non-zero divisor) is a rational number.", "Interpret quotients of rational numbers. Ź Apply properties of operations as strategies to multiply and divide rational numbers. Ź Convert a rational number to a decimal using long division.", "Solve real-world and mathematical problems involving the four operations with rational numbers. Know that the decimal form of a rational number terminates in 0s or eventually repeats."] },
    { section: "Expressions and Equations", skills: ["Use properties of operations to generate equivalent expressions.", "Apply properties of operations as strategies to add, subtract, factor, and expand linear expressions with rational coefficients.", "Understand that rewriting an expression in different forms in a problem context can shed light on the problem and how the quantities in it are related.", "Solve real-life and mathematical problems using numerical and algebraic expressions and equations.", "Solve multi-step, real-life and mathematical problems posed with positive and negative rational numbers in any form (whole numbers, fractions, and decimals). Ź Use tools strategically. Ź Apply properties of operations to calculate with numbers in any form. Ź Convert between forms as appropriate. Ź Assess the reasonableness of answers using mental computation and estimation strategies.", "Use variables to represent quantities in a real-world or mathematical problem, and construct simple equations and inequalities to solve problems by reasoning about the quantities. Ź Solve word problems leading to equations of the form px + q = r and p(x + q) = r.", "Solve equations of these forms fluently.", "Compare an algebraic solution to an arithmetic solution, identifying the sequence of the operations used in each approach. Ź Solve word problems leading to inequalities of the form px + q > r or px + q < r.", "Graph the solution set of the inequality and interpret it in the context of the problem. p, q, and r are specific rational numbers. p, q, and r are specific rational numbers"] },
    { section: "Statistics and Probability", skills: ["Draw, construct and describe geometrical figures and describe the relationships between them.", "Solve problems involving scale drawings of geometric figures.", "Draw geometric shapes with given conditions. Ź Focus on constructing triangles from three measures of angles or sides.", "Describe the two-dimensional figures that result from slicing three-dimensional figures.", "Solve real-life and mathematical problems involving angle measure, area, surface area, and volume.", "Know the formulas for the area and circumference of a circle. Ź Use to solve problems. Ź Give an informal derivation of the relationship between the circumference and area of a circle.", "Use facts about supplementary, complementary, vertical, and adjacent angles in a multi-step problem to write and solve simple equations for an unknown angle in a figure.", "Solve real-world and mathematical problems involving Ź area Ź volume Ź surface area of two- and three-dimensional objects (triangles, quadrilaterals, polygons, cubes, and right prisms) V. Statistics and Probability Generalizations about a population from a sample are valid only if the sample is representative of that population. Measure the difference between the centers by expressing it as a multiple of a measure of variability. If the agreement is not good, explain possible sources of the discrepancy.", "Use random sampling to draw inferences about a population.", "Understand that statistics can be used to gain information about a population by examining a sample of the population. Ź Understand that random sampling tends to produce representative samples and support valid inferences.", "Use data from a random sample to draw inferences about a population with an unknown characteristic of interest. Ź Generate multiple samples (or simulated samples) of the same size to gauge the variation in estimates or predictions.", "Draw informal comparative inferences about two populations.", "Informally assess the degree of visual overlap of two numerical data distributions with similar variabilities.", "Use measures of center and measures of variability for numerical data from random samples to draw informal comparative inferences about two populations.", "Investigate chance processes and develop, use, and evaluate probability models.", "Understand that the probability of a chance event is a number between 0 and 1 that expresses the likelihood of the event occurring. Ź Understand that larger numbers indicate greater likelihood.", "A probability near 0 indicates an unlikely event.", "A probability around 12 indicates an event that is neither unlikely nor likely.", "A probability near 1 indicates a likely event.", "Approximate the probability of a chance event. Ź Collect data on the chance process that produces it. Ź Observe its long-run relative frequency. Ź Predict the approximate relative frequency given the probability.", "Develop a probability model and use it to find probabilities of events. Ź Compare probabilities from a model to observed frequencies.", "Develop a uniform probability model by assigning equal probability to all outcomes, and use the model to determine probabilities of events.", "Develop a probability model (which may not be uniform) by observing frequencies in data generated from a chance process.", "Find probabilities of compound events using organized lists, tables, tree diagrams, and simulation. Ź Understand that the probability of a compound event is the fraction of outcomes in the sample space for which the compound event occurs. Ź Represent sample spaces for compound events using methods such as organized lists, tables and tree diagrams.", "For an event described in everyday language, identify the outcomes in the sample space which compose the event. Ź Design and use a simulation to generate frequencies for compound events."] },
  ],
  "8": [
    { section: "The Number System", skills: ["Know that there are numbers that are not rational, and approximate them by rational numbers.", "Know that numbers that are not rational are called irrational. Ź Understand (informally) that every number has a decimal expansion. Ź Show that for rational numbers the decimal expansion eventually repeats. Ź Convert a decimal expansion which repeats eventually into a rational number.", "Use rational approximations of irrational numbers to compare the size of irrational numbers. Ź Identify approximate location on a number line diagram Ź Estimate the value of expressions"] },
    { section: "Expressions and Equations", skills: ["Work with radicals and integer exponents.", "Know and apply the properties of integer exponents to generate equivalent numerical expressions.", "Use square root and cube root symbols to represent solutions to equations of the form x2 = p and x3 = p, where p is a positive rational number. Ź Evaluate square roots of small perfect squares. Ź Evaluate cube roots of small perfect cubes. Ź Know that √2 is irrational.", "Use numbers expressed in the form of a single digit times an integer power of 10 to estimate very large or very small quantities. Ź Express how many times as much one is than the other.", "Perform operations with numbers expressed in scientific notation. Ź Use scientific notation and choose units of appropriate size for measurements of very large or very small quantities. Ź Interpret scientific notation that has been generated by technology.", "Understand the connections between proportional relationships, lines, and linear equations.", "Graph proportional relationships. Ź Interpret the unit rate as the slope of the graph. Ź Compare two different proportional relationships represented in different ways.", "Use similar triangles to explain why the slope m is the same between any two distinct points on a non-vertical line in the coordinate plane. Ź Derive the equation y = mx for a line through the origin Ź Derive the equation y = mx + b for a line intercepting the vertical axis at b.", "Analyze and solve linear equations and pairs of simultaneous linear equations.", "Solve linear equations in one variable. Ź Give examples of linear equations in one variable with one solution, infinitely many solutions, or no solutions.", "Show which of these possibilities is the case by successively transforming the given equation into simpler forms. Ź Solve linear equations with rational number coefficients.", "Analyze and solve pairs of simultaneous linear equations. Ź Understand that solutions to a system of two linear equations in two variables correspond to points of intersection of their graphs. Ź Solve systems of two linear equations in two variables algebraically.", "Estimate solutions by graphing the equations.", "Solve simple cases by inspection. Ź Solve real-world and mathematical problems leading to two linear equations in two variables. Transforming into simpler forms until an equivalent equation of the form x = a, a = a, or a = b results. Including, equations whose solutions require expanding expressions using the distributive property and collecting like terms. Points of intersection satisfy both equations simultaneously."] },
    { section: "Functions", skills: ["Define, evaluate, and compare functions.", "Understand that a function is a rule that assigns to each input exactly one output.", "Compare properties of two functions each represented in a different way.", "Interpret the equation y = mx + b as defining a linear function (a straight line). Ź Give examples of functions that are not linear.", "Use functions to model relationships between quantities.", "Construct a function to model a linear relationship between two quantities. Ź Determine the rate of change and initial value of the function from a description of a relationship or from two (x, y) values. Ź Interpret the rate of change and initial value of a linear function in terms of the situation it models. Ź Interpret the rate of change and initial value of a linear function in terms of its graph or a table of values.", "Describe qualitatively the functional relationship between two quantities by analyzing a graph. Ź Sketch a graph that exhibits the qualitative features of a function that has been described verbally. The graph of a function is the set of ordered pairs consisting of an input and the corresponding output. Represented algebraically, graphically, numerically in tables, or by verbal descriptions. Including reading these from a table or from a graph."] },
    { section: "Geometry", skills: ["Understand congruence and similarity using physical models, transparencies, or geometry software.", "Verify experimentally the properties of rotations, reflections, and translations: Ź Lines are taken to lines, and line segments to line segments of the same length. Ź Angles are taken to angles of the same measure. Ź Parallel lines are taken to parallel lines.", "Understand that a two-dimensional figure is congruent to another if the second can be obtained from the first by a sequence of rotations, reflections, and translations. Ź Given two congruent figures, describe a sequence that exhibits the congruence between them.", "Describe the effect of dilations, translations, rotations, and reflections on two dimensional figures using coordinates.", "Understand that a two-dimensional figure is similar to another if the second can be obtained from the first by a sequence of rotations, reflections, translations, and dilations. Ź Given two similar two-dimensional figures, describe a sequence that exhibits the similarity between them.", "Use informal arguments to establish facts about the angle sum and exterior angle of triangles.", "Use informal arguments to establish facts about the angles created when parallel lines are cut by a transversal.", "Use informal arguments to establish facts about the angle-angle criterion for similarity of triangles.", "Understand and apply the Pythagorean theorem.", "Explain a proof of the Pythagorean Theorem and its converse.", "Apply the Pythagorean Theorem to determine unknown side lengths in right triangles in real-world and mathematical problems in two and three dimensions.", "Apply the Pythagorean Theorem to find the distance between two points in a coordinate system.", "Solve real-world and mathematical problems involving volume of cylinders, cones and spheres.", "Know the formulas for the volumes of cones, cylinders, and spheres and use them to solve real-world and mathematical problems. V. Statistics and Probability", "Investigate patterns of association in bivariate data.", "Construct and interpret scatter plots for bivariate measurement data to investigate patterns of association between two quantities. Ź Describe patterns such as clustering, outliers, positive or negative association, linear association, and nonlinear association.", "Know that straight lines are widely used to model relationships between two quantitative variables. Ź For scatter plots that suggest a linear association, informally fit a straight line, and informally assess the model fit by judging the closeness of the data points to the line.", "Use the equation of a linear model to solve problems in the context of bivariate measurement data, interpreting the slope and intercept.", "Understand that patterns of association can also be seen in bivariate categorical data by displaying frequencies and relative frequencies in a two-way table. Ź Construct and interpret a two-way table summarizing data on two categorical variables collected from the same subjects. Ź Use relative frequencies calculated for rows or columns to describe possible association between the two variables."] },
  ],
};

// ── Grade 4 test topic areas ──

// Grade 4: 9 topics × 3 questions = 27 questions ≈ 15–20 minutes
const TEST_TOPICS_G4 = [
  {
    module: 1, name: "Place Value & Rounding", questions: 3,
    guidance: `Q1 (straightforward): Ask for the value of a specific digit in a 6-digit number (e.g., "What is the value of the 4 in 345,672?").
Q2 (medium): Round a 6-digit number to a given place using the vertical number line strategy (e.g., "Round 234,567 to the nearest ten-thousand. Show which two multiples it falls between.").
Q3 (harder): Give a number and ask them to write it in all three forms — standard, expanded, and word form (e.g., "Write 40,506 in expanded form AND word form.").`
  },
  {
    module: 1, name: "Addition & Subtraction Algorithms", questions: 3,
    guidance: `Q1 (straightforward): Multi-digit addition requiring regrouping (e.g., "Solve 364,852 + 147,369 using the standard algorithm.").
Q2 (medium): Subtraction across zeros (e.g., "Solve 400,000 − 152,738.").
Q3 (harder): Two-step word problem requiring both operations (e.g., "A school had 23,450 books. They donated 4,875 and received 6,312 new ones. How many books now? Show your work.").`
  },
  {
    module: 2, name: "Metric Measurement & Conversions", questions: 3,
    guidance: `Q1 (straightforward): Single-step conversion (e.g., "Convert 4 km to meters." or "Convert 3,500 g to kilograms.").
Q2 (medium): Mixed unit problem (e.g., "A trail is 2 km 350 m long. How many meters is that in all?").
Q3 (harder): Multi-step word problem (e.g., "Jenna has 2 L of juice. She pours out 750 mL. How much is left? Express your answer in mL AND in L and mL.").`
  },
  {
    module: 3, name: "Multiplication", questions: 3,
    guidance: `Q1 (straightforward): 3-digit × 1-digit using the standard algorithm (e.g., "Solve 346 × 7.").
Q2 (medium): 2-digit × 2-digit (e.g., "Solve 47 × 23. Estimate first, then compute.").
Q3 (harder): Multi-step word problem (e.g., "A factory makes 365 boxes per day. Each box holds 24 items. How many items in 5 days?").`
  },
  {
    module: 3, name: "Division & Remainders", questions: 3,
    guidance: `Q1 (straightforward): 3-digit ÷ 1-digit with remainder, show DMSB steps (e.g., "Solve 457 ÷ 6 using long division.").
Q2 (medium): Interpret the remainder in context (e.g., "86 students are going on a trip. Each van holds 8 students. How many vans are needed? What happens to the remainder?").
Q3 (harder): 4-digit ÷ 1-digit (e.g., "Solve 4,385 ÷ 7. What is the quotient and remainder?").`
  },
  {
    module: 3, name: "Factors, Multiples, Prime & Composite", questions: 3,
    guidance: `Q1 (straightforward): List all factor pairs of a number (e.g., "List all factor pairs of 36.").
Q2 (medium): Classify numbers (e.g., "Is 47 prime or composite? How do you know?").
Q3 (harder): Both factors AND multiples (e.g., "Is 72 a multiple of 8? Explain. Then list three other multiples of 8. Is 2 a factor of 72? How about 9?").`
  },
  {
    module: 4, name: "Angles & Shapes", questions: 3,
    guidance: `Q1 (straightforward): Classify an angle by type (e.g., "Is an angle of 135° acute, right, obtuse, or straight? Explain how you know.").
Q2 (medium): Angle addition — find the missing angle (e.g., "Two angles share a vertex and a side. One angle is 47°, and together they form a 90° angle. What is the other angle?").
Q3 (harder): Classify a shape with reasons (e.g., "I have a quadrilateral with 2 pairs of parallel sides, 4 equal sides, but no right angles. What is it? How is it different from a square?").`
  },
  {
    module: 5, name: "Fractions", questions: 3,
    guidance: `Q1 (straightforward): Create an equivalent fraction and explain why (e.g., "Write two fractions equivalent to 3/4. Explain how you found them.").
Q2 (medium): Add or subtract fractions with unlike denominators (e.g., "Solve 2/3 + 3/4. Show how you found a common denominator.").
Q3 (harder): Mixed number operations (e.g., "Solve 3 1/4 − 1 3/4. Show your regrouping step.").`
  },
  {
    module: 6, name: "Decimals", questions: 3,
    guidance: `Q1 (straightforward): Convert between fraction and decimal (e.g., "Write 0.47 as a fraction. What does each digit represent?").
Q2 (medium): Compare decimals with an explanation (e.g., "Which is greater: 0.3 or 0.28? Explain using place value — don't just look at the digits.").
Q3 (harder): Add or order decimals (e.g., "Order these from least to greatest: 0.5, 0.05, 0.52, 0.509. Explain your reasoning.").`
  },
];

// Grade 5 M1: 7 topics × 3 questions = 21 questions ≈ 15 minutes
// Questions sourced from real Eureka Math G5 M1 exit tickets, homework, and assessments.
const TEST_TOPICS_G5 = [
  {
    module: 1, name: "Place Value Chart & Powers of 10", questions: 3,
    guidance: `Q1 (straightforward): Ask for the value of a digit in a decimal to thousandths (e.g., "What is the value of the 7 in 3.074? What place is it in?").
Q2 (medium): Multiply or divide by a power of 10 (e.g., "Solve 3.452 × 100. Explain how and why the digits shifted."). Expect them to use the place value chart and describe digit movement.
Q3 (harder): Use exponents (e.g., "Write an equation using an exponent to show that 5.3 × 1,000 = 5,300. Now solve 247 ÷ 10². Explain the pattern.").`
  },
  {
    module: 1, name: "Decimal Forms — Expanded, Unit, and Word Form", questions: 3,
    guidance: `Q1 (straightforward): Write a decimal in word form and unit form (e.g., "Write 3.074 in word form AND unit form — e.g., __ ones __ hundredths __ thousandths.").
Q2 (medium): Write in expanded form using fractions (e.g., "Write 24.357 in expanded form using fractions like 2×10 + 4×1 + 3×(1/10)..."). This is a key Eureka Math skill — check they use fractions, not just decimals.
Q3 (harder): Convert from expanded form to standard form (e.g., "Write the standard form: 3×10 + 5×1 + 2×(1/10) + 7×(1/100) + 6×(1/1000).").`
  },
  {
    module: 1, name: "Comparing and Rounding Decimals", questions: 3,
    guidance: `Q1 (straightforward): Compare two decimals using place value (e.g., "Which is greater: 0.4 or 0.38? Rename 0.4 as hundredths to compare like units.").
Q2 (medium): Round to a specified decimal place (e.g., "Round 8.546 to the nearest hundredth. Show the two benchmarks and the midpoint on a vertical number line.").
Q3 (harder): Order a set of decimals AND round (e.g., "Order 3.072, 3.7, 3.27, 3.072 from least to greatest. Then round each to the nearest tenth.").`
  },
  {
    module: 1, name: "Adding and Subtracting Decimals", questions: 3,
    guidance: `Q1 (straightforward): Unit-form addition (e.g., "4 hundredths + 8 hundredths = ___? Write your answer as a decimal."). Expect them to say '12 hundredths = 1 tenth 2 hundredths = 0.12'.
Q2 (medium): Standard algorithm addition with composing (e.g., "Solve 36.25 + 8.67 using the standard algorithm. Show your work.").
Q3 (harder): Subtraction from a whole number (e.g., "Solve 7 − 0.35. Show how you decompose the 7 to subtract. Check by adding.").`
  },
  {
    module: 1, name: "Multiplying Decimals", questions: 3,
    guidance: `Q1 (straightforward): Use place value thinking (e.g., "What is 3 × 0.4? Think: 3 copies of 4 tenths = ___ tenths = ___").
Q2 (medium): Estimate first, then compute (e.g., "Estimate 7.13 × 6 by rounding first. Then compute the exact answer. Is your answer close to your estimate?").
Q3 (harder): Multi-digit decimal multiplication (e.g., "Solve 4 × 9.63. Show your area model OR standard algorithm. Check using an estimate.").`
  },
  {
    module: 1, name: "Dividing Decimals", questions: 3,
    guidance: `Q1 (straightforward): Unit-form division (e.g., "Solve 1.8 ÷ 2 by thinking in units — '18 tenths ÷ 2 = ___'. Write as a decimal.").
Q2 (medium): Division with unbundling (e.g., "Solve 4.5 ÷ 5. Think: 4 ones ÷ 5 doesn't work — what do you do next?").
Q3 (harder): Division with remainder at hundredths (e.g., "Solve 0.9 ÷ 4. Show how you unbundle tenths to hundredths. Use place value disks if helpful.").`
  },
  {
    module: 1, name: "Metric Conversions with Exponents", questions: 3,
    guidance: `Q1 (straightforward): Convert meters to centimeters or kilometers (e.g., "Yi Ting is 1.49 m tall. How many centimeters is that? Write an equation using an exponent.").
Q2 (medium): Convert to smaller unit — millimeters (e.g., "A sticky note is 77 mm long. How many meters is that? Write an equation using an exponent.").
Q3 (harder): Multi-step conversion problem (e.g., "A path is 2.35 km long. Express this in meters, then in centimeters. Write both equations using exponents.").`
  },
];

// ── Build homework system prompt ──
function buildSystemPrompt(module, lesson, grade, topicHint) {
  grade = grade || 4;
  const gradeLabel = String(grade) === 'K' ? 'Kindergarten' : `Grade ${grade}`;
  let moduleText;

  if (topicHint) {
    moduleText = `The student is working on ${gradeLabel} math, specifically: "${topicHint}".

Focus all problems and explanations on this topic. Present a practice problem related to "${topicHint}" right away.`;
  } else {
    moduleText = `The student is working on ${gradeLabel} math. They haven't specified a topic — start with a warm greeting and ask "What are you working on today?" before presenting a problem.`;
  }

  return `You are a warm, encouraging, and patient Eureka Math tutor for a ${grade}th grade student (approximately ${grade + 5}-${grade + 6} years old). Your name is "Math Buddy."

${moduleText}

HOW TO START THE SESSION:
When the conversation begins, greet the student warmly and IMMEDIATELY present ONE practice problem that matches exactly what is taught in the lesson above. Do NOT wait for the student to bring a problem — you are their tutor, so give them something to work on right away.

Your opening message should:
1. Give a short, friendly greeting (1 sentence)
2. Say which lesson topic you're working on (1 sentence)
3. Present a clear, specific problem with numbers — something a real Eureka Math worksheet would ask for this exact lesson

Example opening format:
"Hi! 👋 Today we're working on [lesson topic]. Let's try this problem:
[specific problem with numbers]
What do you think the first step is? 🤔"

If the student instead shows you THEIR OWN problem from their homework, switch to helping them with that problem instead.

CORE TUTORING PHILOSOPHY — SOCRATIC METHOD:
You NEVER give the answer directly. Instead, you guide the student to discover the answer themselves through questions, hints, and encouragement. This builds real understanding, not just answer-getting.

YOUR TUTORING FLOW:
1. PRESENT: Give a specific practice problem from the lesson (or help with the student's problem if they bring one)
2. UNDERSTAND: Ask what the problem is asking and what the student already knows
3. CONNECT: Ask what strategy or tool from class might help (place value chart, area model, number line, protractor, fraction strips, etc.)
4. GUIDE: Ask leading questions step by step — one question at a time
5. ENCOURAGE: Celebrate every correct step with genuine praise ("Yes! You've got it!" "That's exactly right!")
6. REDIRECT: If wrong, never say "wrong" — say "Hmm, let me ask you this..." or "Interesting! Let's check that together..." then give a hint
7. CHECK: After solving, ask the student to explain WHY the method works and then give a similar practice problem

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

// ── Skill curriculum helpers ──
function getGradeSkills(grade) {
  const gradeKey = String(grade);
  const curriculum = MATH_CURRICULUM[gradeKey] || [];
  const skills = [];
  curriculum.forEach((sec, si) => {
    sec.skills.forEach((skill, ki) => {
      skills.push({ sectionIndex: si, skillIndex: ki, section: sec.section, skill });
    });
  });
  return skills;
}

function getMasteredKeys(user, grade) {
  return new Set((user.masteredSkills || {})[String(grade)] || []);
}

function getUnmasteredSkills(user, grade, limit = 6) {
  const mastered = getMasteredKeys(user, grade);
  const all = getGradeSkills(grade);
  return all.filter(s => !mastered.has(`${s.sectionIndex}:${s.skillIndex}`)).slice(0, limit);
}

function markSkillsMastered(username, grade, keys) {
  if (!keys || !keys.length) return;
  const users = getUsers();
  if (!users[username]) return;
  if (!users[username].masteredSkills) users[username].masteredSkills = {};
  const gradeKey = String(grade);
  const existing = new Set(users[username].masteredSkills[gradeKey] || []);
  keys.forEach(k => existing.add(k));
  users[username].masteredSkills[gradeKey] = [...existing];
  saveUsers(users);
  const session = JSON.parse(sessionStorage.getItem(SESSION_STORAGE) || '{}');
  if (session.username === username) {
    session.masteredSkills = users[username].masteredSkills;
    sessionStorage.setItem(SESSION_STORAGE, JSON.stringify(session));
  }
}

function getSkillMasteryStats(user, grade) {
  const gradeKey = String(grade);
  const curriculum = MATH_CURRICULUM[gradeKey] || [];
  const mastered = getMasteredKeys(user, grade);
  const sections = curriculum.map((sec, si) => {
    const total = sec.skills.length;
    const done = sec.skills.filter((_, ki) => mastered.has(`${si}:${ki}`)).length;
    return { section: sec.section, total, done, pct: total > 0 ? Math.round(done / total * 100) : 0 };
  });
  const totalSkills = sections.reduce((n, s) => n + s.total, 0);
  const totalMastered = sections.reduce((n, s) => n + s.done, 0);
  return { sections, totalSkills, totalMastered, pct: totalSkills > 0 ? Math.round(totalMastered / totalSkills * 100) : 0 };
}

// ── Build test system prompt ──
function buildTestSystemPrompt(grade, skillsToTest) {
  grade = grade || 4;
  const gradeLabel = String(grade) === 'K' ? 'Kindergarten' : `Grade ${grade}`;

  // If specific curriculum skills passed, use skill-based mode
  if (skillsToTest && skillsToTest.length > 0) {
    const skillList = skillsToTest.map((s, i) =>
      `${i + 1}. [${s.section}] ${s.skill}`
    ).join('\n');
    const exampleResults = skillsToTest.map(s =>
      `{"sectionIndex":${s.sectionIndex},"skillIndex":${s.skillIndex},"section":${JSON.stringify(s.section)},"skill":${JSON.stringify(s.skill.substring(0, 60))},"mastered":true}`
    ).join(',');

    return `You are Math Buddy, a friendly math tutor testing a ${gradeLabel} student on specific curriculum skills from the Core Knowledge Sequence.

SKILLS TO ASSESS THIS SESSION (${skillsToTest.length} skills):
${skillList}

TESTING RULES:
- Test EACH skill with exactly 2 questions: one simpler, one that requires deeper understanding
- Ask in a fun, age-appropriate way with emojis 🎉
- After both questions for a skill, decide: MASTERED (got at least 1 right without a hint) or NOT MASTERED
- Move through all skills one by one
- Keep tone encouraging — celebrate effort and correct answers!
- Do NOT give away answers, but give a hint if the student asks (hint counts as not mastered)

After each skill is tested, say something like "Great, let's try the next one! ⭐"

WHEN ALL ${skillsToTest.length} SKILLS ARE TESTED:
Say: "Awesome job! 🎉 Let me tally your results..."

Then output EXACTLY this block:
===SKILLS_REPORT_START===
{"grade":${JSON.stringify(String(grade))},"results":[${exampleResults}],"xpEarned":0}
===SKILLS_REPORT_END===

Fill in the ACTUAL true/false for "mastered" for each skill. Set xpEarned = 10 × (number of mastered skills).

Start by greeting the student warmly and jumping right into Skill #1!`;
  }

  // Legacy: fall back to module-based prompt for grades 4-5
  const topics = grade === 5 ? TEST_TOPICS_G5 : TEST_TOPICS_G4;
  const totalQuestions = topics.length * 3;
  const topicList = topics.map((t, i) =>
    `${i + 1}. ${t.name} (Module ${t.module})\n   Question guidance:\n   ${t.guidance.split('\n').map(l => l.trim()).filter(Boolean).join('\n   ')}`
  ).join('\n\n');
  const g5Example = `{"grade":5,"overallScore":71,"topics":[{"module":1,"name":"Place Value Chart & Powers of 10 (Topics A-B)","score":100,"level":"proficient","correct":3,"total":3,"mistakes":[],"suggestedProblems":[]}]}`;
  const g4Example = `{"grade":4,"overallScore":67,"topics":[{"module":1,"name":"Place Value & Rounding","score":100,"level":"proficient","correct":3,"total":3,"mistakes":[],"suggestedProblems":[]}]}`;

  return `You are Math Buddy, conducting a ${gradeLabel} Eureka Math assessment.

ASSESSMENT STRUCTURE: Ask exactly 3 questions per topic (${topics.length} topics × 3 = ${totalQuestions} questions).

TOPIC AREAS:
${topicList}

STRICT NO-HINTS POLICY: Never offer hints unless student explicitly asks. Hints = question marked incorrect.
After each answer: brief feedback (1-2 sentences), then next question immediately.
Tone: warm but efficient. "Nice try! The answer is X. Next question:" / "You nailed it! 🌟"

SCORING: 3/3=100% proficient, 2/3=67% developing, 1/3=33% needs support, 0/3=0% needs support.

WHEN ALL ${totalQuestions} QUESTIONS ARE DONE:
Say "Amazing work! 🎉 Your report card is ready!" then output:
===REPORT_CARD_START===
${grade === 5 ? g5Example : g4Example}
===REPORT_CARD_END===
Replace example JSON with actual results including real mistakes and personalized practice problems.`;
}

// ── API Key management ──
const KEY_STORAGE = 'mathbuddy_apikey';
const USERS_STORAGE = 'mathbuddy_users';
const SESSION_STORAGE = 'mathbuddy_session';

function getApiKey() {
  // Prefer key baked in at deploy time (via GitHub Actions secret)
  if (window.MATHBUDDY_KEY && window.MATHBUDDY_KEY.startsWith('sk-')) {
    return window.MATHBUDDY_KEY;
  }
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

// ── Child management helpers ──
function getChildIds(parentUsername) {
  const prefix = parentUsername + ':';
  return Object.keys(getUsers()).filter(k => k.startsWith(prefix));
}

function getChild(parentUsername, childKey) {
  return getUsers()[childKey] || null;
}

function saveChild(parentUsername, childKey, data) {
  const users = getUsers();
  users[childKey] = data;
  saveUsers(users);
}

function deleteChild(childKey) {
  const users = getUsers();
  delete users[childKey];
  saveUsers(users);
}

function makeChildKey(parentUsername, name) {
  return parentUsername + ':' + name.trim().toLowerCase().replace(/[^a-z0-9]/g, '_') + '_' + Date.now().toString(36);
}

// ── Password hashing ──
async function hashPassword(password) {
  const saltedPassword = 'mathbuddy:' + password;
  const msgBuffer = new TextEncoder().encode(saltedPassword);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

async function hashPin(parentKey, pin) {
  const salted = 'mathbuddy_pin:' + parentKey + ':' + pin;
  const buf = new TextEncoder().encode(salted);
  const hash = await crypto.subtle.digest('SHA-256', buf);
  return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
}

// ── Supabase auth helper ──
function getSupabaseAuth() {
  return window._supabaseClient ? window._supabaseClient.auth : null;
}

// Returns all child records from localStorage, regardless of parent
function getAllChildren() {
  const users = getUsers();
  return Object.entries(users)
    .filter(([k, v]) => k.includes(':') && v && v.displayName)
    .map(([k, v]) => ({ key: k, parentKey: k.substring(0, k.indexOf(':')), ...v }));
}

// ── PIN pad state ──
let _pinDigits = [];
let _pendingChild = null; // { parentKey, childKey }

// ── Parent auth state (set after parent logs in this page session) ──
let _parentAuthed = false;

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
let testTimerInterval = null;
let testSecondsLeft = 0;
let currentMode = 'homework'; // 'homework' or 'test'

// ── DOM refs ──
const keyScreen = document.getElementById('key-screen');
const loginScreen = document.getElementById('login-screen');
const setupScreen = document.getElementById('setup-screen');
const chatScreen = document.getElementById('chat-screen');
const testScreen = document.getElementById('test-screen');
const reportScreen = document.getElementById('report-screen');
const profileScreen = document.getElementById('profile-screen');
const leaderboardScreen = document.getElementById('leaderboard-screen');
const studentPickerScreen = document.getElementById('student-picker-screen');
const addStudentScreen = document.getElementById('add-student-screen');

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
const photoCameraInput = document.getElementById('photo-camera-input');
const photoUploadInput = document.getElementById('photo-upload-input');
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

// Setup grade buttons (K through 8)
const ALL_GRADES = ['K', '1', '2', '3', '4', '5', '6', '7', '8'];

// ── All screens list ──
const forgotPasswordScreen = document.getElementById('forgot-password-screen');
const pinPadScreen = document.getElementById('pin-pad-screen');
const studentLoginScreen = document.getElementById('student-login-screen');

const ALL_SCREENS = [keyScreen, loginScreen, forgotPasswordScreen, pinPadScreen, studentLoginScreen, studentPickerScreen, addStudentScreen, setupScreen, chatScreen, testScreen, reportScreen, profileScreen, leaderboardScreen].filter(Boolean);

// ── Screen helper ──
function showScreen(screen) {
  if (!screen) return;
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
  // Hide "Change API Key" button if key is baked in at deploy time
  if (window.MATHBUDDY_KEY && window.MATHBUDDY_KEY.startsWith('sk-')) {
    const changeKeyRow = document.querySelector('.change-key-row');
    if (changeKeyRow) changeKeyRow.style.display = 'none';
  }

  // Netflix-style: check for a student in session first
  const user = getCurrentUser();
  if (user && !user.isParent) {
    setupStudentHeader(user);
    showScreen(setupScreen);
    return;
  }

  // Check if there are any children stored on this device
  const children = getAllChildren();
  if (children.length > 0) {
    // Show the Netflix-style picker — no parent login needed
    renderStudentPickerNetflix(children);
    showScreen(studentPickerScreen);
    return;
  }

  // No children yet — check Supabase session first, fall back to legacy
  const auth = getSupabaseAuth();
  if (auth) {
    auth.getSession().then(({ data: { session } }) => {
      if (session) {
        handleSupabaseSession(session);
      } else {
        // Listen for OAuth redirects (returning from Google/Apple)
        auth.onAuthStateChange((event, sess) => {
          if (event === 'SIGNED_IN' && sess) handleSupabaseSession(sess);
        });
        showScreen(loginScreen);
      }
    });
  } else {
    // No Supabase — check legacy parent session or show login
    if (user && user.isParent) {
      _parentAuthed = true;
      renderStudentPickerNetflix([]);
      showScreen(studentPickerScreen);
    } else {
      showScreen(loginScreen);
    }
  }
})();

function handleSupabaseSession(session) {
  const sbUser = session.user;
  const parentKey = 'uid_' + sbUser.id;
  const users = getUsers();
  if (!users[parentKey]) {
    users[parentKey] = {
      displayName: sbUser.user_metadata?.full_name || sbUser.email.split('@')[0],
      isParent: true,
      email: sbUser.email,
      authMethod: 'supabase',
    };
    saveUsers(users);
  }
  const record = users[parentKey];
  const sessionUser = { username: parentKey, parentUsername: parentKey, displayName: record.displayName, isParent: true, email: sbUser.email, authMethod: 'supabase' };
  setCurrentUser(sessionUser);
  _parentAuthed = true;
  const children = getAllChildren();
  renderStudentPickerNetflix(children);
  showScreen(studentPickerScreen);
}

// Netflix-style picker — shows all children; parent management via 🔒 button
function renderStudentPickerNetflix(children) {
  document.getElementById('picker-greeting').textContent = 'Who\'s learning today? 👋';
  const addBtn = document.getElementById('add-student-btn');
  if (addBtn) addBtn.style.display = _parentAuthed ? '' : 'none';

  const container = document.getElementById('student-cards');
  if (children.length === 0) {
    container.innerHTML = _parentAuthed
      ? '<div class="student-card-empty"><div style="font-size:3em">👧</div><p>No students yet. Add your first child to get started!</p></div>'
      : '<div class="student-card-empty"><div style="font-size:3em">👨‍👩‍👧‍👦</div><p>Press <strong>🔒 Parent</strong> to set up your family!</p></div>';
    return;
  }

  container.innerHTML = children.map(child => {
    const stats = getSkillMasteryStats(child, child.grade);
    const gradeLabel = String(child.grade) === 'K' ? 'Kindergarten' : 'Grade ' + child.grade;
    const avatarHtml = child.avatarAnimal
      ? '<img src="' + twemojiUrl(child.avatarAnimal) + '" width="48" height="48" alt="avatar" />'
      : '<span style="font-size:2.5em">👤</span>';
    const pinIcon = child.pinHash ? ' 🔐' : '';
    const editBtn = _parentAuthed
      ? '<button class="student-card-edit" onclick="event.stopPropagation();openEditStudent(\'' + child.parentKey + '\',\'' + child.key + '\')" title="Edit">✏️</button>'
      : '';
    return '<div class="student-card" onclick="selectChild(\'' + child.parentKey + '\',\'' + child.key + '\')">' +
      '<div class="student-card-avatar">' + avatarHtml + '</div>' +
      '<div class="student-card-info">' +
        '<div class="student-card-name">' + escapeHtml(child.displayName) + pinIcon + '</div>' +
        '<div class="student-card-grade">' + gradeLabel + '</div>' +
        '<div class="student-card-progress">' +
          '<div class="progress-bar-track" style="height:6px"><div class="progress-bar-fill" style="width:' + stats.pct + '%;background:#7c3aed;height:6px;border-radius:3px"></div></div>' +
          '<span style="font-size:0.75em;color:#6b7280">' + stats.totalMastered + '/' + stats.totalSkills + ' skills</span>' +
        '</div>' +
      '</div>' +
      editBtn +
      '</div>';
  }).join('');
}

// ── Key screen ──
saveKeyBtn.addEventListener('click', () => {
  const key = apiKeyInput.value.trim();
  if (!key.startsWith('sk-')) {
    alert('That doesn\'t look like a valid API key. It should start with "sk-".');
    return;
  }
  saveApiKey(key);
  apiKeyInput.value = '';
  const user = getCurrentUser();
  if (user) {
    setupStudentHeader(user);
    showScreen(setupScreen);
  } else {
    showScreen(loginScreen);
  }
});

apiKeyInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') saveKeyBtn.click();
});

changeKeyBtn.addEventListener('click', () => {
  clearApiKey();
  showScreen(keyScreen);
});

// ── Login screen ──
// Twemoji SVG animal faces — forward-facing cartoon animals
const ANIMAL_AVATARS = [
  { name: 'Goat',      cp: '1f410' },
  { name: 'Dragon',    cp: '1f432' },  // dragon face — forward-facing
  { name: 'Cat',       cp: '1f431' },
  { name: 'Dog',       cp: '1f436' },
  { name: 'Rabbit',    cp: '1f430' },
  { name: 'Fox',       cp: '1f98a' },
  { name: 'Bear',      cp: '1f43b' },
  { name: 'Panda',     cp: '1f43c' },
  { name: 'Koala',     cp: '1f428' },
  { name: 'Tiger',     cp: '1f42f' },
  { name: 'Lion',      cp: '1f981' },
  { name: 'Cow',       cp: '1f42e' },
  { name: 'Pig',       cp: '1f437' },
  { name: 'Frog',      cp: '1f438' },
  { name: 'Monkey',    cp: '1f435' },
  { name: 'Wolf',      cp: '1f43a' },
  { name: 'Hamster',   cp: '1f439' },
  { name: 'Mouse',     cp: '1f42d' },
  { name: 'Horse',     cp: '1f434' },
  { name: 'Unicorn',   cp: '1f984' },
  { name: 'Owl',       cp: '1f989' },
  { name: 'Penguin',   cp: '1f427' },
  { name: 'Chick',     cp: '1f425' },  // front-facing baby chick
  { name: 'Raccoon',   cp: '1f99d' },  // forward-facing face in Twemoji
  { name: 'Blowfish',  cp: '1f421' },  // round, faces camera
  { name: 'Beaver',    cp: '1f9ab' },  // forward-facing face
  { name: 'Hedgehog',  cp: '1f994' },  // forward-facing face
  { name: 'Otter',     cp: '1f9a6' },  // forward-facing cute face
  { name: 'Octopus',   cp: '1f419' },  // round, faces camera
  { name: 'Butterfly', cp: '1f98b' },
  { name: 'Seal',      cp: '1f9ad' },
];

const AVATAR_ACCESSORIES = [
  { id: '',          emoji: '',   label: 'None',       pos: null },
  { id: 'crown',     emoji: '👑', label: '👑 Crown',    pos: 'top' },
  { id: 'tophat',    emoji: '🎩', label: '🎩 Top Hat',  pos: 'top' },
  { id: 'gradcap',   emoji: '🎓', label: '🎓 Grad Cap', pos: 'top' },
  { id: 'cowboy',    emoji: '🤠', label: '🤠 Cowboy',   pos: 'top' },
  { id: 'sunglasses',emoji: '🕶️', label: '🕶️ Shades',  pos: 'mid' },
  { id: 'nerd',      emoji: '🤓', label: '🤓 Nerd',     pos: 'mid' },
  { id: 'star',      emoji: '⭐', label: '⭐ Star',      pos: 'corner' },
  { id: 'fire',      emoji: '🔥', label: '🔥 Fire',     pos: 'top' },
  { id: 'rainbow',   emoji: '🌈', label: '🌈 Rainbow',  pos: 'top' },
  { id: 'bow',       emoji: '🎀', label: '🎀 Bow',      pos: 'top' },
  { id: 'gem',       emoji: '💎', label: '💎 Gem',      pos: 'corner' },
];

function twemojiUrl(cp) {
  return `https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/${cp}.svg`;
}

function animalAvatarHtml(cp, accessoryId, size) {
  const acc = AVATAR_ACCESSORIES.find(a => a.id === accessoryId) || AVATAR_ACCESSORIES[0];
  const accSize = Math.round(size * 0.44);
  let accHtml = '';
  if (acc.emoji) {
    const styles = {
      top:    `position:absolute;top:-${Math.round(accSize*0.25)}px;left:50%;transform:translateX(-50%);font-size:${accSize}px;line-height:1;pointer-events:none;`,
      mid:    `position:absolute;top:52%;left:50%;transform:translate(-50%,-50%);font-size:${Math.round(accSize*0.85)}px;line-height:1;pointer-events:none;`,
      corner: `position:absolute;bottom:-${Math.round(accSize*0.15)}px;right:-${Math.round(accSize*0.15)}px;font-size:${Math.round(accSize*0.7)}px;line-height:1;pointer-events:none;`,
    };
    accHtml = `<span style="${styles[acc.pos]}">${acc.emoji}</span>`;
  }
  return `<div style="position:relative;width:${size}px;height:${size}px;display:inline-flex;align-items:center;justify-content:center;"><img src="${twemojiUrl(cp)}" width="${size}" height="${size}" style="border-radius:50%;display:block;" alt="avatar" loading="lazy">${accHtml}</div>`;
}

function avatarImgHtml(user, size) {
  if (!user) return animalAvatarHtml(ANIMAL_AVATARS[0].cp, '', size);
  // New animal avatar
  if (user.avatarAnimal) return animalAvatarHtml(user.avatarAnimal, user.avatarAccessory || '', size);
  // Legacy DiceBear seed
  if (user.avatarSeed) {
    const base = `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(user.avatarSeed)}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`;
    const url = user.avatarAccessory ? `${base}&glasses=${user.avatarAccessory}` : base;
    return `<img src="${url}" width="${size}" height="${size}" style="border-radius:50%;display:block" alt="avatar" loading="lazy">`;
  }
  // Legacy emoji
  if (user.avatar) return `<span style="font-size:${size}px;line-height:1">${user.avatar}</span>`;
  // Deterministic fallback from username
  const username = user.username || '';
  let sum = 0;
  for (let i = 0; i < username.length; i++) sum += username.charCodeAt(i);
  const animal = ANIMAL_AVATARS[sum % ANIMAL_AVATARS.length];
  return animalAvatarHtml(animal.cp, '', size);
}

let loginMode = 'login'; // 'login' or 'register'

function setLoginMode(mode) {
  loginMode = mode;
  const registerNameSection = document.getElementById('register-name-section');
  const registerConfirmSection = document.getElementById('register-confirm-section');
  const loginTitle = document.getElementById('login-title');
  const loginSubtitle = document.getElementById('login-subtitle');
  const loginSubmitBtn = document.getElementById('login-submit-btn');
  const loginError = document.getElementById('login-error');
  const authSwitchText = document.getElementById('auth-switch-text');
  const authSwitchBtn = document.getElementById('auth-switch-btn');
  const emailLabel = document.getElementById('login-email-label');

  loginError.style.display = 'none';

  if (mode === 'login') {
    registerNameSection.style.display = 'none';
    registerConfirmSection.style.display = 'none';
    loginTitle.textContent = 'Welcome Back!';
    loginSubtitle.textContent = 'Log in to continue your math journey! 🌟';
    loginSubmitBtn.textContent = 'Log In 🚀';
    if (emailLabel) emailLabel.textContent = 'Email';
    if (authSwitchText) authSwitchText.textContent = 'New here?';
    if (authSwitchBtn) authSwitchBtn.textContent = 'Create an account';
    document.getElementById('login-password').autocomplete = 'current-password';
  } else {
    registerNameSection.style.display = 'block';
    registerConfirmSection.style.display = 'block';
    loginTitle.textContent = 'New Account';
    loginSubtitle.textContent = 'Create your parent account to get started! 🌟';
    loginSubmitBtn.textContent = 'Create Account 🚀';
    if (emailLabel) emailLabel.textContent = 'Email';
    if (authSwitchText) authSwitchText.textContent = 'Already have an account?';
    if (authSwitchBtn) authSwitchBtn.textContent = 'Log in';
    document.getElementById('login-password').autocomplete = 'new-password';
  }
}

// Build avatar picker (lazy — called on first switch to register mode)
let avatarPickerBuilt = false;
function ensureAvatarPicker() {
  if (avatarPickerBuilt) return;
  avatarPickerBuilt = true;
  const picker = document.getElementById('avatar-picker');
  if (!picker) return;

  // ── Animal grid ──
  const gridLabel = document.createElement('p');
  gridLabel.className = 'avatar-section-label';
  gridLabel.textContent = 'Choose your animal';
  picker.appendChild(gridLabel);

  const grid = document.createElement('div');
  grid.className = 'avatar-grid';
  picker.appendChild(grid);

  ANIMAL_AVATARS.forEach(({ name, cp }, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.title = name;
    btn.className = 'avatar-option' + (idx === 0 ? ' selected' : '');
    const img = document.createElement('img');
    img.src = twemojiUrl(cp);
    img.width = 48;
    img.height = 48;
    img.alt = name;
    img.loading = 'lazy';
    btn.appendChild(img);
    btn.addEventListener('click', () => {
      grid.querySelectorAll('.avatar-option').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      registerAvatarAnimal = cp;
      updatePreview();
    });
    grid.appendChild(btn);
  });

  // ── Accessory row ──
  const accLabel = document.createElement('p');
  accLabel.className = 'avatar-section-label';
  accLabel.textContent = 'Add an accessory';
  picker.appendChild(accLabel);

  const accRow = document.createElement('div');
  accRow.className = 'avatar-accessory-row';
  picker.appendChild(accRow);

  AVATAR_ACCESSORIES.forEach((acc, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'acc-option' + (idx === 0 ? ' selected' : '');
    btn.textContent = acc.label;
    btn.addEventListener('click', () => {
      accRow.querySelectorAll('.acc-option').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      registerAvatarAccessory = acc.id;
      updatePreview();
    });
    accRow.appendChild(btn);
  });

  // ── Live preview ──
  const previewWrap = document.createElement('div');
  previewWrap.className = 'avatar-preview-wrap';
  picker.appendChild(previewWrap);

  const previewLabel = document.createElement('p');
  previewLabel.className = 'avatar-section-label';
  previewLabel.textContent = 'Your avatar';
  previewWrap.appendChild(previewLabel);

  const previewDiv = document.createElement('div');
  previewDiv.className = 'avatar-preview-circle';
  previewWrap.appendChild(previewDiv);

  function updatePreview() {
    previewDiv.innerHTML = animalAvatarHtml(registerAvatarAnimal, registerAvatarAccessory, 80);
  }
  updatePreview();
}

// ── Login screen bindings ──
const authSwitchBtn = document.getElementById('auth-switch-btn');
if (authSwitchBtn) authSwitchBtn.addEventListener('click', () => setLoginMode(loginMode === 'login' ? 'register' : 'login'));

const loginSubmitBtn = document.getElementById('login-submit-btn');
if (loginSubmitBtn) loginSubmitBtn.addEventListener('click', handleLoginSubmit);
document.getElementById('login-password') && document.getElementById('login-password').addEventListener('keydown', e => { if (e.key === 'Enter') handleLoginSubmit(); });
document.getElementById('login-confirm') && document.getElementById('login-confirm').addEventListener('keydown', e => { if (e.key === 'Enter') handleLoginSubmit(); });

// Google / Apple SSO
const googleSigninBtn = document.getElementById('google-signin-btn');
if (googleSigninBtn) googleSigninBtn.addEventListener('click', () => handleOAuthSignIn('google'));
const appleSigninBtn = document.getElementById('apple-signin-btn');
if (appleSigninBtn) appleSigninBtn.addEventListener('click', () => handleOAuthSignIn('apple'));

// Forgot password
const forgotPwLink = document.getElementById('forgot-pw-link');
if (forgotPwLink) forgotPwLink.addEventListener('click', () => {
  document.getElementById('forgot-error').style.display = 'none';
  document.getElementById('forgot-success').style.display = 'none';
  document.getElementById('forgot-email').value = '';
  const forgotSubmitBtn = document.getElementById('forgot-submit-btn');
  if (forgotSubmitBtn) forgotSubmitBtn.disabled = false;
  showScreen(forgotPasswordScreen);
});
const forgotBackBtn = document.getElementById('forgot-back-btn');
if (forgotBackBtn) forgotBackBtn.addEventListener('click', () => showScreen(loginScreen));
const forgotSubmitBtn = document.getElementById('forgot-submit-btn');
if (forgotSubmitBtn) forgotSubmitBtn.addEventListener('click', handleForgotPassword);

// Student direct login (Netflix PIN flow)
const studentLoginBtn = document.getElementById('student-login-btn');
if (studentLoginBtn) studentLoginBtn.addEventListener('click', () => {
  renderStudentDirectLogin();
  showScreen(studentLoginScreen);
});
const studentLoginBackBtn = document.getElementById('student-login-back-btn');
if (studentLoginBackBtn) studentLoginBackBtn.addEventListener('click', () => showScreen(loginScreen));

// Parent management button on picker screen
const parentMgmtBtn = document.getElementById('parent-mgmt-btn');
if (parentMgmtBtn) parentMgmtBtn.addEventListener('click', () => {
  if (_parentAuthed) {
    // Already authed — just ensure management controls are visible
    const children = getAllChildren();
    renderStudentPickerNetflix(children);
  } else {
    showScreen(loginScreen);
  }
});

async function handleOAuthSignIn(provider) {
  const auth = getSupabaseAuth();
  if (!auth) { showLoginError('SSO is not configured yet. Use email/password instead.'); return; }
  const redirectTo = window.location.origin + window.location.pathname;
  const { error } = await auth.signInWithOAuth({ provider, options: { redirectTo } });
  if (error) showLoginError(provider + ' sign-in failed: ' + error.message);
  // On success the browser redirects away; onAuthStateChange handles the return
}

async function handleForgotPassword() {
  const email = document.getElementById('forgot-email').value.trim();
  const errorEl = document.getElementById('forgot-error');
  const successEl = document.getElementById('forgot-success');
  errorEl.style.display = 'none';
  if (!email) { errorEl.textContent = 'Please enter your email address.'; errorEl.style.display = 'block'; return; }

  const auth = getSupabaseAuth();
  if (!auth) { errorEl.textContent = 'Password reset requires email sign-in (SSO not configured).'; errorEl.style.display = 'block'; return; }

  const { error } = await auth.resetPasswordForEmail(email, { redirectTo: window.location.origin + window.location.pathname });
  if (error) { errorEl.textContent = error.message; errorEl.style.display = 'block'; return; }
  successEl.style.display = 'block';
  document.getElementById('forgot-submit-btn').disabled = true;
}

async function handleLoginSubmit() {
  const loginError = document.getElementById('login-error');
  const emailRaw = (document.getElementById('login-email') || {}).value || '';
  const email = emailRaw.trim();
  const password = document.getElementById('login-password').value;

  loginError.style.display = 'none';

  if (!email || !password) { showLoginError('Please fill in all fields.'); return; }

  const auth = getSupabaseAuth();
  const isEmail = email.includes('@');

  if (loginMode === 'register') {
    const displayName = document.getElementById('register-displayname').value.trim();
    const confirm = document.getElementById('login-confirm').value;
    if (!displayName) { showLoginError('Please enter your name.'); return; }
    const minLen = (isEmail && auth) ? 6 : 4;
    if (password.length < minLen) { showLoginError(`Password must be at least ${minLen} characters.`); return; }
    if (password !== confirm) { showLoginError('Passwords do not match.'); return; }

    if (isEmail && auth) {
      // Supabase email registration
      const { error } = await auth.signUp({ email, password, options: { data: { full_name: displayName } } });
      if (error) { showLoginError(error.message); return; }
      // onAuthStateChange handles the rest after Supabase processes the signup
      showLoginError(''); 
      document.getElementById('login-error').textContent = '';
      // Show a friendly message
      const errEl = document.getElementById('login-error');
      errEl.style.color = '#16a34a';
      errEl.textContent = 'Account created! Check your email to confirm, then log in.';
      errEl.style.display = 'block';
    } else {
      // Legacy username registration
      const username = email.toLowerCase().replace(/[^a-z0-9_]/g, '_');
      const users = getUsers();
      if (users[username]) { showLoginError('That username is already taken.'); return; }
      const passwordHash = await hashPassword(password);
      users[username] = { displayName, passwordHash, isParent: true, authMethod: 'legacy' };
      saveUsers(users);
      const sessionUser = { username, displayName, isParent: true, parentUsername: username, authMethod: 'legacy' };
      setCurrentUser(sessionUser);
      _parentAuthed = true;
      const children = getAllChildren();
      renderStudentPickerNetflix(children);
      showScreen(studentPickerScreen);
    }
  } else {
    // Login
    if (isEmail && auth) {
      const { error } = await auth.signInWithPassword({ email, password });
      if (error) { showLoginError(error.message); return; }
      // onAuthStateChange handles the rest
    } else {
      // Legacy username login — try raw first (for pre-existing accounts), then sanitized (for accounts registered with email-like input when Supabase was unavailable)
      const users = getUsers();
      const raw = email.toLowerCase();
      const sanitized = raw.replace(/[^a-z0-9_]/g, '_');
      const username = users[raw] ? raw : sanitized;
      const user = users[username];
      if (!user) { showLoginError('Username not found. Did you mean to register?'); return; }
      const passwordHash = await hashPassword(password);
      if (passwordHash !== user.passwordHash) { showLoginError('Incorrect password. Try again!'); return; }
      const sessionUser = { username, displayName: user.displayName, isParent: true, parentUsername: username, authMethod: 'legacy' };
      setCurrentUser(sessionUser);
      _parentAuthed = true;
      // Re-render picker with management controls
      const children = getAllChildren();
      renderStudentPickerNetflix(children);
      showScreen(studentPickerScreen);
    }
  }
}

function showLoginError(msg) {
  const loginError = document.getElementById('login-error');
  loginError.style.color = '';
  loginError.textContent = msg;
  loginError.style.display = msg ? 'block' : 'none';
}

function renderStudentDirectLogin() {
  const children = getAllChildren().filter(c => c.pinHash);
  const container = document.getElementById('student-login-cards');
  if (!container) return;
  if (children.length === 0) {
    container.innerHTML = '<div class="student-login-empty">No students have PINs set yet.<br>Ask a parent to add you a PIN in the student editor.</div>';
    return;
  }
  container.innerHTML = children.map(child => {
    const avatarHtml = child.avatarAnimal
      ? '<img src="' + twemojiUrl(child.avatarAnimal) + '" width="44" height="44" alt="avatar" />'
      : '<span style="font-size:2em">👤</span>';
    const gradeLabel = String(child.grade) === 'K' ? 'Kindergarten' : 'Grade ' + child.grade;
    return '<div class="student-login-card" onclick="startPinFlow(\'' + child.parentKey + '\',\'' + child.key + '\')">' +
      '<div class="student-card-avatar">' + avatarHtml + '</div>' +
      '<div class="student-card-info"><div class="student-card-name">' + escapeHtml(child.displayName) + '</div>' +
      '<div class="student-card-grade">' + gradeLabel + '</div></div>' +
      '<span style="font-size:1.2em">🔐</span></div>';
  }).join('');
}

// ── Student Picker ──
function renderStudentPicker(parentUsername) {
  const users = getUsers();
  const parent = users[parentUsername];
  document.getElementById('picker-greeting').textContent = `Hi, ${parent ? parent.displayName : 'there'}! 👋`;

  const container = document.getElementById('student-cards');
  const childKeys = getChildIds(parentUsername);

  if (childKeys.length === 0) {
    container.innerHTML = `
      <div class="student-card-empty">
        <div style="font-size:3em">👧</div>
        <p>No students yet. Add your first child to get started!</p>
      </div>`;
    return;
  }

  container.innerHTML = childKeys.map(key => {
    const child = users[key];
    if (!child) return '';
    const stats = getSkillMasteryStats(child, child.grade);
    const gradeLabel = String(child.grade) === 'K' ? 'Kindergarten' : `Grade ${child.grade}`;
    const avatarHtml = child.avatarAnimal
      ? `<img src="${twemojiUrl(child.avatarAnimal)}" width="48" height="48" alt="avatar" />`
      : `<span style="font-size:2.5em">👤</span>`;
    return `
      <div class="student-card" onclick="selectChild('${parentUsername}', '${key}')">
        <div class="student-card-avatar">${avatarHtml}</div>
        <div class="student-card-info">
          <div class="student-card-name">${escapeHtml(child.displayName)}</div>
          <div class="student-card-grade">${gradeLabel}</div>
          <div class="student-card-progress">
            <div class="progress-bar-track" style="height:6px">
              <div class="progress-bar-fill" style="width:${stats.pct}%;background:#7c3aed;height:6px;border-radius:3px"></div>
            </div>
            <span style="font-size:0.75em;color:#6b7280">${stats.totalMastered}/${stats.totalSkills} skills</span>
          </div>
        </div>
        <button class="student-card-edit" onclick="event.stopPropagation();openEditStudent('${parentUsername}','${key}')" title="Edit">✏️</button>
      </div>`;
  }).join('');
}

function selectChild(parentKey, childKey) {
  const users = getUsers();
  const child = users[childKey];
  if (!child) return;
  if (child.pinHash) {
    startPinFlow(parentKey, childKey);
  } else {
    activateChild(parentKey, childKey);
  }
}

function startPinFlow(parentKey, childKey) {
  const users = getUsers();
  const child = users[childKey];
  if (!child) return;
  _pendingChild = { parentKey, childKey };
  _pinDigits = [];
  updatePinDots();
  document.getElementById('pin-pad-title').textContent = child.displayName + "'s PIN";
  document.getElementById('pin-pad-avatar').innerHTML = child.avatarAnimal
    ? '<img src="' + twemojiUrl(child.avatarAnimal) + '" width="56" height="56" alt="avatar">'
    : '🐱';
  document.getElementById('pin-error').style.display = 'none';
  showScreen(pinPadScreen);
}

function activateChild(parentKey, childKey) {
  const users = getUsers();
  const child = users[childKey];
  if (!child) return;
  const sessionUser = { username: childKey, parentUsername: parentKey, ...child };
  setCurrentUser(sessionUser);
  setupStudentHeader(sessionUser);
  showScreen(setupScreen);
}

function updatePinDots() {
  for (let i = 0; i < 4; i++) {
    const dot = document.getElementById('pin-dot-' + i);
    if (dot) dot.classList.toggle('filled', i < _pinDigits.length);
  }
}

function pinDigitPressed(d) {
  if (_pinDigits.length >= 4) return;
  _pinDigits.push(d);
  updatePinDots();
  if (_pinDigits.length === 4) setTimeout(verifyStudentPin, 140);
}

async function verifyStudentPin() {
  if (!_pendingChild) return;
  const { parentKey, childKey } = _pendingChild;
  const child = getUsers()[childKey];
  if (!child) return;
  const hash = await hashPin(parentKey, _pinDigits.join(''));
  if (hash === child.pinHash) {
    _pendingChild = null;
    _pinDigits = [];
    activateChild(parentKey, childKey);
  } else {
    _pinDigits = [];
    updatePinDots();
    const errEl = document.getElementById('pin-error');
    errEl.textContent = 'Wrong PIN — try again';
    errEl.style.display = 'block';
    const dotsEl = document.getElementById('pin-dots');
    if (dotsEl) {
      dotsEl.classList.add('pin-shake');
      setTimeout(() => dotsEl.classList.remove('pin-shake'), 400);
    }
  }
}

// Bind pin pad buttons
(function bindPinPad() {
  document.querySelectorAll('.pin-key[data-digit]').forEach(btn => {
    btn.addEventListener('click', () => pinDigitPressed(btn.dataset.digit));
  });
  const bsBtn = document.getElementById('pin-backspace-btn');
  if (bsBtn) bsBtn.addEventListener('click', () => {
    _pinDigits.pop();
    updatePinDots();
    const errEl = document.getElementById('pin-error');
    if (errEl) errEl.style.display = 'none';
  });
  const cancelBtn = document.getElementById('pin-cancel-btn');
  if (cancelBtn) cancelBtn.addEventListener('click', () => {
    _pendingChild = null;
    _pinDigits = [];
    const children = getAllChildren();
    renderStudentPickerNetflix(children);
    showScreen(studentPickerScreen);
  });
})();

// ── Student header ──

function setupStudentHeader(user) {
  const gradeSelectSection = document.getElementById('grade-select-section');
  if (!user) {
    studentHeader.style.display = 'none';
    genericHeader.style.display = 'block';
    if (gradeSelectSection) gradeSelectSection.style.display = 'block';
    return;
  }

  studentHeader.style.display = 'block';
  genericHeader.style.display = 'none';
  if (gradeSelectSection) gradeSelectSection.style.display = 'none';

  studentAvatar.innerHTML = avatarImgHtml(user, 56);
  studentGreeting.textContent = `Hi, ${user.displayName}! 🎉`;
  const grade = user.grade || 4;
  const gradeLabel = String(grade) === 'K' ? 'Kindergarten' : `Grade ${grade}`;
  studentGradeBadge.textContent = `${user.displayName}'s ${gradeLabel}`;

  // Set grade from profile
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

const leaderboardBtn = document.getElementById('leaderboard-btn');
if (leaderboardBtn) leaderboardBtn.addEventListener('click', () => showLeaderboard());

retestNowBtn.addEventListener('click', () => {
  startTestMode();
});

async function doLogout() {
  setCurrentUser(null);
  _parentAuthed = false;
  studentHeader.style.display = 'none';
  genericHeader.style.display = 'block';
  const gradeSelectSection = document.getElementById('grade-select-section');
  if (gradeSelectSection) gradeSelectSection.style.display = 'block';
  const auth = getSupabaseAuth();
  if (auth) { try { await auth.signOut(); } catch(e) {} }
  showScreen(loginScreen);
}

logoutBtn.addEventListener('click', doLogout);

// ── Student picker bindings ──
function bindStudentPicker() {
  // Add student button — only visible when parent is authed
  const addStudentBtnEl = document.getElementById('add-student-btn');
  if (addStudentBtnEl) addStudentBtnEl.addEventListener('click', () => {
    // Use current parent session, or find first parent key from children
    const sess = getCurrentUser();
    let parentKey = sess && sess.isParent ? (sess.parentUsername || sess.username) : null;
    if (!parentKey) {
      // derive from first child
      const children = getAllChildren();
      parentKey = children.length > 0 ? children[0].parentKey : null;
    }
    if (parentKey) openAddStudent(parentKey);
  });
}
bindStudentPicker();

// ── Switch Student button ──
const switchStudentBtn = document.getElementById('switch-student-btn');
if (switchStudentBtn) {
  switchStudentBtn.addEventListener('click', () => {
    const children = getAllChildren();
    renderStudentPickerNetflix(children);
    showScreen(studentPickerScreen);
  });
}

// Supabase auth state listener (handles OAuth redirect returns and session restore)
(function setupSupabaseListener() {
  const auth = getSupabaseAuth();
  if (!auth) return;
  auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN' && session) {
      handleSupabaseSession(session);
    } else if (event === 'SIGNED_OUT') {
      setCurrentUser(null);
      _parentAuthed = false;
    }
  });
})();

// ── Add/Edit Student Screen ──
let addStudentAvatarAnimal = ANIMAL_AVATARS[0].cp;
let addStudentGrade = 'K';
let editingChildKey = null;
let addStudentParentUsername = null;
let addStudentAvatarPickerBuilt = false;

function openAddStudent(parentUsername) {
  addStudentParentUsername = parentUsername;
  editingChildKey = null;
  addStudentGrade = 'K';
  addStudentAvatarAnimal = ANIMAL_AVATARS[0].cp;
  document.getElementById('add-student-title').textContent = 'Add Student';
  document.getElementById('student-name-input').value = '';
  document.getElementById('add-student-error').style.display = 'none';
  document.getElementById('delete-student-section').style.display = 'none';
  document.querySelectorAll('#add-student-grade-row .grade-select-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.grade === 'K');
  });
  updateAddStudentAvatarDisplay();
  ensureAddStudentAvatarPicker();
  renderPinStatus(null);
  hidePinInlineEntry();
  showScreen(addStudentScreen);
}

function openEditStudent(parentUsername, childKey) {
  const child = getUsers()[childKey];
  if (!child) return;
  addStudentParentUsername = parentUsername;
  editingChildKey = childKey;
  addStudentGrade = child.grade || 'K';
  addStudentAvatarAnimal = child.avatarAnimal || ANIMAL_AVATARS[0].cp;
  document.getElementById('add-student-title').textContent = 'Edit Student';
  document.getElementById('student-name-input').value = child.displayName || '';
  document.getElementById('add-student-error').style.display = 'none';
  document.getElementById('delete-student-section').style.display = 'block';
  document.querySelectorAll('#add-student-grade-row .grade-select-btn').forEach(b => {
    b.classList.toggle('active', String(b.dataset.grade) === String(addStudentGrade));
  });
  updateAddStudentAvatarDisplay();
  ensureAddStudentAvatarPicker();
  renderPinStatus(child.pinHash || null);
  hidePinInlineEntry();
  showScreen(addStudentScreen);
}

function renderPinStatus(pinHash) {
  const statusEl = document.getElementById('student-pin-status');
  if (!statusEl) return;
  if (pinHash) {
    statusEl.innerHTML =
      '<span class="pin-set-badge">🔐 PIN set</span>' +
      '<button class="pin-action-btn" id="set-pin-btn">Change PIN</button>' +
      '<button class="pin-action-btn danger" id="remove-pin-btn">Remove PIN</button>';
    document.getElementById('remove-pin-btn').addEventListener('click', async () => {
      if (!editingChildKey) return;
      const users = getUsers();
      if (users[editingChildKey]) { delete users[editingChildKey].pinHash; saveUsers(users); }
      renderPinStatus(null);
      hidePinInlineEntry();
    });
  } else {
    statusEl.innerHTML =
      '<span style="color:var(--gray-400);font-size:13px">No PIN set</span>' +
      '<button class="pin-action-btn" id="set-pin-btn">Set PIN</button>';
  }
  document.getElementById('set-pin-btn').addEventListener('click', () => {
    showPinInlineEntry();
  });
}

function showPinInlineEntry() {
  const el = document.getElementById('pin-entry-inline');
  if (el) {
    el.style.display = 'block';
    ['pin-d0','pin-d1','pin-d2','pin-d3','pin-c0','pin-c1','pin-c2','pin-c3'].forEach(id => {
      const inp = document.getElementById(id);
      if (inp) { inp.value = ''; }
    });
    document.getElementById('pin-entry-error') && (document.getElementById('pin-entry-error').style.display = 'none');
    document.getElementById('pin-d0') && document.getElementById('pin-d0').focus();
  }
}

function hidePinInlineEntry() {
  const el = document.getElementById('pin-entry-inline');
  if (el) el.style.display = 'none';
}

// Bind inline PIN save/cancel
(function bindInlinePin() {
  // Auto-advance digit inputs
  ['pin-d0','pin-d1','pin-d2','pin-d3','pin-c0','pin-c1','pin-c2','pin-c3'].forEach((id, i) => {
    const inp = document.getElementById(id);
    if (!inp) return;
    inp.addEventListener('input', () => {
      inp.value = inp.value.replace(/[^0-9]/g, '').slice(-1);
      const ids = ['pin-d0','pin-d1','pin-d2','pin-d3','pin-c0','pin-c1','pin-c2','pin-c3'];
      if (inp.value && i < ids.length - 1) document.getElementById(ids[i+1]) && document.getElementById(ids[i+1]).focus();
    });
  });

  const savePinBtn = document.getElementById('pin-save-btn');
  if (savePinBtn) savePinBtn.addEventListener('click', async () => {
    const pin1 = ['pin-d0','pin-d1','pin-d2','pin-d3'].map(id => (document.getElementById(id)||{}).value||'').join('');
    const pin2 = ['pin-c0','pin-c1','pin-c2','pin-c3'].map(id => (document.getElementById(id)||{}).value||'').join('');
    const errEl = document.getElementById('pin-entry-error');
    if (pin1.length !== 4) { errEl.textContent = 'Please enter all 4 digits.'; errEl.style.display = 'block'; return; }
    if (pin1 !== pin2) { errEl.textContent = 'PINs do not match. Try again.'; errEl.style.display = 'block'; return; }
    // Save PIN hash to the child record (or stage for new students)
    if (editingChildKey) {
      const users = getUsers();
      const child = users[editingChildKey];
      if (child) {
        child.pinHash = await hashPin(addStudentParentUsername, pin1);
        saveUsers(users);
        renderPinStatus(child.pinHash);
        hidePinInlineEntry();
      }
    } else {
      // For new students, store pin temporarily to save with the record
      _pendingNewStudentPin = pin1;
      renderPinStatus('pending');
      hidePinInlineEntry();
    }
  });

  const cancelInlineBtn = document.getElementById('pin-cancel-inline-btn');
  if (cancelInlineBtn) cancelInlineBtn.addEventListener('click', hidePinInlineEntry);
})();
let _pendingNewStudentPin = null;

function updateAddStudentAvatarDisplay() {
  const display = document.getElementById('add-student-avatar-display');
  if (display) display.innerHTML = `<img src="${twemojiUrl(addStudentAvatarAnimal)}" width="72" height="72" alt="avatar" />`;
}

function ensureAddStudentAvatarPicker() {
  if (!addStudentAvatarPickerBuilt) {
    addStudentAvatarPickerBuilt = true;
    const picker = document.getElementById('add-student-avatar-picker');
    if (!picker) return;
    picker.className = 'avatar-grid';
    ANIMAL_AVATARS.forEach(({ name, cp }) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'avatar-option';
      btn.title = name;
      const img = document.createElement('img');
      img.src = twemojiUrl(cp);
      img.width = 48; img.height = 48; img.alt = name; img.loading = 'lazy';
      btn.appendChild(img);
      btn.addEventListener('click', () => {
        picker.querySelectorAll('.avatar-option').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        addStudentAvatarAnimal = cp;
        updateAddStudentAvatarDisplay();
      });
      picker.appendChild(btn);
    });
  }
  const picker = document.getElementById('add-student-avatar-picker');
  if (picker) {
    picker.querySelectorAll('.avatar-option').forEach((btn, i) => {
      btn.classList.toggle('selected', ANIMAL_AVATARS[i].cp === addStudentAvatarAnimal);
    });
  }
}

function bindAddStudentScreen() {
  document.querySelectorAll('#add-student-grade-row .grade-select-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#add-student-grade-row .grade-select-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      addStudentGrade = btn.dataset.grade === 'K' ? 'K' : parseInt(btn.dataset.grade);
    });
  });

  document.getElementById('save-student-btn').addEventListener('click', () => {
    const name = document.getElementById('student-name-input').value.trim();
    const errorEl = document.getElementById('add-student-error');
    if (!name) { errorEl.textContent = 'Please enter a name.'; errorEl.style.display = 'block'; return; }

    if (editingChildKey) {
      const users = getUsers();
      const child = users[editingChildKey];
      if (child) {
        child.displayName = name;
        child.grade = addStudentGrade;
        child.avatarAnimal = addStudentAvatarAnimal;
        users[editingChildKey] = child;
        saveUsers(users);
      }
    } else {
      const childKey = makeChildKey(addStudentParentUsername, name);
      const newChild = {
        displayName: name,
        grade: addStudentGrade,
        avatarAnimal: addStudentAvatarAnimal,
        avatarAccessory: '',
        masteredSkills: {},
        reportCard: null,
        homeworkSessions: {},
        retestSuggested: [],
        testHistory: [],
      };
      if (_pendingNewStudentPin) {
        // hashPin is async; save after hashing
        hashPin(addStudentParentUsername, _pendingNewStudentPin).then(pinHash => {
          newChild.pinHash = pinHash;
          saveChild(addStudentParentUsername, childKey, newChild);
        });
        _pendingNewStudentPin = null;
      } else {
        saveChild(addStudentParentUsername, childKey, newChild);
      }
    }

    const children = getAllChildren();
    renderStudentPickerNetflix(children);
    showScreen(studentPickerScreen);
  });

  document.getElementById('cancel-student-btn').addEventListener('click', () => {
    const children = getAllChildren();
    renderStudentPickerNetflix(children);
    showScreen(studentPickerScreen);
  });

  document.getElementById('delete-student-btn').addEventListener('click', () => {
    if (!editingChildKey) return;
    if (confirm('Remove this student? Their progress will be deleted.')) {
      deleteChild(editingChildKey);
      const children = getAllChildren();
      renderStudentPickerNetflix(children);
      showScreen(studentPickerScreen);
    }
  });
}
bindAddStudentScreen();

// ── Avatar click → Profile ──
studentAvatar.addEventListener('click', () => {
  const user = getCurrentUser();
  if (user) openProfileScreen(user);
});

// ── Profile screen ──
let profileAvatarAnimal = '';
let profileAvatarAccessory = '';
let profileAvatarPickerBuilt = false;

function openProfileScreen(user) {
  profileAvatarAnimal = user.avatarAnimal || ANIMAL_AVATARS[0].cp;
  profileAvatarAccessory = user.avatarAccessory || '';

  document.getElementById('profile-displayname').value = user.displayName || '';
  document.getElementById('profile-current-pw').value = '';
  document.getElementById('profile-new-pw').value = '';
  document.getElementById('profile-confirm-pw').value = '';
  document.getElementById('profile-error').style.display = 'none';
  document.getElementById('profile-success').style.display = 'none';

  // Parent-only sections
  const parentSection = document.getElementById('parent-account-section');
  const pwSection = document.getElementById('profile-pw-section');
  if (user.isParent && parentSection) {
    parentSection.style.display = 'block';
    const emailEl = document.getElementById('parent-account-email');
    const badgeEl = document.getElementById('parent-account-badge');
    if (emailEl) emailEl.textContent = user.email || user.username || '';
    if (badgeEl) {
      badgeEl.textContent = user.authMethod === 'supabase' ? '🔵 Email/SSO' : '🔑 Username';
      badgeEl.className = 'account-badge ' + (user.authMethod === 'supabase' ? 'badge-supabase' : 'badge-legacy');
    }
    // Supabase users change password via reset email, not in-app
    if (pwSection) pwSection.style.display = user.authMethod === 'supabase' ? 'none' : 'block';
  } else {
    if (parentSection) parentSection.style.display = 'none';
    if (pwSection) pwSection.style.display = 'block';
  }

  const grade = user.grade || 4;
  ALL_GRADES.forEach(g => {
    const btn = document.getElementById(`profile-grade-${g}`);
    if (btn) btn.classList.toggle('active', String(grade) === String(g));
  });

  refreshProfileAvatarDisplay();
  document.getElementById('profile-avatar-picker-wrap').style.display = 'none';

  buildProfileAvatarPicker();
  showScreen(profileScreen);
}

// ── Backup / Restore ──
function downloadBackup() {
  const user = getCurrentUser();
  if (!user || !user.isParent) return;
  const parentKey = user.parentUsername || user.username;
  const users = getUsers();
  const backup = {
    version: 2,
    exportedAt: new Date().toISOString(),
    parentKey,
    parent: users[parentKey] || {},
    children: {},
  };
  Object.keys(users).forEach(k => {
    if (k.startsWith(parentKey + ':')) backup.children[k] = users[k];
  });
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'mathbuddy-backup-' + new Date().toISOString().slice(0,10) + '.json';
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function handleRestoreFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const backup = JSON.parse(e.target.result);
      if (!backup.version || !backup.parentKey || !backup.children) throw new Error('Invalid backup file.');
      if (!confirm('Restore backup? Existing children with the same IDs will be overwritten.')) return;
      const users = getUsers();
      if (backup.parent) users[backup.parentKey] = backup.parent;
      Object.assign(users, backup.children);
      saveUsers(users);
      const children = getAllChildren();
      renderStudentPickerNetflix(children);
      showScreen(studentPickerScreen);
    } catch (err) {
      alert('Could not restore backup: ' + err.message);
    }
  };
  reader.readAsText(file);
}

// Bind backup/restore buttons
(function bindBackupButtons() {
  const dlBtn = document.getElementById('download-backup-btn');
  if (dlBtn) dlBtn.addEventListener('click', downloadBackup);
  const restoreBtn = document.getElementById('restore-backup-btn');
  const fileInput = document.getElementById('restore-file-input');
  if (restoreBtn && fileInput) {
    restoreBtn.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', e => { handleRestoreFile(e.target.files[0]); e.target.value = ''; });
  }
})();

function refreshProfileAvatarDisplay() {
  document.getElementById('profile-avatar-display').innerHTML = animalAvatarHtml(profileAvatarAnimal, profileAvatarAccessory, 80);
}

function buildProfileAvatarPicker() {
  if (profileAvatarPickerBuilt) return;
  profileAvatarPickerBuilt = true;
  const picker = document.getElementById('profile-avatar-picker');
  if (!picker) return;

  const gridLabel = document.createElement('p');
  gridLabel.className = 'avatar-section-label';
  gridLabel.textContent = 'Choose your animal';
  picker.appendChild(gridLabel);

  const grid = document.createElement('div');
  grid.className = 'avatar-grid';
  picker.appendChild(grid);

  ANIMAL_AVATARS.forEach(({ name, cp }) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.title = name;
    btn.className = 'avatar-option';
    const img = document.createElement('img');
    img.src = twemojiUrl(cp);
    img.width = 48; img.height = 48; img.alt = name; img.loading = 'lazy';
    btn.appendChild(img);
    btn.addEventListener('click', () => {
      grid.querySelectorAll('.avatar-option').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      profileAvatarAnimal = cp;
      refreshProfileAvatarDisplay();
    });
    grid.appendChild(btn);
  });

  const accLabel = document.createElement('p');
  accLabel.className = 'avatar-section-label';
  accLabel.textContent = 'Add an accessory';
  picker.appendChild(accLabel);

  const accRow = document.createElement('div');
  accRow.className = 'avatar-accessory-row';
  picker.appendChild(accRow);

  AVATAR_ACCESSORIES.forEach((acc, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'acc-option' + (idx === 0 ? ' selected' : '');
    btn.textContent = acc.label;
    btn.addEventListener('click', () => {
      accRow.querySelectorAll('.acc-option').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      profileAvatarAccessory = acc.id;
      refreshProfileAvatarDisplay();
    });
    accRow.appendChild(btn);
  });
}

// Sync selected state when picker opens (animal/accessory may differ from defaults)
function syncProfilePickerSelection() {
  const grid = document.querySelector('#profile-avatar-picker .avatar-grid');
  if (grid) {
    grid.querySelectorAll('.avatar-option').forEach((btn, i) => {
      btn.classList.toggle('selected', ANIMAL_AVATARS[i].cp === profileAvatarAnimal);
    });
  }
  const accRow = document.querySelector('#profile-avatar-picker .avatar-accessory-row');
  if (accRow) {
    accRow.querySelectorAll('.acc-option').forEach((btn, i) => {
      btn.classList.toggle('selected', AVATAR_ACCESSORIES[i].id === profileAvatarAccessory);
    });
  }
}

function bindProfile() {
  const backBtn = document.getElementById('profile-back-btn');
  const changeAvatarBtn = document.getElementById('profile-change-avatar-btn');
  const saveBtn = document.getElementById('profile-save-btn');
  if (!backBtn) return; // profile screen not in DOM (old cached HTML)

  backBtn.addEventListener('click', () => showScreen(setupScreen));

  changeAvatarBtn.addEventListener('click', () => {
    const wrap = document.getElementById('profile-avatar-picker-wrap');
    const open = wrap.style.display === 'none';
    wrap.style.display = open ? 'block' : 'none';
    if (open) syncProfilePickerSelection();
  });

  ALL_GRADES.forEach(g => {
    const btn = document.getElementById(`profile-grade-${g}`);
    if (!btn) return;
    btn.addEventListener('click', function() {
      ALL_GRADES.forEach(og => {
        const ob = document.getElementById(`profile-grade-${og}`);
        if (ob) ob.classList.remove('active');
      });
      this.classList.add('active');
    });
  });

  saveBtn.addEventListener('click', async () => {
  const errorEl = document.getElementById('profile-error');
  const successEl = document.getElementById('profile-success');
  errorEl.style.display = 'none';
  successEl.style.display = 'none';

  const user = getCurrentUser();
  if (!user) return;

  const displayName = document.getElementById('profile-displayname').value.trim();
  if (!displayName) { errorEl.textContent = 'Display name cannot be empty.'; errorEl.style.display = 'block'; return; }

  const activeGradeBtn = document.querySelector('#profile-screen .grade-select-btn.active');
  const gradeRaw = activeGradeBtn ? activeGradeBtn.dataset.grade : '4';
  const grade = gradeRaw === 'K' ? 'K' : parseInt(gradeRaw);

  const currentPw = document.getElementById('profile-current-pw').value;
  const newPw = document.getElementById('profile-new-pw').value;
  const confirmPw = document.getElementById('profile-confirm-pw').value;

  const users = getUsers();
  const stored = users[user.username];
  if (!stored) return;

  // Password change (optional)
  if (newPw || currentPw) {
    if (!currentPw) { errorEl.textContent = 'Enter your current password to change it.'; errorEl.style.display = 'block'; return; }
    const currentHash = await hashPassword(currentPw);
    if (currentHash !== stored.passwordHash) { errorEl.textContent = 'Current password is incorrect.'; errorEl.style.display = 'block'; return; }
    if (newPw.length < 4) { errorEl.textContent = 'New password must be at least 4 characters.'; errorEl.style.display = 'block'; return; }
    if (newPw !== confirmPw) { errorEl.textContent = 'New passwords do not match.'; errorEl.style.display = 'block'; return; }
    stored.passwordHash = await hashPassword(newPw);
  }

  stored.displayName = displayName;
  stored.grade = grade;
  stored.avatarAnimal = profileAvatarAnimal;
  stored.avatarAccessory = profileAvatarAccessory;
  users[user.username] = stored;
  saveUsers(users);

  const updatedUser = { username: user.username, ...stored };
  setCurrentUser(updatedUser);
  setupStudentHeader(updatedUser);

  successEl.style.display = 'block';
  setTimeout(() => { successEl.style.display = 'none'; showScreen(setupScreen); }, 1200);
  });
}
bindProfile();

// ── Grade selection on setup screen ──
function updateGradeUI(grade) {
  const gradeStr = String(grade);
  ALL_GRADES.forEach(g => {
    const btn = document.getElementById(`setup-grade-${g}`);
    if (btn) btn.classList.toggle('active', String(g) === gradeStr);
  });
}

ALL_GRADES.forEach(g => {
  const btn = document.getElementById(`setup-grade-${g}`);
  if (!btn) return;
  btn.addEventListener('click', () => {
    const grade = g === 'K' ? 'K' : parseInt(g);
    selectedGrade = grade;
    updateGradeUI(grade);
    const user = getCurrentUser();
    if (user) {
      user.grade = grade;
      setCurrentUser(user);
      const users = getUsers();
      if (users[user.username]) {
        users[user.username].grade = grade;
        saveUsers(users);
      }
      const gradeLabel = g === 'K' ? 'Kindergarten' : `Grade ${g}`;
      studentGradeBadge.textContent = `${user.displayName}'s ${gradeLabel}`;
    }
  });
});

// ── Module → lesson range ──
moduleSelect.addEventListener('change', () => {
  if (moduleSelect.value === 'skills-test') {
    document.getElementById('lesson-range-hint').textContent = '';
    lessonInput.value = '';
    return;
  }
  const mod = parseInt(moduleSelect.value);
  const lessonCounts = String(selectedGrade) === '5' ? MODULE_LESSON_COUNTS_G5 : MODULE_LESSON_COUNTS_G4;
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
function handlePhotoFile(e) {
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
    e.target.value = '';
  };
  reader.readAsDataURL(file);
}
photoCameraInput.addEventListener('change', handlePhotoFile);
photoUploadInput.addEventListener('change', handlePhotoFile);
document.getElementById('camera-btn').addEventListener('click', () => photoCameraInput.click());
document.getElementById('upload-btn').addEventListener('click', () => photoUploadInput.click());

clearPhotoBtn.addEventListener('click', () => {
  photoBase64 = null;
  photoMediaType = null;
  photoCameraInput.value = '';
  photoUploadInput.value = '';
  photoPreview.style.display = 'none';
  photoPlaceholder.style.display = 'block';
  clearPhotoBtn.style.display = 'none';
  photoInput.value = '';
});

// ── Start homework session ──
startBtn.addEventListener('click', startSession);

function startSession() {
  if (!getApiKey()) { showScreen(keyScreen); return; }

  const topicHint = (document.getElementById('topic-hint-input') || {}).value || '';
  selectedModule = null;
  selectedLesson = null;

  let initialUserMessage = null;
  let imageData = null;

  if (inputMethod === 'type') {
    const text = document.getElementById('problem-text').value.trim();
    if (!text) { alert('Please type your math problem first! ✏️'); return; }
    initialUserMessage = topicHint
      ? `Topic: ${topicHint}\n\nI need help with this problem: ${text}`
      : `I need help with this problem: ${text}`;
  } else if (inputMethod === 'photo') {
    if (!photoBase64) { alert('Please take or upload a photo of your problem first! 📷'); return; }
    imageData = { base64: photoBase64, mediaType: photoMediaType };
  }

  currentMode = 'homework';
  showScreen(chatScreen);

  const grade = selectedGrade || 4;
  const gradeLabel = String(grade) === 'K' ? 'Kindergarten' : `Grade ${grade}`;
  const topicLabel = topicHint ? ` – ${topicHint}` : '';
  chatSubtitle.textContent = `${gradeLabel} Math${topicLabel}`;

  conversationHistory = [];
  chatMessages.innerHTML = '';
  appendBuddyMessage("Hi! I'm Math Buddy! 🦉 I'm so excited to work on math with you today!\n\nI'll never just give you the answer — we'll figure it out together, step by step. You've got this! 💪");

  if (imageData) {
    appendUserImageMessage(imageData.base64, imageData.mediaType);
    streamToAnthropic(buildImageMessages(imageData.base64, imageData.mediaType), true);
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
        model: 'claude-sonnet-4-6',
        max_tokens: 1024,
        stream: true,
        system: buildSystemPrompt(selectedModule, selectedLesson, selectedGrade, (document.getElementById('topic-hint-input') || {}).value || ''),
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
    const detail = err?.message ? ` (${err.message})` : '';
    appendBuddyMessage(`Oops! I had trouble connecting${detail}. Check your internet and try again. 🔄`);
    console.error(err);
  } finally {
    isStreaming = false;
    sendBtn.disabled = false;
    chatInput.focus();
  }
}

// ── Test mode ──
function startTestTimer() {
  const timerEl = document.getElementById('test-timer');
  testSecondsLeft = 15 * 60;
  clearInterval(testTimerInterval);

  function tick() {
    const m = Math.floor(testSecondsLeft / 60);
    const s = testSecondsLeft % 60;
    const display = `⏱ ${m}:${String(s).padStart(2, '0')}`;
    timerEl.textContent = display;

    if (testSecondsLeft <= 60) {
      timerEl.classList.add('timer-warning');
    }
    if (testSecondsLeft <= 0) {
      stopTestTimer();
      timerEl.textContent = '⏱ 0:00';
      appendTestBuddyMessage("⏰ Time's up! Let me wrap up your results...");
      finishTestBtn.click();
      return;
    }
    testSecondsLeft--;
  }

  tick();
  testTimerInterval = setInterval(tick, 1000);
}

function stopTestTimer() {
  clearInterval(testTimerInterval);
  testTimerInterval = null;
  const timerEl = document.getElementById('test-timer');
  if (timerEl) timerEl.classList.remove('timer-warning');
}

// Skills being tested in the current session
let currentTestSkills = [];

function startTestMode() {
  if (!getApiKey()) { showScreen(keyScreen); return; }
  const user = getCurrentUser();
  const grade = user ? (user.grade || 4) : selectedGrade || 4;
  const gradeLabel = String(grade) === 'K' ? 'Kindergarten' : `Grade ${grade}`;

  // Get unmastered curriculum skills for this grade
  const unmastered = user ? getUnmasteredSkills(user, grade, 6) : [];
  currentTestSkills = unmastered;

  // If all skills mastered, celebrate instead of testing
  if (user && unmastered.length === 0 && getGradeSkills(grade).length > 0) {
    currentMode = 'test';
    testMessages.innerHTML = '';
    testSubtitle.textContent = `${gradeLabel} — Complete! 🏆`;
    showScreen(testScreen);
    appendTestBuddyMessage(`🎉🏆 WOW! You've mastered ALL the ${gradeLabel} math skills! You're incredible!\n\nThere's nothing left to test for ${gradeLabel}. Talk to your teacher about moving up! 🚀\n\nYou can also practice homework problems using the back button.`);
    return;
  }

  currentMode = 'test';
  testConversationHistory = [];
  testMessages.innerHTML = '';
  testSubtitle.textContent = `${gradeLabel} Skills Assessment`;

  showScreen(testScreen);
  startTestTimer();

  const skillCount = unmastered.length;
  const intro = skillCount > 0
    ? `Hi! I'm Math Buddy in Skills Mode! 🦉📝\n\nI'm going to test you on ${skillCount} math skill${skillCount > 1 ? 's' : ''} to see what you know. Answer your best — you can earn ⭐ Leadership Points for each skill you show me!\n\nLet's go! 🚀`
    : `Hi! I'm Math Buddy in Assessment Mode! 🦉📝\n\nI'm going to ask you some math questions to see how you're doing. Answer your best and earn ⭐ Leadership Points!\n\nLet's get started! 🚀`;

  appendTestBuddyMessage(intro);

  const startMsg = "Please start the assessment now.";
  testConversationHistory.push({ role: 'user', content: startMsg });
  streamTestToAnthropic(testConversationHistory);
}

testBackBtn.addEventListener('click', () => {
  stopTestTimer();
  showScreen(setupScreen);
});

finishTestBtn.addEventListener('click', async () => {
  if (isTestStreaming) return;
  stopTestTimer();
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
        model: 'claude-sonnet-4-6',
        max_tokens: 2048,
        stream: true,
        system: buildTestSystemPrompt(grade, currentTestSkills.length > 0 ? currentTestSkills : null),
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
    let skillsReportFound = false;

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

            // Check for report markers while streaming
            if (!reportCardFound && fullText.includes('===REPORT_CARD_START===')) reportCardFound = true;
            if (!skillsReportFound && fullText.includes('===SKILLS_REPORT_START===')) skillsReportFound = true;

            // Display text without any report blocks
            const displayText = stripReportCardBlock(fullText)
              .replace(/===SKILLS_REPORT_START===[\s\S]*?===SKILLS_REPORT_END===/g, '').trim();
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

    // Process skills report (new curriculum-based test)
    if (skillsReportFound && fullText.includes('===SKILLS_REPORT_END===')) {
      const report = extractSkillsReport(fullText);
      if (report) {
        const user = getCurrentUser();
        const masteredKeys = report.results
          .filter(r => r.mastered)
          .map(r => `${r.sectionIndex}:${r.skillIndex}`);
        if (user && masteredKeys.length > 0) {
          markSkillsMastered(user.username, report.grade, masteredKeys);
        }
        const xp = report.xpEarned || (masteredKeys.length * 10);
        const masteredCount = masteredKeys.length;
        const total = report.results.length;
        setTimeout(() => {
          appendTestBuddyMessage(
            `🎯 Skills Report: You mastered ${masteredCount} of ${total} skills!\n` +
            `⭐ +${xp} Leadership Points earned!\n\n` +
            (masteredCount > 0 ? `Great work on: ${report.results.filter(r=>r.mastered).map(r=>r.section).filter((v,i,a)=>a.indexOf(v)===i).join(', ')} 🏆` : 'Keep practicing — you\'ll get there! 💪')
          );
          setTimeout(() => showReportScreen(), 2000);
        }, 500);
      }
    }

    // Process old-style report card if present
    if (reportCardFound && fullText.includes('===REPORT_CARD_END===')) {
      const reportCard = extractReportCard(fullText);
      if (reportCard) {
        saveReportCard(reportCard);
        setTimeout(() => showReportScreen(), 1500);
      }
    }

  } catch (err) {
    typingEl?.remove();
    const detail = err?.message ? ` (${err.message})` : '';
    appendTestBuddyMessage(`Oops! I had trouble connecting${detail}. Check your internet and try again. 🔄`);
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
        model: 'claude-sonnet-4-6',
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

function extractSkillsReport(text) {
  const startMarker = '===SKILLS_REPORT_START===';
  const endMarker = '===SKILLS_REPORT_END===';
  const startIdx = text.indexOf(startMarker);
  const endIdx = text.indexOf(endMarker);
  if (startIdx === -1 || endIdx === -1) return null;
  const jsonStr = text.slice(startIdx + startMarker.length, endIdx).trim();
  try {
    return JSON.parse(jsonStr);
  } catch (e) {
    console.error('Failed to parse skills report JSON:', e, jsonStr);
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
    // Append to testHistory for leaderboard XP tracking
    if (!users[user.username].testHistory) users[user.username].testHistory = [];
    users[user.username].testHistory.push({
      date: reportCard.date,
      score: reportCard.overallScore || 0,
      grade: reportCard.grade,
    });
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

  const grade = (user.reportCard && user.reportCard.grade) || user.grade || 4;
  const masteryStats = getSkillMasteryStats(user, grade);
  const hasMastery = masteryStats.totalMastered > 0;

  if (!user || (!user.reportCard && !hasMastery)) {
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
  const gradeLabel = String(grade) === 'K' ? 'Kindergarten' : `Grade ${grade}`;
  const dateStr = rc && rc.date ? new Date(rc.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Recently';
  const overallScore = rc ? (rc.overallScore || 0) : 0;
  const overallLevel = scoreToLevel(overallScore);
  const overallColor = scoreToColor(overallScore);

  let topicsHtml = '';
  if (rc && rc.topics && rc.topics.length > 0) {
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

  // Skill mastery section
  const masteryColor = scoreToColor(masteryStats.pct);
  const masterySecHtml = masteryStats.sections.map(sec => {
    const c = sec.pct >= 100 ? '#16a34a' : sec.pct >= 50 ? '#d97706' : '#6b7280';
    const check = sec.pct >= 100 ? ' ✅' : '';
    return `
      <div class="report-topic-card" style="margin-bottom:8px">
        <div class="report-topic-header">
          <div class="report-topic-name" style="font-size:0.9em">${escapeHtml(sec.section)}${check}</div>
          <div class="report-topic-score">
            <span class="score-pct" style="color:${c};font-size:0.9em">${sec.done}/${sec.total}</span>
          </div>
        </div>
        <div class="progress-bar-track">
          <div class="progress-bar-fill" style="width:0%;background:${c}" data-width="${sec.pct}"></div>
        </div>
      </div>`;
  }).join('');

  const xp = calcUserXP(user);
  const level = getUserLevel(xp);

  reportContent.innerHTML = `
    <div class="report-header">
      <h2>📊 ${escapeHtml(user.displayName)}'s Report Card</h2>
      <p class="report-date">${gradeLabel} • ${dateStr}</p>
    </div>

    <div class="overall-score-block" style="border-color:${level.color};text-align:center">
      <div style="font-size:2em">${level.icon}</div>
      <div class="overall-score-num" style="color:${level.color}">${xp} XP</div>
      <div class="overall-level" style="color:${level.color}">${level.label}</div>
      <div class="overall-label">Leadership Points</div>
    </div>

    <div style="margin:16px 0">
      <h3 style="font-size:1em;font-weight:700;color:var(--gray-600);margin-bottom:8px">
        🎯 Skill Mastery — ${masteryStats.totalMastered} of ${masteryStats.totalSkills} skills (${masteryStats.pct}%)
      </h3>
      <div class="progress-bar-track" style="margin-bottom:12px">
        <div class="progress-bar-fill" style="width:0%;background:${masteryColor}" data-width="${masteryStats.pct}"></div>
      </div>
      ${masterySecHtml}
    </div>

    ${rc ? `
    <div class="overall-score-block" style="border-color:${overallColor}">
      <div class="overall-score-num" style="color:${overallColor}">${overallScore}%</div>
      <div class="overall-level" style="color:${overallColor}">${overallLevel}</div>
      <div class="overall-label">Last Test Score</div>
    </div>
    <div class="report-topics-list">
      ${topicsHtml}
    </div>` : ''}

    <div class="report-actions">
      <button class="start-btn report-action-btn" onclick="showScreen(setupScreen)">📚 Homework Help</button>
      <button class="start-btn report-action-btn secondary-btn" onclick="startTestMode()">🎯 Take Skills Test</button>
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
  el.innerHTML = `<div class="message-avatar">${avatarImgHtml(getCurrentUser(), 36)}</div><div class="message-bubble">${escapeHtml(text)}</div>`;
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
  el.innerHTML = `<div class="message-avatar">${avatarImgHtml(getCurrentUser(), 36)}</div><div class="message-bubble">${escapeHtml(text)}</div>`;
  chatMessages.appendChild(el);
  scrollToBottom(chatMessages);
}

function appendUserImageMessage(base64, mediaType) {
  const el = document.createElement('div');
  el.className = 'message user';
  el.innerHTML = `
    <div class="message-avatar">${avatarImgHtml(getCurrentUser(), 36)}</div>
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

// ── Leaderboard ──

function calcUserXP(user) {
  let xp = 0;

  // 10 XP per mastered skill
  const masteredSkills = user.masteredSkills || {};
  const grades = ['K', '1', '2', '3', '4', '5', '6', '7', '8'];
  grades.forEach(g => {
    const keys = masteredSkills[g] || [];
    xp += keys.length * 10;

    // 50 XP bonus per completed section
    const curriculum = MATH_CURRICULUM[g] || [];
    curriculum.forEach((sec, si) => {
      const total = sec.skills.length;
      if (total === 0) return;
      const done = sec.skills.filter((_, ki) => keys.includes(`${si}:${ki}`)).length;
      if (done === total) xp += 50;
    });

    // 200 XP bonus if entire grade complete
    const totalSkills = curriculum.reduce((n, s) => n + s.skills.length, 0);
    if (totalSkills > 0 && keys.length >= totalSkills) xp += 200;
  });

  // 5 XP per homework help session
  const totalSessions = Object.values(user.homeworkSessions || {}).reduce((a, b) => a + b, 0);
  xp += totalSessions * 5;

  // Legacy: XP from old test scores (for users pre-skills system)
  if (xp === totalSessions * 5) {
    const history = (user.testHistory && user.testHistory.length > 0)
      ? user.testHistory
      : (user.reportCard ? [{ score: user.reportCard.overallScore || 0 }] : []);
    history.forEach((t, i) => {
      xp += Math.round(t.score || 0);
      if (i > 0 && t.score > history[i - 1].score) xp += 20;
    });
  }

  return xp;
}

function getUserLevel(xp) {
  if (xp >= 5000) return { label: 'Math Legend',   icon: '👑', color: '#dc2626', next: null };
  if (xp >= 2500) return { label: 'Math Champion', icon: '🏆', color: '#f59e0b', next: 5000 };
  if (xp >= 1000) return { label: 'Math Whiz',     icon: '🔥', color: '#f97316', next: 2500 };
  if (xp >= 400)  return { label: 'Rising Star',   icon: '⭐', color: '#7c3aed', next: 1000 };
  if (xp >= 100)  return { label: 'Scholar',       icon: '📚', color: '#2563eb', next: 400  };
  return               { label: 'Seedling',       icon: '🌱', color: '#16a34a', next: 100  };
}

function showLeaderboard() {
  if (!leaderboardScreen) return;
  const users = getUsers();
  const currentUser = getCurrentUser();
  const content = document.getElementById('leaderboard-content');

  const entries = Object.entries(users).map(([username, user]) => {
    const xp = calcUserXP(user);
    const level = getUserLevel(xp);
    const history = (user.testHistory && user.testHistory.length > 0)
      ? user.testHistory
      : (user.reportCard ? [{ score: user.reportCard.overallScore || 0, date: user.reportCard.date }] : []);
    const lastScore = history.length > 0 ? history[history.length - 1].score : null;
    let trend = '';
    if (history.length >= 2) {
      const diff = history[history.length - 1].score - history[history.length - 2].score;
      trend = diff > 0 ? '↑' : diff < 0 ? '↓' : '→';
    }
    const totalSessions = Object.values(user.homeworkSessions || {}).reduce((a, b) => a + b, 0);
    return { username, user, xp, level, lastScore, trend, testsCount: history.length, totalSessions };
  });

  entries.sort((a, b) => b.xp - a.xp);

  const medals = ['🥇', '🥈', '🥉'];

  const rows = entries.map((e, i) => {
    const isMe = currentUser && e.username === currentUser.username;
    const medal = i < 3 ? medals[i] : `<span class="lb-rank-num">${i + 1}</span>`;
    const avatarHtml = avatarImgHtml(e.user, 44);
    const nextXp = e.level.next;
    const barMax = nextXp || e.xp || 1;
    const barPrev = nextXp ? { 5000:2500,2500:1000,1000:400,400:100,100:0 }[nextXp] || 0 : 0;
    const barFill = nextXp ? Math.round(((e.xp - barPrev) / (nextXp - barPrev)) * 100) : 100;
    const testStr = e.testsCount === 0 ? 'No tests yet' : `${e.testsCount} test${e.testsCount > 1 ? 's' : ''}`;
    const sessionStr = e.totalSessions > 0 ? ` · ${e.totalSessions} sessions` : '';
    const scoreStr = e.lastScore !== null ? ` · Last: ${Math.round(e.lastScore)}% ${e.trend}` : '';
    return `
      <div class="lb-entry${isMe ? ' lb-entry-me' : ''}">
        <div class="lb-rank">${medal}</div>
        <div class="lb-avatar">${avatarHtml}</div>
        <div class="lb-info">
          <div class="lb-name">${escapeHtml(e.user.displayName || e.username)}${isMe ? ' <span class="lb-you">you</span>' : ''}</div>
          <div class="lb-level" style="color:${e.level.color}">${e.level.icon} ${e.level.label}</div>
          <div class="lb-bar-track"><div class="lb-bar-fill" style="width:0%;background:${e.level.color}" data-fill="${barFill}"></div></div>
          <div class="lb-stats">${testStr}${sessionStr}${scoreStr}</div>
        </div>
        <div class="lb-xp" style="color:${e.level.color}">${e.xp}<span class="lb-xp-label">XP</span></div>
      </div>`;
  }).join('');

  const legendHtml = `
    <div class="lb-legend">
      <p class="lb-legend-title">How XP is earned</p>
      <div class="lb-legend-row"><span>📝 Test completed</span><span>up to 100 XP</span></div>
      <div class="lb-legend-row"><span>📈 Score improved</span><span>+20 XP bonus</span></div>
      <div class="lb-legend-row"><span>📚 Homework session</span><span>+5 XP each</span></div>
    </div>`;

  content.innerHTML = entries.length === 0
    ? '<p style="text-align:center;color:#888;padding:32px">No students yet! Register an account to appear here.</p>'
    : `<div class="lb-list">${rows}</div>${legendHtml}`;

  // Animate bars
  requestAnimationFrame(() => {
    content.querySelectorAll('.lb-bar-fill').forEach(bar => {
      bar.style.width = bar.dataset.fill + '%';
    });
  });

  showScreen(leaderboardScreen);
}

const leaderboardBackBtn = document.getElementById('leaderboard-back-btn');
if (leaderboardBackBtn) leaderboardBackBtn.addEventListener('click', () => showScreen(setupScreen));

// ── Voice input ──

function initVoiceInput(textareaId, btnId) {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const btn = document.getElementById(btnId);
  if (!SR || !btn) return;

  btn.style.display = 'flex';
  let listening = false;
  let recognition = null;

  function stopListening() {
    if (recognition) { try { recognition.stop(); } catch(e) {} recognition = null; }
    listening = false;
    btn.textContent = '🎤';
    btn.classList.remove('voice-listening');
    btn.title = 'Speak your answer';
  }

  function startListening() {
    if (listening) { stopListening(); return; }
    recognition = new SR();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    const ta = document.getElementById(textareaId);
    if (ta) ta.value = '';

    recognition.onstart = () => {
      listening = true;
      btn.textContent = '🔴';
      btn.classList.add('voice-listening');
      btn.title = 'Listening… tap to stop';
    };

    recognition.onresult = (e) => {
      const ta = document.getElementById(textareaId);
      if (!ta) return;
      const transcript = Array.from(e.results).map(r => r[0].transcript).join('');
      ta.value = transcript;
      ta.style.height = 'auto';
      ta.style.height = Math.min(ta.scrollHeight, 120) + 'px';
    };

    recognition.onend = () => stopListening();

    recognition.onerror = (e) => {
      stopListening();
      if (e.error === 'not-allowed') {
        const ta = document.getElementById(textareaId);
        if (ta) ta.placeholder = 'Microphone access denied — please allow microphone in browser settings.';
      }
    };

    try { recognition.start(); } catch(e) { stopListening(); }
  }

  btn.addEventListener('click', startListening);
}

initVoiceInput('chat-input', 'voice-btn');
initVoiceInput('test-input', 'test-voice-btn');
