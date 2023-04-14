import { useState, useEffect } from 'react';
import './TestAnimate.css';

function TestAnimate() {
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(false);

    useEffect(() => {
        if (showLeft) {
            setShowRight(false);
        }
    }, [showLeft]);

    useEffect(() => {
        if (showRight) {
            setShowLeft(false);
        }
    }, [showRight]);

    const handleLeftClick = () => {
        setShowLeft(true);
    };

    const handleRightClick = () => {
        setShowRight(true);
    };

    return (
        <div className="container">
            <button onClick={handleLeftClick}>0</button>
            <div className={showLeft ? 'slide-left' : ''}>
                <button>1</button>
                <button>2</button>
            </div>
            <div className={showRight ? 'slide-right' : ''}>
                <button>3</button>
                <button>4</button>
            </div>
            <button onClick={handleRightClick}>5</button>
        </div>
    );
}

export default TestAnimate;