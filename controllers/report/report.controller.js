const Report = require('../../model/report/Report.model.js');
const Product = require('../../model/products/Products.model.js')
const { verifyJWT, verifyAdmin } = require('../../middleware/checkAuth.js');  

exports.addReport = async (req, res) => {
  try {
    verifyJWT(req, res); // Verify JWT
    const reportData = req.body;
    const result = await Report.create(reportData);
    res.status(201).json(result);
  } catch (error) {
    console.error("Error adding report:", error);
    res.status(500).json({ error: "Failed to add report" });
  }
};

exports.getReports = async (req, res) => {
  try {
    // verifyJWT(req, res); // Verify JWT

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const sortBy = req.query.sort || 'productName'; // Default sorting by productName
    const order = req.query.order || 'asc'; // Default sorting order is ascending
    const query = {};

    const sortOptions = {};
    sortOptions[sortBy] = order === 'asc' ? 1 : -1;

    const cursor = Report.find(query)
      .sort(sortOptions)
      .skip(skip)
      .limit(limit);

    const report = await cursor;
    const totalReports = await Report.countDocuments(query);
     
    res.send({
      data: report,
      total: totalReports,
      currentPage: page,
      totalPages: Math.ceil(totalReports / limit),
    });
  } catch (error) {
    console.error("Error fetching reports:", error);
    res.status(500).json({ error: "Failed to fetch reports" });
  }
};

exports.deleteReport = async (req, res) => {
  try {
    verifyJWT(req, res); // Verify JWT
    verifyAdmin(req, res); // Verify Admin

    const reportId = req.params.id;
    const result = await Report.findByIdAndDelete(reportId);
    if (!result) {
      return res.status(404).json({ error: "Report not found" });
    }
    res.json({ message: "Report deleted successfully" });
  } catch (error) {
    console.error("Error deleting report:", error);
    res.status(500).json({ error: "Failed to delete report" });
  }
};

// Function to delete a reported item
exports.deleteReportedItem = async (req, res) => {
  try {
    verifyJWT(req, res); // Verify JWT
    verifyAdmin(req, res); // Verify Admin

    const productId = req.params.id;
    const result = await Product.findByIdAndDelete(productId);
    if (!result) {
      return res.status(404).json({ error: "Reported item not found" });
    }
    res.json({ message: "Reported item deleted successfully" });
  } catch (error) {
    console.error("Error deleting reported item:", error);
    res.status(500).json({ error: "Failed to delete reported item" });
  }
};
