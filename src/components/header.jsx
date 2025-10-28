import styles from './header.module.css'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCoffee } from '../contexts/coffee-context' // 1. Importamos o hook para acessar o contexto

export function Header() {
  // 2. Usamos o hook para pegar a quantidade de itens do carrinho
  const { quantityItemsCart } = useCoffee()

  return (
    <header className={styles.header}>
      <Link to='/'>Coffee Delivery</Link>

      <Link to='/checkout'>
        <ShoppingBag size={24} />

        {/* 3. Adicionamos a lógica para mostrar a quantidade SÓ se for maior que 0 */}
        {quantityItemsCart > 0 && (
          <span>{quantityItemsCart}</span>
        )}
      </Link>
    </header>
  )
}