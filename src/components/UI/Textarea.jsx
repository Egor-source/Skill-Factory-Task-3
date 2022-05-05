import React, {useEffect, useRef, useState} from 'react';

const Textarea = ({children, onInput, onChange, className, ...args}) => {
    let [value,setValue] = useState(children);
    let areaRef = useRef(null);

    useEffect(()=>{
        areaRef.current.setAttribute('style',`--height:auto`)
        areaRef.current.setAttribute('style',`--height:${areaRef.current.scrollHeight}px`)
    },[value]);

    const extendOnInput = (e) => {
        setValue(e.target.value);
        !!onInput && onInput(e);
    }
    return (
        <textarea className={className} {...args} onChange={onChange} onInput={extendOnInput} defaultValue={value} ref={areaRef}></textarea>
    );
};

export default Textarea;