import React, { useState } from 'react'


export const useTab = (idx, data) => {
    console.log(Array.isArray(data))
    // if(!idx || !Array.isArray(data)) {return null};
    const [curIdx, setCurIdx] = useState(idx);
    return {
        currentTab: data[curIdx],
        setCurIdx,
    }
}

const useInput = (initail) => {
    const [value, setValue] = useState(initail) 
    const handler = (e) => {
        setValue(e.target.value)
    }
    return [value, handler]
}


const index = () => {

    

const data = [
    {
        tit: 'tit1',
        conts: "con1",
    },
    {
        tit: 'tit2',
        conts: "con2",
    },
    {
        tit: 'tit3',
        conts: "con3",
    },
    {
        tit: 'tit4',
        conts: "con4",
    },
    {
        tit: 'tit5',
        conts: "con5",
    },
];



    const { currentTab, setCurIdx } = useTab(0, data);
    // const aa = useTab(0, data);


    const [aa, handleAA] = useInput('')
    const [bb, handleBB] = useInput('')
    

    return (
        <div>
            <form>
                <label>aa</label>
                <input type="text" value={aa} onChange={handleAA}/><br />
                <label>bb</label>
                <input type="text" value={bb} onChange={handleBB}/>
            </form>
            {aa}<br />
            {bb}
            <p>customer hooks</p>
            {data.map((item, idx) => {
                return (
                    <button key={idx} onClick={item => setCurIdx(idx)}>
                        {item.tit}
                    </button>
                )
            })}

            <div>{currentTab.conts}</div>
        </div>
    )
}

export default index;