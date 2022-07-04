


const Book = ({bookName}) => {
  return (
    <div> 
      <p>Book: {bookName} </p> 
      {
        bookName === "English" ? `${bookName} language`: bookName
      }
    </div>
    
  )
}

export default Book