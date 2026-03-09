import { create } from 'zustand';

interface SiteState {
  isNavScrolled: boolean;
  isMobileMenuOpen: boolean;
  activeSection: string;
  isPageLoaded: boolean;
  setIsNavScrolled: (scrolled: boolean) => void;
  setIsMobileMenuOpen: (open: boolean) => void;
  setActiveSection: (section: string) => void;
  setIsPageLoaded: (loaded: boolean) => void;
  toggleMobileMenu: () => void;
}

export const useSiteStore = create<SiteState>((set) => ({
  isNavScrolled: false,
  isMobileMenuOpen: false,
  activeSection: 'home',
  isPageLoaded: false,
  setIsNavScrolled: (scrolled) => set({ isNavScrolled: scrolled }),
  setIsMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
  setActiveSection: (section) => set({ activeSection: section }),
  setIsPageLoaded: (loaded) => set({ isPageLoaded: loaded }),
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
}));
