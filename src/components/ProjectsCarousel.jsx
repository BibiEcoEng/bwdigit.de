import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

const ProjectsCarousel = ({ projects, className = '' }) => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1);
  const carouselContainerRef = useRef(null);
  const autoScrollIntervalRef = useRef(null);

  const calculateItemsToShow = useCallback(() => {
    if (typeof window === 'undefined') return 1;
    const width = window.innerWidth;
    if (width < 640) return 1;
    if (width < 768) return 1;
    if (width < 1024) return 2;
    return 3;
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(calculateItemsToShow());
    };
    setItemsToShow(calculateItemsToShow());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [calculateItemsToShow]);

  const canScroll = projects.length > itemsToShow;

  const goToNext = useCallback(() => {
    if (canScroll) {
      setActiveIndex((prev) => {
        const nextIndex = prev + 1;
        return nextIndex >= projects.length - itemsToShow + 1 ? 0 : nextIndex;
      });
    }
  }, [canScroll, projects.length, itemsToShow]);

  const goToPrev = useCallback(() => {
    if (canScroll) {
      setActiveIndex((prev) => {
        const prevIndex = prev - 1;
        return prevIndex < 0
          ? Math.max(0, projects.length - itemsToShow)
          : prevIndex;
      });
    }
  }, [canScroll, projects.length, itemsToShow]);

  useEffect(() => {
    if (!canScroll) return;
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }
    autoScrollIntervalRef.current = setInterval(goToNext, 4000);
    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [canScroll, goToNext, activeIndex, projects]);

  const visibleProjects = projects.slice(
    activeIndex,
    activeIndex + itemsToShow
  );

  if (!projects || projects.length === 0) {
    return (
      <div className='text-center py-12'>
        <p className='text-gray-500 text-lg'>No projects available.</p>
      </div>
    );
  }

  return (
    <div
      className={`max-w-7xl mx-auto ${className}`}
      ref={carouselContainerRef}
    >
      <div
        className={`grid gap-4 sm:gap-6 lg:gap-8 ${
          itemsToShow === 1
            ? 'grid-cols-1'
            : itemsToShow === 2
            ? 'grid-cols-1 md:grid-cols-2'
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}
      >
        {visibleProjects.map((project, index) => (
          <div
            key={`${project.key || project.title || index}-${index}`}
            className='group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2'
          >
            {/* Project Image */}
            <div className='aspect-[4/3] w-full overflow-hidden'>
              <img
                src={project.image}
                alt={project.imageAlt || project.title}
                className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
              />
              {/* Desktop Hover Overlay */}
              <div className='hidden lg:block absolute inset-0 bg-gradient-to-t from-[#09043C] via-[#09043C]/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-full group-hover:translate-y-0'>
                <div className='absolute bottom-0 left-0 right-0 p-6'>
                  <h3 className='text-xl font-semibold text-white mb-2 capitalize'>
                    {project.title}
                  </h3>
                  <p className='text-gray-200 mb-4'>{project.description}</p>
                  {project.link && (
                    <div className='text-center'>
                      <a
                        href={project.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='bg-white/20 backdrop-blur-sm text-white font-medium px-6 py-3 rounded-lg border border-white/30 inline-flex items-center gap-2 hover:bg-white/30 transition-all duration-300'
                      >
                        {t('portfolio.viewProject', 'View Project')}
                        <svg
                          className='w-4 h-4'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                          />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Mobile/Tablet view - Always visible on small/medium screens */}
            <div className='block lg:hidden bg-white p-4 border border-gray-100'>
              <h3 className='text-lg font-semibold text-gray-900 mb-2 capitalize'>
                {project.title}
              </h3>
              <p className='text-gray-600 text-sm mb-3'>
                {project.description}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-full bg-accent hover:bg-accent/90 text-white text-sm font-medium px-4 py-2 rounded-lg inline-flex items-center justify-center gap-2 transition-all duration-300'
                >
                  {t('portfolio.viewProject', 'View Project')}
                  <svg
                    className='w-4 h-4'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      {canScroll && (
        <div className='flex justify-center mt-6 sm:mt-8 space-x-4'>
          <button
            onClick={() => {
              goToPrev();
              if (autoScrollIntervalRef.current) {
                clearInterval(autoScrollIntervalRef.current);
                autoScrollIntervalRef.current = setInterval(goToNext, 4000);
              }
            }}
            disabled={activeIndex === 0}
            className='w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
          >
            <svg
              className='w-5 h-5 sm:w-6 sm:h-6 text-gray-600'
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
                autoScrollIntervalRef.current = setInterval(goToNext, 4000);
              }
            }}
            disabled={activeIndex >= projects.length - itemsToShow}
            className='w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
          >
            <svg
              className='w-5 h-5 sm:w-6 sm:h-6 text-gray-600'
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
      )}

      {/* Pagination Dots */}
      {canScroll && (
        <div className='flex justify-center mt-4 space-x-2'>
          {Array.from(
            { length: Math.ceil(projects.length / itemsToShow) },
            (_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i * itemsToShow)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  Math.floor(activeIndex / itemsToShow) === i
                    ? 'bg-accent'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectsCarousel;
