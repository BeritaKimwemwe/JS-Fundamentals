const arg = process.argv[2];                // Get the first argument
const num = parseInt(arg);                  // Try to convert to integer

// Check if conversion worked: is num a number?
if (!isNaN(num)) {
  console.log("My number: " + num);
} else {
  console.log("Not a number");
}
