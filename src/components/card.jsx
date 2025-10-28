import { Plus } from "lucide-react";
import styles from "./card.module.css";
import {  useCoffee } from "../contexts/coffee-context";

export function Card({ item, image, title, price}) {
  const { addCoffeeToCart } = useCoffee();  // importamos a função de adicionar um item ao carrinho
  return (
    <div className={styles.card}>
      <img src={item.image}  />
      <h2>{title}</h2>
      <strong>R$ {price}</strong>

      <button onClick={() => addCoffeeToCart(item)}> {/* usamos no botão de add a função passando o item */}
        <Plus size={20} />
        Adicionar
      </button>
    </div>
  )
}