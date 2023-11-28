function toCase(inputStr) {
    // Check for an empty string
  if (inputStr === '') {
    return '-';
  }

  // Convert the string to lowercase and uppercase with - as the delimiter
  const result = `${inputStr.toLowerCase()}-${inputStr.toUpperCase()}`;

  return result;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
