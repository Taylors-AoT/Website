import { Code, Zap, Users, Globe, Mail, Instagram, Target, Rocket, Lightbulb, Trophy, Handshake, History, Sparkles, LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  code: Code,
  zap: Zap,
  users: Users,
  globe: Globe,
  mail: Mail,
  instagram: Instagram,
  target: Target,
  rocket: Rocket,
  lightbulb: Lightbulb,
  trophy: Trophy,
  handshake: Handshake,
  history: History,
  sparkles: Sparkles
};

export type IconId = keyof typeof iconMap;

export function getIcon(iconId: string): LucideIcon {
  return iconMap[iconId] || Target; // Fallback to Target if not found
}
