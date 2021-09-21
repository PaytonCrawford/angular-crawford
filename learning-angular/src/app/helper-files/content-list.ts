
class ContentList {

  //Private array of Content.
  private contentArray: Content[];
  static contentCount = 0;

  //Constructor to set empty array.
  constructor(item: Content) {
    this.contentArray = [];
  }

  //Getter to return Content array.
  get _contentArray(): Content[] {
    return this.contentArray;
  }

  //Adds item to content list array.
  add() {
    this.contentArray.push()
  }

  //Returns count of array.
  contentArrayCount() {
    return ++ContentList.contentCount;
  }

  //Return number of items in array.
  returnArrayCount() {
    return this.contentArray.length
  }

}
