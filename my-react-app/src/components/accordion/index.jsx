    import React, { useState } from 'react'
    import data from './data'

    const Accordian = () => {

    const [selected,setSelected] = useState(null)

    function handleSingleSelection(getCurrentId) {

        // console.log("Get current Id", getCurrentId);
        // console.log("SELECTED ID ", selected);
        
        // setSelected(getCurrentId)
        //setSelected(getCurrentId === selected ? null : getCurrentId)
        
        setSelected(prev => prev === getCurrentId ? null : getCurrentId)
        
    }
    console.log("Currently selected ", selected)
    return (  
        <div className='wrapper'>
            <div className='accordian'>
                {data && data.length > 0 ? data.map((dataItem) => (
                    <div className="item">
                        <div onClick={() => handleSingleSelection(dataItem.id)} className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span> 
                        </div>
                        {   
                            // so we are seeign if the currentId is selected  
                            selected === dataItem.id ? <div className='content'>{dataItem.answer}</div> : null
                            
                        }
                    </div>
                ))
                : (
                    <div className="NoData">No data found</div>
                )}
            </div>
        </div>
    )
    
    }

    export default Accordian