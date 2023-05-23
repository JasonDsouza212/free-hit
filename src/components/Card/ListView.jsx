import { useContext } from 'react'
import { ToolContext } from '../../App'

const ListView = () => {
  const {
    filteredProducts,
    category,
    handelBookmarkAdd,
    bookmarkfilteredProducts,
    deleteres,
  } = useContext(ToolContext)
  return (
    <div>
      <h3>List View</h3>
    </div>
  )
}

export default ListView
