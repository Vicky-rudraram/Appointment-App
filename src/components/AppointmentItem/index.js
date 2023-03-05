// Write your code here

import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsStarred} = props
  const {id, title, isStarred, appointmentDate} = appointmentDetails

  const onClickStar = () => {
    toggleIsStarred(id)
  }

  const starImage = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="bg1">
      <div>
        <p>{title}</p>
        <p>{appointmentDate}</p>
      </div>

      <button type="button" data-testid="star" onClick={onClickStar}>
        <img src={starImage} alt="star" />
      </button>
    </li>
  )
}

export default AppointmentItem