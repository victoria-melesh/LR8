function sortIgnoreSpaces(arr) {
  return [...arr].sort((a, b) => {
    const cleanA = a.replace(/\s+/g, '').toLowerCase();
    const cleanB = b.replace(/\s+/g, '').toLowerCase();
    return cleanA.localeCompare(cleanB);
  });
}

module.exports = {
  sortIgnoreSpaces
};