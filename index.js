class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  static titleize(strings) {
    const lowercaseWords = new Set([
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "the",
      "from",
    ]);
    const words = strings.split(" ");
    let titleized = [];
    words.forEach((word, index) => {
      if (lowercaseWords.has(word) && index !== 0) {
        titleized.push(word);
      } else {
        titleized.push(this.capitalize(word));
      }
    });
    return titleized.join(" ");
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, "");
  }
}
