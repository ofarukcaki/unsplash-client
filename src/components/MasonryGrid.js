import React from 'react';
import Masonry from 'react-masonry-css';
import './MasonryGrid.css';

function ResultItem(props) {
  return <img src={props.urls.small} alt={props.alt_description} />;
}

function MasonryGrid(props) {
  return (
    <div className="container">
      <Masonry
        breakpointCols={3}
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
