import { useEffect, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

import { Reveal } from '../motion/Reveal';
import { useI18n } from '../../i18n/I18nProvider';

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormState, string>>;

const initialFormState: ContactFormState = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactSection() {
  const { locale, messages, isRTL } = useI18n();
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    setErrors({});
    setSubmitMessage('');
  }, [locale]);

  const validateForm = (data: ContactFormState) => {
    const validationErrors: ContactFormErrors = {};

    if (!data.name.trim()) {
      validationErrors.name = messages.contact.form.validation.nameRequired;
    }

    if (!data.email.trim()) {
      validationErrors.email = messages.contact.form.validation.emailRequired;
    } else if (!emailPattern.test(data.email.trim())) {
      validationErrors.email = messages.contact.form.validation.emailInvalid;
    }

    if (!data.message.trim()) {
      validationErrors.message = messages.contact.form.validation.messageRequired;
    }

    return validationErrors;
  };

  const handleChange =
    (field: keyof ContactFormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((current) => ({
        ...current,
        [field]: event.target.value,
      }));

      if (errors[field]) {
        setErrors((current) => ({
          ...current,
          [field]: undefined,
        }));
      }

      if (submitMessage) {
        setSubmitMessage('');
      }
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedData: ContactFormState = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
    };

    const validationErrors = validateForm(trimmedData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitMessage('');
      return;
    }

    const subject = encodeURIComponent(
      `${messages.contact.mail.subjectPrefix} ${trimmedData.name}`
    );
    const body = encodeURIComponent(
      [
        `${messages.contact.mail.fieldLabels.name}: ${trimmedData.name}`,
        `${messages.contact.mail.fieldLabels.email}: ${trimmedData.email}`,
        `${messages.contact.mail.fieldLabels.phone}: ${
          trimmedData.phone || messages.contact.mail.fieldLabels.phoneNotProvided
        }`,
        '',
        `${messages.contact.mail.fieldLabels.message}:`,
        trimmedData.message,
      ].join('\n')
    );

    window.location.href = `mailto:hello@sireen.com?subject=${subject}&body=${body}`;
    setSubmitMessage(messages.contact.form.success);
    setErrors({});
    setFormData(initialFormState);
  };

  const contactRows = [
    {
      key: 'office',
      label: messages.contact.info.office,
      value: messages.contact.info.address,
      href: undefined,
    },
    {
      key: 'email',
      label: messages.contact.info.email,
      value: 'hello@sireen.com',
      href: 'mailto:hello@sireen.com',
    },
    {
      key: 'phone',
      label: messages.contact.info.telephone,
      value: '07716 534984',
      href: 'tel:+447716534984',
    },
  ] as const;

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="content-center items-center relative flex h-min w-full flex-col justify-center gap-[80px] pt-[60px] pr-0 pb-[60px] pl-0 shrink-[0]"
    >
      <div
        aria-label="Background"
        className="contact-panel absolute left-5 top-0 h-full right-5 z-[1] gap-[0px] overflow-hidden rounded-[0.625rem] bg-[rgb(16,_16,_20)] shrink-[0]"
      ></div>
      <div
        aria-label="Container"
        className="content-start items-start relative flex h-min w-full max-w-[1360px] flex-col justify-center gap-[60px] pt-0 pr-5 pb-0 pl-5 md:pr-10 md:pl-10 shrink-[0]"
      >
        <div className="relative grid h-min w-full auto-rows-min grid-cols-1 justify-center gap-[60px] rounded-[0.625rem] z-[1] lg:grid-cols-2 lg:gap-[100px] shrink-[0]">
          <Reveal
            aria-label="Content"
            className="content-start items-start relative flex w-full self-start justify-start justify-self-start gap-[40px] overflow-hidden opacity-[0.99637] flex-col"
            delay={80}
          >
            <div
              aria-label="Content"
              className="content-center items-center relative flex h-min w-full flex-col justify-center gap-[20px] overflow-hidden shrink-[0]"
            >
              <div
                aria-label="Header"
                className="content-start items-start relative flex h-min w-full flex-col justify-start gap-[10px] overflow-hidden shrink-[0]"
              >
                <div className="contents">
                  <div className="relative">
                    <div
                      aria-label="Badge"
                      className="content-center items-center relative flex size-min justify-center gap-[8px] overflow-hidden rounded-2xl bg-[rgb(40,_40,_44)] pt-[5px] pr-3 pb-[6px] pl-3"
                    >
                      <div className="relative flex flex-col justify-start whitespace-pre shrink-[0]">
                        <h2 className="font-medium text-[16px] leading-[16px] tracking-[0.5px] text-white">
                          {messages.contact.badge}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative flex w-full flex-col justify-start whitespace-pre-wrap shrink-[0]">
                  <h3
                    className="font-medium text-[40px] leading-[1.1] tracking-[-0.8px] text-white md:text-[50px]"
                    style={{ textAlign: 'start' }}
                  >
                    {messages.contact.heading}
                  </h3>
                </div>
              </div>
              <div
                aria-label="Text"
                className="content-start items-start relative flex h-min w-full flex-col justify-center gap-[40px] overflow-hidden shrink-[0]"
              >
                <div className="relative flex w-full flex-col justify-start whitespace-pre-wrap shrink-[0]">
                  <p
                    className="font-normal text-[20px] leading-[33px] tracking-[-0.3px] text-[rgb(208,_209,_219)] md:text-[22px]"
                    style={{ textAlign: 'start' }}
                  >
                    {messages.contact.description}
                  </p>
                </div>
              </div>
            </div>

            <div
              aria-label="Contact Info"
              className="content-center items-center relative flex h-min w-full flex-col justify-center gap-[30px] overflow-hidden shrink-[0]"
            >
              <div
                aria-label="Contact Info Lines"
                className="content-center items-center relative flex h-min w-full flex-col justify-center gap-[20px] overflow-hidden shrink-[0]"
              >
                {contactRows.map((row) => (
                  <div
                    key={row.key}
                    aria-label={row.label}
                    className="content-center items-start relative flex h-min w-full flex-col justify-between gap-[8px] overflow-hidden sm:flex-row shrink-[0]"
                  >
                    <div className="relative flex flex-col justify-start whitespace-pre shrink-[0]">
                      <p className="font-normal text-[18px] leading-[23.4px] tracking-[-0.1px] text-white">
                        {row.label}
                      </p>
                    </div>
                    <div className="relative flex max-w-full flex-col justify-start whitespace-pre-wrap">
                      <p
                        className="text-[18px] leading-[27px] tracking-[-0.1px] text-[rgb(208,_209,_219)]"
                        style={{ textAlign: isRTL ? 'left' : 'right' }}
                        dir="ltr"
                      >
                        {row.href ? <a href={row.href}>{row.value}</a> : row.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div
                aria-label="Border"
                className="relative h-px w-full overflow-hidden bg-[rgba(208,_209,_219,_0.1)]/10 shrink-[0]"
              ></div>
            </div>

            <div
              aria-label="Social Media"
              className="content-start items-start relative flex h-min w-full flex-col justify-center gap-[15px] overflow-hidden shrink-[0]"
            >
              <div className="relative flex flex-col justify-start whitespace-pre shrink-[0]">
                <p className="font-normal text-[18px] leading-[23.4px] tracking-[-0.1px] text-white">
                  {messages.contact.info.followUs}
                </p>
              </div>
              <div
                aria-label="Social Links"
                className="content-center items-center relative flex size-min justify-center gap-[20px] overflow-hidden shrink-[0]"
              >
                <a
                  href="https://www.instagram.com/"
                  aria-label="Instagram"
                  className="content-start items-start relative flex size-min flex-col justify-center gap-[10px] overflow-hidden text-[rgb(0,_0,_238)] shrink-[0]"
                >
                  <div aria-label="Instagram" className="relative aspect-square w-6 shrink-[0] text-black">
                    <div className="size-full overflow-hidden">
                      <img
                        src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fcfaa3ff270fa7d4d5e102e8ec9ecc7d925b5949c.svg?generation=1776714193129128&alt=media"
                        alt=""
                        className="block size-full"
                      />
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.tiktok.com/"
                  aria-label="Tiktok"
                  className="content-center items-center relative flex size-min flex-col justify-center gap-[10px] overflow-hidden text-[rgb(0,_0,_238)] shrink-[0]"
                >
                  <div aria-label="Tiktok" className="relative aspect-square w-6 shrink-[0] text-black">
                    <div className="size-full overflow-hidden">
                      <img
                        src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F9d6e98d5cc4751a7bd257788aa553c5c9902f6c8.svg?generation=1776714193175832&alt=media"
                        alt=""
                        className="block size-full"
                      />
                    </div>
                  </div>
                </a>
                <a
                  href="https://x.com/JJGerrishDev"
                  aria-label="X"
                  className="content-center items-center relative flex size-min flex-col justify-center gap-[10px] overflow-hidden text-[rgb(0,_0,_238)] shrink-[0]"
                >
                  <div aria-label="New-twitter" className="relative aspect-square w-6 fill-white text-white shrink-[0]">
                    <div className="size-full overflow-hidden fill-white">
                      <img
                        src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F4a0bee30a46b0e9380924598c1f7b14eef5a0978.svg?generation=1776714193186666&alt=media"
                        alt=""
                        className="block size-full"
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal
            aria-label="Form wrapper"
            className="contact-form-panel content-center items-center relative flex h-min w-full self-start justify-center justify-self-start gap-[10px] overflow-hidden rounded-[0.625rem] bg-white p-5 opacity-[0.990353] after:absolute after:left-0 after:top-0 after:size-full after:rounded-[0.625rem] after:border after:border-[rgb(230,_230,_230)] after:pointer-events-none after:content-[&quot;&quot;]"
            delay={160}
          >
            <div className="relative w-full">
              <form
                aria-label="Contact Form"
                className="content-start items-start relative flex h-min w-full flex-col justify-start gap-[20px] overflow-hidden"
                onSubmit={handleSubmit}
                noValidate
              >
                <label className="content-start items-start relative flex h-min w-full flex-col justify-start gap-[10px] shrink-[0]">
                  <div className="relative flex flex-col justify-start whitespace-pre shrink-[0]">
                    <p className="font-medium text-[16px] leading-[16px] tracking-[-0.1px] text-[rgb(16,_16,_20)]">
                      {messages.contact.form.labels.name}
                      <span className="text-[rgb(255,_34,_68)]">*</span>
                    </p>
                  </div>
                  <div className="relative flex w-full items-center overflow-hidden rounded-md bg-[rgb(250,_250,_250)] pt-[14px] pr-3 pb-[14px] pl-3 shrink-[0] after:absolute after:left-0 after:top-0 after:size-full after:rounded-md after:border after:border-[rgb(219,_218,_217)] after:pointer-events-none after:content-[&quot;&quot;]">
                    <input
                      type="text"
                      name="name"
                      placeholder={messages.contact.form.placeholders.name}
                      value={formData.name}
                      onChange={handleChange('name')}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      className="block grow basis-[0%] overflow-clip whitespace-nowrap bg-black/0 text-[16px] leading-[20.8px] tracking-[-0.1px] text-[rgb(16,_16,_20)] outline-none"
                      style={{ direction: isRTL ? 'rtl' : 'ltr', textAlign: 'start' }}
                    />
                  </div>
                  {errors.name ? (
                    <p id="contact-name-error" className="text-[14px] leading-[20px] text-[rgb(212,_38,_60)]">
                      {errors.name}
                    </p>
                  ) : null}
                </label>

                <label className="content-start items-start relative flex h-min w-full flex-col justify-start gap-[10px] shrink-[0]">
                  <div className="relative flex flex-col justify-start whitespace-pre shrink-[0]">
                    <p className="font-medium text-[16px] leading-[16px] tracking-[-0.1px] text-[rgb(16,_16,_20)]">
                      {messages.contact.form.labels.email}
                      <span className="text-[rgb(255,_34,_68)]">*</span>
                    </p>
                  </div>
                  <div className="relative flex w-full items-center overflow-hidden rounded-md bg-[rgb(250,_250,_250)] pt-[14px] pr-3 pb-[14px] pl-3 shrink-[0] after:absolute after:left-0 after:top-0 after:size-full after:rounded-md after:border after:border-[rgb(219,_218,_217)] after:pointer-events-none after:content-[&quot;&quot;]">
                    <input
                      type="email"
                      name="email"
                      placeholder={messages.contact.form.placeholders.email}
                      value={formData.email}
                      onChange={handleChange('email')}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'contact-email-error' : undefined}
                      className="block grow basis-[0%] overflow-clip whitespace-nowrap bg-black/0 text-[16px] leading-[20.8px] tracking-[-0.1px] text-[rgb(16,_16,_20)] outline-none"
                      dir="ltr"
                      style={{ textAlign: 'left' }}
                    />
                  </div>
                  {errors.email ? (
                    <p id="contact-email-error" className="text-[14px] leading-[20px] text-[rgb(212,_38,_60)]">
                      {errors.email}
                    </p>
                  ) : null}
                </label>

                <label className="content-start items-start relative flex h-min w-full flex-col justify-start gap-[10px] shrink-[0]">
                  <div className="relative flex flex-col justify-start whitespace-pre shrink-[0]">
                    <p className="font-medium text-[16px] leading-[16px] tracking-[-0.1px] text-[rgb(16,_16,_20)]">
                      {messages.contact.form.labels.phone}
                    </p>
                  </div>
                  <div className="relative flex w-full items-center overflow-hidden rounded-md bg-[rgb(250,_250,_250)] pt-[14px] pr-3 pb-[14px] pl-3 shrink-[0] after:absolute after:left-0 after:top-0 after:size-full after:rounded-md after:border after:border-[rgb(219,_218,_217)] after:pointer-events-none after:content-[&quot;&quot;]">
                    <input
                      type="tel"
                      name="phone"
                      placeholder={messages.contact.form.placeholders.phone}
                      value={formData.phone}
                      onChange={handleChange('phone')}
                      className="block grow basis-[0%] overflow-clip whitespace-nowrap bg-black/0 text-[16px] leading-[20.8px] tracking-[-0.1px] text-[rgb(16,_16,_20)] outline-none"
                      dir="ltr"
                      style={{ textAlign: 'left' }}
                    />
                  </div>
                </label>

                <label className="content-start items-start relative flex h-min w-full flex-col justify-start gap-[10px] shrink-[0]">
                  <div className="relative flex flex-col justify-start whitespace-pre shrink-[0]">
                    <p className="font-medium text-[16px] leading-[16px] tracking-[-0.1px] text-[rgb(16,_16,_20)]">
                      {messages.contact.form.labels.message}
                      <span className="text-[rgb(255,_34,_68)]">*</span>
                    </p>
                  </div>
                  <div className="relative flex min-h-[150px] w-full items-center overflow-hidden rounded-md bg-[rgb(250,_250,_250)] shrink-[0] after:absolute after:left-0 after:top-0 after:size-full after:rounded-md after:border after:border-[rgb(219,_218,_217)] after:pointer-events-none after:content-[&quot;&quot;]">
                    <textarea
                      rows={5}
                      name="message"
                      placeholder={messages.contact.form.placeholders.message}
                      value={formData.message}
                      onChange={handleChange('message')}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      className="flex min-h-[150px] w-full grow basis-[0%] resize-none overflow-y-auto overflow-x-hidden whitespace-break-spaces bg-black/0 pt-[14px] pr-3 pb-[14px] pl-3 text-[16px] leading-[20.8px] tracking-[-0.1px] text-[rgb(16,_16,_20)] outline-none"
                      style={{ direction: isRTL ? 'rtl' : 'ltr', textAlign: 'start' }}
                    ></textarea>
                  </div>
                  {errors.message ? (
                    <p
                      id="contact-message-error"
                      className="text-[14px] leading-[20px] text-[rgb(212,_38,_60)]"
                    >
                      {errors.message}
                    </p>
                  ) : null}
                </label>

                <div className="relative w-full shrink-[0]">
                  <button
                    type="submit"
                    aria-label={messages.contact.form.submit}
                    className="framer-button content-center items-center relative flex h-min w-full justify-center gap-[0px] rounded-md bg-[rgba(16,_16,_20,_0.75)]/75 pt-[11px] pr-[18px] pb-[14px] pl-[18px] text-center cursor-pointer"
                  >
                    <div
                      aria-label="Text"
                      className="content-center items-center relative flex size-min justify-center gap-[10px] overflow-hidden text-center shrink-[0]"
                    >
                      <div className="relative flex flex-col justify-start whitespace-pre text-center shrink-[0]">
                        <p className="font-medium text-[16px] leading-[20.8px] text-white">
                          {messages.contact.form.submit}
                        </p>
                      </div>
                    </div>
                  </button>
                </div>

                {submitMessage ? (
                  <p className="text-[14px] leading-[20px] text-[rgb(61,_61,_71)]">{submitMessage}</p>
                ) : null}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
