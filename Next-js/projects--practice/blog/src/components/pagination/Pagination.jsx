
import styles from "./Pagination.module.scss"


function Pagination() {
  return (
    <div className={`${styles['pagination']}`}>
      <button>prev</button>
      <button>next</button>
    </div>
  )
}

export default Pagination