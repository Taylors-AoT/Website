import React, { useState } from 'react';
import { MapPin, Calendar, ArrowRight, X, Sparkles } from 'lucide-react';
import { styles } from './EventsStyles';
import { eventsList, formatDate } from './EventsUtils';
import { EventItem } from '../../../types';

const Events: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Upcoming Events</h1>
      
      <div className={styles.listContainer}>
        {eventsList.map((event) => {
            const { day, month } = formatDate(event.date);
            return (
                <div key={event.id} className={styles.eventCard}>
                    <div className={styles.dateBox}>
                        <span className={styles.dateDay}>{day}</span>
                        <span className={styles.dateMonth}>{month}</span>
                    </div>
                    <div className={styles.contentBox}>
                        {event.isSignature && (
                            <span className={styles.signatureBadge}><Sparkles className="w-3 h-3 inline mr-1"/> Signature Event</span>
                        )}
                        <h3 className={styles.eventTitle}>{event.title}</h3>
                        <div className={styles.eventMeta}>
                            <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> {event.location}</span>
                            <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {event.date}</span>
                        </div>
                        <p className={styles.eventDesc}>{event.description}</p>
                        
                        {event.isSignature && (
                            <button onClick={() => setSelectedEvent(event)} className={styles.detailsButton}>
                                View Full Details <ArrowRight className="w-4 h-4" />
                            </button>
                        )}
                    </div>
                </div>
            );
        })}
      </div>

      {/* Signature Event Modal / Detailed View */}
      {selectedEvent && (
        <div className={styles.sigContainer}>
            <div className={styles.sigCard}>
                <button onClick={() => setSelectedEvent(null)} className={styles.sigClose}>
                    <X className="w-6 h-6" />
                </button>
                <h2 className={styles.sigTitle}>{selectedEvent.title}</h2>
                <img src="https://picsum.photos/800/400" alt="Event" className={styles.sigImage} />
                <div className="space-y-4">
                    <div className="flex justify-between text-gray-300 border-b border-gray-700 pb-2">
                        <span><Calendar className="inline w-4 h-4 mr-2"/> {selectedEvent.date}</span>
                        <span><MapPin className="inline w-4 h-4 mr-2"/> {selectedEvent.location}</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                        {selectedEvent.description}
                        <br/><br/>
                        This is our biggest event of the year. Join us for an unforgettable experience featuring industry leaders, workshops, and networking opportunities that will launch your career.
                    </p>
                    <button className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-bold text-white hover:shadow-lg transition-all">
                        Register Now
                    </button>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default Events;