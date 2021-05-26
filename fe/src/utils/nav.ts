import { IconName } from '@fortawesome/fontawesome-common-types';

type NavItemsType = {
  label: string;
  iconName: IconName;
  href: string;
};

export const NAV_ITEMS: NavItemsType[] = [
  {
    label: 'Home',
    iconName: 'home',
    href: '/',
  },
  {
    label: 'About',
    iconName: 'info',
    href: '/about',
  },
  {
    label: 'Create product',
    iconName: 'info',
    href: '/Product/create',
  },
];
