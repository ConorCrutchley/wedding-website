import ContentSection from "@/components/ContentSection";
import DotButton from "./Buttons/DotButton";
import NextButton from "./Buttons/NextButton";
import PrevButton from "./Buttons/PrevButton";
import sections from "@/constants/sections.json";
import styles from "@/styles/wedding-party.module.css";
import { useDotButton } from "@/hooks/useDotButton";
import useEmblaCarousel from "embla-carousel-react";
import { usePrevNextButtons } from "@/hooks/usePrevNextButtons";
import { weddingParty } from "@/constants/wedding-party";

const WeddingParty = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  console.log(scrollSnaps);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <ContentSection id={sections["wedding-party"]}>
      <h2>Wedding Party</h2>
      <div className={styles["embla"]}>
        <div className={styles["embla__viewport"]} ref={emblaRef}>
          <div className={styles["embla__container"]}>
            {weddingParty.map((member) => (
              <div className={styles["embla__slide"]} key={member.name}>
                <img
                  src={member.image}
                  alt={member.name}
                  className={styles["member-image"]}
                />
                <p className={styles["member-name"]}>{member.name}</p>
                <p className={styles["member-role"]}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles["embla__controls"]}>
          <PrevButton
            disabled={prevBtnDisabled}
            onClick={onPrevButtonClick}
          ></PrevButton>
          <div className={styles["embla__dots"]}>
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={`${styles["embla__dot"]} ${index === selectedIndex ? styles["embla__dot--selected"] : ""}`}
              />
            ))}
          </div>
          <NextButton
            disabled={nextBtnDisabled}
            onClick={onNextButtonClick}
          ></NextButton>
        </div>
      </div>
    </ContentSection>
  );
};

export default WeddingParty;
