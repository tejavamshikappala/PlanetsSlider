import Slider from 'react-slick'

import './index.css'

// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const settings = {
    dots: false,
    slideToShow: 1,

    speed: 1000,
    slideToScroll: 1,
  }

  const {planetsList} = props
  return (
    <div className="sliderContainer" data-testid="planets">
      <h1 className="forHeader">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(each => (
          <PlanetItem eachDetails={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
