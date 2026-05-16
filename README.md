# Eureka Math Tutor

An interactive step-by-step long division tutor designed for 5th grade students using the Eureka Math curriculum (Grade 5, Module 2, Lesson 23).

## Features

- **Interactive Step-by-Step Guide**: Walk through long division one step at a time
- **Input Validation**: Students must enter the correct answer at each step before moving forward
- **Real-Time Feedback**: Immediate feedback on whether answers are correct
- **Working Area**: Space for students to write out their work
- **Progress Tracking**: Visual progress bar shows how far through the lesson you are
- **Responsive Design**: Works on desktop and mobile devices
- **No Dependencies**: Pure HTML, CSS, and JavaScript - no external libraries needed

## How to Use

1. Open `index.html` in your web browser
2. Read the current step and the division setup
3. Answer the question for that step
4. Click "Check" or press Enter to verify your answer
5. Once correct, click "Next" to move to the next step
6. Use the "Previous" button to review earlier steps
7. Complete all 6 steps to master the division problem

## Project Structure

```
Eureka_Math_tutor/
├── index.html       # Main HTML file
├── styles.css       # Styling and layout
├── script.js        # JavaScript functionality
├── README.md        # This file
└── LICENSE          # MIT License
```

## File Organization

### index.html
- Contains the semantic HTML structure
- Links to CSS and JavaScript files
- Main sections: header, lesson info, step container, working area

### styles.css
- **Layout**: Flexbox and CSS Grid for responsive design
- **Colors**: Purple gradient for header, blue for step questions
- **Responsive**: Mobile-first design that works on all screen sizes
- **Accessibility**: Clear visual hierarchy and color contrast

### script.js
- **Step Data**: Array of 6 steps with content, questions, and correct answers
- **Functions**:
  - `showStep()`: Displays the current step content
  - `checkStepAnswer()`: Validates student answers
  - `nextStep()`: Moves to the next step
  - `previousStep()`: Returns to previous step
- **Event Listeners**: Keyboard (Enter) and mouse click support

## The Division Problem

**2,456 ÷ 14**

### Steps Covered:
1. **Setup** - Understanding long division notation
2. **First Division** - Dividing 24 by 14
3. **Multiplication & Subtraction** - Multiplying divisor and subtracting
4. **Bring Down** - Bringing down the next digit
5. **Repeat Division** - Dividing 105 by 14
6. **Final Steps** - Last division and finding the remainder

### Final Answer: 175 R 6

## Learning Outcomes

By completing this tutor, students will be able to:
- Set up a long division problem correctly
- Divide multi-digit numbers by two-digit divisors
- Understand the role of multiplication and subtraction in long division
- Find and interpret remainders
- Check their work using multiplication

## Customization

### Adding New Problems

To add a new division problem, modify the `steps` array in `script.js`:

```javascript
const steps = [
  {
    title: "Step Title",
    content: `Content with the work shown`,
    question: "Question for the student",
    correctAnswer: 5,
    isFinalStep: false
  },
  // ... more steps
];
```

### Styling

Modify `styles.css` to customize:
- Colors (header gradient, question box colors)
- Fonts (currently using system fonts)
- Button styles
- Spacing and padding

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

## Accessibility

- Semantic HTML structure
- Clear color contrast (WCAG AA compliant)
- Keyboard navigation support (Tab, Enter)
- Responsive text sizing
- Focus indicators on interactive elements

## Future Enhancements

- [ ] Add more division problems
- [ ] Add difficulty levels (2-digit, 3-digit divisors)
- [ ] Add progress saving (localStorage)
- [ ] Add hints system
- [ ] Create a parent dashboard to track student progress
- [ ] Add more Eureka Math lessons from different modules
- [ ] Implement user accounts and progress tracking

## Contributing

Contributions are welcome! Please feel free to:
- Report bugs
- Suggest improvements
- Submit pull requests
- Add new features

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Created as an educational tool for 5th grade Eureka Math students.

## Resources

- [Eureka Math](https://www.engageny.org/resource/eureka-math) - Official curriculum resource
- [Grade 5, Module 2](https://www.engageny.org/resource/grade-5-mathematics-module-2) - Division focused module

## Support

If you have questions or issues:
1. Check the README for common questions
2. Review the code comments in the JavaScript file
3. Test in a different browser
4. Clear browser cache and refresh

---

**Note**: This tutor is designed specifically for Grade 5 Module 2 Lesson 23, but the structure can be adapted for other math concepts and grade levels.
