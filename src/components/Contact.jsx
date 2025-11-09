import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { send, sendHover } from '../assets';

// Rate limiting: 12 hours in milliseconds
const RATE_LIMIT_HOURS = 12;
const RATE_LIMIT_MS = RATE_LIMIT_HOURS * 60 * 60 * 1000;
const STORAGE_KEY = 'contact_form_submissions';

// Utility functions for rate limiting
const checkRateLimit = (email) => {
  try {
    const submissions = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    const normalizedEmail = email.toLowerCase().trim();

    if (submissions[normalizedEmail]) {
      const lastSubmissionTime = submissions[normalizedEmail];
      const now = Date.now();
      const timeSinceLastSubmission = now - lastSubmissionTime;

      if (timeSinceLastSubmission < RATE_LIMIT_MS) {
        const hoursRemaining = Math.ceil(
          (RATE_LIMIT_MS - timeSinceLastSubmission) / (60 * 60 * 1000)
        );
        return {
          allowed: false,
          hoursRemaining: hoursRemaining,
        };
      }
    }

    return { allowed: true };
  } catch (error) {
    console.error('Error checking rate limit:', error);
    return { allowed: true }; // Allow submission if there's an error
  }
};

const recordSubmission = (email) => {
  try {
    const submissions = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    const normalizedEmail = email.toLowerCase().trim();
    submissions[normalizedEmail] = Date.now();

    // Clean up old entries (older than 24 hours) to prevent localStorage from growing
    const now = Date.now();
    const oneDayAgo = now - 24 * 60 * 60 * 1000;
    Object.keys(submissions).forEach((key) => {
      if (submissions[key] < oneDayAgo) {
        delete submissions[key];
      }
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));
  } catch (error) {
    console.error('Error recording submission:', error);
  }
};

const Contact = () => {
  const formRef = useRef();
  const sendButtonRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // Initialize emailjs with public key
    emailjs.init('mr4Ipr1El31UrUL03');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (form.name.trim() === '') {
      setError('Please enter your name.');
      return;
    }

    if (form.email.trim() === '') {
      setError('Please enter your email.');
      return;
    }

    if (form.message.trim() === '') {
      setError('Please enter your message.');
      return;
    }

    // Check rate limit
    const rateLimitCheck = checkRateLimit(form.email);
    if (!rateLimitCheck.allowed) {
      const hours = rateLimitCheck.hoursRemaining;
      const timeText = hours === 1 ? '1 hour' : `${hours} hours`;
      setError(
        `You can only submit one message every ${RATE_LIMIT_HOURS} hours. Please try again in ${timeText}.`
      );
      return;
    }

    setLoading(true);

    emailjs
      .send(
        'service_pnbt1eh',
        'template_4tph9it',
        {
          from_name: form.name,
          to_name: 'Mehdi Raza - Software Engineer',
          from_email: form.email,
          to_email: 'mehdirazajaffri@gmail.com',
          message: form.message,
        },
        'mr4Ipr1El31UrUL03'
      )
      .then(
        () => {
          setLoading(false);
          // Record successful submission for rate limiting
          recordSubmission(form.email);
          setForm({
            name: '',
            email: '',
            message: '',
          });
          setSuccess(true);
          setError('');
        },
        (error) => {
          setLoading(false);
          console.error('EmailJS Error:', error);
          setError('Failed to send message. Please try again later.');
          setSuccess(false);
        }
      );
  };

  return (
    <div
      className="-mt-[8rem] xl:flex-row flex-col-reverse 
      flex gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6 font-poppins"
        >
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">
              Your Message
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium resize-none"
            />
          </label>

          {error && <p className="text-red-500">{error}</p>}
          {success && (
            <p className="text-timberWolf font-medium">
              Thank you. I will get back to you as soon as possible.
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="live-demo flex justify-center sm:gap-4 
            gap-3 sm:text-[20px] text-[16px] text-timberWolf 
            font-bold font-beckman items-center py-5
            whitespace-nowrap sm:w-[130px] sm:h-[50px] 
            w-[100px] h-[45px] rounded-[10px] bg-night 
            hover:bg-battleGray hover:text-eerieBlack 
            transition duration-[0.2s] ease-in-out
            disabled:opacity-50 disabled:cursor-not-allowed"
            onMouseOver={() => {
              if (sendButtonRef.current) {
                sendButtonRef.current.setAttribute('src', sendHover);
              }
            }}
            style={{ width: '100%' }}
            onMouseOut={() => {
              if (sendButtonRef.current) {
                sendButtonRef.current.setAttribute('src', send);
              }
            }}
          >
            {loading ? 'Sending' : 'Send'}
            <img
              ref={sendButtonRef}
              src={send}
              alt="send"
              className="contact-btn sm:w-[26px] sm:h-[26px] 
              w-[23px] h-[23px] object-contain"
            />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
