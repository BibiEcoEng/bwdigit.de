import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import CustomWebDevTestimonialsSection from '../components/CustomWebDevTestimonialsSection';
import ProjectsCarousel from '../components/ProjectsCarousel';
import SideContact from '../components/sidebarContact/SidebarContact';

// Import assets
import {
  WebDesignHeroImg,
  WebDesignIntroImg,
  RobbyLeonardi,
  BrunoSimon,
  Wokine,
  LoungeLizardStudio,
  ToyFight,
  MenAvatar,
  WomenAvatar,
} from '../assets';

// Import icons
import {
  FaArrowRight,
  FaCheck,
  FaRocket,
  FaStore,
  FaBuilding,
  FaPalette,
  FaUsers,
  FaTools,
  FaExclamationCircle,
  FaCheckCircle,
} from 'react-icons/fa';
import UiUxTestimonialsSection from '../components/UiUxTestimonialsSection';

const AUDIENCE_ICONS = [
  FaRocket,
  FaStore,
  FaBuilding,
  FaPalette,
  FaUsers,
  FaTools,
];

const CustomWebDevPage = () => {
  const { t } = useTranslation();
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenContact = () => {
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
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
      key: 'robby_leonardi_portfolio',
      image: RobbyLeonardi,
      title: t(
        'services.customWebDev.projects.items.robby_leonardi_portfolio.title'
      ),
      description: t(
        'services.customWebDev.projects.items.robby_leonardi_portfolio.description'
      ),
      imageAlt: t(
        'services.customWebDev.projects.items.robby_leonardi_portfolio.imageAlt'
      ),
      link: t(
        'services.customWebDev.projects.items.robby_leonardi_portfolio.link'
      ),
    },
    {
      key: 'bruno_simon_portfolio',
      image: BrunoSimon,
      title: t(
        'services.customWebDev.projects.items.bruno_simon_portfolio.title'
      ),
      description: t(
        'services.customWebDev.projects.items.bruno_simon_portfolio.description'
      ),
      imageAlt: t(
        'services.customWebDev.projects.items.bruno_simon_portfolio.imageAlt'
      ),
      link: t(
        'services.customWebDev.projects.items.bruno_simon_portfolio.link'
      ),
    },
    {
      key: 'wokine_agency_site',
      image: Wokine,
      title: t('services.customWebDev.projects.items.wokine_agency_site.title'),
      description: t(
        'services.customWebDev.projects.items.wokine_agency_site.description'
      ),
      imageAlt: t(
        'services.customWebDev.projects.items.wokine_agency_site.imageAlt'
      ),
      link: t('services.customWebDev.projects.items.wokine_agency_site.link'),
    },
    {
      key: 'lounge_lizard_studio',
      image: LoungeLizardStudio,
      title: t(
        'services.customWebDev.projects.items.lounge_lizard_studio.title'
      ),
      description: t(
        'services.customWebDev.projects.items.lounge_lizard_studio.description'
      ),
      imageAlt: t(
        'services.customWebDev.projects.items.lounge_lizard_studio.imageAlt'
      ),
      link: t('services.customWebDev.projects.items.lounge_lizard_studio.link'),
    },
    {
      key: 'toyfight_studio_portfolio',
      image: ToyFight,
      title: t(
        'services.customWebDev.projects.items.toyfight_studio_portfolio.title'
      ),
      description: t(
        'services.customWebDev.projects.items.toyfight_studio_portfolio.description'
      ),
      imageAlt: t(
        'services.customWebDev.projects.items.toyfight_studio_portfolio.imageAlt'
      ),
      link: t(
        'services.customWebDev.projects.items.toyfight_studio_portfolio.link'
      ),
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-[#54BD95]/15 via-[#F7DCA1]/15 to-[#D7ABE9]/15 relative'>
      {/* Meta tags for Custom Web Development page */}
      <title>{t('meta.customWebDev.title')}</title>
      <meta name='description' content={t('meta.customWebDev.description')} />
      <meta property='og:title' content={t('meta.customWebDev.title')} />
      <meta
        property='og:description'
        content={t('meta.customWebDev.description')}
      />
      <meta property='og:type' content='website' />
      <meta
        property='og:url'
        content='https://bwdigit.com/services/custom-web-development'
      />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={t('meta.customWebDev.title')} />
      <meta
        name='twitter:description'
        content={t('meta.customWebDev.description')}
      />

      <div className='absolute inset-0 bg-gradient-to-tr from-[#54BD95]/10 to-transparent pointer-events-none -z-10'></div>

      {/* Hero Section */}
      <div className='bg-[#09043C] text-white py-20 pt-30 overflow-hidden'>
        <div className='container mx-auto px-4 max-w-7xl relative'>
          {/* Background decorative elements */}
          <div className='absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl'></div>
          <div className='absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl'></div>

          <div className='grid md:grid-cols-2 gap-12 items-center relative'>
            <div className='space-y-8 text-white'>
              <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold leading-tight bg-gradient-to-r from-[#54BD95] via-[#F7DCA1] to-[#D7ABE9] bg-clip-text text-transparent capitalize'>
                {t('services.customWebDev.hero.title')}
              </h1>
              <p className='text-base md:text-lg text-gray-300 leading-relaxed max-w-xl'>
                {t('services.customWebDev.hero.description')}
              </p>
              <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4'>
                <button
                  onClick={handleOpenContact}
                  className='w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-accent hover:bg-accent/90 text-white rounded-lg font-medium inline-flex items-center justify-center gap-2 transition-all duration-300 transform hover:translate-y-[-2px] shadow-lg hover:shadow-accent/25'
                >
                  {t('services.customWebDev.hero.heroCta')}
                  <FaArrowRight className='text-sm transition-transform group-hover:translate-x-1' />
                </button>
              </div>
            </div>
            <div className='relative w-full'>
              <img
                src={WebDesignHeroImg}
                alt={t('services.customWebDev.hero.imageAlt')}
                className='w-full h-full max-w-[500px] max-h-[500px] object-cover rounded-lg'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className='container mx-auto px-4 py-16 max-w-7xl'>
        {/* Services Section */}
        <div className='grid md:grid-cols-2 gap-12 items-center mb-20'>
          <div className='space-y-6'>
            <h2 className='text-3xl font-bold text-gray-900'>
              {t('services.customWebDev.services.title')}
            </h2>
            <p className='text-lg text-gray-600 leading-relaxed'>
              {t('services.customWebDev.services.description')}
            </p>
            <h3 className='text-xl font-semibold text-gray-800 mt-6'>
              {t('services.customWebDev.services.itemsHeading')}
            </h3>
            <ul className='space-y-4'>
              {t('services.customWebDev.services.items', {
                returnObjects: true,
              }).map((service, index) => (
                <li key={index} className='flex items-center gap-3'>
                  <div className='w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center'>
                    <FaCheck className='text-accent text-sm' />
                  </div>
                  <span className='text-gray-700'>{service}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className='relative w-full'>
            <img
              src={WebDesignIntroImg}
              alt={t('services.customWebDev.services.imageAlt')}
              className='w-full h-full max-w-[800px] max-h-[800px] object-cover rounded-lg'
            />
          </div>
        </div>

        {/* Technologies Section */}
        <div className='py-16 bg-gray-50'>
          <div className='container mx-auto px-4 max-w-7xl'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                {t('services.customWebDev.technologies.title')}
              </h2>
              <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                {t('services.customWebDev.technologies.description')}
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {['frameworks', 'styling', 'cms', 'database', 'devops'].map(
                (category) => (
                  <div
                    key={category}
                    className='p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300'
                  >
                    <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                      {t(
                        `services.customWebDev.technologies.categories.${category}.title`
                      )}
                    </h3>

                    {/* Description for each category */}
                    <p className='text-sm text-gray-500 mb-4'>
                      {t(
                        `services.customWebDev.technologies.categories.${category}.description`
                      )}
                    </p>

                    <ul className='space-y-2'>
                      {t(
                        `services.customWebDev.technologies.categories.${category}.items`,
                        {
                          returnObjects: true,
                        }
                      ).map((item, i) => (
                        <li
                          key={i}
                          className='text-gray-600 flex items-start gap-3 min-w-0'
                        >
                          <div className='w-5 h-5 mt-0.5 flex-shrink-0 bg-accent/10 rounded-full flex items-center justify-center'>
                            <FaCheck className='text-accent w-3.5 h-3.5' />
                          </div>
                          <span className='text-sm leading-relaxed flex-1'>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Target Audience Section */}
        <div className='container mx-auto px-4 py-16 max-w-7xl'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
              {t('services.customWebDev.targetAudience.title')}
            </h2>
            <div className='max-w-2xl mx-auto'>
              <p className='text-lg text-gray-600 relative'>
                <span className='inline-block w-12 h-1 bg-gradient-to-r from-accent/40 to-primary/40 absolute -top-2 left-1/2 transform -translate-x-1/2'></span>
                {t('services.customWebDev.targetAudience.description')}
              </p>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
            {AUDIENCE_ICONS.map((IconComponent, index) => (
              <div
                key={index}
                className='p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group border border-gray-100 hover:border-accent/20 transform hover:-translate-y-1'
              >
                <div className='flex items-start gap-4'>
                  <div className='w-14 h-14 rounded-xl bg-gradient-to-r from-accent/10 to-primary/10 flex items-center justify-center group-hover:from-accent/20 group-hover:to-primary/20 transition-colors duration-300'>
                    <IconComponent className='text-2xl text-accent group-hover:scale-110 transition-transform duration-300' />
                  </div>
                  <p className='text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300 mt-2'>
                    {
                      t('services.customWebDev.targetAudience.items', {
                        returnObjects: true,
                      })[index]
                    }
                  </p>
                </div>
                {/* Subtle accent line that appears on hover */}
                <div className='w-0 h-0.5 bg-gradient-to-r from-accent to-primary rounded-full mt-4 group-hover:w-1/3 transition-all duration-500'></div>
              </div>
            ))}
          </div>

          {/* Enhanced footer section with modern styling */}
          <div className='mt-16 relative'>
            {/* Background decorative element */}
            <div className='absolute inset-0 bg-gradient-to-r from-accent/5 via-primary/5 to-accent/5 rounded-xl -z-10'></div>

            {/* Content container */}
            <div className='py-10 px-6 sm:px-10 rounded-xl border border-gray-100 bg-white/50 backdrop-blur-sm shadow-sm'>
              {/* Main footer text */}
              <div className='text-center mb-6'>
                <p className='text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed'>
                  {t('services.customWebDev.targetAudience.footer')}
                </p>
              </div>

              {/* Divider with gradient */}
              <div className='w-24 h-1 mx-auto bg-gradient-to-r from-accent/40 to-primary/40 rounded-full mb-6'></div>

              {/* CTA with enhanced styling */}
              <div className='text-center'>
                <p className='text-lg font-medium bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent inline-block max-w-3xl mx-auto'>
                  {t('services.customWebDev.targetAudience.footerCta')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Problems We Solve Section */}
        <div className='py-8 sm:py-12 md:py-16 px-2 sm:px-4 md:px-8 bg-[#09043C] text-white rounded-xl sm:rounded-2xl lg:rounded-3xl mx-2 sm:mx-4 md:mx-8 my-8 sm:my-12 md:my-16'>
          <div className='container mx-auto max-w-7xl'>
            <div className='text-center mb-8 sm:mb-10 md:mb-12'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-[#54BD95] via-[#F7DCA1] to-[#D7ABE9] bg-clip-text text-transparent leading-tight'>
                {t('services.customWebDev.problems.title')}
              </h2>
              <p className='text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto'>
                {t('services.customWebDev.problems.subtitle')}
              </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12'>
              {t('services.customWebDev.problems.items', {
                returnObjects: true,
              }).map((problem, index) => (
                <div
                  key={index}
                  className='bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-2xl p-4 sm:p-6 md:p-8 flex items-start gap-3 sm:gap-4 group hover:bg-white/10 transition-all duration-300 shadow-sm hover:shadow-lg'
                >
                  <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                    <FaExclamationCircle className='text-lg sm:text-2xl text-accent' />
                  </div>
                  <div className='flex-1'>
                    <p className='text-base sm:text-lg md:text-xl font-medium text-white mb-1 sm:mb-2'>
                      {problem.problem}
                    </p>
                    <div className='flex items-center gap-1 sm:gap-2 text-accent'>
                      <span className='text-xs sm:text-sm md:text-base'>
                        {problem.description}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className='bg-gradient-to-r from-accent/20 via-accent/10 to-transparent rounded-lg sm:rounded-2xl p-4 sm:p-8 backdrop-blur-sm'>
              {/* <p className='text-base sm:text-lg md:text-xl text-center font-medium text-white mb-4 sm:mb-6'>
                {t('services.customWebDev.problems.note')}
              </p> */}
              <div className='flex justify-center'>
                <button
                  onClick={handleOpenContact}
                  className='px-6 sm:px-8 py-3 sm:py-4 bg-accent hover:bg-accent/90 text-white rounded-lg sm:rounded-xl font-medium inline-flex items-center gap-2 transition-all duration-300 transform hover:translate-y-[-2px] text-sm sm:text-base md:text-lg'
                >
                  {t('services.customWebDev.problems.cta')}
                  <FaArrowRight className='text-sm' />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        {/* <CustomWebDevTestimonialsSection /> */}
        <UiUxTestimonialsSection testimonials={testimonials} />

        {/* Projects Section */}
        <div className='mb-20'>
          <div className='text-center max-w-3xl mx-auto mb-12'>
            <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4'>
              {(() => {
                const title = t('services.customWebDev.projects.title').trim();
                const words = title.split(' ');

                // If there's only one word, no need to wrap
                if (words.length === 1) return title;

                const lastWord = words.pop(); // remove and store last word
                const rest = words.join(' '); // rejoin the rest

                return (
                  <>
                    {rest} <span className='whitespace-nowrap'>{lastWord}</span>
                  </>
                );
              })()}
            </h2>

            <p className='text-lg text-gray-600'>
              {t('services.customWebDev.projects.subtitle')}
            </p>
          </div>
          <ProjectsCarousel projects={projectsData} />
        </div>

        {/* Modern Special Offer Section */}
        <div className='relative mt-12 sm:mt-16 lg:mt-20 mb-8 sm:mb-12 lg:mb-16 overflow-hidden'>
          {/* Background with animated gradient border */}
          <div className='absolute inset-0 p-0.5 rounded-2xl sm:rounded-3xl lg:rounded-[2rem] bg-gradient-to-r from-accent via-primary to-accent bg-[length:200%_100%] animate-gradient-x'></div>

          {/* Main content area */}
          <div className='relative rounded-2xl sm:rounded-3xl lg:rounded-[1.9rem] bg-gradient-to-br from-[#0D0845] via-[#09043C] to-[#0A0340] p-6 sm:p-10 md:p-14 lg:p-16 overflow-hidden'>
            {/* Decorative elements */}
            <div className='absolute top-0 right-0 w-60 h-60 sm:w-80 sm:h-80 bg-accent/5 rounded-full blur-3xl'></div>
            <div className='absolute bottom-0 left-0 w-60 h-60 sm:w-80 sm:h-80 bg-primary/5 rounded-full blur-3xl'></div>
            <div className='absolute top-1/4 right-1/4 w-32 h-32 rounded-full border border-white/10 opacity-30'></div>
            <div className='absolute bottom-1/4 left-1/4 w-24 h-24 rounded-full border border-white/10 opacity-30'></div>

            {/* Animated particles */}
            <div className='absolute top-10 left-10 w-2 h-2 bg-accent/40 rounded-full animate-pulse'></div>
            <div className='absolute bottom-20 right-20 w-3 h-3 bg-primary/40 rounded-full animate-pulse'></div>
            <div className='absolute top-1/2 right-10 w-2 h-2 bg-white/20 rounded-full animate-pulse'></div>

            <div className='relative max-w-5xl mx-auto'>
              <div className='flex flex-col md:flex-row gap-8 md:gap-12 items-center'>
                {/* Left content: Title and description */}
                <div className='md:w-1/2 text-white space-y-6'>
                  {/* Special offer badge */}
                  <div className='inline-flex mb-2 relative'>
                    <span className='absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-full blur-sm opacity-70 animate-pulse'></span>
                    <span className='relative flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg rounded-full'>
                      <FaRocket className='text-accent' />
                      <span className='text-accent font-semibold text-sm tracking-wider uppercase'>
                        {t('services.customWebDev.specialOffer.badge')}
                      </span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#54BD95] via-[#F7DCA1] to-[#D7ABE9] bg-clip-text text-transparent leading-tight'>
                    {t('services.customWebDev.specialOffer.title')}
                  </h3>

                  {/* Description */}
                  <p className='text-base md:text-lg text-gray-200 leading-relaxed'>
                    {t('services.customWebDev.specialOffer.description')}
                  </p>

                  {/* Special offer note */}
                  <div className='bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10'>
                    <p className='text-base font-medium text-accent'>
                      {t('services.customWebDev.specialOffer.note')}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div>
                    <button
                      onClick={handleOpenContact}
                      className='relative overflow-hidden px-6 py-4 bg-gradient-to-r from-accent to-primary text-white rounded-xl font-medium inline-flex items-center gap-2 shadow-lg hover:shadow-accent/20 transition-all duration-300 group'
                    >
                      {/* Shine effect */}
                      <span className='absolute inset-0 w-[200%] h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out'></span>
                      <span className='relative'>
                        {t('services.customWebDev.specialOffer.cta')}
                      </span>
                      <FaArrowRight className='relative text-sm group-hover:translate-x-1 transition-transform duration-300' />
                    </button>
                  </div>
                </div>

                {/* Right content: Features list */}
                <div className='md:w-1/2'>
                  <div className='bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-8'>
                    <h4 className='text-white text-xl font-medium mb-6 flex items-center gap-3'>
                      <span className='w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center'>
                        <FaCheckCircle className='text-accent' />
                      </span>
                      {t('services.customWebDev.specialOffer.featuresHeading')}
                    </h4>

                    <ul className='space-y-4'>
                      {t('services.customWebDev.specialOffer.features', {
                        returnObjects: true,
                      }).map((feature, index) => (
                        <li
                          key={index}
                          className='flex items-start gap-3 group'
                        >
                          <div className='w-6 h-6 rounded-full bg-accent/20 flex-shrink-0 flex items-center justify-center mt-0.5 group-hover:bg-accent/40 transition-colors duration-300'>
                            <FaCheck className='text-accent text-xs' />
                          </div>
                          <span className='text-gray-200 group-hover:text-white transition-colors duration-300'>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SideContact isOpen={isContactOpen} onClose={handleCloseContact} />
    </div>
  );
};

export default CustomWebDevPage;
