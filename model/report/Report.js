// const mongoose = require('mongoose');

// const reportSchema = new mongoose.Schema({
//   productName: String,
//   name: String,
//   email: String,
//   phone: String,
//   meetingLocation: String,
//   image: String,
//   resalePrice: Number,
//   product_id: String,
//   paid: Boolean,
//   transactionId: String,
// });

// module.exports = mongoose.model('Report', reportSchema);
// reportModel.js
import { ObjectId } from 'mongodb';

export default class ReportModel {
  constructor(collection) {
    this.collection = collection;
  }

  async addReport(report) {
    const result = await this.collection.insertOne(report);
    return result;
  }

  async getReports(page, limit, sortBy, order) {
    // Similar to what you did in your existing code
    // ...
  }

  async deleteReport(id) {
    const query = { product_id: id };
    const result = await this.collection.deleteOne(query);
    return result;
  }
}
