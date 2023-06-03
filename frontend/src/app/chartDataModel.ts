export class PriceModel {
  public id: string;
  public price: number;
  public estimated: number;
  public date: number[];

  constructor(
       id: string,
       price: number,
       estimated: number,
       date: number[]
  ) {
      this.id = id;
      this.price = price;
      this.estimated = estimated;
      this.date = date;
   }
}
