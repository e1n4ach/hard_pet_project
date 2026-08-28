import { atom } from "jotai";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export const products = [
  { id: 1, name: "Ноутбук", price: 80000 },
  { id: 2, name: "Мышь", price: 1500 },
  { id: 3, name: "Клавиатура", price: 3000 },
  { id: 4, name: "Монитор", price: 25000 },
];

export const cartAtom = atom<CartItem[]>([]);

export const addToCartAtom = atom(
  null,
  (get, set, product: { id: number; name: string; price: number }) => {
    const cart = get(cartAtom);

    const existing = cart.find((i) => i.id === product.id);

    if (existing) {
      set(
        cartAtom,
        cart.map((i) =>
          i.id === product.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      );
    } else {
      set(cartAtom, [...cart, { ...product, quantity: 1 }]);
    }
  }
);

export const removeFromCartAtom = atom(
  null,
  (get, set, id: number) => {
    set(cartAtom, get(cartAtom).filter((i) => i.id !== id));
  }
);

export const changeQtyAtom = atom(
  null,
  (get, set, payload: { id: number; delta: number }) => {
    set(
      cartAtom,
      get(cartAtom).map((i) =>
        i.id === payload.id
          ? {
              ...i,
              quantity: Math.max(1, i.quantity + payload.delta),
            }
          : i
      )
    );
  }
);

export const clearCartAtom = atom(null, (_get, set) => {
  set(cartAtom, []);
});

export const totalAtom = atom((get) =>
  get(cartAtom).reduce((sum, i) => sum + i.price * i.quantity, 0)
);

export const itemCountAtom = atom((get) =>
  get(cartAtom).reduce((sum, i) => sum + i.quantity, 0)
);