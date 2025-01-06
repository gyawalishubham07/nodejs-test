function convertCtoF(celsius) {
  const fahernite = (celsius * 9) / 5 + 32;

  return fahernite;
}

// module.exports = convertCtoF; for type is in common js in package.json

export default convertCtoF;
