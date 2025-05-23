const arg = process.argv[2];      // Get what user types (example: 4)
const size = parseInt(arg);       // Change it to a number (example: "4" → 4)

if (isNaN(size)) {                // If size is not a number
  console.log('Missing size');    // Show this message
} else {
  for (let i = 0; i < size; i++) {             // Repeat for each row
    console.log('X'.repeat(size));             // Print a line of Xs
  }
}
