import "../../index.css"
import React from 'react';

const Card = ({ thumbnail, title,thumbnailfce,thumbnailcae,thumbnailcpe,description,enlace,type,dateAdded}) => {
    return (
      <div className="card">
        <div className="poster">
          <img src={thumbnail} alt={title} />
        </div>
        <div className="details">
          <div className="imgcontent">
            <img src={thumbnailfce} />
            <img src={thumbnailcae} />
            <img src={thumbnailcpe} />
            <br />
            <span>{title}</span>
          </div>
          <div className="rating">
            <i className="fas fa-star" aria-hidden="true"></i>
            <i className="fas fa-star" aria-hidden="true"></i>
            <i className="fas fa-star" aria-hidden="true"></i>
            <i className="fas fa-star" aria-hidden="true"></i>
            <i className="fas fa-star" aria-hidden="true"></i>
            <span>5/5</span>
          </div>
          <div className="tags">
            <span className="fantasy">{type}</span>
            <a href={enlace}><span className="mystery">Descargar</span></a>
          </div>
          <div className="info">
            <p>{description}</p>
          </div>
          <div className="cast">
                <h4>{dateAdded}</h4>
                <ul>
                  <li>
                    <img
                      src="http://www.gstatic.com/tv/thumb/persons/73414/73414_v9_bb.jpg"
                    />
                  </li>
                  <li>
                    <img
                      src="http://www.gstatic.com/tv/thumb/persons/25704/25704_v9_bb.jpg"
                    />
                  </li>
                  <li>
                    <img
                      src="http://www.gstatic.com/tv/thumb/persons/554/554_v9_bb.jpg"
                    />
                  </li>
                  <li>
                    <img
                      src="http://www.gstatic.com/tv/thumb/persons/8439/8439_v9_ba.jpg"
                    />
                  </li>
                </ul>
              </div>
        </div>
      </div>
    );
  };
  
  export default Card;
  