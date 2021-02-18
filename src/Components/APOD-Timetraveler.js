import React from 'react';
import styled from "styled-components";

const APODTimetraveler = (props) => {
    const {cDate, image, video, title, explanation, forward, backward, reset} = props;

    const StDiv1 = styled.div`
        display:flex column;
        align-content: center;
        justify-content: center;
        margin-left: 10%;
        margin-right: 10%;
        margin-top: 2%;
        margin-bottom: 2%;
        padding-top: 1.5%;
        border: solid black 2px;
        border-radius: 10%;
        background-color: royalblue;
    `

    const StDiv2 = styled.div`
        margin: 3%;
    `
    const StDiv3 = styled.div`
     margin: 1.5%;
     display: flex;
     justify-content: space-evenly;
    `
    const StImg = styled.img`
        width: 100%;
        border:solid black;
        padding: 1%;
        background-color:lightblue;
        margin-left: -1.4%;
    `
    const StIframe = styled.iframe`
        width: 100%;
        border:solid black;
        padding: 1%;
        background-color:lightblue;
    `

    const StButton = styled.button`
        padding-left: 2%;
        padding-right: 2%;
        padding-top: 1%;
        padding-bottom: 1%;
    `

    
    return (
        <StDiv1 className="Timetraveler-container">
            <StDiv2>
                <h2>{`APOD of ${cDate}`}</h2>
                <h3>{title}</h3>
                {image !== undefined && <StImg src={image} alt="APOD"/>}
                {video !== undefined && <StIframe title={title} src={video} height="720" width="1280" />}
                <p>{explanation}</p>
            </StDiv2>
            <StDiv3>
                <StButton onClick={forward}>Forward</StButton>
                <StButton onClick={reset}>Reset</StButton>
                <StButton onClick={backward}>Backward</StButton>
            </StDiv3>
        </StDiv1>
    )


}


export default APODTimetraveler;