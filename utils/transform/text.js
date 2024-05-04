const capitalCase = (data) => {
  let text = data.toLowerCase();
  return text[0].toUpperCase() + text.slice(1);
};

module.exports = capitalCase;
