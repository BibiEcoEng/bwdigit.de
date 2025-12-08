import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import UiUxTestimonialsSection from '../components/UiUxTestimonialsSection';
import ProjectsCarousel from '../components/ProjectsCarousel';
import { UiDesignHeader, WebDesignWhyChooseUsImg } from '../assets';
import {
  MenAvatar,
  WomenAvatar,
  ArozJewelry,
  Klur,
  littlesCoffee,
  velascaShoes,
} from '../assets';
import RelatedServices from '../components/RelatedServices';
import SideContact from '../components/sidebarContact/SidebarContact';
import applyAsteriskBold from '../utils/formatText';
// Import icons
import {
  FaArrowRight,
  FaRocket,
  FaCheck,
  FaUsers,
  FaPaintBrush,
  FaCubes,
  FaHandsHelping,
  FaLightbulb,
  FaSync,
  FaChartLine,
  FaShoppingCart,
} from 'react-icons/fa';
import {
  SiFigma,
  SiAdobexd,
  SiSketch,
  SiInvision,
  SiMiro,
  SiWebflow,
} from 'react-icons/si';

import { HiSparkles } from 'react-icons/hi';

const UiUxDesignPage = () => {
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
      key: 'arozJewelry',
      image: ArozJewelry,
      title: t('services.uiux.projects.items.arozJewelry.title'),
      description: t('services.uiux.projects.items.arozJewelry.description'),
      imageAlt: t('services.uiux.projects.items.arozJewelry.title'),
      link: t('services.uiux.projects.items.arozJewelry.link'),
    },
    {
      key: 'klurBeauty',
      image: Klur,
      title: t('services.uiux.projects.items.klurBeauty.title'),
      description: t('services.uiux.projects.items.klurBeauty.description'),
      imageAlt: t('services.uiux.projects.items.klurBeauty.title'),
      link: t('services.uiux.projects.items.klurBeauty.link'),
    },
    {
      key: 'littlesCoffee',
      image: littlesCoffee,
      title: t('services.uiux.projects.items.littlesCoffee.title'),
      description: t('services.uiux.projects.items.littlesCoffee.description'),
      imageAlt: t('services.uiux.projects.items.littlesCoffee.title'),
      link: t('services.uiux.projects.items.littlesCoffee.link'),
    },
    {
      key: 'velascaShoes',
      image: velascaShoes,
      title: t('services.uiux.projects.items.velascaShoes.title'),
      description: t('services.uiux.projects.items.velascaShoes.description'),
      imageAlt: t('services.uiux.projects.items.velascaShoes.title'),
      link: t('services.uiux.projects.items.velascaShoes.link'),
    },
  ];

  const deliveryIcons = {
    [t('services.uiux.delivery.items.personas.title')]: FaUsers,
    [t('services.uiux.delivery.items.mockups.title')]: FaPaintBrush,
    [t('services.uiux.delivery.items.prototypes.title')]: FaCubes,
    [t('services.uiux.delivery.items.workshops.title')]: FaHandsHelping,
  };

  const targetAudienceIcons = {
    [t('services.uiux.targetAudience.items.startups')]: FaLightbulb,
    [t('services.uiux.targetAudience.items.businesses')]: FaSync,
    [t('services.uiux.targetAudience.items.saas')]: FaChartLine,
    [t('services.uiux.targetAudience.items.ecommerce')]: FaShoppingCart,
  };

  const handleLinkClick = (url) => {
    if (url.startsWith('/#')) {
      // If it's a hash link to the home page
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(url.replace('/', ''));
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // For regular internal links
      navigate(url);
    }
  };

  const handleScheduleCallClick = () => {
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-[#54BD95]/15 via-[#F7DCA1]/15 to-[#D7ABE9]/15 relative'>
      {/* Meta tags for UI/UX Design page */}
      <title>{t('meta.uiUxDesign.title')}</title>
      <meta name='description' content={t('meta.uiUxDesign.description')} />
      <meta property='og:title' content={t('meta.uiUxDesign.title')} />
      <meta
        property='og:description'
        content={t('meta.uiUxDesign.description')}
      />
      <meta property='og:type' content='website' />
      <meta
        property='og:url'
        content='https://bwdigit.com/services/ui-ux-design'
      />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={t('meta.uiUxDesign.title')} />
      <meta
        name='twitter:description'
        content={t('meta.uiUxDesign.description')}
      />

      <div className='absolute inset-0 bg-gradient-to-tr from-[#54BD95]/10 to-transparent pointer-events-none -z-10'></div>

      {/* Hero Section */}
      <div className='bg-[#09043C] text-white py-20 pt-30'>
        <div className='container mx-auto px-4 max-w-7xl'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6 text-white'>
              <h1
                className='text-2xl md:text-3xl lg:text-4xl font-bold leading-tight bg-gradient-to-r from-[#00D4AA] via-[#FFE066] to-[#C084FC] bg-clip-text text-transparent capitalize'
                style={{ hyphens: 'manual' }}
              >
                {t('services.uiux.hero.title')}
              </h1>
              <p className='text-lg text-gray-300 leading-relaxed max-w-lg'>
                {t('services.uiux.hero.description')}
              </p>
              <div className='flex-col md:flex-row flex  gap-4'>
                <button
                  onClick={handleScheduleCallClick}
                  className='px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-lg font-medium inline-flex items-center gap-2 transition-all duration-300'
                >
                  {t('services.uiux.hero.preCta')}
                  <FaArrowRight className='text-sm' />
                </button>
                <button
                  onClick={handleScheduleCallClick}
                  className='px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-lg font-medium inline-flex items-center gap-2 transition-all duration-300'
                >
                  {t('common.getStarted')}
                  <FaArrowRight className='text-sm' />
                </button>
              </div>
            </div>
            <div className='relative w-full'>
              <img
                src={UiDesignHeader}
                alt={t('services.uiux.hero.imageAlt')}
                className='w-full h-full max-h-[500px] max-w-[500px] object-cover rounded-lg'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className='container mx-auto px-4 py-16 max-w-7xl'>
        {/* Custom UI/UX Design Section */}
        <div className='grid md:grid-cols-2 gap-12 items-center mb-20'>
          <div className='space-y-6'>
            <h2 className='text-3xl font-bold text-gray-900 capitalize'>
              {t('services.uiux.customDesign.title')}
            </h2>
            <h3 className='text-xl text-accent capitalize'>
              {t('services.uiux.customDesign.subtitle')}
            </h3>
            <p className='text-gray-900'>
              {t('services.uiux.customDesign.description')}
            </p>

            <h3 className='text-lg font-semibold text-gray-800 mt-6'>
              {t('services.uiux.services.servicesTitle')} :
            </h3>

            <ul className='space-y-4'>
              {[
                'services.uiux.services.items.ui',
                'services.uiux.services.items.uxResearch',
                'services.uiux.services.items.wireframing',
                'services.uiux.services.items.usability',
                'services.uiux.services.items.mobileFirst',
                'services.uiux.services.items.redesign',
              ].map((item, index) => (
                <li key={index} className='flex items-center gap-3'>
                  <div className='w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center'>
                    <FaCheck className='text-accent text-sm' />
                  </div>
                  <span className='text-gray-700'>{t(item)}</span>
                </li>
              ))}
            </ul>
            <p className='text-gray-900'>
              {t('services.uiux.services.bottomLine')}
            </p>
          </div>
          <div className='relative w-full aspect-[4/3] md:aspect-[16/10] lg:aspect-[16/9]'>
            <img
              src={WebDesignWhyChooseUsImg}
              alt={t('services.uiux.customDesign.imageAlt')}
              className='w-full h-full object-cover rounded-lg'
            />
          </div>
        </div>

        {/* What We Deliver Section */}
        <div className='mb-20 max-w-7xl mx-auto'>
          <div className='text-center max-w-3xl mx-auto mb-12'>
            <h3 className='text-3xl font-bold text-gray-900 mb-4 capitalize'>
              {t('services.uiux.delivery.title')}
            </h3>
            <h3 className='text-lg font-semibold text-accent mt-6'>
              {t('services.uiux.delivery.subtitle')}
            </h3>
            <p className='text-lg text-gray-600'>
              {t('services.uiux.delivery.description')}
            </p>
          </div>
          <div className='grid md:grid-cols-2 gap-8'>
            {[
              {
                title: 'services.uiux.delivery.items.personas.title',
                description:
                  'services.uiux.delivery.items.personas.description',
              },
              {
                title: 'services.uiux.delivery.items.mockups.title',
                description: 'services.uiux.delivery.items.mockups.description',
              },
              {
                title: 'services.uiux.delivery.items.prototypes.title',
                description:
                  'services.uiux.delivery.items.prototypes.description',
              },
              {
                title: 'services.uiux.delivery.items.workshops.title',
                description:
                  'services.uiux.delivery.items.workshops.description',
              },
            ].map((item, index) => {
              const Icon = deliveryIcons[t(item.title)] || FaCheck;
              return (
                <div
                  key={index}
                  className='bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100'
                >
                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0'>
                      <Icon className='text-accent text-xl' />
                    </div>
                    <div>
                      <h4 className='text-xl font-semibold text-gray-900 mb-3 capitalize'>
                        {t(item.title)}
                      </h4>
                      <p className='text-gray-600 leading-relaxed'>
                        {t(item.description)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Who Needs UI/UX Design Section */}
        {/* <div className='mb-20 bg-gray-50 rounded-2xl py-16 px-8'>
          <div className='max-w-7xl mx-auto'>
            <div className='text-center max-w-3xl mx-auto mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-12 text-center capitalize'>
                {t('services.uiux.targetAudience.title')}
              </h2>

              <p className='text-lg text-gray-600'>
                {t('services.uiux.targetAudience.description')}
              </p>
            </div>

            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
              {[
                t('services.uiux.targetAudience.items.startups'),
                t('services.uiux.targetAudience.items.businesses'),
                t('services.uiux.targetAudience.items.saas'),
                t('services.uiux.targetAudience.items.ecommerce'),
              ].map((item, index) => {
                const Icon = targetAudienceIcons[item];
                return (
                  <div
                    key={index}
                    className='bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col items-center text-center group'
                  >
                    <div className='w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                      <Icon className='text-accent text-2xl' />
                    </div>
                    <p className='text-gray-800 font-base leading-snug'>
                      {item}
                    </p>
                  </div>
                );
              })}
            </div>
            <p className='mt-12 text-lg font-semibold text-gray-900 text-center'>
              {t('services.uiux.targetAudience.bottomLine')}
            </p>
          </div>
        </div> */}

        <div className='mb-24 bg-gradient-to-br from-accent/5 to-white rounded-3xl py-20 px-8'>
          <div className='max-w-7xl mx-auto'>
            {/* Heading + description */}
            <div className='text-center max-w-3xl mx-auto mb-16'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 capitalize'>
                {t('services.uiux.targetAudience.title')}
              </h2>
              <p className='text-lg text-gray-600'>
                {t('services.uiux.targetAudience.description')}
              </p>
            </div>

            {/* Cards */}
            <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-4'>
              {[
                t('services.uiux.targetAudience.items.startups'),
                t('services.uiux.targetAudience.items.businesses'),
                t('services.uiux.targetAudience.items.saas'),
                t('services.uiux.targetAudience.items.ecommerce'),
              ].map((item, index) => {
                const Icon = targetAudienceIcons[item];
                return (
                  <div
                    key={index}
                    className='bg-white rounded-xl p-8 border border-gray-100 flex flex-col items-center text-center transition-all duration-300
                       hover:-translate-y-1 hover:shadow-lg hover:ring-2 hover:ring-accent/20 group'
                  >
                    {/* Blurred background icon for depth */}
                    <div className='relative mb-5'>
                      <Icon className='absolute inset-0 text-accent/10 text-6xl blur-sm' />
                      <Icon className='relative text-accent text-2xl z-10' />
                    </div>

                    <p className='text-gray-800 text-base leading-snug'>
                      {item}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bottom line */}
            <div className='mt-20 flex justify-center'>
              <div className='bg-accent/10 text-accent font-semibold rounded-2xl px-6 py-4 max-w-xl text-center shadow-sm'>
                {t('services.uiux.targetAudience.bottomLine')}
              </div>
            </div>
          </div>
        </div>

        {/* Technologies & Tools Section */}

        <div className='mb-20'>
          <div className='text-center max-w-3xl mx-auto mb-12'>
            <h3 className='text-3xl font-bold text-gray-900 mb-6 capitalize'>
              {t('services.uiux.technologies.title')}
            </h3>
            <p className='text-lg text-gray-600 leading-relaxed'>
              {t('services.uiux.technologies.description')}
            </p>
          </div>

          <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-4'>
            {[
              {
                icon: SiFigma,
                name: t('services.uiux.technologies.tools.figma'),
                color: 'text-[#F24E1E]', // Figma orange
              },
              {
                icon: SiAdobexd,
                name: t('services.uiux.technologies.tools.adobexd'),
                color: 'text-[#FF61F6]', // Adobe XD pink
              },
              {
                icon: SiSketch,
                name: t('services.uiux.technologies.tools.sketch'),
                color: 'text-[#F7B500]', // Sketch yellow
              },
              {
                icon: SiInvision,
                name: t('services.uiux.technologies.tools.invision'),
                color: 'text-[#FF3366]', // InVision pink
              },
              {
                icon: SiMiro,
                name: t('services.uiux.technologies.tools.miro'),
                color: 'text-[#1CA6FF]', // Miro blue
              },
              {
                icon: SiWebflow,
                name: t('services.uiux.technologies.tools.webflow'),
                color: 'text-[#4353FF]', // Webflow blue
              },
            ].map((tool, index) => (
              <div
                key={index}
                className='group relative bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent/30 hover:-translate-y-1'
              >
                {/* Background decoration */}
                <div className='absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='relative flex flex-col items-center text-center space-y-3 sm:space-y-4'>
                  {/* Icon container with background */}
                  <div className='w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex items-center justify-center rounded-2xl bg-gray-50 group-hover:bg-white transition-all duration-300 group-hover:scale-110 mb-2 sm:mb-3 md:mb-4'>
                    <tool.icon
                      className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 ${tool.color} group-hover:scale-110 transition-all duration-300`}
                    />
                  </div>
                  <p className='text-xs sm:text-sm md:text-base font-semibold text-gray-800 group-hover:text-accent transition-colors duration-300 leading-tight'>
                    {tool.name}
                  </p>
                  {/* Subtle accent line */}
                  <div className='w-8 h-0.5 bg-gradient-to-r from-accent to-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* special offer */}

        <div className='mb-20 relative overflow-hidden'>
          {/* Animated BG with floating particles effect */}
          <div className='absolute inset-0 bg-gradient-to-r from-accent via-primary to-accent bg-[length:200%_100%] animate-gradient-x opacity-10'></div>

          {/* Decorative elements */}
          <div className='absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl'></div>
          <div className='absolute bottom-0 left-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl'></div>

          <div className='relative bg-[#09043C] rounded-lg sm:rounded-xl md:rounded-2xl p-5 sm:p-8 lg:p-14 border border-white/5 shadow-[0_0_25px_rgba(84,189,149,0.15)]'>
            <div className='relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10'>
              {/* LEFT COLUMN */}
              <div className='relative'>
                {/* Glowing accent line */}
                <div className='absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-accent/0 via-accent to-accent/0 rounded-full hidden md:block'></div>

                {/* Badge with improved animation */}
                <div className='flex items-center gap-2 mb-3'>
                  <div className='relative'>
                    <HiSparkles className='text-yellow-400 w-5 h-5 animate-ping absolute opacity-70' />
                    <HiSparkles className='text-yellow-400 w-5 h-5 relative' />
                  </div>
                  <span className='bg-accent/10 border border-accent/30 text-accent px-3 py-1.5 rounded-full font-semibold text-xs uppercase tracking-wider shadow-md backdrop-blur-sm'>
                    {t('services.uiux.specialOffer.badge')}
                  </span>
                </div>

                {/* Heading with enhanced gradient */}
                <h2 className='text-xl sm:text-2xl md:text-4xl font-bold leading-tight mb-2 animate-text bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent'>
                  {t('services.uiux.specialOffer.title')}
                </h2>
                <h3 className='text-base sm:text-lg md:text-2xl text-white font-medium mb-4'>
                  {t('services.uiux.specialOffer.subtitle')}
                </h3>

                {/* CTA Buttons */}
                <div className='hidden md:flex flex-col sm:flex-row gap-3 mb-8'>
                  <button
                    onClick={handleScheduleCallClick}
                    className='relative px-5 py-3 bg-accent hover:bg-accent/90 text-white rounded-lg font-medium flex items-center justify-center gap-2 text-sm transition-all duration-300 group overflow-hidden shadow-lg shadow-accent/20'
                  >
                    {/* Button shine effect */}
                    <div className='absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out'></div>
                    <span
                      className='relative z-10'
                      dangerouslySetInnerHTML={{
                        __html: t('services.uiux.specialOffer.cta.btn1'),
                      }}
                    />
                    <FaArrowRight className='text-xs relative z-10 group-hover:translate-x-1 transition-transform duration-300' />
                  </button>
                  <button
                    onClick={() => handleLinkClick('/#AboutSection')}
                    className='relative px-5 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium text-sm transition-all duration-300 border border-white/20 hover:border-white/40 shadow-lg shadow-white/5'
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: t('services.uiux.specialOffer.cta.btn2'),
                      }}
                    />
                  </button>
                </div>

                {/* Enhanced Bottom lines with icons and styling */}
                <div className='mt-4 md:mt-0 bg-white/5 rounded-xl p-3 border border-white/10 space-y-3'>
                  <p className='text-white text-sm flex items-center gap-2 group'>
                    <span className='w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors duration-300'>
                      <FaRocket className='text-accent text-xs' />
                    </span>
                    {t('services.uiux.specialOffer.cta.bottomLine1')}
                  </p>
                  <p className='text-white text-sm flex items-center gap-2 group'>
                    <span className='w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors duration-300'>
                      <FaLightbulb className='text-accent text-xs' />
                    </span>
                    {t('services.uiux.specialOffer.cta.bottomLine2')}
                  </p>
                </div>
              </div>

              {/* RIGHT COLUMN / MOBILE MERGED FEATURE BOX */}
              <div className='bg-white/5 rounded-lg p-5 sm:p-6 backdrop-blur-sm border border-white/10 relative group hover:border-accent/30 transition-colors duration-500 shadow-lg shadow-primary/5'>
                {/* Corner accent */}
                <div className='absolute top-0 right-0 w-16 h-16 overflow-hidden'>
                  <div className='absolute top-0 right-0 w-4 h-4 bg-accent transform rotate-45 translate-x-2 -translate-y-2 group-hover:bg-accent/80 transition-colors duration-300'></div>
                </div>

                <p className='text-white text-sm sm:text-base mb-6 border-b border-white/10 pb-4'>
                  {t('services.uiux.specialOffer.description')}
                </p>

                {/* Features grid for better organization */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  {[
                    'services.uiux.specialOffer.features.strategy',
                    'services.uiux.specialOffer.features.wireframe',
                    'services.uiux.specialOffer.features.design',
                    'services.uiux.specialOffer.features.revisions',
                    'services.uiux.specialOffer.features.consultation',
                    'services.uiux.specialOffer.valueProps.quick',
                    'services.uiux.specialOffer.valueProps.conversion',
                    'services.uiux.specialOffer.valueProps.userCentered',
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className='flex items-start gap-3 group/item hover:bg-white/5 p-2 rounded-lg transition-colors duration-300'
                    >
                      <div className='w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-accent/30 transition-colors duration-300 mt-0.5'>
                        <FaCheck className='text-accent text-xs' />
                      </div>
                      <span className='text-white/90 group-hover/item:text-white transition-colors duration-300 text-sm leading-relaxed'>
                        {t(feature)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Final note with accent box */}
                <div className='mt-6 bg-accent/10 rounded-lg p-3 border border-accent/20'>
                  <p className='text-accent/90 text-sm font-medium flex items-center gap-2'>
                    <HiSparkles className='text-accent w-16 h-16' />
                    {t('services.uiux.specialOffer.valueProps.perfect')}
                  </p>
                </div>
              </div>

              {/* CTA Buttons for mobile */}
              <div className='flex md:hidden flex-col sm:flex-row gap-3 mb-5'>
                <button
                  onClick={handleScheduleCallClick}
                  className='relative px-5 py-3 bg-accent hover:bg-accent/90 text-white rounded-lg font-medium flex items-center justify-center gap-2 text-sm transition-all duration-300 group overflow-hidden shadow-lg shadow-accent/20'
                >
                  {/* Button shine effect */}
                  <div className='absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out'></div>
                  <span
                    className='relative z-10'
                    dangerouslySetInnerHTML={{
                      __html: t('services.uiux.specialOffer.cta.btn1'),
                    }}
                  />
                  <FaArrowRight className='text-xs relative z-10 group-hover:translate-x-1 transition-transform duration-300' />
                </button>
                <button
                  onClick={() => handleLinkClick('/#AboutSection')}
                  className='px-5 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium text-sm transition-all duration-300 border border-white/20 hover:border-white/40 shadow-lg shadow-white/5'
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t('services.uiux.specialOffer.cta.btn2'),
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <UiUxTestimonialsSection testimonials={testimonials} />

        {/* Projects Section */}
        <div className='mb-20'>
          <div className='text-center max-w-3xl mx-auto mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4 capitalize'>
              {t('services.uiux.projects.title')}
            </h2>
            <p className='text-lg text-gray-600'>
              {t('services.uiux.projects.subtitle')}
            </p>
          </div>
          <ProjectsCarousel projects={projectsData} />
        </div>

        {/* Related Services Section */}
        <div className='mb-20'>
          <div className='max-w-7xl mx-auto'>
            <h2 className='text-2xl font-semibold text-gray-900 mb-6 capitalize'>
              {t('services.uiux.internalLinks.title')}
            </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {[
                {
                  text: t('services.uiux.internalLinks.items.ai'),
                  url: '/services/ai-automation',
                },
                {
                  text: t('services.uiux.internalLinks.items.mobile'),
                  url: '/services/mobile-app-development',
                },
                {
                  text: t('services.uiux.internalLinks.items.marketing'),
                  url: '/services/marketing-seo',
                },
                {
                  text: t('services.uiux.internalLinks.items.ecommerce'),
                  url: '/services/ecommerce-solutions',
                },
                {
                  text: t('services.uiux.internalLinks.items.web'),
                  url: '/services/custom-web-development',
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

        {/* Final CTA Section */}
        <div className='bg-gradient-to-br from-[#09043C] to-[#1B0E63] text-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 lg:p-16 mb-20'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#54BD95] via-[#F7DCA1] to-[#D7ABE9] bg-clip-text text-transparent capitalize leading-tight'>
              {t('services.uiux.finalCta.title')}
            </h2>
            <p className='text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0'>
              {t('services.uiux.finalCta.description')}
            </p>
            <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center'>
              <button
                onClick={handleScheduleCallClick}
                className='w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-accent hover:bg-accent/90 text-white rounded-lg font-medium inline-flex items-center justify-center gap-2 transition-all duration-300 text-sm sm:text-base'
              >
                <span className='truncate'>
                  {t('services.uiux.finalCta.consultation')}
                </span>
                <FaArrowRight className='text-sm flex-shrink-0' />
              </button>
              <button
                onClick={() => handleLinkClick('/#ContactUs')}
                className='w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/20 hover:border-accent/60 text-white rounded-lg font-medium transition-all duration-300 text-sm sm:text-base'
              >
                <span className='truncate'>
                  {t('services.uiux.finalCta.quote')}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <SideContact isOpen={isContactOpen} onClose={handleCloseContact} />
    </div>
  );
};

export default UiUxDesignPage;
