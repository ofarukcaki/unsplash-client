import React, { useContext } from 'react';
import MasonryGrid from './MasonryGrid';
import { SearchContext } from '../contexts/SearchContex';
import './Result.css';
import ghostImg from '../static/img/Ghost-big.png';

function Loading() {
  return (
    <div className="loader">
      <SvgLoader />
    </div>
  );
}

function NoResult() {
  return (
    <div className="no-result">
      <p>We couldn't find anything that matches your search...</p>
      <img src={ghostImg} alt="" />
    </div>
  );
}

function Result() {
  const { results, loading, error, errorText } = useContext(SearchContext);
  if (!loading && error) {
    return <p className="error">{errorText}</p>;
  } else if (results.length === 0) {
    // no results
    return <NoResult />;
  } else if (loading) {
    return <Loading />;
  } else {
    return <MasonryGrid results={results} />;
  }
}

function SvgLoader(props) {
  return (
    <svg width={58} height={58} viewBox="0 0 58 58" {...props}>
      <g
        transform="translate(2 1)"
        stroke="#FFF"
        strokeWidth={1.5}
        fill="none"
        fillRule="evenodd"
      >
        <circle cx={42.601} cy={11.462} r={5} fill="#000">
          <animate
            attributeName="fill-opacity"
            begin="0s"
            dur="1.3s"
            values="1;0;0;0;0;0;0;0"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx={49.063} cy={27.063} r={5} fill="#000">
          <animate
            attributeName="fill-opacity"
            begin="0s"
            dur="1.3s"
            values="0;1;0;0;0;0;0;0"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx={42.601} cy={42.663} r={5} fill="#000">
          <animate
            attributeName="fill-opacity"
            begin="0s"
            dur="1.3s"
            values="0;0;1;0;0;0;0;0"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx={27} cy={49.125} r={5} fill="#000">
          <animate
            attributeName="fill-opacity"
            begin="0s"
            dur="1.3s"
            values="0;0;0;1;0;0;0;0"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx={11.399} cy={42.663} r={5} fill="#000">
          <animate
            attributeName="fill-opacity"
            begin="0s"
            dur="1.3s"
            values="0;0;0;0;1;0;0;0"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx={4.938} cy={27.063} r={5} fill="#000">
          <animate
            attributeName="fill-opacity"
            begin="0s"
            dur="1.3s"
            values="0;0;0;0;0;1;0;0"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx={11.399} cy={11.462} r={5} fill="#000">
          <animate
            attributeName="fill-opacity"
            begin="0s"
            dur="1.3s"
            values="0;0;0;0;0;0;1;0"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx={27} cy={5} r={5} fill="#000">
          <animate
            attributeName="fill-opacity"
            begin="0s"
            dur="1.3s"
            values="0;0;0;0;0;0;0;1"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </svg>
  );
}

export default Result;
