import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MobileAppTestimonialsSection from '../components/MobileAppTestimonialsSection';
import ProjectsCarousel from '../components/ProjectsCarousel';
import SideContact from '../components/sidebarContact/SidebarContact';
import SpecialOfferSection from '../components/SpecialOfferSection';
import {
  MobileAppHeader,
  MobileAppIntro,
  SwiftShop,
  CleanBee,
  MenAvatar,
  WomenAvatar,
} from '../assets';

// Import icons
import {
  FaArrowRight,
  FaRocket,
  FaCheck,
  FaMobile,
  FaCode,
  FaTools,
  FaServer,
  FaChartLine,
  FaUsers,
  FaShoppingCart,
} from 'react-icons/fa';
import {
  SiFlutter,
  SiReact,
  SiSwift,
  SiKotlin,
  SiFirebase,
  SiNodedotjs,
  SiLaravel,
} from 'react-icons/si';
import UiUxTestimonialsSection from '../components/UiUxTestimonialsSection';

const MobileAppDevelopmentPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenContact = () => {
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
  };

  const handleLinkClick = (url) => {
    if (url.startsWith('/#')) {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(url.replace('/', ''));
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      navigate(url);
    }
  };

  // Map of technology icons
  const techIconMap = {
    flutter: SiFlutter,
    react: SiReact,
    swift: SiSwift,
    kotlin: SiKotlin,
    firebase: SiFirebase,
    nodejs: SiNodedotjs,
    laravel: SiLaravel,
  };

  // Array of use case icons for consistent mapping
  const useCaseIcons = [
    <FaShoppingCart className='w-8 h-8' key='shopping' />,
    <FaTools className='w-8 h-8' key='tools' />,
    <FaMobile className='w-8 h-8' key='mobile' />,
    <FaUsers className='w-8 h-8' key='users' />,
    <FaChartLine className='w-8 h-8' key='chart' />,
  ];

  const testimonials = {
    title: 'services.uiux.testimonials.title',
    items: [
      { id: 'elena', image: WomenAvatar },
      { id: 'ricardo', image: MenAvatar },
      { id: 'sophia', image: WomenAvatar },
      { id: 'martin', image: MenAvatar },
      { id: 'isabella', image: WomenAvatar },
    ],
  };

  const projectsData = [
    {
      key: 'shopEase',
      image: SwiftShop,
      title: t('services.mobile.projects.items.shopEase.title'),
      description: t('services.mobile.projects.items.shopEase.description'),
      imageAlt: t('services.mobile.projects.items.shopEase.title'),
      link: t('services.mobile.projects.items.shopEase.link'),
    },
    {
      key: 'farmerBazar',
      image: CleanBee,
      title: t('services.mobile.projects.items.farmerBazar.title'),
      description: t('services.mobile.projects.items.farmerBazar.description'),
      imageAlt: t('services.mobile.projects.items.farmerBazar.title'),
      link: t('services.mobile.projects.items.farmerBazar.link'),
    },
    {
      key: 'lrnrx',
      image: SwiftShop, // Using same image as placeholder
      title: t('services.mobile.projects.items.lrnrx.title'),
      description: t('services.mobile.projects.items.lrnrx.description'),
      imageAlt: t('services.mobile.projects.items.lrnrx.title'),
      link: t('services.mobile.projects.items.lrnrx.link'),
    },
    {
      key: 'camelliaApp',
      image: CleanBee, // Using same image as placeholder
      title: t('services.mobile.projects.items.camelliaApp.title'),
      description: t('services.mobile.projects.items.camelliaApp.description'),
      imageAlt: t('services.mobile.projects.items.camelliaApp.title'),
      link: t('services.mobile.projects.items.camelliaApp.link'),
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-[#54BD95]/15 via-[#F7DCA1]/15 to-[#D7ABE9]/15 relative'>
      {/* Meta tags for Mobile App Development page */}
      <title>{t('meta.mobileAppDevelopment.title')}</title>
      <meta
        name='description'
        content={t('meta.mobileAppDevelopment.description')}
      />
      <meta
        property='og:title'
        content={t('meta.mobileAppDevelopment.title')}
      />
      <meta
        property='og:description'
        content={t('meta.mobileAppDevelopment.description')}
      />
      <meta property='og:type' content='website' />
      <meta
        property='og:url'
        content='https://bwdigit.com/services/mobile-app-development'
      />
      <meta name='twitter:card' content='summary_large_image' />
      <meta
        name='twitter:title'
        content={t('meta.mobileAppDevelopment.title')}
      />
      <meta
        name='twitter:description'
        content={t('meta.mobileAppDevelopment.description')}
      />

      <div className='absolute inset-0 bg-gradient-to-tr from-[#54BD95]/10 to-transparent pointer-events-none -z-10'></div>

      {/* Hero Section */}
      <div className='bg-[#09043C] text-white py-20 pt-30'>
        <div className='container mx-auto px-4 max-w-7xl'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6 text-white'>
              <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold leading-tight bg-gradient-to-r from-[#54BD95] via-[#F7DCA1] to-[#D7ABE9] bg-clip-text text-transparent capitalize'>
                {t('services.mobile.hero.title')}
              </h1>

              <p className='text-lg text-gray-300 leading-relaxed max-w-lg'>
                {t('services.mobile.hero.description')}
              </p>

              <ul className='space-y-2 text-gray-200 text-base  list-none'>
                <li>{t('services.mobile.hero.bullets.one')}</li>
                <li>{t('services.mobile.hero.bullets.two')}</li>
                <li>{t('services.mobile.hero.bullets.three')}</li>
              </ul>

              <button
                onClick={handleOpenContact}
                className='px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-lg font-medium inline-flex items-center gap-2 transition-all duration-300'
              >
                {t('services.mobile.cta.start_project')}
                <FaArrowRight className='text-sm' />
              </button>
            </div>

            <div className='relative w-full'>
              <img
                src={MobileAppHeader}
                alt={t('services.mobile.hero.imageAlt')}
                className='w-full h-full max-h-[500px] max-w-[500px] object-cover rounded-lg'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className='container mx-auto px-4 py-16 max-w-7xl'>
        {/* Features Section */}
        <div className='grid md:grid-cols-2 gap-12 items-center mb-20'>
          <div className='space-y-6'>
            <h2 className='text-3xl font-bold text-gray-900 capitalize'>
              {t('services.mobile.features.title')}
            </h2>
            <h3 className='text-xl text-accent'>
              {t('services.mobile.features.description')}
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {/* iOS & Android Development */}
              <div className='space-y-3'>
                <h4 className='font-semibold text-gray-900 capitalize'>
                  {t('services.mobile.features.items.ios.title')}
                </h4>
                <p className='text-gray-600 text-sm'>
                  {t('services.mobile.features.items.ios.description')}
                </p>
                <ul className='space-y-2'>
                  <li className='flex items-center gap-2'>
                    <FaCheck className='text-accent text-sm' />
                    <span className='text-gray-700 text-sm'>
                      {t('services.mobile.features.items.ios.highlights.swift')}
                    </span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <FaCheck className='text-accent text-sm' />
                    <span className='text-gray-700 text-sm'>
                      {t(
                        'services.mobile.features.items.ios.highlights.kotlin'
                      )}
                    </span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <FaCheck className='text-accent text-sm' />
                    <span className='text-gray-700 text-sm'>
                      {t(
                        'services.mobile.features.items.ios.highlights.performance'
                      )}
                    </span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <FaCheck className='text-accent text-sm' />
                    <span className='text-gray-700 text-sm'>
                      {t(
                        'services.mobile.features.items.ios.highlights.guidelines'
                      )}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Cross-Platform Solutions */}
              <div className='space-y-3'>
                <h4 className='font-semibold text-gray-900 capitalize'>
                  {t('services.mobile.features.items.cross.title')}
                </h4>
                <p className='text-gray-600 text-sm'>
                  {t('services.mobile.features.items.cross.description')}
                </p>
                <ul className='space-y-2'>
                  <li className='flex items-center gap-2'>
                    <FaCheck className='text-accent text-sm' />
                    <span className='text-gray-700 text-sm'>
                      {t(
                        'services.mobile.features.items.cross.highlights.flutter'
                      )}
                    </span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <FaCheck className='text-accent text-sm' />
                    <span className='text-gray-700 text-sm'>
                      {t(
                        'services.mobile.features.items.cross.highlights.react'
                      )}
                    </span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <FaCheck className='text-accent text-sm' />
                    <span className='text-gray-700 text-sm'>
                      {t(
                        'services.mobile.features.items.cross.highlights.code'
                      )}
                    </span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <FaCheck className='text-accent text-sm' />
                    <span className='text-gray-700 text-sm'>
                      {t(
                        'services.mobile.features.items.cross.highlights.experience'
                      )}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Complete App Services */}
              <div className='space-y-3'>
                <h4 className='font-semibold text-gray-900 capitalize'>
                  {t('services.mobile.features.items.complete.title')}
                </h4>
                <p className='text-gray-600 text-sm'>
                  {t('services.mobile.features.items.complete.description')}
                </p>
                <ul className='space-y-2'>
                  <li className='flex items-center gap-2'>
                    <FaCheck className='text-accent text-sm' />
                    <span className='text-gray-700 text-sm'>
                      {t(
                        'services.mobile.features.items.complete.highlights.design'
                      )}
                    </span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <FaCheck className='text-accent text-sm' />
                    <span className='text-gray-700 text-sm'>
                      {t(
                        'services.mobile.features.items.complete.highlights.backend'
                      )}
                    </span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <FaCheck className='text-accent text-sm' />
                    <span className='text-gray-700 text-sm'>
                      {t(
                        'services.mobile.features.items.complete.highlights.api'
                      )}
                    </span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <FaCheck className='text-accent text-sm' />
                    <span className='text-gray-700 text-sm'>
                      {t(
                        'services.mobile.features.items.complete.highlights.publishing'
                      )}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='relative w-full'>
            <img
              src={MobileAppIntro}
              alt={t('services.mobile.features.imgAlt')}
              className='w-full h-full max-w-[500px] max-h-[500px] object-cover rounded-lg'
            />
          </div>
        </div>

        {/* Technologies Section */}
        <div className='mb-20'>
          <div className='text-center max-w-3xl mx-auto mb-12'>
            <h3 className='text-3xl font-bold text-gray-900 mb-6 capitalize'>
              {t('services.mobile.technologies.title')}
            </h3>
            <p className='text-lg text-gray-600 leading-relaxed'>
              {t('services.mobile.technologies.description')}
            </p>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-6'>
            {[
              { key: 'flutter', color: 'text-blue-500' },
              { key: 'react', color: 'text-sky-500' },
              { key: 'swift', color: 'text-orange-500' },
              { key: 'kotlin', color: 'text-purple-500' },
              { key: 'firebase', color: 'text-yellow-500' },
              { key: 'nodejs', color: 'text-green-600' },
              { key: 'laravel', color: 'text-red-500' },
            ].map(({ key, color }) => {
              const Icon = techIconMap[key] || FaCode;
              return (
                <div
                  key={key}
                  className='group relative bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent/30 hover:-translate-y-1'
                >
                  {/* Background decoration */}
                  <div className='absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                  <div className='relative flex flex-col items-center text-center space-y-3 sm:space-y-4'>
                    {/* Icon container with background */}
                    <div className='w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl bg-gray-50 group-hover:bg-white transition-all duration-300 group-hover:scale-110'>
                      <Icon
                        className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 ${color} group-hover:scale-110 transition-all duration-300`}
                      />
                    </div>
                    <p className='text-xs sm:text-sm md:text-base font-semibold text-gray-800 group-hover:text-accent transition-colors duration-300 leading-tight'>
                      {t(`services.mobile.technologies.items.${key}`)}
                    </p>
                    {/* Subtle accent line */}
                    <div className='w-8 h-0.5 bg-gradient-to-r from-accent to-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Use Cases Section */}
        <div className='mb-20'>
          <div className='text-center max-w-3xl mx-auto mb-12'>
            <span className='text-accent text-sm font-semibold tracking-wider uppercase mb-2 block'>
              {t('common.useCases')}
            </span>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4 capitalize'>
              {t('services.mobile.useCases.title')}
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              {t('services.mobile.useCases.subtitle')}
            </p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
            {['onDemand', 'business', 'ecommerce', 'travel', 'social'].map(
              (useCase, index) => (
                <div
                  key={useCase}
                  onClick={() => handleLinkClick('/#ContactUs')}
                  className='group relative overflow-hidden rounded-xl bg-white p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-accent/20 hover:-translate-y-1 cursor-pointer'
                >
                  {/* Background gradient decoration */}
                  <div className='absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-accent/5 via-primary/5 to-transparent rounded-bl-[100%] transition-all duration-500 group-hover:scale-125'></div>

                  <div className='relative z-10'>
                    {/* Icon with background */}
                    <div className='mb-6 w-16 h-16 rounded-lg bg-gray-50 flex items-center justify-center text-accent group-hover:bg-accent/10 transition-all duration-300 group-hover:scale-110'>
                      {useCaseIcons[index]}
                    </div>

                    {/* Title */}
                    <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-accent transition-colors duration-300 capitalize'>
                      {t(`services.mobile.useCases.items.${useCase}.title`)}
                    </h3>

                    {/* Description */}
                    <p className='text-gray-600 mb-6 text-sm leading-relaxed min-h-[80px]'>
                      {t(
                        `services.mobile.useCases.items.${useCase}.description`
                      )}
                    </p>

                    {/* Link text with arrow */}
                    <div className='flex items-center gap-2 text-accent font-medium border-t border-gray-100 pt-4 group-hover:pt-3 transition-all duration-300'>
                      <span className='text-sm'>
                        {t(
                          `services.mobile.useCases.items.${useCase}.linkText`
                        )}
                      </span>
                      <FaArrowRight className='w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300' />
                    </div>
                  </div>

                  {/* Decorative accent line at bottom - moved outside the content div */}
                  <div className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/30 via-primary/30 to-accent/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-0'></div>
                </div>
              )
            )}
          </div>

          {/* Additional Features */}
          <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8'>
            <div className='bg-white rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent/30 transform hover:-translate-y-1 group relative'>
              <div className='inline-block p-4 bg-gray-50 rounded-full shadow-sm mb-6 group-hover:bg-accent/10 transition-all duration-300 group-hover:scale-110'>
                <FaRocket className='w-7 h-7 text-accent' />
              </div>
              <h4 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-accent transition-colors duration-300 capitalize'>
                {t('services.mobile.features.items.fastDevelopment.title')}
              </h4>
              <p className='text-gray-600 text-sm mb-8'>
                {t(
                  'services.mobile.features.items.fastDevelopment.description'
                )}
              </p>
              <div className='w-16 h-0.5 bg-gradient-to-r from-accent to-primary rounded-full mx-auto absolute bottom-4 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </div>

            <div className='bg-white rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent/30 transform hover:-translate-y-1 group relative'>
              <div className='inline-block p-4 bg-gray-50 rounded-full shadow-sm mb-6 group-hover:bg-accent/10 transition-all duration-300 group-hover:scale-110'>
                <FaCode className='w-7 h-7 text-accent' />
              </div>
              <h4 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-accent transition-colors duration-300 capitalize'>
                {t('services.mobile.features.items.cleanCode.title')}
              </h4>
              <p className='text-gray-600 text-sm mb-8'>
                {t('services.mobile.features.items.cleanCode.description')}
              </p>
              <div className='w-16 h-0.5 bg-gradient-to-r from-accent to-primary rounded-full mx-auto absolute bottom-4 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </div>

            <div className='bg-white rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent/30 transform hover:-translate-y-1 group relative'>
              <div className='inline-block p-4 bg-gray-50 rounded-full shadow-sm mb-6 group-hover:bg-accent/10 transition-all duration-300 group-hover:scale-110'>
                <FaServer className='w-7 h-7 text-accent' />
              </div>
              <h4 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-accent transition-colors duration-300 capitalize'>
                {t('services.mobile.features.items.scalable.title')}
              </h4>
              <p className='text-gray-600 text-sm mb-8'>
                {t('services.mobile.features.items.scalable.description')}
              </p>
              <div className='w-16 h-0.5 bg-gradient-to-r from-accent to-primary rounded-full mx-auto absolute bottom-4 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </div>
          </div>
        </div>

        {/* Special Offer Section */}
        <SpecialOfferSection handleOpenContact={handleOpenContact} />

        {/* Projects Section */}
        <div className='mb-12 sm:mb-20'>
          <div className='text-center max-w-3xl mx-auto mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              {t('services.mobile.projects.title')}
            </h2>
          </div>
          <ProjectsCarousel projects={projectsData} />
        </div>

        {/* Testimonials Section */}
        <div className='mt-8 sm:mt-12 md:mt-16 lg:mt-20 mb-8 sm:mb-12 md:mb-16 lg:mb-20 px-2 sm:px-0'>
          {/* <MobileAppTestimonialsSection /> */}
          <UiUxTestimonialsSection testimonials={testimonials} />
        </div>

        {/* Internal Links Section */}
        <div className='mb-20'>
          <div className='max-w-7xl mx-auto'>
            <h2 className='text-2xl font-semibold text-gray-900 mb-6'>
              {t('services.mobile.internalLinks.title')}
            </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {[
                {
                  text: t('services.mobile.internalLinks.items.uiux'),
                  url: '/services/ui-ux-design',
                },
                {
                  text: t('services.mobile.internalLinks.items.ecommerce'),
                  url: '/services/ecommerce-solutions',
                },
                {
                  text: t('services.mobile.internalLinks.items.customWeb'),
                  url: '/services/custom-web-development',
                },
                {
                  text: t('services.mobile.internalLinks.items.aiAutomation'),
                  url: '/services/ai-automation',
                },
                {
                  text: t('services.mobile.internalLinks.items.marketingSeo'),
                  url: '/services/marketing-seo',
                },
              ].map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleLinkClick(link.url)}
                  className='flex items-center gap-2 text-[#54BD95] hover:text-accent/80 transition-colors duration-300'
                >
                  <span>{link.text}</span>
                  <FaArrowRight className='text-sm' />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className='w-full bg-[#14013F] rounded-xl sm:rounded-2xl lg:rounded-3xl mt-12 sm:mt-16 lg:mt-20 mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-8 md:px-12 py-8 sm:py-12 md:py-16 text-center'>
          <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight bg-gradient-to-r from-[#54BD95] via-[#F7DCA1] to-[#D7ABE9] bg-clip-text text-transparent mb-4 sm:mb-6'>
            {t('services.mobile.cta.title')}
          </h2>
          <p className='text-white text-base sm:text-lg md:text-xl mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto'>
            {t('services.mobile.cta.subtitle')}
          </p>
          <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center'>
            <button
              onClick={handleOpenContact}
              className='w-full sm:w-auto bg-[#54BD95] text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-lg font-medium hover:bg-[#3da77f] transition-colors duration-300 flex items-center justify-center text-sm sm:text-base md:text-lg'
            >
              {t('services.mobile.cta.start_project')}
              <span className='ml-2'>→</span>
            </button>
            <button
              onClick={() => handleLinkClick('/#ContactUs')}
              className='w-full sm:w-auto border-2 border-[#54BD95] text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-lg font-medium hover:bg-[#54BD95]/10 transition-colors duration-300 text-sm sm:text-base md:text-lg'
            >
              {t('services.mobile.cta.get_quote')}
            </button>
          </div>
        </div>
      </div>
      <SideContact isOpen={isContactOpen} onClose={handleCloseContact} />
    </div>
  );
};

export default MobileAppDevelopmentPage;
