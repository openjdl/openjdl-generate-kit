module.exports = function (data, { chalk }) {
  printMessage(data, chalk);
};

function printMessage(data, { green }) {
  const message = `
 ${green("[*] OpenJDL Example kit generate finished!")}
`;
  console.log(message);
}
