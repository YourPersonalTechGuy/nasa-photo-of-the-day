import React from 'react';

const APODTimetraveler = (props) => {
    const {cDate, image, video, title, explanation, forward, backward, reset} = props;

    return (
        <div className="Timetraveler-container">
            <h3>{`APOD of ${cDate}`}</h3>
            <h4>{title}</h4>
            {image !== undefined && <img src={image} alt="APOD" width="1280" />}
            {video !== undefined && <iframe title={title} src={video} height="720" width="1280" />}
            <p>{explanation}</p>
            <button onClick={forward}>Forward</button>
            <button onClick={reset}>Reset</button>
            <button onClick={backward}>Backward</button>
        </div>
    )


}

export default APODTimetraveler;