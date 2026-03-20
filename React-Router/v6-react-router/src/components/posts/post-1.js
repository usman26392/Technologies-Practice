

import { useParams, useSearchParams } from "react-router-dom"


const Post1 = () => {
  const {category, id} = useParams();

  let [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams)
  console.log(searchParams.get("price"))

  return (
    <div>post1 page ----------- {category}-{id}</div>
  )
}

export default Post1