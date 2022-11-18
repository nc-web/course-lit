
import { useState, useEffect } from 'react'

const hourGetInterval = () => {
  const [dateTime, setDateTime] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setDateTime(new Date()), 1000)
    return () => {
      clearInterval(id)
    }
  }, [])

  return (
        <>

            <h4 textGray900> {`${dateTime.toLocaleTimeString()}`} </h4>

            {/*
            Fecha & Hora
            <Typography> {`${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`} </Typography>
            */}
        </>
  )
}

export default hourGetInterval

/*
// JS
export function getHour(){

    // Hora
    let newDate = new Date()
    let hours = newDate.getHours()
    let minutes = newDate.getMinutes()
    let seconds = newDate.getSeconds()

    if (hours < 10) hours = 0 + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    //$("#HoraActual").text(hours+ ":" +minutes+ ":" +seconds);

    var formatHour = hours + ':' + minutes + ':' + seconds;
    return formatHour

    //setTimeout(getHour(), 1000);
}
*/
