import {
  Target,
  Lightbulb,
  Rocket,
  Trophy,
  Handshake,
  Users,
  History
} from "lucide-react";

const iconMap = {
  target: Target,
  lightbulb: Lightbulb,
  rocket: Rocket,
  trophy: Trophy,
  handshake: Handshake,
  users: Users,
  history: History
};

export type IconId = keyof typeof iconMap;

export function getIcon(iconId: IconId) {
  return iconMap[iconId] ?? Target;
}
