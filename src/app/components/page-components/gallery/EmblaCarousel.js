"use client";
import React from 'react'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import './embla.css';
import Image from 'next/image'


const EmblaCarousel = () => {
    const options = { align: 'start' };
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    <div className="embla__slide">
                        <Image src="/images/carousel/commercial_work.jpg"
                               width={500} height={300} alt="construction site1"/>
                    </div>
                    <div className="embla__slide">
                        <Image src="/images/carousel/carousel-img3.jpg"
                               width={500} height={300} alt="construction site2"/>
                    </div>
                    <div className="embla__slide">
                        <Image src="/images/carousel/carousel-img4.jpg"
                               width={500} height={300} alt="construction site3"/>
                    </div>
                    <div className="embla__slide">
                        <Image src="/images/carousel/carousel-img7.jpg"
                               width={500} height={300} alt="construction site4"/>
                    </div>
                    <div className="embla__slide">
                        <Image src="/images/carousel/carousel-img8.jpg"
                               width={500} height={300} alt="construction site5"/>
                    </div>
                    <div className="embla__slide">
                        <Image src="/images/carousel/carousel-img9.jpg"
                               width={500} height={300} alt="construction site6"/>
                    </div>
                    <div className="embla__slide">
                        <Image src="/images/carousel/carousel-img10.jpg"
                               width={500} height={300} alt="construction site7"/>
                    </div>
                    <div className="embla__slide">
                        <Image src="/images/carousel/carousel-img5.jpg"
                               width={500} height={300} alt="construction site8"/>
                    </div>
                    <div className="embla__slide">
                        <Image src="/images/carousel/carousel-img6.jpg"
                               width={500} height={300} alt="construction site9"/>
                    </div>
                    <div className="embla__slide">
                        <Image src="/images/carousel/carousel-img11.jpg"
                               width={500} height={300} alt="construction site10"/>
                    </div>
                    <div className="embla__slide">
                        <Image src="/images/carousel/carousel-img1.jpg"
                               width={500} height={300} alt="construction site11"/>
                    </div>
                    <div className="embla__slide">
                        <Image src="/images/carousel/drainmat.jpg"
                               width={500} height={300} alt="construction site12"/>
                    </div>
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            </div>
        </section>
    )
}

export default EmblaCarousel