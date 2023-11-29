import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const LazyLoader = (props) => {
  let timerId;
  const { src = "", delay = 0, onLoad } = props;
  const [isMounted, setMounted] = useState(false);
  const [isLoading, setLoading] = useState(true);

  function loadImage() {
    const image = new Image();

    image.src = src;
    image.onload = () => {
      setLoading(false);
      onLoad();
    };
    image.onerror = () => {
      setLoading(false);
    };
  }

  useEffect(() => {
    if (!isMounted) {
      setMounted(true);
      delay ? (timerId = setTimeout(loadImage, delay)) : loadImage();
    }
    return () => clearTimeout(timerId);
  }, []);

  return isLoading ? <div>Loading...</div> : <img width="100%" src={src} />;
};

const Carousel = () => {
  const [key, setKey] = useState(0);

  const src = (name = "") =>
    `//github.com/maxmarinich/react-alice-carousel/raw/master/src/assets/img/${name}`;

  const [items] = useState([
    <LazyLoader onLoad={onLoad} src={src("1200x300.jpg")} delay={1000} />,
    <LazyLoader onLoad={onLoad} src={src("1200x300.jpg")} delay={1000} />,
    <LazyLoader onLoad={onLoad} src={src("1200x300.jpg")} delay={1000} />,
  ]);

  function onLoad() {
    setKey(Date.now());
  }

  return (
    <AliceCarousel
      autoPlay
      renderKey={key}
      autoPlayInterval={1000}
      animationDuration={1000}
      infinite
      disableDotsControls
      touchTracking={false}
      disableButtonsControls
      items={items}
    />
  );
};
export default Carousel;
