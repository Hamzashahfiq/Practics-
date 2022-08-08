var mongoose = require("mongoose");

const setupDB = () => {
  console.log("process.env.DB", process.env.DB);
  mongoose.connect(
    'mongodb+srv://hamza:<password>@cluster0.5euwe.mongodb.net/?retryWrites=true&w=majority',
    function (err) {
      if (err) throw err;
      console.log("successfully connected with database");
    }
  );
};

module.exports = setupDB;