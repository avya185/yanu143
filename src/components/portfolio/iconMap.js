import {
  BarChart3,
  Bot,
  Brush,
  Building2,
  Globe,
  Layout,
  Megaphone,
  Palette,
  Rocket,
  Search,
  Shield,
  ShoppingCart,
  Smartphone,
  Wrench,
} from 'lucide-react';

export const SERVICE_ICON_MAP = {
  Globe,
  ShoppingCart,
  Rocket,
  Building2,
  Layout,
  Palette,
  Wrench,
  Search,
  Bot,
  Brush,
  Smartphone,
  Megaphone,
  Shield,
  BarChart3,
};

export function getServiceIcon(name) {
  return SERVICE_ICON_MAP[name] ?? Globe;
}
