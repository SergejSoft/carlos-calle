export type Language = 'en' | 'es' | 'de';

export interface Course {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  price: number;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  type: 'group' | 'private' | 'kids';
}

export interface NavItem {
  label: Record<Language, string>;
  href: string;
}