import React, { useState, useEffect } from 'react';
import "./app.css";

const DataFetch = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); 

  const fetchImages = async (pageNum) => {
    try {
      setLoading(true);
      const res = await fetch(`https://picsum.photos/v2/list?page=${pageNum}&limit=15`);
      const data = await res.json();
      setImages(data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching images:", err);
    }
  };

  useEffect(() => {
    const getImages = async () => {
        fetchImages(page)
    }
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

export default DataFetch;
