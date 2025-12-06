import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaClock, FaGift, FaUsers } from 'react-icons/fa';

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const contactInfo = [
    {
      icon: (
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
          />
        </svg>
      ),
      title: t('emailLabel'),
      info: t('email'),
      action: `mailto:${t('email')}`,
    },
    {
      icon: (
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
          />
        </svg>
      ),
      title: t('phoneLabel'),
      info: t('phone'),
      action: `tel:${t('phone')}`,
    },
    {
      icon: (
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
          />
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
          />
        </svg>
      ),
      title: t('contactInfo.office.title'),
      info: t('contactInfo.office.info'),
      action: '#',
    },
    {
      icon: (
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      ),
      title: t('contactInfo.businessHours.title'),
      info: t('contactInfo.businessHours.info'),
      action: '#',
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ submitted: false, success: false, message: '' });

    const formElement = e.target;
    const formDataToSend = new FormData(formElement);

    Object.keys(formData).forEach((key) => {
      if (!formDataToSend.has(key)) {
        formDataToSend.append(key, formData[key]);
      }
    });

    fetch(`https://formsubmit.co/ajax/${t('email')}`, {
      method: 'POST',
      body: formDataToSend,
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
        setFormStatus({
          submitted: true,
          success: true,
          message: t('contactForm.successMessage'),
        });
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        formElement.reset();

        setTimeout(() => {
          setFormStatus({
            submitted: false,
            success: false,
            message: '',
          });
        }, 5000);
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsSubmitting(false);
        setFormStatus({
          submitted: true,
          success: false,
          message: error.message || t('contactForm.errorMessage'),
        });
        setTimeout(() => {
          setFormStatus({
            submitted: false,
            success: false,
            message: '',
          });
        }, 5000);
      });
  };

  return (
    <section
      className='relative py-16 font-raleway overflow-hidden'
      id='ContactUs'
    >
      {/* Background Decorative Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute -top-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl'></div>
        <div className='absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl'></div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-accent/10 to-blue-500/10 rounded-full blur-3xl'></div>
      </div>

      <div className='section-container relative'>
        <div className='text-center mb-12'>
          <h2 className='heading-section heading-spacing-medium text-4xl md:text-5xl font-poppins bg-gradient-to-r from-gray-900 via-accent to-gray-900 bg-clip-text text-transparent animate-gradient capitalize'>
            {t('contactTitle')}
          </h2>
          <div className='inline-block px-8 py-2'>
            <h3 className='text-2xl md:text-3xl font-semibold bg-gradient-to-r from-[#86c07a] via-[#0d5656] to-[#0d375e] bg-clip-text text-transparent capitalize'>
              {t('contactForm.title')}
            </h3>
          </div>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed'>
            {t('contactSubtitle')}
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto'>
          {/* Contact Form */}
          <div className='bg-[#09043C] text-gray-300 rounded-3xl p-6 md:p-8 shadow-2xl transform hover:scale-[1.02] transition-all duration-500 relative overflow-hidden group'>
            {/* Form Background Effects */}
            <div className='absolute inset-0 bg-gradient-to-br from-accent/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            <div className='absolute -right-10 -top-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all duration-500'></div>
            <div className='absolute -left-10 -bottom-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500'></div>

            <div className='relative'>
              {formStatus.submitted && (
                <div
                  className={`mb-4 p-3 rounded-lg transform transition-all duration-500 ${
                    formStatus.success
                      ? 'bg-green-50 border border-green-200 text-green-800'
                      : 'bg-red-50 border border-red-200 text-red-800'
                  }`}
                >
                  {formStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className='space-y-4'>
                {/* Name */}
                <div className='group'>
                  <label
                    htmlFor='name'
                    className='block text-gray-300 font-medium mb-1 text-sm group-focus-within:text-accent transition-colors duration-300'
                  >
                    {t('contactForm.fullNameLabel')}
                  </label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-slate-600 text-gray-100 placeholder-slate-400 focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 backdrop-blur-sm'
                    placeholder={t('contactForm.fullNamePlaceholder')}
                  />
                </div>

                {/* Email */}
                <div className='group'>
                  <label
                    htmlFor='email'
                    className='block text-gray-300 font-medium mb-1 text-sm group-focus-within:text-accent transition-colors duration-300'
                  >
                    {t('contactForm.emailLabel')}
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-slate-600 text-gray-100 placeholder-slate-400 focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 backdrop-blur-sm'
                    placeholder={t('contactForm.emailPlaceholder')}
                  />
                </div>

                {/* Message */}
                <div className='group'>
                  <label
                    htmlFor='message'
                    className='block text-gray-300 font-medium mb-1 text-sm group-focus-within:text-accent transition-colors duration-300'
                  >
                    {t('contactForm.projectDetailsLabel')}
                  </label>
                  <textarea
                    name='message'
                    id='message'
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className='w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-slate-600 text-gray-100 placeholder-slate-400 focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 resize-none backdrop-blur-sm'
                    placeholder={t('contactForm.projectDetailsPlaceholder')}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-base transition-all duration-300 relative overflow-hidden group ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed text-white'
                      : 'bg-accent hover:bg-accent/90 text-white hover:scale-105 transform'
                  }`}
                >
                  <span className='absolute inset-0 bg-gradient-to-r from-accent/0 via-white/20 to-accent/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000'></span>
                  {isSubmitting ? (
                    <div className='flex items-center justify-center'>
                      <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2'></div>
                      {t('contactForm.sendingMessage')}
                    </div>
                  ) : (
                    t('contactForm.sendMessageButton')
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className='space-y-6'>
            <div className='bg-white rounded-2xl p-8 shadow-md'>
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-4 ${
                    index < contactInfo.length - 1 ? 'mb-6' : ''
                  }`}
                >
                  <div className='flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent'>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-800 mb-1'>
                      {item.title}
                    </h4>
                    <a
                      href={item.action}
                      className='text-gray-600 hover:text-accent transition-colors duration-300'
                    >
                      {item.info}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Why Choose Us Section */}
            <div className='bg-white rounded-2xl p-8 shadow-md mt-6'>
              <h3 className='text-xl font-semibold text-gray-900 mb-6 text-center'>
                {t('contactInfo.whyChooseUs.title')}
              </h3>
              <div className='space-y-6'>
                <div className='flex items-start space-x-4'>
                  <div className='flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent'>
                    <FaClock className='w-6 h-6' />
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-800 mb-1'>
                      {t('contactInfo.whyChooseUs.quickResponse.title')}
                    </h4>
                    <p className='text-gray-600 text-sm'>
                      {t('contactInfo.whyChooseUs.quickResponse.description')}
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent'>
                    <FaGift className='w-6 h-6' />
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-800 mb-1'>
                      {t('contactInfo.whyChooseUs.freeConsultation.title')}
                    </h4>
                    <p className='text-gray-600 text-sm'>
                      {t(
                        'contactInfo.whyChooseUs.freeConsultation.description'
                      )}
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent'>
                    <FaUsers className='w-6 h-6' />
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-800 mb-1'>
                      {t('contactInfo.whyChooseUs.expertTeam.title')}
                    </h4>
                    <p className='text-gray-600 text-sm'>
                      {t('contactInfo.whyChooseUs.expertTeam.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
