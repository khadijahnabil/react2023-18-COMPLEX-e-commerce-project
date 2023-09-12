// domain/.netlify/functions/hello
const obj = { me: " hello" };
exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: obj,
  };
};
