import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Logo } from '../assets';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  FaArrowRight,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaPinterest,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa';

const Footer = ({ openSidebar }) => {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const footerLinks = {
    mainSections: [
      { name: t('footer.home'), route: '/', id: 'HeroSection' },
      { name: t('portfolio.title'), route: '/', id: 'Portfolio' },
      { name: t('footer.services'), route: '/', id: 'ServicesSection' },
      { name: t('footer.whyChooseUs'), route: '/', id: 'WhyChooseUs' },
    ],
    additionalSections: [
      {
        name: t('footer.coreCompetencies'),
        route: '/',
        id: 'CoreCompetenciesSection',
      },
      { name: t('footer.howWeWork'), route: '/', id: 'HowWeWorkSection' },
      { name: t('footer.aboutUs'), route: '/', id: 'AboutSection' },
      {
        name: t('footer.missionVision'),
        route: '/',
        id: 'MissionVisionSection',
      },
    ],
    contactInfo: [
      { name: t('footer.faq'), route: '/', id: 'FAQSection' },
      {
        name: t('footer.testimonials'),
        route: '/',
        id: 'TestimonialsSection',
      },
      { name: t('footer.contactUs'), action: openSidebar, isContact: true },
    ],
  };

  useEffect(() => {
    if (window.localStorage.getItem('subscriptionSubmitted') === 'true') {
      setSubscriptionStatus({
        submitted: true,
        success: true,
        message: t('footer.newsletterSuccess'),
      });
      window.localStorage.removeItem('subscriptionSubmitted');

      const timer = setTimeout(() => {
        setSubscriptionStatus({
          submitted: false,
          success: false,
          message: '',
        });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleFooterLinkClick = (section) => {
    if (section.id && section.route) {
      const targetPath = section.route + '#' + section.id;
      if (location.pathname === section.route) {
        const element = document.getElementById(section.id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(targetPath);
      }
    } else if (section.action) {
      section.action();
    }
  };

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setSubscriptionStatus({ submitted: false, success: false, message: '' });

    const formData = new FormData();
    formData.append('email', email);
    formData.append('_subject', 'New Newsletter Subscription!');
    formData.append(
      'message',
      `Email: ${email} wants to subscribe to the newsletter.`
    );

    fetch('https://formsubmit.co/ajax/info@bwdigit.com', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((err) => {
            throw err;
          });
        }
        return response.json();
      })
      .then(() => {
        setIsSubmitting(false);
        setSubscriptionStatus({
          submitted: true,
          success: true,
          message: t('footer.newsletterSuccess'),
        });
        setEmail('');

        setTimeout(() => {
          setSubscriptionStatus({
            submitted: false,
            success: false,
            message: '',
          });
        }, 5000);
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsSubmitting(false);
        setSubscriptionStatus({
          submitted: true,
          success: false,
          message:
            error.message ||
            t('footer.newsletterError') ||
            'Something went wrong. Please try again.',
        });
        setTimeout(() => {
          setSubscriptionStatus({
            submitted: false,
            success: false,
            message: '',
          });
        }, 5000);
      });
  };

  return (
    <footer className='bg-gray-900 text-white py-12' id='Footer'>
      <div className='section-container mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10'>
          <div className='lg:col-span-4'>
            <div className='flex items-center mb-6'>
              <button
                onClick={() =>
                  handleFooterLinkClick({ id: 'HeroSection', route: '/' })
                }
                className='cursor-pointer z-10'
              >
                <img src={Logo} alt='Digital Agency Logo' className='w-24' />
              </button>
            </div>
            <p className='text-gray-100 mb-6'>{t('footer.tagline')}</p>
            <div className='text-gray-100 mb-6'>
              <p>Backpack Wander GmbH</p>
              <p>Kolonnenstrasse 8, 10827 Berlin</p>
              <p>info@bwdigit.com</p>
            </div>
          </div>

          <div className='lg:col-span-6'>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
              <div>
                <h3 className='heading-small font-semibold text-white heading-spacing-small'>
                  {t('footer.navigationTitle')}
                </h3>
                <ul className='space-y-3'>
                  {footerLinks.mainSections.map((section, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handleFooterLinkClick(section)}
                        className='text-gray-100 hover:text-white transition-colors text-sm text-left bg-transparent border-none cursor-pointer'
                      >
                        {section.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className='heading-small font-semibold text-white heading-spacing-small'>
                  {t('footer.exploreTitle')}
                </h3>
                <ul className='space-y-3'>
                  {footerLinks.additionalSections.map((section, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handleFooterLinkClick(section)}
                        className='text-gray-100 hover:text-white transition-colors text-sm text-left bg-transparent border-none cursor-pointer'
                      >
                        {section.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className='heading-small font-semibold text-white heading-spacing-small'>
                  {t('footer.infoTitle')}
                </h3>
                <ul className='space-y-3'>
                  {footerLinks.contactInfo.map((item, index) => {
                    if (item.id && item.route) {
                      return (
                        <li key={index}>
                          <button
                            onClick={() => handleFooterLinkClick(item)}
                            className='text-gray-100 hover:text-white transition-colors text-sm text-left bg-transparent border-none cursor-pointer'
                          >
                            {item.name}
                          </button>
                        </li>
                      );
                    } else if (item.action) {
                      return (
                        <li key={index}>
                          <button
                            onClick={item.action}
                            className='text-gray-100 hover:text-white transition-colors text-sm text-left bg-transparent border-none cursor-pointer'
                          >
                            {item.name}
                          </button>
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div className='lg:col-span-2 flex lg:justify-end items-center mt-6 lg:mt-0'>
            <div className='flex space-x-2'>
              <button
                onClick={() => i18n.changeLanguage('en')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors
                  ${
                    i18n.language === 'en'
                      ? 'bg-accent text-white'
                      : 'text-gray-100 hover:text-white'
                  }
                `}
              >
                {t('footer.enButton')}
              </button>
              <button
                onClick={() => i18n.changeLanguage('de')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors
                  ${
                    i18n.language === 'de'
                      ? 'bg-accent text-white'
                      : 'text-gray-100 hover:text-white'
                  }
                `}
              >
                {t('footer.deButton')}
              </button>
              <button
                onClick={() => i18n.changeLanguage('sr')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors
                  ${
                    i18n.language === 'sr'
                      ? 'bg-accent text-white'
                      : 'text-gray-100 hover:text-white'
                  }
                `}
              >
                {t('footer.srButton')}
              </button>
            </div>
          </div>
        </div>

        <div className='flex justify-between items-center gap-4 flex-wrap w-full'>
          {subscriptionStatus.submitted && (
            <div
              className={`mb-4 p-3 rounded text-sm ${
                subscriptionStatus.success
                  ? 'bg-green-800 text-green-100'
                  : 'bg-red-800 text-red-100'
              }`}
            >
              {subscriptionStatus.message}
            </div>
          )}

          <form
            onSubmit={handleEmailSubmit}
            className='relative w-full md:max-w-[400px] order-2 md:order-1 '
          >
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('footer.emailPlaceholder')}
              className='w-full rounded-full py-3 px-4 pr-12 text-sm border border-gray-400 focus:outline-none focus:ring-2 focus:ring-accent text-white'
              required
              disabled={isSubmitting}
            />

            <button
              type='submit'
              disabled={isSubmitting}
              className={`absolute right-1 top-1 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                isSubmitting
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-accent hover:bg-[#4a9d78] cursor-pointer'
              }`}
            >
              {isSubmitting ? (
                <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
              ) : (
                <FaArrowRight className='w-4 h-4 text-white' />
              )}
            </button>
          </form>
          {/* Social Media Links */}
          <div className='mb-6 order-1 md:order-2'>
            <h3 className='text-white font-semibold mb-4'>
              {t('footer.socialTitle')}
            </h3>
            <div className='flex space-x-4'>
              <a
                href='https://www.linkedin.com/showcase/bw-digit'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-100 hover:text-accent transition-colors'
                aria-label={t('footer.socialLinkedIn')}
              >
                <FaLinkedin className='w-5 h-5' />
              </a>
              <a
                href='https://www.instagram.com/bwdigit'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-100 hover:text-accent transition-colors'
                aria-label={t('footer.socialInstagram')}
              >
                <FaInstagram className='w-5 h-5' />
              </a>
              <a
                href='https://www.facebook.com/BWDigit.de'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-100 hover:text-accent transition-colors'
                aria-label={t('footer.socialFacebook')}
              >
                <FaFacebook className='w-5 h-5' />
              </a>
              <a
                href='https://de.pinterest.com/@BWDigit'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-100 hover:text-accent transition-colors'
                aria-label={t('footer.socialPinterest')}
              >
                <FaPinterest className='w-5 h-5' />
              </a>
              <a
                href='https://www.tiktok.com/@bwdigit'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-100 hover:text-accent transition-colors'
                aria-label={t('footer.socialTiktok')}
              >
                <FaTiktok className='w-5 h-5' />
              </a>
              <a
                href='https://www.youtube.com/@BWDigit'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-100 hover:text-accent transition-colors'
                aria-label={t('footer.socialYoutube')}
              >
                <FaYoutube className='w-5 h-5' />
              </a>
            </div>
          </div>
        </div>
        <div className='border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center'>
          <p className='text-gray-100 text-sm mb-4 sm:mb-0'>
            {t('footer.copyright', { currentYear }).replace(
              '{currentYear}',
              currentYear.toString()
            )}
          </p>
          <button
            onClick={() => navigate('/privacy-policy')}
            className='text-gray-100 hover:text-white transition-colors text-sm bg-transparent border-none cursor-pointer'
          >
            {t('privacyPolicyTitle')}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
