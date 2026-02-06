import React, { useState } from 'react';
import { styles } from './ContactStyles';
import { contactDetails, validateEmail } from './ContactUtils';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    if (!validateEmail(form.email)) {
        alert("Please enter a valid email");
        return;
    }
    
    // Simulate API call
    setStatus('idle');
    setTimeout(() => setStatus('success'), 1000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.infoSection}>
        <div>
            <h1 className={styles.title}>Get in Touch</h1>
            <p className={styles.infoText}>
                Have a question, an idea for a collaboration, or just want to say hi? 
                Feel free to drop us a message.
            </p>
        </div>
        
        <div className="space-y-6">
            {contactDetails.map((item, idx) => (
                <div key={idx} className={styles.contactItem}>
                    <div className={styles.contactIconBox}>
                        <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                        <span className={styles.label}>{item.label}</span>
                        <p className={styles.value}>{item.value}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>

      <div className={styles.formSection}>
        <h2 className={styles.formTitle}>Send a Message</h2>
        <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Name</label>
                <input 
                    type="text" 
                    className={styles.input} 
                    value={form.name}
                    onChange={(e) => setForm({...form, name: e.target.value})}
                    placeholder="Your name"
                />
            </div>
            <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Email</label>
                <input 
                    type="email" 
                    className={styles.input}
                    value={form.email}
                    onChange={(e) => setForm({...form, email: e.target.value})}
                    placeholder="your@email.com" 
                />
            </div>
            <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Message</label>
                <textarea 
                    className={styles.textarea}
                    value={form.message}
                    onChange={(e) => setForm({...form, message: e.target.value})}
                    placeholder="How can we help?"
                ></textarea>
            </div>
            
            <button type="submit" className={styles.submitBtn}>
                <Send className="w-4 h-4 inline mr-2" /> Send Message
            </button>

            {status === 'success' && (
                <div className={styles.successMsg}>
                    Message sent successfully! We'll get back to you soon.
                </div>
            )}
        </form>
      </div>
    </div>
  );
};

export default Contact;