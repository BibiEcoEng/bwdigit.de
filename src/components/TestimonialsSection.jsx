import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { MenAvatar, WomenAvatar } from '../assets';

const TestimonialsSection = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsContainerRef = useRef(null);
  const autoScrollIntervalRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: t('testimonial1Client'),
      rating: 5,
      testimonial: t('testimonial1Text'),
      image: MenAvatar,
      service: t('testimonial1Service'),
    },
    {
      id: 2,
      name: t('testimonial2Client'),
      rating: 5,
      testimonial: t('testimonial2Text'),
      image: MenAvatar,
      service: t('testimonial2Service'),
    },
    {
      id: 3,
      name: t('testimonial3Client'),
      rating: 5,
      testimonial: t('testimonial3Text'),
      image: WomenAvatar,
      service: t('testimonial3Service'),
    },
    {
      id: 4,
      name: t('testimonial4Client'),
      rating: 5,
      testimonial: t('testimonial4Text'),
      image: WomenAvatar,
      service: t('testimonial4Service'),
    },
    {
      id: 5,
      name: t('testimonial5Client'),
      rating: 5,
      testimonial: t('testimonial5Text'),
      image: MenAvatar,
      service: t('testimonial5Service'),
    },
    {
      id: 6,
      name: t('testimonial6Client'),
      rating: 5,
      testimonial: t('testimonial6Text'),
      image: WomenAvatar,
      service: t('testimonial6Service'),
    },
    {
      id: 7,
      name: t('testimonial7Client'),
      rating: 5,
      testimonial: t('testimonial7Text'),
      image: MenAvatar,
      service: t('testimonial7Service'),
    },
    {
      id: 8,
      name: t('testimonial8Client'),
      rating: 5,
      testimonial: t('testimonial8Text'),
      image: WomenAvatar,
      service: t('testimonial8Service'),
    },
    {
      id: 9,
      name: t('testimonial9Client'),
      rating: 5,
      testimonial: t('testimonial9Text'),
      image: WomenAvatar,
      service: t('testimonial9Service'),
    },
    {
      id: 10,
      name: t('testimonial10Client'),
      rating: 5,
      testimonial: t('testimonial10Text'),
      image: MenAvatar,
      service: t('testimonial10Service'),
    },
    {
      id: 11,
      name: t('testimonial11Client'),
      rating: 5,
      testimonial: t('testimonial11Text'),
      image: WomenAvatar,
      service: t('testimonial11Service'),
    },
    {
      id: 12,
      name: t('testimonial12Client'),
      rating: 5,
      testimonial: t('testimonial12Text'),
      image: MenAvatar,
      service: t('testimonial12Service'),
    },
    {
      id: 13,
      name: t('testimonial13Client'),
      rating: 5,
      testimonial: t('testimonial13Text'),
      image: WomenAvatar,
      service: t('testimonial13Service'),
    },
  ];

  const itemsToShow = window.innerWidth < 768 ? 1 : 3; // Responsive: 1 item for small screens, 3 for larger
  const canScroll = testimonials.length > itemsToShow;

  const goToNext = useCallback(() => {
    if (canScroll) {
      setActiveIndex((prev) => {
        const nextIndex = prev + 1;
        return nextIndex >= testimonials.length - itemsToShow + 1
          ? 0
          : nextIndex;
      });
    }
  }, [canScroll, testimonials.length, itemsToShow]);

  const goToPrev = useCallback(() => {
    if (canScroll) {
      setActiveIndex((prev) => {
        const prevIndex = prev - 1;
        return prevIndex < 0
          ? Math.max(0, testimonials.length - itemsToShow)
          : prevIndex;
      });
    }
  }, [canScroll, testimonials.length, itemsToShow]);

  useEffect(() => {
    if (!canScroll) return;

    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }

    autoScrollIntervalRef.current = setInterval(goToNext, 2000);

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [canScroll, goToNext, activeIndex]);

  const visibleTestimonials = testimonials.slice(
    activeIndex,
    activeIndex + itemsToShow
  );

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-accent' : 'text-gray-200'}`}
        fill='currentColor'
        viewBox='0 0 20 20'
      >
        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
      </svg>
    ));
  };

  return (
    <section className='pt-30 bg-white' id='TestimonialsSection'>
      <div className='section-container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='heading-section capitalize'>
            {t('testimonialsTitle')}
          </h2>
          <p className='text-gray-600 text-lg max-w-3xl mx-auto'>
            {t('testimonialsSubtitle')}
          </p>
        </div>

        <div ref={testimonialsContainerRef} className='max-w-6xl mx-auto'>
          <div className='flex overflow-x-auto space-x-8'>
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className='bg-white border border-gray-100 rounded-lg p-8 flex flex-col items-center text-center min-w-full md:min-w-0'
              >
                <div className='w-24 h-24 mb-6'>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className='w-full h-full rounded-full object-cover'
                  />
                </div>
                <h3 className='text-xl font-semibold mb-4'>
                  {testimonial.name}
                </h3>
                <div className='flex space-x-1 mb-4'>
                  {renderStars(testimonial.rating)}
                </div>
                <p className='text-accent font-semibold mb-2'>
                  {testimonial.service}
                </p>
                <p className='text-gray-600 text-sm leading-relaxed'>
                  "{testimonial.testimonial}"
                </p>
              </div>
            ))}
          </div>

          <div className='flex justify-center mt-12 space-x-4'>
            <button
              onClick={() => {
                goToPrev();
                if (autoScrollIntervalRef.current) {
                  clearInterval(autoScrollIntervalRef.current);
                  autoScrollIntervalRef.current = setInterval(goToNext, 5000);
                }
              }}
              disabled={!canScroll || activeIndex === 0}
              className='w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
            >
              <svg
                className='w-6 h-6 text-gray-600'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 19l-7-7 7-7'
                />
              </svg>
            </button>
            <button
              onClick={() => {
                goToNext();
                if (autoScrollIntervalRef.current) {
                  clearInterval(autoScrollIntervalRef.current);
                  autoScrollIntervalRef.current = setInterval(goToNext, 5000);
                }
              }}
              disabled={
                !canScroll || activeIndex >= testimonials.length - itemsToShow
              }
              className='w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
            >
              <svg
                className='w-6 h-6 text-gray-600'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
