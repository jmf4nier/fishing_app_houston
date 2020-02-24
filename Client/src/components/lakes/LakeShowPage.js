import React  from 'react'
import {useSelector} from 'react-redux'

const LakeShowPage = (props) => {
    const lake = useSelector(state=>state.lakeReducer.currentLake)
    
  
    return(
        <div style={{textAlign:'center', margin: '10vh'}}>
            <h1>{lake.name}</h1>
            <img alt='lake' src={lake.images[0]}/>
            <p>{lake.description}</p>
        </div>
    )
}
export default LakeShowPage