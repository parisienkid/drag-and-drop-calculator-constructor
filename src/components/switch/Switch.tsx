import { FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { changeStatus } from '../../core/reducers/calcSlice';
import { sortItems } from '../../core/reducers/sortSlice';
import { initialState as sortState } from '../../core/reducers/sortSlice';
import { resetValue, resetTotal, resetCounter, setOperator, changeMode } from '../../core/reducers/calcSlice';
import './switch.sass';


const Switch: FC = () => {
    const [handle, setHandle] = useState(true);

    const dispatch = useDispatch();


    useEffect(() => {
        if (handle) {
            dispatch(changeStatus('constructor'))
            dispatch(sortItems(sortState.calcItems))
            dispatch(resetValue())
            dispatch(resetTotal())
            dispatch(resetCounter())
            dispatch(setOperator('none'))
            dispatch(changeMode('value'))
        } else {
            dispatch(changeStatus('calculator'))
        }
    },[handle]);


    const toggleSwitch = () => setHandle(!handle);

    return (
        <div data-handle={handle} onClick={toggleSwitch} className="switch">
            <motion.div data-handle={handle}  className='switch__handle' layout transition={spring}></motion.div>
            <div className="switch__left-item">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49984 13.3333L4.1665 10L7.49984 6.66668M12.4998 6.66668L15.8332 10L12.4998 13.3333" stroke="#5D5FEF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Runtime
            </div>
            <div className="switch__right-item">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.7678 11.7678C12.2366 11.2989 12.5 10.663 12.5 10C12.5 9.33696 12.2366 8.70107 11.7678 8.23223C11.2989 7.76339 10.663 7.5 10 7.5C9.33696 7.5 8.70107 7.76339 8.23223 8.23223C7.76339 8.70107 7.5 9.33696 7.5 10C7.5 10.663 7.76339 11.2989 8.23223 11.7678C8.70107 12.2366 9.33696 12.5 10 12.5C10.663 12.5 11.2989 12.2366 11.7678 11.7678Z" stroke="#4D5562" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.04834 9.99999C3.11001 6.61916 6.26917 4.16666 10 4.16666C13.7317 4.16666 16.89 6.61916 17.9517 9.99999C16.89 13.3808 13.7317 15.8333 10 15.8333C6.26917 15.8333 3.11001 13.3808 2.04834 9.99999Z" stroke="#4D5562" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Constructor
            </div>
        </div>
    );
};

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 50
};

export default Switch;