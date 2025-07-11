
import { Sprout } from 'lucide-react';

export const EmotionalNarrativeSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            The City and the Countryside: Two Hearts Yearning for Connection
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Nori Farm is built for those who long for nature, even while living in the city. 
            It supports real farmers and fulfills virtual dreams.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-0 max-w-6xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <div className="bg-gray-100 dark:bg-gray-800 p-12 flex flex-col justify-center items-center min-h-[400px]">
            <div className="text-center">
              <div className="mb-6">
                <div className="grid grid-cols-3 gap-2 w-24 mx-auto">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-6 h-6 bg-gray-400 dark:bg-gray-600 rounded-sm"></div>
                  ))}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">City Life</h3>
              <p className="text-gray-600 dark:text-gray-400">Urban dreams, digital connections</p>
            </div>
          </div>
          <div className="bg-green-100 dark:bg-green-900/30 p-12 flex flex-col justify-center items-center min-h-[400px]">
            <div className="text-center">
              <div className="mb-6">
                <Sprout className="h-16 w-16 text-green-600 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-green-700 dark:text-green-300 mb-2">Countryside</h3>
              <p className="text-green-600 dark:text-green-400">Real farms, authentic harvest</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
