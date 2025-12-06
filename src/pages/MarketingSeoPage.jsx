import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MarketingSeoTestimonialsSection from '../components/MarketingSeoTestimonialsSection';
import ProjectsCarousel from '../components/ProjectsCarousel';
import SideContact from '../components/sidebarContact/SidebarContact';

import {
  SeoMarketingHeader,
  SeoMarketingIntro,
  SustainableFashionBrand,
  DentalClinicLocalSEO,
  CoachingBusinessLeadGen,
  MenAvatar,
  WomenAvatar,
} from '../assets';

import { HiSparkles } from 'react-icons/hi';

// Import icons
import { FaArrowRight, FaCheck, FaSearch, FaSearchPlus } from 'react-icons/fa';
import {
  SiGoogleanalytics,
  SiSemrush,
  SiGooglesearchconsole,
  SiWordpress,
  SiMailchimp,
  SiMeta,
  SiCanva,
  SiOpenai,
} from 'react-icons/si';
import UiUxTestimonialsSection from '../components/UiUxTestimonialsSection';

const MarketingSeoPage = () => {
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
    } else if (url === '#projects') {
      // Scroll to projects section
      const projectsSection = document.getElementById('projects-section');
      projectsSection?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(url);
    }
  };

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
      key: 'edelweissBakery',
      image: SustainableFashionBrand,
      title: t('services.marketingSeo.projects.items.edelweissBakery.title'),
      description: t(
        'services.marketingSeo.projects.items.edelweissBakery.description'
      ),
      imageAlt: t('services.marketingSeo.projects.items.edelweissBakery.title'),
      link: t('services.marketingSeo.projects.items.edelweissBakery.link'),
    },
    {
      key: 'marganicsTextiles',
      image: DentalClinicLocalSEO,
      title: t('services.marketingSeo.projects.items.marganicsTextiles.title'),
      description: t(
        'services.marketingSeo.projects.items.marganicsTextiles.description'
      ),
      imageAlt: t(
        'services.marketingSeo.projects.items.marganicsTextiles.title'
      ),
      link: t('services.marketingSeo.projects.items.marganicsTextiles.link'),
    },
    {
      key: 'dapperMarketingClient',
      image: CoachingBusinessLeadGen,
      title: t(
        'services.marketingSeo.projects.items.dapperMarketingClient.title'
      ),
      description: t(
        'services.marketingSeo.projects.items.dapperMarketingClient.description'
      ),
      imageAlt: t(
        'services.marketingSeo.projects.items.dapperMarketingClient.title'
      ),
      link: t(
        'services.marketingSeo.projects.items.dapperMarketingClient.link'
      ),
    },
    {
      key: 'serviceBusinessPHM',
      image: SustainableFashionBrand, // Using same image as placeholder
      title: t('services.marketingSeo.projects.items.serviceBusinessPHM.title'),
      description: t(
        'services.marketingSeo.projects.items.serviceBusinessPHM.description'
      ),
      imageAlt: t(
        'services.marketingSeo.projects.items.serviceBusinessPHM.title'
      ),
      link: t('services.marketingSeo.projects.items.serviceBusinessPHM.link'),
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-[#54BD95]/15 via-[#F7DCA1]/15 to-[#D7ABE9]/15 relative'>
      {/* Meta tags for Marketing SEO page */}
      <title>{t('meta.marketingSeo.title')}</title>
      <meta name='description' content={t('meta.marketingSeo.description')} />
      <meta property='og:title' content={t('meta.marketingSeo.title')} />
      <meta
        property='og:description'
        content={t('meta.marketingSeo.description')}
      />
      <meta property='og:type' content='website' />
      <meta
        property='og:url'
        content='https://bwdigit.com/services/marketing-seo'
      />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={t('meta.marketingSeo.title')} />
      <meta
        name='twitter:description'
        content={t('meta.marketingSeo.description')}
      />

      <div className='absolute inset-0 bg-gradient-to-tr from-[#54BD95]/10 to-transparent pointer-events-none -z-10'></div>

      {/* Hero Section */}
      <div className='bg-[#09043C] text-white py-20 pt-30'>
        <div className='container mx-auto px-4 max-w-7xl'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6 text-white'>
              <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold leading-tight bg-gradient-to-r from-[#54BD95] via-[#F7DCA1] to-[#D7ABE9] bg-clip-text text-transparent capitalize'>
                {t('services.marketingSeo.hero.title')}
              </h1>
              <p className='text-lg text-gray-300 leading-relaxed max-w-lg'>
                {t('services.marketingSeo.hero.description')}
              </p>
              <button
                onClick={handleOpenContact}
                className='px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-lg font-medium inline-flex items-center gap-2 transition-all duration-300'
              >
                {t('services.marketingSeo.cta.buttons.strategy')}
                <FaArrowRight className='text-sm' />
              </button>
            </div>
            <div className='relative w-full'>
              <img
                src={SeoMarketingHeader}
                alt={t('services.marketingSeo.hero.imageAlt')}
                className='w-full h-full max-h-[500px] max-w-[500px] object-cover rounded-lg'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className='container mx-auto px-4 py-16 max-w-7xl'>
        {/* SEO Features Section */}
        <div className='grid md:grid-cols-2 gap-12 items-start mb-20'>
          <div className='space-y-6 h-full flex flex-col justify-start'>
            <h2 className='text-3xl font-bold text-gray-900'>
              {t('services.marketingSeo.features.items.seo.title')}
            </h2>
            <p className='text-gray-600 text-lg'>
              {t('services.marketingSeo.features.items.seo.description')}
            </p>
            <ul className='space-y-3 flex-grow'>
              {t('services.marketingSeo.features.items.seo.highlights', {
                returnObjects: true,
              }).map((highlight, idx) => (
                <li key={idx} className='flex items-start gap-3 text-gray-700'>
                  <div className='w-5 h-5 flex-shrink-0 mt-0.5 bg-accent/10 rounded-full flex items-center justify-center'>
                    <FaCheck className='text-accent w-3.5 h-3.5' />
                  </div>
                  <span className='text-gray-700'>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className='space-y-6 h-full flex flex-col justify-start'>
            <h2 className='text-3xl font-bold text-gray-900'>
              {t('services.marketingSeo.features.items.advertising.title')}
            </h2>
            <p className='text-gray-600 text-lg'>
              {t(
                'services.marketingSeo.features.items.advertising.description'
              )}
            </p>
            <ul className='space-y-3 flex-grow'>
              {t(
                'services.marketingSeo.features.items.advertising.highlights',
                { returnObjects: true }
              ).map((highlight, idx) => (
                <li key={idx} className='flex items-start gap-3 text-gray-700'>
                  <div className='w-5 h-5 flex-shrink-0 mt-0.5 bg-accent/10 rounded-full flex items-center justify-center'>
                    <FaCheck className='text-accent w-3.5 h-3.5' />
                  </div>
                  <span className='text-gray-700'>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Content and Local SEO Section - Swapped positions */}
        <div className='grid md:grid-cols-2 gap-12 items-start mb-20'>
          <div className='space-y-6 h-full flex flex-col justify-start'>
            <h2 className='text-3xl font-bold text-gray-900'>
              {t('services.marketingSeo.features.items.local.title')}
            </h2>
            <p className='text-gray-600 text-lg'>
              {t('services.marketingSeo.features.items.local.description')}
            </p>
            <ul className='space-y-3 flex-grow'>
              {t('services.marketingSeo.features.items.local.highlights', {
                returnObjects: true,
              }).map((highlight, idx) => (
                <li key={idx} className='flex items-start gap-3 text-gray-700'>
                  <div className='w-5 h-5 flex-shrink-0 mt-0.5 bg-accent/10 rounded-full flex items-center justify-center'>
                    <FaCheck className='text-accent w-3.5 h-3.5' />
                  </div>
                  <span className='text-gray-700'>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className='space-y-6 h-full flex flex-col justify-start'>
            <h2 className='text-3xl font-bold text-gray-900'>
              {t('services.marketingSeo.features.items.content.title')}
            </h2>
            <p className='text-gray-600 text-lg'>
              {t('services.marketingSeo.features.items.content.description')}
            </p>
            <ul className='space-y-3 flex-grow'>
              {t('services.marketingSeo.features.items.content.highlights', {
                returnObjects: true,
              }).map((highlight, idx) => (
                <li key={idx} className='flex items-start gap-3 text-gray-700'>
                  <div className='w-5 h-5 flex-shrink-0 mt-0.5 bg-accent/10 rounded-full flex items-center justify-center'>
                    <FaCheck className='text-accent w-3.5 h-3.5' />
                  </div>
                  <span className='text-gray-700'>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Services Section */}
        <div className='mb-20'>
          <div className='text-center max-w-3xl mx-auto mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              {t('services.marketingSeo.services.title')}
            </h2>
            <p className='text-lg text-gray-600 leading-relaxed'>
              {t('services.marketingSeo.services.description')}
            </p>
          </div>
          <div className='grid md:grid-cols-3 gap-8'>
            {['seo', 'paid', 'content'].map((categoryKey) => (
              <div
                key={categoryKey}
                className='group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent/30 relative overflow-hidden'
              >
                {/* Subtle gradient background that appears on hover */}
                <div className='absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none'></div>

                {/* Content */}
                <div className='relative z-10'>
                  {/* Title with accent underline */}
                  <h3 className='text-xl font-bold text-gray-900 mb-3 pb-2 border-b border-accent/20 inline-block'>
                    {t(
                      `services.marketingSeo.services.categories.${categoryKey}.title`
                    )}
                  </h3>

                  {/* Description */}
                  <p className='text-gray-600 mb-6 text-sm leading-relaxed'>
                    {t(
                      `services.marketingSeo.services.categories.${categoryKey}.description`
                    )}
                  </p>

                  {/* Items list */}
                  <ul className='space-y-4'>
                    {t(
                      `services.marketingSeo.services.categories.${categoryKey}.items`,
                      { returnObjects: true }
                    ).map((item, idx) => (
                      <li
                        key={idx}
                        className='flex items-start gap-3 text-gray-700 group-hover:transform group-hover:translate-x-1 transition-transform duration-300 ease-in-out'
                      >
                        {/* Icon wrapper with animation */}
                        <div className='w-5 h-5 flex-shrink-0 mt-0.5 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300'>
                          <FaCheck className='text-accent w-3.5 h-3.5' />
                        </div>

                        {/* Text */}
                        <span className='text-sm leading-relaxed flex-1 font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300'>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Decorative accent line at bottom */}
                <div className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/30 via-primary/30 to-accent/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left'></div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies & Tools Section */}
        <div className='mb-20'>
          <div className='text-center max-w-3xl mx-auto mb-12'>
            <h3 className='text-3xl font-bold text-gray-900 mb-6'>
              {t('services.marketingSeo.tools.title')}
            </h3>
            <p className='text-lg text-gray-600 leading-relaxed'>
              {t('services.marketingSeo.tools.description')}
            </p>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8'>
            {[
              {
                icon: SiGoogleanalytics,
                key: 'googleAnalytics',
                color: 'text-orange-500',
              },
              { icon: SiSemrush, key: 'semrush', color: 'text-orange-600' },
              { icon: FaSearchPlus, key: 'ahrefs', color: 'text-blue-600' },
              {
                icon: SiGooglesearchconsole,
                key: 'searchConsole',
                color: 'text-blue-500',
              },
              { icon: SiWordpress, key: 'wordpress', color: 'text-blue-700' },
              { icon: SiMailchimp, key: 'mailchimp', color: 'text-yellow-500' },
              { icon: SiMeta, key: 'meta', color: 'text-blue-600' },
            ].map((tool) => (
              <div
                key={tool.key}
                className='group relative bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent/30 hover:-translate-y-1'
              >
                {/* Background decoration */}
                <div className='absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                <div className='relative flex flex-col items-center text-center space-y-3 sm:space-y-4'>
                  {/* Icon container with background */}
                  <div className='w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl bg-gray-50 group-hover:bg-white transition-all duration-300 group-hover:scale-110'>
                    <tool.icon
                      className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 ${tool.color} group-hover:scale-110 transition-all duration-300`}
                    />
                  </div>

                  {/* Tool name */}
                  <p className='text-xs sm:text-sm md:text-base font-semibold text-gray-800 group-hover:text-accent transition-colors duration-300 leading-tight'>
                    {t(`services.marketingSeo.tools.items.${tool.key}`)}
                  </p>

                  {/* Subtle accent line */}
                  <div className='w-8 h-0.5 bg-gradient-to-r from-accent to-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Special Offer Section */}
        <div className='mb-8 sm:mb-12 md:mb-16 lg:mb-20 relative overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-accent via-primary to-accent bg-[length:200%_100%] animate-gradient-x opacity-10'></div>

          <div className='relative bg-[#09043C] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 lg:p-16'>
            <div className='absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-accent/10 rounded-full blur-3xl'></div>
            <div className='absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-primary/10 rounded-full blur-3xl'></div>

            <div className='relative max-w-4xl mx-auto'>
              <div className='flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8'>
                <HiSparkles className='text-yellow-400 w-6 h-6 animate-pulse' />
                <span className='bg-accent/20 text-accent px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-semibold text-xs sm:text-sm uppercase tracking-wider animate-pulse'>
                  {t('services.marketingSeo.specialOffer.title')}
                </span>
              </div>

              <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-[#54BD95] via-[#F7DCA1] to-[#D7ABE9] bg-clip-text text-transparent leading-tight'>
                {t('services.marketingSeo.specialOffer.subtitle')}
              </h2>
              <p className='text-gray-300 text-center mb-8 sm:mb-10 md:mb-12 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto'>
                {t('services.marketingSeo.specialOffer.description')}
              </p>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12'>
                {['audit', 'strategy', 'plan'].map((itemKey) => (
                  <div
                    key={itemKey}
                    className='bg-white/5 rounded-lg sm:rounded-xl p-4 sm:p-6 backdrop-blur-sm border border-white/10 hover:border-accent/30 transition-all duration-300'
                  >
                    <div className='space-y-3 sm:space-y-4'>
                      <div className='flex items-center gap-2 sm:gap-3'>
                        <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0'>
                          <FaSearch className='text-accent text-sm sm:text-base md:text-lg' />
                        </div>
                        <span className='text-white font-medium text-sm sm:text-base md:text-lg leading-tight'>
                          {t(
                            `services.marketingSeo.specialOffer.items.${itemKey}.title`
                          )}
                        </span>
                      </div>
                      <p className='text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed'>
                        {t(
                          `services.marketingSeo.specialOffer.items.${itemKey}.description`
                        )}
                      </p>
                      <div className='pt-3 sm:pt-4 border-t border-white/10'>
                        <span className='text-accent font-medium text-xs sm:text-sm uppercase tracking-wider'>
                          {t(
                            `services.marketingSeo.specialOffer.items.${itemKey}.category`
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className='flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6'>
                <button
                  onClick={handleOpenContact}
                  className='w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-accent hover:bg-accent/90 text-white rounded-lg font-medium inline-flex items-center justify-center gap-2 transition-all duration-300 group text-sm sm:text-base md:text-lg'
                >
                  {t('services.marketingSeo.specialOffer.buttons.getStarted')}
                  <FaArrowRight className='text-sm group-hover:translate-x-1 transition-transform duration-300' />
                </button>
                <button
                  onClick={() => handleLinkClick('/#ContactUs')}
                  className='w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-all duration-300 border border-white/20 hover:border-white/30 text-sm sm:text-base md:text-lg'
                >
                  {t('services.marketingSeo.specialOffer.buttons.learnMore')}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <UiUxTestimonialsSection testimonials={testimonials} />

        {/* Projects Section */}
        <div id='projects-section' className='mb-20 scroll-mt-24'>
          <div className='text-center max-w-3xl mx-auto mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              {t('services.marketingSeo.projects.title')}
            </h2>
            <p className='text-lg text-gray-600 mb-6'>
              {t('services.marketingSeo.projects.subtitle')}
            </p>
          </div>
          <ProjectsCarousel projects={projectsData} />
        </div>

        {/* Internal Links Section */}
        <div className='mb-20'>
          <div className='max-w-7xl mx-auto'>
            <h2 className='text-2xl font-semibold text-gray-900 mb-6'>
              {t('services.marketingSeo.internalLinks.title')}
            </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {t('services.marketingSeo.internalLinks.links', {
                returnObjects: true,
              }).map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleLinkClick(link.url)}
                  className='text-accent hover:text-accent/80 flex items-center gap-2 group transition-colors duration-300'
                >
                  <FaArrowRight className='text-sm transition-transform duration-300 group-hover:translate-x-1' />
                  <span className='hover:underline text-left'>{link.text}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className='bg-gradient-to-br from-[#09043C] to-[#1B0E63] text-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 lg:p-16 mb-8 sm:mb-12 md:mb-16 lg:mb-20'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-[#54BD95] via-[#F7DCA1] to-[#D7ABE9] bg-clip-text text-transparent leading-tight'>
              {t('services.marketingSeo.cta.title')}
            </h2>
            <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto'>
              {t('services.marketingSeo.cta.description')}
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6'>
              <button
                onClick={handleOpenContact}
                className='w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-accent hover:bg-accent/90 text-white rounded-lg font-medium inline-flex items-center justify-center gap-2 transition-all duration-300 group text-sm sm:text-base md:text-lg'
              >
                {t('services.marketingSeo.cta.buttons.strategy')}
                <FaArrowRight className='text-sm group-hover:translate-x-1 transition-transform duration-300' />
              </button>
              <button
                onClick={() => handleLinkClick('/#ContactUs')}
                className='w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 border-2 border-white/20 hover:border-accent/60 text-white rounded-lg font-medium transition-all duration-300 text-sm sm:text-base md:text-lg'
              >
                {t('services.marketingSeo.cta.buttons.quote')}
              </button>
              <button
                onClick={() => handleLinkClick('#projects')}
                className='w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 border-2 border-white/20 hover:border-accent/60 text-white rounded-lg font-medium transition-all duration-300 text-sm sm:text-base md:text-lg group'
              >
                {/* <FaArrowRight className='ml-2 text-sm group-hover:translate-x-1 transition-transform duration-300' /> */}
                {t('services.marketingSeo.cta.buttons.demo')}
              </button>
            </div>
          </div>
        </div>
      </div>
      <SideContact isOpen={isContactOpen} onClose={handleCloseContact} />
    </div>
  );
};

export default MarketingSeoPage;
