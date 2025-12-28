import { Mail, MapPin, Phone } from 'lucide-react';

export const contactDetails = [
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'Innovation Lab, Building 4, Tech University'
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'hello@agentsoftech.club'
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+1 (555) 123-4567'
  }
];

export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};