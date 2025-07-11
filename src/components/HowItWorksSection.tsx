
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Sprout, Clock, Coins, MapPin, Home } from 'lucide-react';

export const HowItWorksSection = () => {
  const steps = [
    { icon: User, title: "Sign Up & Log In", desc: "Create your farming account" },
    { icon: Sprout, title: "Choose Your Crop", desc: "Select from available seeds" },
    { icon: Clock, title: "Grow Your Crop", desc: "30-day cycle or use boosters" },
    { icon: Coins, title: "Earn Harvest Token", desc: "Collect rewards for growth" },
    { icon: MapPin, title: "Enter Shipping Info", desc: "Provide delivery details" },
    { icon: Home, title: "Receive Real Harvest", desc: "Fresh produce at your door" },
  ];

  return (
    <section className="py-16 bg-amber-50 dark:bg-amber-900/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">How It Works</h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <Badge variant="secondary" className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4">
                    {index + 1}
                  </Badge>
                  <step.icon className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
