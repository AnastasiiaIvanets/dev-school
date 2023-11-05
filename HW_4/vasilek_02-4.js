class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
    // The constructor takes in an array of items and an integer indicating how many
    // items fit within a single page
  }
  itemCount() {
    // returns the number of items within the entire collection
    return this.collection.length;
  }
  pageCount() {
    // returns the number of pages
    return Math.trunc(this.collection.length / this.itemsPerPage) +
      (this.collection.length % this.itemsPerPage !== 0 ? 1 : 0);
  }
  pageItemCount(pageIndex) {
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range
    if (pageIndex + 1 === this.pageCount()) {
      return this.collection.length % this.itemsPerPage === 0 ? this.itemsPerPage : this.collection.length % this.itemsPerPage;
    } else if (pageIndex >= this.pageCount() || pageIndex < 0) {
      return -1;
    } else {
      return this.itemsPerPage;
    }
  }
  pageIndex(itemIndex) {
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
    if (itemIndex < 0 || itemIndex >= this.collection.length) {
      return -1;
    } else {
      return Math.trunc(itemIndex / this.itemsPerPage);
    }
  }
}

let helper = new PaginationHelper(['a', 'b', 'c', 'd'], 4);
console.log(helper.pageCount()); // should == 2
console.log(helper.itemCount()); // should == 6
console.log(helper.pageItemCount(0)); // should == 4
console.log(helper.pageItemCount(1)); // last page - should == 2
console.log(helper.pageItemCount(2)); // should == -1 since the page is invalid
console.log(" ");
// // pageIndex takes an item index and returns the page that it belongs on
console.log(helper.pageIndex(5)); // should == 1 (zero based index)
console.log(helper.pageIndex(2)); // should == 0
console.log(helper.pageIndex(20)); // should == -1
console.log(helper.pageIndex(-10)); // should == -1
