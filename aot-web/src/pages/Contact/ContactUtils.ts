import {Instagram, Mail, MapPin, Phone} from 'lucide-react';

export const contactDetails = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'agentsoftech.tlc@gmail.com'
  },
  {
    icon: Instagram,
    label: 'Message Us',
    value: '@agentsoftech.tlc'
  }
];

export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};