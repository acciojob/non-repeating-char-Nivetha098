function firstNonRepeatedChar(str) {
    const charCount = {};

    // Step 1: Count the frequency of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Step 2: Find the first non-repeated character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char; // Return the first non-repeated character
        }
    }

    // Step 3: If no non-repeated character is found, return null
    return null;
}
