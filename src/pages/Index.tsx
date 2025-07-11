
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { 
  Smartphone, 
  Sprout, 
  Package, 
  Heart, 
  Users, 
  Leaf, 
  Sun, 
  Moon, 
  Search,
  Download,
  Play,
  Apple,
  ChevronRight,
  Instagram,
  Youtube,
  MessageCircle,
  Mail,
  User,
  MapPin,
  Clock,
  Coins,
  Home,
  ShoppingCart
} from 'lucide-react';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAIDetails, setShowAIDetails] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Mock product data
  const mockProduct = {
    title: "Fresh Organic Tomato Box",
    price: "19,000 KRW",
    image: "/placeholder.svg",
    description: "Premium organic tomatoes grown by partner farmers"
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Thank you! We'll get back to you soon.",
      description: "Your message has been sent successfully."
    });
    setContactForm({ name: '', email: '', message: '' });
  };

  const handleProductSearch = () => {
    if (!searchQuery.trim()) {
      toast({
        title: "Please enter a crop name or NFT ID",
        variant: "destructive"
      });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className="bg-background text-foreground">
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

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-amber-50 dark:from-green-900/20 dark:to-amber-900/20">
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

        {/* Our Service Section */}
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

        {/* Mission Statement */}
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

        {/* Emotional Narrative */}
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

        {/* How It Works */}
        <section className="py-16 bg-amber-50 dark:bg-amber-900/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">How It Works</h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: User, title: "Sign Up & Log In", desc: "Create your farming account" },
                  { icon: Sprout, title: "Choose Your Crop", desc: "Select from available seeds" },
                  { icon: Clock, title: "Grow Your Crop", desc: "30-day cycle or use boosters" },
                  { icon: Coins, title: "Earn Harvest Token", desc: "Collect rewards for growth" },
                  { icon: MapPin, title: "Enter Shipping Info", desc: "Provide delivery details" },
                  { icon: Home, title: "Receive Real Harvest", desc: "Fresh produce at your door" },
                ].map((step, index) => (
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

        {/* Prototype Integration Panel */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-200">
                Crop to Product Mapper
              </h2>
              <div className="flex gap-2 mb-8">
                <Input 
                  placeholder="Enter crop name or NFT ID"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={handleProductSearch} className="bg-green-600 hover:bg-green-700">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              
              {searchQuery && (
                <Card className="animate-fade-in">
                  <CardHeader>
                    <img src={mockProduct.image} alt={mockProduct.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                    <CardTitle>{mockProduct.title}</CardTitle>
                    <CardDescription className="text-2xl font-bold text-green-600">
                      {mockProduct.price}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{mockProduct.description}</p>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Buy Now
                    </Button>
                  </CardContent>
                </Card>
              )}
              
              {!searchQuery && (
                <div className="text-gray-500 dark:text-gray-400 py-12">
                  No product found for this crop. Try searching for "tomato" or "NFT001"
                </div>
              )}
            </div>
          </div>
        </section>

        {/* AI Usage Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Button
                variant="outline"
                onClick={() => setShowAIDetails(!showAIDetails)}
                className="w-full mb-6 text-left justify-between"
              >
                <span className="flex items-center">
                  ⚡ Built with AI Assistance
                </span>
                <ChevronRight className={`h-4 w-4 transition-transform ${showAIDetails ? 'rotate-90' : ''}`} />
              </Button>
              
              {showAIDetails && (
                <Card className="animate-fade-in">
                  <CardContent className="pt-6">
                    <p className="mb-4 text-gray-600 dark:text-gray-400">
                      This prototype was created with GPT-4 and Lovable.dev, showcasing the power of AI-assisted development.
                    </p>
                    <div className="space-y-3">
                      <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                        <strong>Prompt Example:</strong> "Create a responsive landing page for a Web3 agricultural platform with warm, organic design..."
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                        <strong>AI Usage:</strong> Scaffolding, component structure, responsive design patterns, and interactive features
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-green-50 dark:bg-green-900/10">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
                Get in Touch
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Your Name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        value={contactForm.message}
                        onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                        rows={4}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">NORIFARM</h3>
                <p className="text-gray-400">
                  Connecting virtual farming with real agriculture for a sustainable future.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <a href="#" className="block text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                  <a href="#" className="block text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Youtube className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <MessageCircle className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 NORIFARM. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
