

const today = new Date();
console.log(today)

function FormatDate(date) {
  return (
    new Intl.DateTimeFormat(
      'en-Us',
      {
        weekday: 'long'
      }
    ).format()
  )
}


const DateForm = () => {
  return (
    <div>Date form of {FormatDate(today)}</div>
  )
}

export default DateForm