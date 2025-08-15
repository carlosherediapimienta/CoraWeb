import { useMemo } from 'react'
import { Categoria, Tema, Herramienta } from '@/types'
import { CATEGORIAS_DESTACADAS, TEMAS, HERRAMIENTAS } from '@/constants/data'

export const useData = () => {
  const categorias = useMemo(() => CATEGORIAS_DESTACADAS, [])
  const temas = useMemo(() => TEMAS, [])
  const herramientas = useMemo(() => HERRAMIENTAS, [])

  const getCategoriaById = (id: string): Categoria | undefined => {
    return categorias.find(cat => cat.id === id)
  }

  const getTemasByCategory = (category: string): Tema[] => {
    return temas.filter(tema => tema.category === category)
  }

  const getHerramientasByCategory = (category: string): Herramienta[] => {
    return herramientas.filter(herramienta => herramienta.category === category)
  }

  const getComingSoonItems = () => {
    return {
      temas: temas.filter(tema => tema.comingSoon),
      herramientas: herramientas.filter(herramienta => herramienta.comingSoon)
    }
  }

  return {
    categorias,
    temas,
    herramientas,
    getCategoriaById,
    getTemasByCategory,
    getHerramientasByCategory,
    getComingSoonItems
  }
}
