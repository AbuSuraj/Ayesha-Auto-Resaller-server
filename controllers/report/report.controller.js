const Report = require('../models/Report');

exports.addReport = async (req, res) => {
  try {
    const report = req.body;
    const result = await Report.create(report);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

exports.getReports = async (req, res) => {
  try {
    const reports = await Report.find();
    res.send(reports);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// Add other report-related controller functions here
