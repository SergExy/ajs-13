import type Buyable from '../interfaces/Buyable'

export default class Cart {
  private _items: Buyable[] = []

  add (item: Buyable): void {
    this._items.push(item)
  }

  get items (): Buyable[] {
    return [...this._items]
  }

  get total (): number {
    return this._items.reduce((totSum, totNum) => totSum + totNum.price, 0)
  };

  totalDisc (discount: number): number {
    const total: number = this.total
    const totalDisc: number = total * (discount / 100)
    return totalDisc
  };

  removeItem (id: number): void {
    this._items = this._items.filter((item) => item.id !== id)
  }
}
