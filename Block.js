const crypto = require("crypto");

class Block {
  constructor(data, prevHash = "") {
    this.timestamp = Date.now(); // Get the current timestamp
    this.data = data; // Store whatever data is relevant
    this.prevHash = prevHash; // Store the previous block's hash
    this.hash = this.computeHash(); // Compute this block's hash
  }

  computeHash() {
    // Compute this Block's hash
    let strBlock = this.prevHash + this.timestamp + JSON.stringify(this.data); // Stringify the block's data
    return crypto.createHash("sha256").update(strBlock).digest("hex"); // Hash said string with SHA256 encrpytion
  }
}

let a = new Block({ from: "Joe", to: "Jane" }, (precedingHash = "0"));
let b = new Block({ from: "Jane", to: "Joe" }, (precedingHash = a.hash));

module.exports = Block;
