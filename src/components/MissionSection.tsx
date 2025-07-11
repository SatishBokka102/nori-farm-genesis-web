
import { Leaf } from 'lucide-react';

export const MissionSection = () => {
  return (
    <section className="py-16 bg-green-50 dark:bg-green-900/10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-gray-200">
              Revolutionizing Agriculture with Crispy Ideas
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              We aim to bridge the gap between urban life and real agriculture, creating sustainable 
              digital connections that matter. Through innovative technology and partnership with 
              real farmers, we're creating a future where everyone can participate in agriculture.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="bg-green-200 dark:bg-green-800 rounded-xl p-8 w-80 h-80 flex items-center justify-center">
              <Leaf className="h-32 w-32 text-green-600 dark:text-green-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
