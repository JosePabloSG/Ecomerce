import { useContext } from 'react'
import { categoryType } from '../types/Category'
import CategoriesContext from '../context/CategoriesContext'

export default function SingleCategory({ category }: { category: categoryType }) {
  const { setCategoryId } = useContext(CategoriesContext)

  const handleView = (categoryId:number) => {
    setCategoryId(categoryId)
  }
  return <>
    <button type='button'
      className='text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800'
      onClick={() => handleView(category.id)}
    >
      {category.name}
    </button>
  </>
}
