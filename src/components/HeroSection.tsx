
import { Button } from '@/components/ui/button';
import { Download, Play, Apple, Sun, Moon } from 'lucide-react';

interface HeroSectionProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export const HeroSection = ({ darkMode, setDarkMode }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-amber-50 dark:from-green-900/20 dark:to-amber-900/20">
      {/* Dark Mode Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setDarkMode(!darkMode)}
          className="rounded-full"
        >
          {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>

      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-green-800 dark:text-green-300">
            BRING ALL FARMS INTO YOUR HAND
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300">
            Grow crops on Nori Farm App; get fresh harvest at your door.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
              <Download className="mr-2 h-5 w-5" />
              Download App
            </Button>
            <div className="flex gap-3">
              <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50">
                <Play className="mr-2 h-4 w-4" />
                Google Play
              </Button>
              <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50">
                <Apple className="mr-2 h-4 w-4" />
                App Store
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
