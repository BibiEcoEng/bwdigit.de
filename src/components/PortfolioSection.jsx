import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  BackPackwanderOrg,
  BakcPackwanderDe,
  SetFreeWay,
  BwDigitDe,
  BackPackWanderStore,
  MediCoPlus,
  UrbanNest,
} from '../assets';

const PROJECTS = [
  {
    key: 'backpackwanderorg',
    image: BackPackwanderOrg,
    url: 'https://backpackwander.org',
  },
  {
    key: 'backpackwanderde',
    image: BakcPackwanderDe,
    url: 'https://backpackwander.de',
  },
  {
    key: 'setfreeway',
    image: SetFreeWay,
    url: 'https://setfreeway.com',
  },
  {
    key: 'bwdigit',
    image: BwDigitDe,
    url: 'https://bwdigit.de',
  },

  {
    key: 'medicoplus',
    image: MediCoPlus,
    url: 'https://www.mimedicoplus.com/',
  },
  {
    key: 'urbannest',
    image: UrbanNest,
    url: 'https://urbannestinteriors.co.uk/',
  },
];

const PortfolioSection = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1);
  const portfolioContainerRef = useRef(null);
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

  const filteredProjects = PROJECTS;
  const canScroll = filteredProjects.length > itemsToShow;

  const goToNext = useCallback(() => {
    if (canScroll) {
      setActiveIndex((prev) => {
        const nextIndex = prev + 1;
        return nextIndex >= filteredProjects.length - itemsToShow + 1
          ? 0
          : nextIndex;
      });
    }
  }, [canScroll, filteredProjects.length, itemsToShow]);

  const goToPrev = useCallback(() => {
    if (canScroll) {
      setActiveIndex((prev) => {
        const prevIndex = prev - 1;
        return prevIndex < 0
          ? Math.max(0, filteredProjects.length - itemsToShow)
          : prevIndex;
      });
    }
  }, [canScroll, filteredProjects.length, itemsToShow]);

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
  }, [canScroll, goToNext, activeIndex, filteredProjects]);

  const visibleProjects = filteredProjects.slice(
    activeIndex,
    activeIndex + itemsToShow
  );

  return (
    <section className='py-16' id='Portfolio'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='text-center max-w-3xl mx-auto mb-12'>
          <h2 className='heading-section mb-4 capitalize'>
            {t('portfolio.title', 'Our Portfolio')}
          </h2>
          {/* <p className='text-lg text-gray-600 mb-8 leading-relaxed'>
            {t('portfolio.subtitle', 'Explore our latest real-world projects.')}
          </p> */}
        </div>
        <div ref={portfolioContainerRef} className='max-w-7xl mx-auto'>
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
                key={`${project.key}-${index}`}
                className='group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2'
              >
                {/* Project Image */}
                <div className='aspect-[4/3] w-full overflow-hidden'>
                  <img
                    src={project.image}
                    alt={t(`portfolio.projects.${project.key}.title`)}
                    className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
                  />
                  {/* Overlay on hover */}
                  <div className='hidden lg:block absolute inset-0 bg-gradient-to-t from-[#09043C] via-[#09043C]/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-full group-hover:translate-y-0' />
                  {/* Hover Effect - View Project Button */}
                  <div className='hidden lg:block absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-full group-hover:translate-y-0'>
                    <div className='absolute bottom-0 left-0 right-0 p-6'>
                      <div className='text-center'>
                        <a
                          href={project.url}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='bg-white/20 backdrop-blur-sm text-white font-medium px-6 py-3 rounded-lg border border-white/30 inline-flex items-center gap-2 hover:bg-white/30 transition-all duration-300'
                        >
                          {t(
                            `portfolio.projects.${project.key}.button`,
                            'View Project'
                          )}
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
                    </div>
                  </div>
                </div>
                {/* Project Info */}
                <div className='p-4 sm:p-6'>
                  {/* Project Type Badge */}
                  <div className='flex items-center gap-2 mb-3'>
                    <span className='text-xs bg-accent/10 text-accent px-2 py-1 rounded-full font-medium uppercase tracking-wider'>
                      {t(`portfolio.projects.${project.key}.title`)}
                    </span>
                  </div>
                  {/* Project Description */}
                  <p className='text-gray-600 text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3'>
                    {t(`portfolio.projects.${project.key}.description`)}
                  </p>
                  {/* Tags */}
                  <div className='flex flex-wrap gap-1 sm:gap-2 mb-4'>
                    {t(`portfolio.projects.${project.key}.tags`, {
                      returnObjects: true,
                    }).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className='text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Mobile/Tablet View Project Button */}
                  <div className='lg:hidden'>
                    <a
                      href={project.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-full bg-accent hover:bg-accent/90 text-white text-sm font-medium px-4 py-2 rounded-lg inline-flex items-center justify-center gap-2 transition-all duration-300'
                    >
                      {t(
                        `portfolio.projects.${project.key}.button`,
                        'View Project'
                      )}
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
                disabled={activeIndex >= filteredProjects.length - itemsToShow}
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
                { length: Math.ceil(filteredProjects.length / itemsToShow) },
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
        {/* No projects found message */}
        {filteredProjects.length === 0 && (
          <div className='text-center py-12'>
            <p className='text-gray-500 text-lg'>
              No projects found in this category.
            </p>
          </div>
        )}
        {/* Call to Action */}
        <div className='text-center mt-12'>
          <p className='text-gray-600 mb-6'>
            {t(
              'portfolio.ctaText',
              'Interested in working with us on your next project?'
            )}
          </p>
          <a
            href='#ContactUs'
            className='inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300'
          >
            {t('portfolio.ctaButton', 'Start Your Project')}
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
                d='M9 5l7 7-7 7'
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
