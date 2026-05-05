import { useCallback, useEffect, useState } from "react";

import type { EmblaCarouselType } from "embla-carousel";

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined,
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const handleInit = () => onInit(emblaApi);
    const handleSelect = () => onSelect(emblaApi);

    emblaApi
      .on("init", handleInit)
      .on("reInit", handleInit)
      .on("reInit", handleSelect)
      .on("select", handleSelect);

    return () => {
      emblaApi
        .off("init", handleInit)
        .off("reInit", handleInit)
        .off("reInit", handleSelect)
        .off("select", handleSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};
