// src/components/UI/Notification.jsx
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, X } from 'lucide-react';
import './Notification.css';

const Notification = ({ message, type, onClose, duration = 5000 }) => {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle size={24} />;
      case 'error':
        return <XCircle size={24} />;
      default:
        return null;
    }
  };

  const getBackgroundColor = () => {
    switch (type) {
      case 'success':
        return 'var(--success-color)';
      case 'error':
        return 'var(--error-color)';
      default:
        return 'var(--primary-color)';
    }
  };

  return (
    <motion.div
      className="notification"
      style={{ '--notification-bg': getBackgroundColor() }}
      initial={{ opacity: 0, y: -50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.9 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="notification-content">
        <div className="notification-icon">
          {getIcon()}
        </div>
        <div className="notification-message">
          {message}
        </div>
        <button
          className="notification-close"
          onClick={onClose}
          aria-label="Close notification"
        >
          <X size={18} />
        </button>
      </div>
    </motion.div>
  );
};

export default Notification;