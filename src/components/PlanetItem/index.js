import './index.css'

const PlanetItem = props => {
  const {eachDetails} = props
  console.log(eachDetails)
  const {name, imageUrl, description} = eachDetails
  return (
    <div className="forDivein">
      <img src={imageUrl} className="forImage" alt={`planet ${name}`} />
      <h1 className="forheaderItem">{name}</h1>
      <p className="forParaItem">{description}</p>
    </div>
  )
}
export default PlanetItem
