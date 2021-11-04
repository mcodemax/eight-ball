import React, { useState } from "react";
import "./Eightball.css"


const EightBall = ({answers}) => {
    const [color, setColor] = useState('black'); //keep track of curr color
    const [msg, setMsg] = useState('Think of a Question')
    
    function clickPredict() {
        const currPrediction = answers[Math.floor(Math.random() * answers.length)];
        //when current prediction is moved outside of this f() scope the app breaks
        //see abv> app breaks; see console.log; happens when msg and color are repeated.

        setColor(currPrediction.color);
        setMsg(currPrediction.msg);
    }
    
    return (
        <>
            <div className="EightBall" onClick={clickPredict}
                 style={{backgroundColor: color}}>
                <p className="Eightball-text">{msg}</p>
                {/* {console.log(msg, color, currPrediction.msg, currPrediction.color)} */}
            </div>
        </>
    )
}

EightBall.defaultProps = {
    answers: [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
    ]
}
export default EightBall;