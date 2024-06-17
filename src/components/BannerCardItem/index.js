// Write your code here.
import './index.css'

const Banner = props => {
  const {banner} = props
  const {id, headerText, description, className} = banner
  return (
    <li className={`${className} banner-card-item`}>
      <div>
        <h1 className="h1"> {headerText}</h1>
        <p className="des">{description}</p>
        <button className="showbtn" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default Banner
