import { useCallback, useEffect, useState } from "react";

import type { EmblaCarouselType } from "embla-carousel";

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};
export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const updatePrevBtnDisabled = useCallback((canScrollPrev: boolean) => {
    setPrevBtnDisabled(canScrollPrev);
  }, []);

  const updateNextBtnDisabled = useCallback((canScrollNext: boolean) => {
    setNextBtnDisabled(canScrollNext);
  }, []);

  const onSelect = useCallback(
    (emblaApi: EmblaCarouselType) => {
      updatePrevBtnDisabled(!emblaApi.canScrollPrev());
      updateNextBtnDisabled(!emblaApi.canScrollNext());
    },
    [updatePrevBtnDisabled, updateNextBtnDisabled],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const handleSelect = () => {
      onSelect(emblaApi);
    };

    emblaApi.on("reInit", handleSelect).on("select", handleSelect);

    return () => {
      emblaApi.off("reInit", handleSelect).off("select", handleSelect);
    };
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};
