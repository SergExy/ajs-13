import Cart from '../Cart'
import Movie from '../Movie'

test('test add movie', () => {
  const avengers = new Movie(1, 'Мстители', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 649)
  const expected = [
    {
      id: 1,
      name: 'Мстители',
      year: 2012,
      country: 'США',
      slogan: 'Avengers Assemble!',
      genre: ['фантастика', 'боевик', 'фэнтези', 'приключения'],
      time: 137,
      price: 649
    }
  ]

  const cart = new Cart()
  cart.add(avengers)
  const result = cart.items
  expect(result).toEqual(expected)
})

test('test get total', () => {
  const avengers = new Movie(1, 'Мстители', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 649)
  const avengers2 = new Movie(2, 'Мстители: Эра Альтрона', 2015, 'США', 'A new age begins', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 749)

  const cart = new Cart()
  cart.add(avengers)
  cart.add(avengers2)
  expect(cart.total).toBe(1398)
})

test('test total with discount', () => {
  const avengers = new Movie(1, 'Мстители', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 649)
  const avengers2 = new Movie(2, 'Мстители: Эра Альтрона', 2015, 'США', 'A new age begins', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 749)

  const cart = new Cart()
  cart.add(avengers)
  cart.add(avengers2)
  expect(cart.totalDisc(50)).toBe(699)
})

test('test remove item', () => {
  const avengers = new Movie(1, 'Мстители', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 649)
  const avengers2 = new Movie(2, 'Мстители: Эра Альтрона', 2015, 'США', 'A new age begins', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 749)

  const expected = [
    {
      id: 2,
      name: 'Мстители: Эра Альтрона',
      year: 2015,
      country: 'США',
      slogan: 'A new age begins',
      genre: ['фантастика', 'боевик', 'фэнтези', 'приключения'],
      time: 137,
      price: 749
    }
  ]

  const cart = new Cart()
  cart.add(avengers)
  cart.add(avengers2)
  cart.removeItem(1)
  expect(cart.items).toEqual(expected)
})
