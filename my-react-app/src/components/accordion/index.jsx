import React, { useState } from 'react'
import data from './data'
import './style.css'
const Accordian = () => {

    const [selected, setSelected] = useState(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([])


    function handleSingleSelection(getCurrentId) {

        // console.log("Get current Id", getCurrentId);
        // console.log("SELECTED ID ", selected);

        // setSelected(getCurrentId)
        //setSelected(getCurrentId === selected ? null : getCurrentId)

        setSelected(prev => prev === getCurrentId ? null : getCurrentId)

    }

    function handleMultiSelection(getCurrentId) {
        let cpyMultipe = [...multiple]
        const findIndexOfCurrentId = cpyMultipe.indexOf(getCurrentId)

        console.log(findIndexOfCurrentId);

        if(findIndexOfCurrentId === -1) cpyMultipe.push(getCurrentId)
        else cpyMultipe.slice(findIndexOfCurrentId,1)

        setMultiple(cpyMultipe)
        
    }

    console.log("Currently selected ", selected)
    console.log("Multi selected", multiple)

    return (
        <div className='wrapper'>
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable multi selection</button>
            <div className='accordian'>
                {data && data.length > 0 ? data.map((dataItem) => (
                    <div className="item">
                        <div onClick={enableMultiSelection ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)} className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            enableMultiSelection ? multiple.indexOf(dataItem.id) !== -1 && (
                                <div className='content'>{dataItem.answer}</div>
                            ) :  selected === dataItem.id ? <div className='content'>{dataItem.answer}</div> : null

                        }
                        {/* {
                            // so we are seeign if the currentId is selected  
                            selected === dataItem.id ? <div className='content'>{dataItem.answer}</div> : null
                        } */}
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