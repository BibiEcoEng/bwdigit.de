import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ProjectsCarousel from '../components/ProjectsCarousel';
import SideContact from '../components/sidebarContact/SidebarContact';

import {
  EcommerceHeader,
  EcommerceIntro,
  Tentree,
  AllBirds,
  FlyingTigers,
  Blume,
  MenAvatar,
  WomenAvatar,
} from '../assets';

// Import icons
import {
  FaArrowRight,
  FaCheck,
  FaStore,
  FaMobile,
  FaLock,
  FaGlobe,
  FaCogs,
  FaShoppingCart,
  FaDesktop,
  FaLightbulb,
  FaTshirt,
  FaHeartbeat,
  FaGraduationCap,
  FaUtensils,
  FaLaptopCode,
  FaHeart,
  FaCloud,
  FaSync,
} from 'react-icons/fa';
import {
  SiShopify,
  SiWoo,
  SiNextdotjs,
  SiReact,
  SiLaravel,
  SiStripe,
  SiPaypal,
  SiKlarna,
} from 'react-icons/si';
import UiUxTestimonialsSection from '../components/UiUxTestimonialsSection';

const EcommerceSolutionsPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isContactOpen, setIsContactOpen] = useState(false);

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
      key: 'tentree',
      image: Tentree,
      title: t('services.ecommerce.projects.items.tentree.title'),
      description: t('services.ecommerce.projects.items.tentree.description'),
      imageAlt: t('services.ecommerce.projects.items.tentree.title'),
      link: t('services.ecommerce.projects.items.tentree.link'),
    },
    {
      key: 'allbirds',
      image: AllBirds,
      title: t('services.ecommerce.projects.items.allbirds.title'),
      description: t('services.ecommerce.projects.items.allbirds.description'),
      imageAlt: t('services.ecommerce.projects.items.allbirds.title'),
      link: t('services.ecommerce.projects.items.allbirds.link'),
    },
    {
      key: 'flyingTiger',
      image: FlyingTigers,
      title: t('services.ecommerce.projects.items.flyingTiger.title'),
      description: t(
        'services.ecommerce.projects.items.flyingTiger.description'
      ),
      imageAlt: t('services.ecommerce.projects.items.flyingTiger.title'),
      link: t('services.ecommerce.projects.items.flyingTiger.link'),
    },
    {
      key: 'blume',
      image: Blume,
      title: t('services.ecommerce.projects.items.blume.title'),
      description: t('services.ecommerce.projects.items.blume.description'),
      imageAlt: t('services.ecommerce.projects.items.blume.title'),
      link: t('services.ecommerce.projects.items.blume.link'),
    },
  ];

  const featureIcons = {
    [t('services.ecommerce.features.items.store.title')]: FaStore,
    [t('services.ecommerce.features.items.mobile.title')]: FaMobile,
    [t('services.ecommerce.features.items.security.title')]: FaLock,
    [t('services.ecommerce.features.items.language.title')]: FaGlobe,
    [t('services.ecommerce.features.items.automation.title')]: FaCogs,
  };

  const industryIcons = {
    fashion: FaTshirt,
    health: FaHeartbeat,
    education: FaGraduationCap,
    food: FaUtensils,
    digital: FaLaptopCode,
    handmade: FaHeart,
    saas: FaCloud,
    subscription: FaSync,
  };

  const handleScheduleCallClick = () => {
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
  };

  const handleLinkClick = (url) => {
    if (url.startsWith('/#')) {
      navigate('/');
      const smoothScroll = (y) => {
        window.scrollTo({
          top: y,
          behavior: 'smooth',
        });
      };
      setTimeout(() => {
        const element = document.querySelector(url.replace('/', ''));
        if (element) {
          const y = element.getBoundingClientRect().top + window.pageYOffset;
          smoothScroll(y);
        } else {
          setTimeout(() => {
            const retryElement = document.querySelector(url.replace('/', ''));
            if (retryElement) {
              const y =
                retryElement.getBoundingClientRect().top + window.pageYOffset;
              smoothScroll(y);
            }
          }, 500);
        }
      }, 100);
    } else {
      navigate(url);
    }
  };

  // Mapping for target audience icons
  const targetAudienceIcons = {
    [t('services.ecommerce.targetAudience.items.fashion')]: FaTshirt,
    [t('services.ecommerce.targetAudience.items.health')]: FaHeartbeat,
    [t('services.ecommerce.targetAudience.items.education')]: FaGraduationCap,
    [t('services.ecommerce.targetAudience.items.food')]: FaUtensils,
    [t('services.ecommerce.targetAudience.items.digital')]: FaLaptopCode,
    [t('services.ecommerce.targetAudience.items.handmade')]: FaHeart,
    [t('services.ecommerce.targetAudience.items.saas')]: FaCloud,
    [t('services.ecommerce.targetAudience.items.subscription')]: FaSync,
  };

  // Tech icon mapping
  const techIconMap = {
    shopify: SiShopify,
    woocommerce: SiWoo,
    nextjs: SiNextdotjs,
    react: SiReact,
    laravel: SiLaravel,
    stripe: SiStripe,
    paypal: SiPaypal,
    klarna: SiKlarna,
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-[#54BD95]/15 via-[#F7DCA1]/15 to-[#D7ABE9]/15 relative'>
      {/* Meta tags for Ecommerce Solutions page */}
      <title>{t('meta.ecommerce.title')}</title>
      <meta name='description' content={t('meta.ecommerce.description')} />
      <meta property='og:title' content={t('meta.ecommerce.title')} />
      <meta
        property='og:description'
        content={t('meta.ecommerce.description')}
      />
      <meta property='og:type' content='website' />
      <meta
        property='og:url'
        content='https://bwdigit.com/services/ecommerce-solutions'
      />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={t('meta.ecommerce.title')} />
      <meta
        name='twitter:description'
        content={t('meta.ecommerce.description')}
      />

      <div className='absolute inset-0 bg-gradient-to-tr from-[#54BD95]/10 to-transparent pointer-events-none -z-10'></div>

      {/* Hero Section */}
      <div className='bg-[#09043C] text-white py-20 pt-30'>
        <div className='container mx-auto px-4 max-w-7xl'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6 text-white'>
              <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold leading-tight bg-gradient-to-r from-[#54BD95] via-[#F7DCA1] to-[#D7ABE9] bg-clip-text text-transparent capitalize'>
                {t('services.ecommerce.hero.title')}
              </h1>
              <p className='text-lg text-gray-300 leading-relaxed max-w-lg'>
                {t('services.ecommerce.hero.description')}
              </p>
              <button
                onClick={handleScheduleCallClick}
                className='px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-lg font-medium inline-flex items-center gap-2 transition-all duration-300'
              >
                {t('services.ecommerce.hero.ctaBtn')}
                <FaArrowRight className='text-sm' />
              </button>
            </div>
            <div className='relative w-full'>
              <img
                src={EcommerceHeader}
                alt={t('services.ecommerce.hero.imageAlt')}
                className='w-full h-full max-h-[500px] max-w-[500px] object-cover rounded-lg'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className='container mx-auto px-4 py-16 max-w-7xl'>
        {/* Features Section */}
        <div className='mb-20'>
          <div className='text-center max-w-3xl mx-auto mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4 capitalize'>
              {t('services.ecommerce.features.title')}
            </h2>
            <p className='text-lg text-gray-600'>
              {t('services.ecommerce.features.description')}
            </p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {['store', 'mobile', 'security', 'language', 'automation'].map(
              (key) => {
                const Icon =
                  featureIcons[
                    t(`services.ecommerce.features.items.${key}.title`)
                  ] || FaCheck;
                return (
                  <div
                    key={key}
                    className='bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100'
                  >
                    <div className='flex items-start gap-4'>
                      <div className='w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0'>
                        <Icon className='text-accent text-xl' />
                      </div>
                      <div>
                        <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                          {t(`services.ecommerce.features.items.${key}.title`)}
                        </h3>
                        <p className='text-gray-600 leading-relaxed mb-4'>
                          {t(
                            `services.ecommerce.features.items.${key}.description`
                          )}
                        </p>
                        {/* <ul className='space-y-2'>
                          {Object.keys(
                            t(
                              `services.ecommerce.features.items.${key}.highlights`,
                              { returnObjects: true }
                            )
                          ).map((highlight) => (
                            <li
                              key={highlight}
                              className='flex items-center gap-2 text-gray-700'
                            >
                              <FaCheck className='text-accent size-4' />
                              <span>
                                {t(
                                  `services.ecommerce.features.items.${key}.highlights.${highlight}`
                                )}
                              </span>
                            </li>
                          ))}
                        </ul> */}
                        <ul className='space-y-2'>
                          {Object.keys(
                            t(
                              `services.ecommerce.features.items.${key}.highlights`,
                              {
                                returnObjects: true,
                              }
                            )
                          ).map((highlight) => (
                            <li
                              key={highlight}
                              className='flex items-start gap-2 text-gray-700'
                            >
                              {/* Smaller consistent icon wrapper */}
                              <div className='w-5 h-5 flex-shrink-0 mt-0.5 bg-accent/10 rounded-full flex items-center justify-center'>
                                <FaCheck className='text-accent w-3.5 h-3.5' />
                              </div>

                              {/* Text */}
                              <span className='text-sm leading-relaxed'>
                                {t(
                                  `services.ecommerce.features.items.${key}.highlights.${highlight}`
                                )}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>

        {/* Industries We Serve Section */}
        <div className='mb-12 sm:mb-16 md:mb-20 bg-gray-50 rounded-lg sm:rounded-xl md:rounded-2xl py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8'>
          <div className='max-w-7xl mx-auto'>
            <h2 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-10 md:mb-12 text-center capitalize leading-tight'>
              {t('services.ecommerce.targetAudience.title')}
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8'>
              {[
                'fashion',
                'health',
                'education',
                'food',
                'digital',
                'handmade',
                'saas',
                'subscription',
              ].map((item, index) => {
                const Icon = industryIcons[item] || FaStore;
                return (
                  <div
                    key={index}
                    className='bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col items-center text-center group'
                  >
                    <div className='w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-accent/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300'>
                      <Icon className='text-accent text-lg sm:text-xl md:text-2xl' />
                    </div>
                    <p className='text-gray-800 font-medium leading-snug text-sm sm:text-base'>
                      {t(`services.ecommerce.targetAudience.items.${item}`)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Technologies & Platforms Section */}
        <div className='mb-12 sm:mb-16 md:mb-20'>
          <div className='text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12'>
            <h3 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 capitalize leading-tight'>
              {t('services.ecommerce.technologies.title')}
            </h3>
            <p className='text-base sm:text-lg text-gray-600 leading-relaxed px-4 sm:px-0'>
              {t('services.ecommerce.technologies.description')}
            </p>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-4'>
            {[
              { key: 'shopify', icon: SiShopify, color: 'text-green-600' },
              { key: 'woocommerce', icon: SiWoo, color: 'text-purple-700' },
              { key: 'nextjs', icon: SiNextdotjs, color: 'text-black' },
              { key: 'react', icon: SiReact, color: 'text-sky-500' },
              { key: 'laravel', icon: SiLaravel, color: 'text-red-500' },
              { key: 'stripe', icon: SiStripe, color: 'text-indigo-600' },
              { key: 'paypal', icon: SiPaypal, color: 'text-blue-600' },
              { key: 'klarna', icon: SiKlarna, color: 'text-pink-500' },
            ].map(({ key, icon: TechIcon, color }) => (
              <div
                key={key}
                className='group relative bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent/30 hover:-translate-y-1'
              >
                {/* Background decoration */}
                <div className='absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='relative flex flex-col items-center text-center space-y-3 sm:space-y-4'>
                  {/* Icon container with background */}
                  <div className='w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex items-center justify-center rounded-2xl bg-gray-50 group-hover:bg-white transition-all duration-300 group-hover:scale-110 mb-2 sm:mb-3 md:mb-4'>
                    <TechIcon
                      className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 ${color} group-hover:scale-110 transition-all duration-300`}
                    />
                  </div>
                  <p className='text-xs sm:text-sm md:text-base font-semibold text-gray-800 group-hover:text-accent transition-colors duration-300 leading-tight'>
                    {t(`services.ecommerce.technologies.items.${key}`)}
                  </p>
                  {/* Subtle accent line */}
                  <div className='w-8 h-0.5 bg-gradient-to-r from-accent to-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose BW Digit Section */}
        <div className='pb-12 sm:pb-16 md:pb-20 relative overflow-hidden'>
          <div className='relative bg-gradient-to-br from-white to-[#f9f9f9] rounded-lg sm:rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-sm border border-gray-100'>
            {/* Optional decorative element for visual parity */}
            <div className='absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-accent/5 rounded-full blur-2xl sm:blur-3xl'></div>

            <div className='relative z-10 text-center mb-12'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 max-w-[60rem] mx-auto'>
                {t('services.ecommerce.benefits.title')}
              </h2>
              <p className='text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto'>
                {t('services.ecommerce.benefits.subtitle')}
              </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10'>
              {['scalable', 'design', 'support', 'consultation'].map(
                (item, index) => {
                  // Custom icon for each card
                  let Icon;
                  switch (item) {
                    case 'scalable':
                      Icon = FaSync;
                      break;
                    case 'design':
                      Icon = FaDesktop;
                      break;
                    case 'support':
                      Icon = FaCogs;
                      break;
                    case 'consultation':
                      Icon = FaLightbulb;
                      break;
                    default:
                      Icon = FaCheck;
                  }

                  return (
                    <div
                      key={index}
                      className='group flex flex-col bg-white rounded-xl p-6 border border-gray-100 
                        hover:shadow-lg hover:shadow-accent/5 hover:border-accent/20 
                        transition-all duration-300 min-w-0 transform hover:-translate-y-1 h-full'
                    >
                      {/* Icon Container with gradient background */}
                      <div
                        className='w-14 h-14 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 
                        flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300'
                      >
                        <Icon className='text-accent text-xl' />
                      </div>

                      {/* Content container */}
                      <div className='flex flex-col gap-2 flex-1'>
                        {/* Heading */}
                        <h3 className='text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-accent transition-colors duration-300'>
                          {t(
                            `services.ecommerce.benefits.items.${item}.heading`
                          )}
                        </h3>

                        {/* Description */}
                        <p className='text-sm sm:text-base text-gray-600 leading-relaxed'>
                          {t(
                            `services.ecommerce.benefits.items.${item}.description`
                          )}
                        </p>

                        {/* Subtle accent line at the bottom */}
                        <div
                          className='w-12 h-0.5 bg-gradient-to-r from-accent to-primary mt-3 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                        ></div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>

        {/* Limited Time Offer Section */}
        <div className='mb-12 sm:mb-16 md:mb-20 relative overflow-hidden'>
          {/* <div className='absolute inset-0 bg-gradient-to-r from-accent via-primary to-accent bg-[length:200%_100%] animate-gradient-x opacity-10'></div> */}

          <div className='relative bg-[#09043C] rounded-lg sm:rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-12 lg:p-16'>
            {/* Decorative elements - responsive */}
            <div className='absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-accent/10 rounded-full blur-2xl sm:blur-3xl'></div>

            <div className='relative z-10 text-center text-white'>
              <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight bg-gradient-to-r from-[#54BD95] via-[#F7DCA1] to-[#D7ABE9] bg-clip-text text-transparent capitalize mb-4 sm:mb-6 px-2 sm:px-0 max-w-[60rem] mx-auto'>
                {t('services.ecommerce.popularResources.title')}
              </h3>
              <p className='text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 md:mb-12 leading-relaxed px-2 sm:px-0'>
                {t('services.ecommerce.popularResources.subtitle')}
              </p>
              <p className='text-base sm:text-lg md:text-xl text-accent mb-8 sm:mb-10 md:mb-12 leading-relaxed px-2 sm:px-0'>
                {t('services.ecommerce.popularResources.cta')}
              </p>

              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12'>
                {['website', 'responsive', 'strategy'].map((item, index) => (
                  <div
                    key={index}
                    className='bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-4 sm:p-6 text-left hover:bg-white/10 hover:border-white/20 transition-all duration-300'
                  >
                    <div className='flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4'>
                      <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 backdrop-blur-sm'>
                        {index === 0 ? (
                          <FaShoppingCart className='text-accent text-base sm:text-lg md:text-xl' />
                        ) : index === 1 ? (
                          <FaDesktop className='text-accent text-base sm:text-lg md:text-xl' />
                        ) : (
                          <FaLightbulb className='text-accent text-base sm:text-lg md:text-xl' />
                        )}
                      </div>
                      <div className='flex-1'>
                        <span className='text-xs font-medium text-accent uppercase tracking-wider block mb-1'>
                          {t(
                            `services.ecommerce.popularResources.items.${item}.category`
                          )}
                        </span>
                        <h4 className='text-base sm:text-lg font-semibold leading-snug'>
                          {t(
                            `services.ecommerce.popularResources.items.${item}.title`
                          )}
                        </h4>
                      </div>
                    </div>
                    <p className='text-gray-300 text-sm sm:text-base leading-relaxed'>
                      {t(
                        `services.ecommerce.popularResources.items.${item}.description`
                      )}
                    </p>
                  </div>
                ))}
              </div>

              <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center px-2 sm:px-0'>
                <button
                  onClick={handleScheduleCallClick}
                  className='w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-accent hover:bg-accent/90 text-white rounded-lg font-medium inline-flex items-center gap-2 justify-center transition-all duration-300 text-sm sm:text-base'
                >
                  <span className='truncate'>
                    {t('services.ecommerce.cta.buttons.strategy')}
                  </span>
                  <FaArrowRight className='text-sm flex-shrink-0' />
                </button>
                <button
                  onClick={() => handleLinkClick('/#ContactUs')}
                  className='w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium inline-flex items-center gap-2 justify-center transition-all duration-300 border border-white/20 hover:border-white/30 text-sm sm:text-base'
                >
                  <span className='truncate'>
                    {t('services.ecommerce.cta.buttons.quote')}
                  </span>
                  <FaArrowRight className='text-sm flex-shrink-0' />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className='mb-8 md:mb-12'>
          <div className='text-center max-w-3xl mx-auto mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4 capitalize'>
              {t('services.ecommerce.projects.title')}
            </h2>
            <p className='text-lg text-gray-600'>
              {t('services.ecommerce.projects.subtitle')}
            </p>
          </div>
          <ProjectsCarousel projects={projectsData} />
        </div>

        {/* Testimonials Section */}
        <UiUxTestimonialsSection testimonials={testimonials} />

        {/* Final CTA Section */}
        <div className='bg-gradient-to-br from-[#09043C] to-[#1B0E63] text-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 lg:p-16 mb-8 sm:mb-12 md:mb-16 lg:mb-20'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 capitalize bg-gradient-to-r from-[#54BD95] via-[#F7DCA1] to-[#D7ABE9] bg-clip-text text-transparent leading-tight'>
              {t('services.ecommerce.cta.title')}
            </h2>
            <p className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto'>
              {t('services.ecommerce.cta.description')}
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6'>
              <button
                onClick={handleScheduleCallClick}
                className='w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-accent hover:bg-accent/90 text-white rounded-lg font-medium inline-flex items-center justify-center gap-2 transition-all duration-300 group text-sm sm:text-base md:text-lg'
              >
                {t('services.ecommerce.cta.buttons.strategy')}
                <FaArrowRight className='text-sm group-hover:translate-x-1 transition-transform duration-300' />
              </button>
              <button
                onClick={() => handleLinkClick('/#ContactUs')}
                className='w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-all duration-300 text-sm sm:text-base md:text-lg border border-white/20 hover:border-white/30'
              >
                {t('services.ecommerce.cta.buttons.quote')}
              </button>
            </div>
          </div>
        </div>
      </div>
      <SideContact isOpen={isContactOpen} onClose={handleCloseContact} />
    </div>
  );
};

export default EcommerceSolutionsPage;
