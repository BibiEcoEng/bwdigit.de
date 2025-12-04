import React from 'react';
import { useTranslation } from 'react-i18next';
import { heroImg, heroArrow, heroSearchIcon } from '../assets';

const HeroSection = ({ openSidebar }) => {
  const { t } = useTranslation();

  return (
    <section
      className='relative text-white flex items-center bg-[#09043C] pt-20 font-raleway'
      id='HeroSection'
    >
      <div className='relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 items-center'>
          <div className='space-y-6 lg:space-y-8 py-8'>
            <h1 className='text-2xl md:text-3xl xl:text-4xl font-bold leading-tight animate-fade-in-up font-poppins'>
              {t('heroTitle1')}
            </h1>

            <div className='w-20 sm:w-24 h-1 bg-accent rounded animate-fade-in-up delay-300'></div>

            {/* Subtitle */}
            <h3 className='text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed animate-fade-in-up delay-600 max-w-sm md:max-w-md lg:max-w-lg'>
              {t('heroSubtitle')}
            </h3>

            <div className='animate-fade-in-up delay-900 pt-2'>
              <button
                onClick={openSidebar}
                className='group relative cursor-pointer px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 rounded-full font-semibold transition-all duration-500 hover:scale-105 text-sm sm:text-base md:text-lg lg:text-xl z-10 overflow-hidden'
              >
                {/* Animated gradient background */}
                <div className='absolute inset-0 bg-gradient-to-r from-[#4a9d78] via-[#2d6a4f] to-[#4a9d78] bg-[length:200%_100%] animate-gradient-x'></div>

                {/* Shimmering overlay */}
                <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000'></div>

                {/* Glowing effect */}
                <div className='absolute -inset-1 bg-gradient-to-r from-[#4a9d78] via-[#2d6a4f] to-[#4a9d78] rounded-full blur opacity-0 group-hover:opacity-75 transition-opacity duration-500 animate-pulse'></div>

                {/* Button content */}
                <span className='relative z-10 flex items-center justify-center gap-1 sm:gap-2'>
                  {t('contactUsButton')}
                  <svg
                    className='w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M13 7l5 5m0 0l-5 5m5-5H6'
                    />
                  </svg>
                </span>

                {/* Animated border */}
                <div className='absolute inset-0 rounded-full border-2 border-transparent group-hover:border-white/20 transition-colors duration-500'></div>
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className='relative animate-fade-in-up delay-1200 flex justify-center lg:justify-end items-end h-full'>
            <div className='relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl flex items-end justify-center lg:justify-end'>
              {/* Main hero image positioned from bottom */}
              <div className='relative flex items-end'>
                <img
                  src={heroImg}
                  alt={t('heroImgAlt')}
                  className='w-full h-[250px] sm:h-[350px] xl:h-[450px] object-cover'
                />

                <div className='absolute bottom-6 sm:bottom-8 md:bottom-12 lg:bottom-16 left-2 sm:left-3 md:left-4 lg:left-6'>
                  <div className='bg-white/10 backdrop-blur-sm rounded-full p-2 sm:p-3'>
                    <img
                      src={heroSearchIcon}
                      alt='Search'
                      className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 drop-shadow-lg'
                    />
                  </div>
                </div>

                {/* Hero Arrow - middle right extending beyond image */}
                <div className='absolute top-1/2 -right-2 sm:-right-3 md:-right-4 lg:-right-5 transform -translate-y-1/2'>
                  <div className='bg-white/10 backdrop-blur-sm rounded-full p-2 sm:p-3'>
                    <img
                      src={heroArrow}
                      alt='Arrow'
                      className='w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 drop-shadow-lg'
                    />
                  </div>
                </div>

                {/* Additional floating elements for better visual appeal */}
                <div className='absolute top-6 sm:top-8 md:top-12 lg:top-16 -left-2 sm:-left-3 md:-left-4 lg:-left-5'>
                  <div className='w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 bg-accent rounded-full opacity-80 animate-pulse'></div>
                </div>

                <div className='absolute bottom-16 sm:bottom-20 md:bottom-24 lg:bottom-32 -right-1 sm:-right-2 md:-right-3 lg:-right-4'>
                  <div className='w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 bg-white/60 rounded-full animate-bounce delay-1000'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
