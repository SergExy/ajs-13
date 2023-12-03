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
    let total: number = 0
    this._items.forEach((item: { price: number }) => {
      total += item.price
    })
    return total
  };

  totalDisc (discount: number): number {
    const total: number = this.total
    const totalDisc: number = total * (discount / 100)
    return totalDisc
  };

  removeItem (id: number): void {
    const items: Buyable[] = this._items
    const index: number = items.findIndex((item) => item.id === id)
    items.splice(index, 1)
    this._items = items
  }
}
