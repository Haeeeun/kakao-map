import React, { useEffect } from 'react';
import styled from "styled-components";

/*global kakao*/ 

const Maps = styled.div`
width: 400px;
height: 400px;
`;

function Map() {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=9d667d4dae2b938e4bdab15b097a07b8&libraries=services,clusterer,drawing";
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        let container = document.getElementById("map");
        let options = {
          center: new kakao.maps.LatLng(37.506502, 127.053617),
          level: 7
        };

        const map = new window.kakao.maps.Map(container, options);
      });
    };
  })
  return (
    <Maps id="map" />
  );
}

export default Map;