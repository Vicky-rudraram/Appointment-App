// Write your code here
import {format} from 'date-fns'

import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsStarred} = props
  const {id, title, isStarred, appointmentDate} = appointmentDetails

  const onClickStar = () => {
    toggleIsStarred(id)
  }

  const formattedDate = format(new Date(appointmentDate), 'dd MMMM yyyy,EEEE')

  const starImage = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="bg1">
      <p>{title}</p>
      <p>Date:{formattedDate}</p>

      <button type="button" data-testid="star" onClick={onClickStar}>
        <img src={starImage} alt="star" />
      </button>
    </li>
  )
}

export default AppointmentItem
