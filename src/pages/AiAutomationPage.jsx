import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AiAutomationTestimonialsSection from '../components/AiAutomationTestimonialsSection';
import ProjectsCarousel from '../components/ProjectsCarousel';
import RelatedServices from '../components/RelatedServices';
import {
  AiAutomationHeader,
  AiAutomationIntro,
  WebDesignWhyChooseUsImg,
  MenAvatar,
  WomenAvatar,
  ZapierAi,
  Make,
  MailChimp,
  Zapier,
} from '../assets';

// Import icons
import {
  FaArrowRight,
  FaRobot,
  FaCheck,
  FaUsers,
  FaBook,
  FaCogs,
  FaTools,
  FaLightbulb,
  FaPlayCircle,
  FaFileAlt,
  FaCheckCircle,
  FaLightbulb as FaLightbulbSolid,
  FaPencilAlt,
  FaClock,
  FaChartLine,
} from 'react-icons/fa';
import {
  SiNotion,
  SiZapier,
  SiOpenai,
  SiAirtable,
  SiCanva,
  SiSlack,
} from 'react-icons/si';
import UiUxTestimonialsSection from '../components/UiUxTestimonialsSection';

const AiAutomationPage = ({ openSidebar }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
      key: 'zapierAiMailchimp',
      image: ZapierAi,
      title: t('services.ai.projects.items.zapierAiMailchimp.title'),
      description: t(
        'services.ai.projects.items.zapierAiMailchimp.description'
      ),
      imageAlt: t('services.ai.projects.items.zapierAiMailchimp.title'),
      link: t('services.ai.projects.items.zapierAiMailchimp.link'),
    },
    {
      key: 'makeMailchimp',
      image: Make,
      title: t('services.ai.projects.items.makeMailchimp.title'),
      description: t('services.ai.projects.items.makeMailchimp.description'),
      imageAlt: t('services.ai.projects.items.makeMailchimp.title'),
      link: t('services.ai.projects.items.makeMailchimp.link'),
    },
    {
      key: 'mailchimpAutomation',
      image: MailChimp,
      title: t('services.ai.projects.items.mailchimpAutomation.title'),
      description: t(
        'services.ai.projects.items.mailchimpAutomation.description'
      ),
      imageAlt: t('services.ai.projects.items.mailchimpAutomation.title'),
      link: t('services.ai.projects.items.mailchimpAutomation.link'),
    },
    {
      key: 'zapierIntegration',
      image: Zapier,
      title: t('services.ai.projects.items.zapierIntegration.title'),
      description: t(
        'services.ai.projects.items.zapierIntegration.description'
      ),
      imageAlt: t('services.ai.projects.items.zapierIntegration.title'),
      link: t('services.ai.projects.items.zapierIntegration.link'),
    },
  ];

  const features = [
    {
      title: 'services.ai.features.items.tools.title',
      description: 'services.ai.features.items.tools.description',
      icon: 'FaRobot',
      highlights: [
        'services.ai.features.items.tools.highlights.chatgpt',
        'services.ai.features.items.tools.highlights.writing',
        'services.ai.features.items.tools.highlights.scheduling',
        'services.ai.features.items.tools.highlights.analysis',
      ],
    },
    {
      title: 'services.ai.features.items.guides.title',
      description: 'services.ai.features.items.guides.description',
      icon: 'FaBook',
      highlights: [
        'services.ai.features.items.guides.highlights.video',
        'services.ai.features.items.guides.highlights.docs',
        'services.ai.features.items.guides.highlights.practices',
        // 'services.ai.features.items.guides.highlights.tips',
      ],
    },
    {
      title: 'services.ai.features.items.practical.title',
      description: 'services.ai.features.items.practical.description',
      icon: 'FaCogs',
      highlights: [
        'services.ai.features.items.practical.highlights.email',
        'services.ai.features.items.practical.highlights.tasks',
        'services.ai.features.items.practical.highlights.meetings',
        // 'services.ai.features.items.practical.highlights.decisions',
      ],
    },
    {
      title: 'services.ai.features.items.templates.title',
      description: 'services.ai.features.items.templates.description',
      icon: 'FaTools',
      highlights: [
        'services.ai.features.items.templates.highlights.projects',
        'services.ai.features.items.templates.highlights.workflows',
        'services.ai.features.items.templates.highlights.process',
        'services.ai.features.items.templates.highlights.integrations',
      ],
    },
    {
      title: 'services.ai.features.items.courses.title',
      description: 'services.ai.features.items.courses.description',
      icon: 'FaLightbulb',
      highlights: [
        'services.ai.features.items.courses.highlights.video',
        'services.ai.features.items.courses.highlights.cases',
        'services.ai.features.items.courses.highlights.interviews',
        'services.ai.features.items.courses.highlights.implementation',
      ],
    },
  ];

  const featureIcons = {
    [t('services.ai.features.items.tools.title')]: FaRobot,
    [t('services.ai.features.items.guides.title')]: FaBook,
    [t('services.ai.features.items.practical.title')]: FaCogs,
    [t('services.ai.features.items.templates.title')]: FaTools,
    [t('services.ai.features.items.courses.title')]: FaLightbulb,
  };

  const targetAudienceIcons = {
    [t('services.ai.targetAudience.items.freelancers')]: FaPlayCircle,
    [t('services.ai.targetAudience.items.creators')]: FaFileAlt,
    [t('services.ai.targetAudience.items.entrepreneurs')]: FaCheckCircle,
    [t('services.ai.targetAudience.items.remote')]: FaLightbulbSolid,
    [t('services.ai.targetAudience.items.anyone')]: FaCheck,
  };

  const resourceIcons = {
    FaPencilAlt,
    FaFileAlt,
    FaClock,
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

  const handleLearnMore = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.querySelector('#ContactUs');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-[#54BD95]/15 via-[#F7DCA1]/15 to-[#D7ABE9]/15 relative'>
      {/* Meta tags for AI Automation page */}
      <title>{t('meta.aiAutomation.title')}</title>
      <meta name='description' content={t('meta.aiAutomation.description')} />
      <meta property='og:title' content={t('meta.aiAutomation.title')} />
      <meta
        property='og:description'
        content={t('meta.aiAutomation.description')}
      />
      <meta property='og:type' content='website' />
      <meta
        property='og:url'
        content='https://bwdigit.com/services/ai-automation'
      />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={t('meta.aiAutomation.title')} />
      <meta
        name='twitter:description'
        content={t('meta.aiAutomation.description')}
      />

      <div className='absolute inset-0 bg-gradient-to-tr from-[#54BD95]/10 to-transparent pointer-events-none -z-10'></div>

      {/* Hero Section */}
      <div className='bg-[#09043C] text-white py-20 pt-30'>
        <div className='container mx-auto px-4 max-w-7xl'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6 text-white'>
              <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold leading-tight bg-gradient-to-r from-[#54BD95] via-[#F7DCA1] to-[#D7ABE9] bg-clip-text text-transparent capitalize'>
                {t('services.ai.hero.title')}
              </h1>
              <p className='text-lg text-gray-300 leading-relaxed max-w-lg'>
                {t('services.ai.hero.description')}
              </p>
              <button
                onClick={openSidebar}
                className='px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-lg font-medium inline-flex items-center gap-2 transition-all duration-300'
              >
                {t('services.ai.hero.cta')}
                <FaArrowRight className='text-sm' />
              </button>
            </div>
            <div className='relative w-full'>
              <img
                src={AiAutomationHeader}
                alt={t('services.ai.hero.imageAlt')}
                className='w-full h-full max-h-[500px] max-w-[500px] object-cover rounded-lg'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className='container mx-auto px-4 py-16 max-w-7xl'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>
            {t('services.ai.features.title')}
          </h2>
          <h3 className='text-xl text-accent mb-4'>
            {t('services.ai.features.subtitle')}
          </h3>
          <p className='text-gray-600 text-lg'>
            {t('services.ai.features.description')}
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => {
            const Icon = featureIcons[t(feature.title)];
            return (
              <div
                key={index}
                className='bg-white rounded-xl p-4 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group'
              >
                <div className='flex items-start gap-4 mb-6'>
                  <div className='w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors'>
                    <Icon className='text-accent text-2xl' />
                  </div>
                  <div>
                    <h4 className='text-xl font-semibold text-gray-900 mb-2 group-hover:text-accent transition-colors'>
                      {t(feature.title)}
                    </h4>
                    <p className='text-gray-600 leading-relaxed'>
                      {t(feature.description)}
                    </p>
                  </div>
                </div>

                <div className='pl-16'>
                  <div className='space-y-3'>
                    {feature.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className='flex items-start gap-3 text-gray-700 min-w-0'
                      >
                        {/* Icon container to preserve alignment */}
                        <div className='w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5'>
                          <FaCheck className='text-accent text-sm w-4 h-4' />
                        </div>

                        {/* Text */}
                        <span className='text-sm leading-relaxed flex-1'>
                          {t(highlight)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className='mt-6 pl-16'>
                  <button
                    onClick={handleLearnMore}
                    className='text-accent hover:text-accent/80 flex items-center gap-2 text-sm font-medium group/btn'
                  >
                    {t('common.learnMore')}
                    <FaArrowRight className='text-xs group-hover/btn:translate-x-1 transition-transform' />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Target Audience Section */}
      <div className='bg-gray-50 py-16'>
        <div className='container mx-auto px-4 max-w-7xl'>
          <div className='text-center max-w-3xl mx-auto mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4 capitalize'>
              {t('services.ai.targetAudience.title')}
            </h2>
            <p className='text-gray-600 text-lg'>
              {t('services.ai.targetAudience.description')}
            </p>
          </div>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              'services.ai.targetAudience.items.freelancers',
              'services.ai.targetAudience.items.creators',
              'services.ai.targetAudience.items.entrepreneurs',
              'services.ai.targetAudience.items.remote',
              'services.ai.targetAudience.items.anyone',
            ].map((item, index) => {
              const Icon = targetAudienceIcons[t(item)] || FaUsers;
              return (
                <div
                  key={index}
                  className='bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex items-center gap-4'
                >
                  <div className='w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0'>
                    <Icon className='text-accent text-lg' />
                  </div>
                  <p className='text-gray-800 font-medium'>{t(item)}</p>
                </div>
              );
            })}
          </div>
          <div className='mt-20 flex justify-center'>
            <div className='bg-accent/10 text-accent font-semibold rounded-2xl px-6 py-4 max-w-xl text-center shadow-sm'>
              {t('services.ai.targetAudience.bottomLine')}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className='container mx-auto px-4 py-8 sm:py-12 md:py-16 max-w-7xl'>
        <div className='grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-8 sm:mb-12 md:mb-16'>
          <div className='space-y-4 sm:space-y-6'>
            <h2 className='text-2xl sm:text-3xl font-bold text-gray-900 capitalize'>
              {t('services.ai.benefits.title')}
            </h2>
            <h3 className='text-lg sm:text-xl text-accent'>
              {t('services.ai.benefits.subtitle')}
            </h3>
            <ul className='space-y-3 sm:space-y-4'>
              {[
                'services.ai.benefits.items.tools',
                'services.ai.benefits.items.consulting',
                'services.ai.benefits.items.templates',
                'services.ai.benefits.items.solutions',
              ].map((item, index) => (
                <li key={index} className='flex items-center gap-3'>
                  <div className='w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0'>
                    <FaCheck className='text-accent text-xs sm:text-sm' />
                  </div>
                  <span className='text-gray-700 text-sm sm:text-base'>
                    {t(item)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className='relative w-full aspect-[4/3] md:aspect-[16/10] lg:aspect-[16/9]'>
            <img
              src={WebDesignWhyChooseUsImg}
              alt={t('services.ai.benefits.imageAlt')}
              className='w-full h-full object-cover rounded-lg'
            />
          </div>
        </div>
      </div>

      {/* Popular Resources Section */}
      <div className='bg-gray-50 py-16'>
        <div className='container mx-auto px-4 max-w-7xl'>
          <div className='text-center max-w-3xl mx-auto mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              {t('services.ai.resources.title')}
            </h2>
            <p className='text-lg text-gray-600'>
              {t('services.ai.resources.subtitle')}
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {[
              {
                title: 'services.ai.resources.items.chatgpt.title',
                description: 'services.ai.resources.items.chatgpt.description',
                icon: 'FaPencilAlt',
                link: '/resources/chatgpt-freelance-guide',
                category: 'services.ai.resources.items.chatgpt.category',
              },
              {
                title: 'services.ai.resources.items.business.title',
                description: 'services.ai.resources.items.business.description',
                icon: 'FaFileAlt',
                link: '/resources/ai-business-plan',
                category: 'services.ai.resources.items.business.category',
              },
              {
                title: 'services.ai.resources.items.automation.title',
                description:
                  'services.ai.resources.items.automation.description',
                icon: 'FaClock',
                link: '/resources/notion-zapier-automation',
                category: 'services.ai.resources.items.automation.category',
              },
            ].map((resource, index) => {
              const Icon = resourceIcons[resource.icon];
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
                      <span className='inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-3'>
                        {t(resource.category)}
                      </span>
                      <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                        {t(resource.title)}
                      </h3>
                      <p className='text-gray-600 leading-relaxed mb-4'>
                        {t(resource.description)}
                      </p>
                      <button
                        onClick={handleLearnMore}
                        className='text-accent hover:text-accent/80 flex items-center gap-2 text-sm font-medium group'
                      >
                        {t('common.learnMore')}
                        <FaArrowRight className='text-xs group-hover:translate-x-1 transition-transform' />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='container mx-auto px-4 py-8 sm:py-12 md:py-16 max-w-7xl'>
        <div className='relative overflow-hidden bg-gradient-to-br from-[#09043C] via-[#1A1257] to-[#2D1B6B] rounded-lg sm:rounded-xl md:rounded-2xl text-white p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl'>
          {/* Background decorative elements */}
          <div className='absolute top-0 left-0 w-full h-full'>
            <div className='absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-1/3 lg:h-1/3 bg-gradient-to-br from-[#54BD95]/20 to-transparent rounded-full blur-2xl sm:blur-3xl transform translate-x-1/2 -translate-y-1/2'></div>
            <div className='absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-1/3 lg:h-1/3 bg-gradient-to-tr from-[#D7ABE9]/20 to-transparent rounded-full blur-2xl sm:blur-3xl transform -translate-x-1/2 translate-y-1/2'></div>
          </div>

          {/* Content */}
          <div className='relative z-10 text-center max-w-4xl mx-auto'>
            <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#54BD95] via-[#F7DCA1] to-[#D7ABE9] bg-clip-text text-transparent leading-tight px-2 sm:px-0'>
              {t('services.ai.cta.title')}
            </h2>

            <p className='text-gray-200 text-lg'>
              {t('services.ai.cta.description')}
            </p>

            {/* Additional features/benefits */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-10 md:mt-12'>
              {[
                {
                  icon: FaClock,
                  title: t('services.ai.cta.features.time'),
                  description: t('services.ai.cta.features.timeDesc'),
                },
                {
                  icon: FaRobot,
                  title: t('services.ai.cta.features.automation'),
                  description: t('services.ai.cta.features.automationDesc'),
                },
                {
                  icon: FaChartLine,
                  title: t('services.ai.cta.features.growth'),
                  description: t('services.ai.cta.features.growthDesc'),
                },
                {
                  icon: FaChartLine,
                  title: t('services.ai.cta.features.scale'),
                  description: t('services.ai.cta.features.scaleDesc'),
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className='text-center p-3 sm:p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300'
                >
                  <feature.icon className='w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-[#54BD95]' />
                  <h3 className='text-base sm:text-lg font-semibold mb-1 sm:mb-2 leading-snug'>
                    {feature.title}
                  </h3>
                  <p className='text-xs sm:text-sm text-gray-300 leading-relaxed'>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className='flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 px-2 sm:px-0'>
              {[
                {
                  text: 'services.ai.cta.buttons.explore',
                  action: handleLearnMore,
                  primary: true,
                },
                {
                  text: 'services.ai.cta.buttons.book',
                  action: openSidebar,
                  primary: false,
                },
              ].map((button, index) => (
                <button
                  key={index}
                  onClick={button.action}
                  className={`
                    w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium inline-flex items-center justify-center gap-2 
                    transition-all duration-300 transform hover:scale-105 text-sm sm:text-base
                    ${
                      button.primary
                        ? 'bg-gradient-to-r from-[#54BD95] to-[#54BD95]/80 text-white hover:shadow-lg hover:shadow-[#54BD95]/20'
                        : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20'
                    }
                  `}
                >
                  <span className='truncate'>{t(button.text)}</span>
                  <FaArrowRight
                    className={`text-sm flex-shrink-0 ${
                      button.primary ? 'text-white' : 'text-white/80'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      {/* <AiAutomationTestimonialsSection testimonials={testimonials} /> */}

      <UiUxTestimonialsSection testimonials={testimonials} />

      {/* Projects Section */}
      <div className='container mx-auto px-4 py-16 max-w-7xl'>
        <div className='text-center max-w-3xl mx-auto mb-12'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>
            {t('services.ai.projects.title')}
          </h2>
          <p className='text-lg text-gray-600'>
            {t('services.ai.projects.subtitle')}
          </p>
        </div>
        <ProjectsCarousel projects={projectsData} />
      </div>

      {/* <div className='container mx-auto px-4 py-16 max-w-7xl'>
        <div className='text-center max-w-3xl mx-auto mb-12'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>
            {t('services.ai.tools.title')}
          </h2>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-4'>
          {[
            {
              icon: SiNotion,
              name: t('services.ai.tools.notion'),
              color: 'text-black',
            },
            {
              icon: SiZapier,
              name: t('services.ai.tools.zapier'),
              color: 'text-orange-500',
            },
            {
              icon: SiOpenai,
              name: t('services.ai.tools.openai'),
              color: 'text-green-600',
            },
            {
              icon: SiAirtable,
              name: t('services.ai.tools.airtable'),
              color: 'text-yellow-500',
            },
            {
              icon: SiCanva,
              name: t('services.ai.tools.canva'),
              color: 'text-purple-600',
            },
            {
              icon: SiSlack,
              name: t('services.ai.tools.slack'),
              color: 'text-blue-500',
            },
          ].map((tool, index) => (
            <div
              key={index}
              className='group relative bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent/30 hover:-translate-y-1'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <div className='relative flex flex-col items-center text-center space-y-3 sm:space-y-4'>
                <div className='w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex items-center justify-center rounded-2xl bg-gray-50 group-hover:bg-white transition-all duration-300 group-hover:scale-110 mb-2 sm:mb-3 md:mb-4'>
                  <tool.icon
                    className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 ${tool.color} group-hover:scale-110 transition-all duration-300`}
                  />
                </div>
                <p className='text-xs sm:text-sm md:text-base font-semibold text-gray-800 group-hover:text-accent transition-colors duration-300 leading-tight'>
                  {tool.name}
                </p>
                <div className='w-8 h-0.5 bg-gradient-to-r from-accent to-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* <RelatedServices
        services={[
          {
            path: '/services/marketing-seo',
            titleKey: 'services.marketingSeo.hero.title',
            descriptionKey: 'services.marketingSeo.hero.description',
          },
          {
            path: '/services/ecommerce-solutions',
            titleKey: 'services.ecommerce.hero.title',
            descriptionKey: 'services.ecommerce.hero.description',
          },
          {
            path: '/services/custom-web-development',
            titleKey: 'services.customWebDev.hero.title',
            descriptionKey: 'services.customWebDev.hero.description',
          },
        ]}
      /> */}
    </div>
  );
};

export default AiAutomationPage;
