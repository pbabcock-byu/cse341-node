const testRoute = (req, res) => {
    res.send("Testing Route");
  };

const peterRoute = (req, res) => {
    res.send("Peter's Page");
  };

  const angelaRoute = (req, res) => {
    res.send("Angela's Page");
  };

  module.exports = {
    testRoute,
    peterRoute,
    angelaRoute
  };