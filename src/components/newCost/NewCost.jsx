/* eslint-disable react/prop-types */
import CostForm from './CostForm'
import './newCost.css'

const NewCost = (props) => {
    const costDataHandler = (inputCostData) => {
        const costData = {
            ...inputCostData,
            id: Math.random().toString(),
        }

        props.onAddCost(costData)
    }
  return (
    <div className='new-cost'>
      <CostForm onCostData={costDataHandler} />
    </div>
  )
}

export default NewCost
