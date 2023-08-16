import { useParams, useOutletContext } from 'react-router-dom'

export const Book = () => {
  const { id }  = useParams();
  // get context passed in outlet
  const { name } = useOutletContext();
  
  return (
    <>
      <div>Book {id} (params)</div>
      <div>Book Name {name} (outlet context)</div>
    </>
  )
}
