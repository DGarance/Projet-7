import { useState } from "react";


export default function Dropdown(){
    const [isOpen,setIsOpen] = useState(false);

    const handleClick = event => {
        setIsOpen(current => !current);
    };

    return (
        <div>
            <button onClick={handleClick}>Mon</button>
            {isOpen &&(
                <div>
                    <h2>Some content</h2>
                </div>
            )}
        </div>
    )
}