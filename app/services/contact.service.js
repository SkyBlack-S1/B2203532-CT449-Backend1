const { ObjectId } = require("mongodb");

class ContactService {
  constructor(client) {
    this.contact = client.db().collection("contacts");
  }
  // Định nghĩa các phương thức truy xuất CSDL sử dụng mongodb API
}

module.exports = ContactService;
