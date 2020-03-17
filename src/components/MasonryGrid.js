import React from 'react';
import Masonry from 'react-masonry-css';
import './MasonryGrid.css';

function ResultItem(props) {
  return (
    <a href={props.links.html} target="_blank" title={props.alt_description}>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <img src={props.urls.small} alt={props.alt_description} />
        <div className="overlay">
          <div className="overlay-1"></div>
        </div>
      </div>
    </a>
  );
}

function MasonryGrid(props) {
  return (
    <div className="container">
      <Masonry
        breakpointCols={{ default: 3, 1194: 2, 860: 1 }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {/* array of JSX items */}
        {props.results.map(i => (
          <ResultItem key={i.id} {...i} />
        ))}
      </Masonry>
    </div>
  );
}

export default MasonryGrid;
