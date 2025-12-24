import React, { useEffect, useRef, ReactElement } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const render = (status: Status): ReactElement => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return <p>aqui</p>;
};

const apiKey = "AIzaSyCRL81Z5Z-qmijAbLbJWWqaXFKvgTNIxZk";

type MapProps = {
  center: google.maps.LatLngLiteral;
  zoom: number;
}

function MyMapComponent(props: MapProps) {
  const ref = useRef() as any;
  const { center, zoom } = props;

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  }, [center, ref, zoom]);

  return <div ref={ref} id="map" />
}

function Map() {
  const center = { lat: -34.397, lng: 150.644 };
  const zoom = 4;

  return (
    <Wrapper apiKey={apiKey}>
      <MyMapComponent center={center} zoom={zoom} />
    </Wrapper>
  );
}

export { Map, MyMapComponent };
