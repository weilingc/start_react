import ConceptItem from './ConceptItem'
import Concept from '../UI/Concept'

const Concepts = (props) => {

  const data = props.data
  const conceptItems = data.map((item, index) => (
    <ConceptItem title={item.title} image={item.image} description={item.description} />
  ))

  return (
    <Concept>
      {conceptItems}
    </Concept>
  )
}

export default Concepts
