
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sprout, Smartphone, Package } from 'lucide-react';

export const ServiceSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            Linking Farms Across the World
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Transform your smartphone into a virtual farm and grow crops with real-world farmers. 
            Experience digital cultivation that leads to real-life harvests.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow duration-300 hover-scale">
            <CardHeader className="text-center">
              <Sprout className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle>Grow</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 dark:text-gray-400">
                Plant and nurture virtual crops using real farming cycles and conditions
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow duration-300 hover-scale">
            <CardHeader className="text-center">
              <Smartphone className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle>Track</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 dark:text-gray-400">
                Monitor your crop's progress through our interactive mobile platform
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300 hover-scale">
            <CardHeader className="text-center">
              <Package className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle>Receive</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 dark:text-gray-400">
                Get fresh, real produce delivered straight to your doorstep
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
