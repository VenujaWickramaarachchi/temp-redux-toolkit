import Navbar from './Components/Navbar'
import CardContainer from './Components/CartContainer'
import CartContainer from './Components/CartContainer'
import { useSelector, useDispatch } from 'react-redux'
import { calculateTotals, getCartItems } from './Features/Cart/CartSlice'
import { useEffect } from 'react'
import Modal from './Components/Modal'

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart)
  const { isOpen } = useSelector((store) => store.modal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])

  useEffect(() => {
    dispatch(getCartItems('random'))
  }, [])

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App
