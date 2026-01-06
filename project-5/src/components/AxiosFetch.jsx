import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./app.css";

const AxiosFetch = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); 

  const fetchImage = async (pageNum) => {
    try {
      setLoading(true);
      const res = await axios.get(`https://picsum.photos/v2/list?page=${pageNum}&limit=25`);
      setImages(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

   useEffect(() => {
    const getImages = async () => {
        await fetchImage(page);
    };
    getImages();
    }, [page]);

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  return (
    <div className='app'>
      <h1>Image Gallery</h1>
      {loading ? (
        <p className='loading'>Loading....</p>
      ) : (
        <>
          <div className='gallery'>
            {images.map((img) => (
              <div className='card' key={img.id}>
                <img src={img.download_url} alt="images" />
                <p>{img.author}</p>
              </div>
            ))}
          </div>
          <div className="pagination">
            <button onClick={handlePrev} disabled={page === 1}>Prev</button>
            <span>Page {page}</span>
            <button onClick={handleNext}>Next</button>
          </div>
        </>
      )}
    </div>
  );
};

export default AxiosFetch;
