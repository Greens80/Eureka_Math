require('dotenv').config();
const express = require('express');
const Anthropic = require('@anthropic-ai/sdk');
const path = require('path');

const app = express();
app.use(express.json({ limit: '10mb' }));
app.use(express.static(path.join(__dirname)));

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const MODULE_INFO = {
  1: {
    name: "Place Value, Rounding, and Algorithms for Addition and Subtraction",
    lessons: 19,
    concepts: `
- Place value chart: ones, tens, hundreds, thousands, ten-thousands, hundred-thousands
- Reading and writing numbers in standard form, expanded form, and word form
- Comparing multi-digit numbers using >, <, =
- Rounding to any place using a vertical number line (find the two nearest multiples, identify the midpoint)
- Standard algorithm for addition and subtraction with regrouping
- Estimation to check reasonableness
Key vocabulary: digit, period, place value, round, estimate, algorithm, sum, difference
Parent tip strategy: Ask "What digit is in the _____ place?" and "What are the two nearest multiples of _____ that this number falls between?"`,
  },
  2: {
    name: "Unit Conversions and Problem Solving with Metric Measurement",
    lessons: 5,
    concepts: `
- Metric length: kilometer (km), meter (m), centimeter (cm), millimeter (mm)
- Metric mass: kilogram (kg), gram (g)
- Metric capacity: liter (L), milliliter (mL)
- Converting between units: larger unit → smaller unit = MULTIPLY; smaller unit → larger unit = DIVIDE
- 1 km = 1,000 m; 1 m = 100 cm; 1 m = 1,000 mm; 1 kg = 1,000 g; 1 L = 1,000 mL
- Mixed unit problems (e.g., 3 km 250 m)
- Multi-step word problems with measurement
Key vocabulary: convert, equivalent, unit, metric, capacity, mass, length
Parent tip strategy: Ask "Are we going to a bigger unit or a smaller unit? Going to a smaller unit means we multiply."`,
  },
  3: {
    name: "Multi-Digit Multiplication and Division",
    lessons: 43,
    concepts: `
- Mental math strategies: multiply by multiples of 10, 100, 1000
- Estimation using rounding before computing
- Area model for multiplication (decompose into expanded form, then multiply each part)
- Partial products algorithm for multiplication
- Standard algorithm for multi-digit multiplication (2-digit × 2-digit, 3-digit × 2-digit)
- Division with remainders: interpret remainder based on context (round up, round down, use remainder as fraction, or ignore)
- DMSB method: Divide → Multiply → Subtract → Bring down (repeat)
- Long division with 1-digit divisors and 2-digit divisors (higher lessons)
- Multiplicative comparison word problems ("3 times as many")
Key vocabulary: factor, product, quotient, remainder, divisor, dividend, decompose, area model, partial product, multiplicative comparison
Parent tip strategy: Ask "About how many? Let's estimate first." and "What is _____ × _____ ? Can you use that fact to help?"`,
  },
  4: {
    name: "Angle Measure and Plane Figures",
    lessons: 16,
    concepts: `
- Points, lines, line segments, rays, angles
- Measuring angles with a protractor (align center hole with vertex, align base line with one ray, read the correct scale)
- Types of angles: acute (less than 90°), right (exactly 90°), obtuse (between 90° and 180°), straight (180°), reflex (greater than 180°)
- Parallel lines (never intersect), perpendicular lines (intersect at 90°)
- Classifying triangles by angles (acute, right, obtuse) and by sides (equilateral, isosceles, scalene)
- Classifying quadrilaterals: trapezoid, parallelogram, rectangle, rhombus, square
- Line symmetry: a line of symmetry divides a figure into two mirror-image halves
- Angle addition: angles can be added when they share a vertex and a side
Key vocabulary: vertex, ray, angle, degree, protractor, parallel, perpendicular, polygon, symmetry, line of symmetry
Parent tip strategy: Ask "Estimate the angle first — is it bigger or smaller than 90°?" and "Does this shape have any sides that look like railroad tracks (parallel)?"`,
  },
  5: {
    name: "Fraction Equivalence, Ordering, and Operations",
    lessons: 41,
    concepts: `
- Equivalent fractions: multiply BOTH numerator and denominator by the same number
- Simplifying fractions: divide BOTH numerator and denominator by the same common factor
- Comparing fractions: use benchmarks (0, 1/2, 1), find common denominators, or compare to same numerator
- Adding and subtracting fractions with LIKE denominators: add/subtract numerators only, denominator stays the same
- Mixed numbers and improper fractions: convert between them
- Adding and subtracting mixed numbers (with and without regrouping)
- Multiplying a fraction by a whole number: repeated addition (3 × 2/5 = 2/5 + 2/5 + 2/5 = 6/5)
- Word problems with fractions
Key vocabulary: numerator, denominator, equivalent, benchmark, common denominator, mixed number, improper fraction, simplest form
Parent tip strategy: Ask "If I split each piece into ___ equal parts, how many total pieces would the whole have?" and "Is this fraction closer to 0, to 1/2, or to 1?"`,
  },
  6: {
    name: "Decimal Fractions",
    lessons: 7,
    concepts: `
- Tenths: 1/10 = 0.1 (one column to the right of the ones place)
- Hundredths: 1/100 = 0.01 (two columns to the right of the ones place)
- Place value chart extends to the right of the decimal point
- Reading decimals: "3.47" is read "three and forty-seven hundredths"
- Writing decimals as fractions and fractions as decimals
- Comparing decimals using place value (compare digit by digit from left to right)
- Adding decimals using the standard algorithm (line up decimal points)
- Using a 10×10 grid to model hundredths
- Relationship between fractions and decimals (e.g., 1/4 = 25/100 = 0.25)
Key vocabulary: decimal point, tenths, hundredths, equivalent decimal, place value
Parent tip strategy: Ask "How many tenths? How many hundredths?" and use a 10-column (tenths) and 10×10 grid (hundredths) to visualize.`,
  },
  7: {
    name: "Exploring Measurement with Multiplication",
    lessons: 4,
    concepts: `
- Converting customary units using multiplication: 1 foot = 12 inches, 1 yard = 3 feet, 1 pound = 16 ounces, 1 gallon = 4 quarts
- Mixed unit problems with customary measurement
- Multi-step word problems combining measurement and multiplication
- Using the area model and standard algorithm with measurement contexts
Key vocabulary: convert, equivalent, customary, inch, foot, yard, ounce, pound, quart, gallon
Parent tip strategy: Ask "How many of the smaller unit fit into one of the bigger unit?" and "So if we have ___ of the bigger unit, how many of the smaller unit is that?"`,
  },
};

function buildSystemPrompt(module, lesson) {
  const mod = MODULE_INFO[module];
  const moduleText = mod
    ? `The student is working on Grade 4 Module ${module}: "${mod.name}", Lesson ${lesson}.

MODULE CONCEPTS AND PARENT GUIDANCE:
${mod.concepts}

LESSON CONTEXT: Lesson ${lesson} of ${mod.lessons} in this module.`
    : `The student is working on Grade 4 Eureka Math.`;

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
