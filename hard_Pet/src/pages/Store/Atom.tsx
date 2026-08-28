import { useAtom } from "jotai";
import {
  products,
  cartAtom,
  addToCartAtom,
  removeFromCartAtom,
  changeQtyAtom,
  clearCartAtom,
  totalAtom,
  itemCountAtom,
} from "./atom";

export const Atom = () => {
  const [cart] = useAtom(cartAtom);

  const [, addToCart] = useAtom(addToCartAtom);
  const [, removeFromCart] = useAtom(removeFromCartAtom);
  const [, changeQty] = useAtom(changeQtyAtom);
  const [, clearCart] = useAtom(clearCartAtom);

  const [total] = useAtom(totalAtom);
  const [count] = useAtom(itemCountAtom);

  return (
    <div style={{ padding: 20 }}>
      <h1>Корзина покупок</h1>

      <h2>Товары</h2>

      {products.map((p) => (
        <div key={p.id} style={{ marginBottom: 10 }}>
          {p.name} — {p.price} ₽
          <button onClick={() => addToCart(p)} style={{ marginLeft: 10 }}>
            Добавить
          </button>
        </div>
      ))}

      <hr />

      <h2>Корзина</h2>

      {cart.length === 0 && <p>Пусто</p>}

      {cart.map((item) => (
        <div key={item.id} style={{ marginBottom: 10 }}>
          {item.name} — {item.price} ₽ × {item.quantity}

          <button onClick={() => changeQty({ id: item.id, delta: -1 })}>
            -
          </button>

          <button onClick={() => changeQty({ id: item.id, delta: 1 })}>
            +
          </button>

          <button onClick={() => removeFromCart(item.id)}>
            удалить
          </button>
        </div>
      ))}

      <hr />

      <h3>Итого: {total} ₽</h3>
      <h3>Количество: {count}</h3>

      <button onClick={clearCart}>Очистить корзину</button>
    </div>
  );
}