import { useEffect, useState } from 'react'
import Hero from '../../components/Header'
import { Restaurante, RestaurantesLista } from '../../components/listagem'
import { Rodape } from '../../components/rodape'

const Home = () => {
  const [home, setHome] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setHome(res))
  }, [])

  return (
    <>
      <Hero />
      <RestaurantesLista restaurante={home} />
      <Rodape />
    </>
  )
}

export default Home
