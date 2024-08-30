import { useState } from "react";
import "./SquareDateComponent.css";
import "../../Sources/CommonStyleSheet.css";

const SquareDateComponent = ({number, text}: any) => {
    console.log(text)
    const [numberDate, setNumberDate] = useState(number)
    const [displayedText, setDisplayedText] = useState(text)

    return(
        <div className="items square">
            <h1 className="wedding-font" style={{margin: 0, padding: 10}}>{numberDate}</h1>
            <h4 className="wedding-font-xsm" style={{paddingRight: 3, textAlign: "right", margin: 0}}>{displayedText}</h4>
        </div>
    )
};

export default SquareDateComponent;