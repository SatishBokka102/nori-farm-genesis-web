import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { Search, ShoppingCart } from 'lucide-react';

const mockProducts = {
  tomato: {
    title: "Fresh Organic Tomato Box",
    price: "19,000 KRW",
    image: "https://images.unsplash.com/photo-1546470427-e5ac317ff84e?w=400&h=300&fit=crop&crop=center",
    description: "Premium organic tomatoes grown by partner farmers in Jeju Island"
  },
  carrot: {
    title: "Orange Carrot Bundle",
    price: "15,000 KRW", 
    image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=400&h=300&fit=crop&crop=center",
    description: "Sweet and crunchy carrots harvested fresh from mountain farms"
  },
  lettuce: {
    title: "Green Lettuce Pack",
    price: "12,000 KRW",
    image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400&h=300&fit=crop&crop=center",
    description: "Crispy organic lettuce perfect for fresh salads and wraps"
  },
  corn: {
    title: "Sweet Corn Collection",
    price: "22,000 KRW",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=300&fit=crop&crop=center",
    description: "Golden sweet corn ears harvested at peak ripeness"
  },
  strawberry: {
    title: "Premium Strawberry Box",
    price: "35,000 KRW",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=300&fit=crop&crop=center",
    description: "Juicy red strawberries grown in controlled greenhouse environments"
  },
  cabbage: {
    title: "Fresh Cabbage Head",
    price: "8,000 KRW",
    image: "https://images.unsplash.com/photo-1594282486861-7195d71409b4?w=400&h=300&fit=crop&crop=center",
    description: "Dense, fresh cabbage perfect for kimchi and stir-fries"
  },
  potato: {
    title: "Organic Potato Bag",
    price: "18,000 KRW",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop&crop=center",
    description: "Versatile organic potatoes from highland farms"
  },
  onion: {
    title: "Yellow Onion Bundle",
    price: "10,000 KRW",
    image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=400&h=300&fit=crop&crop=center",
    description: "Fresh yellow onions with rich flavor for cooking"
  },
  broccoli: {
    title: "Green Broccoli Crown",
    price: "16,000 KRW",
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&h=300&fit=crop&crop=center",
    description: "Nutritious broccoli crowns packed with vitamins"
  },
  cucumber: {
    title: "Fresh Cucumber Pack",
    price: "13,000 KRW",
    image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=400&h=300&fit=crop&crop=center",
    description: "Crisp cucumbers perfect for salads and pickling"
  }
};

const nftMappings = {
  'NFT001': 'tomato',
  'NFT002': 'carrot',
  'NFT003': 'lettuce',
  'NFT004': 'corn',
  'NFT005': 'strawberry',
  'NFT006': 'cabbage',
  'NFT007': 'potato',
  'NFT008': 'onion',
  'NFT009': 'broccoli',
  'NFT010': 'cucumber'
};

export const CropMapperSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const getProductForSearch = (query: string) => {
    const normalizedQuery = query.toLowerCase().trim();
    
    // Check if it's an NFT ID
    if (nftMappings[normalizedQuery.toUpperCase()]) {
      const cropName = nftMappings[normalizedQuery.toUpperCase()];
      return mockProducts[cropName];
    }
    
    // Check if it's a crop name
    return mockProducts[normalizedQuery];
  };

  const handleProductSearch = () => {
    if (!searchQuery.trim()) {
      toast({
        title: "Please enter a crop name or NFT ID",
        variant: "destructive"
      });
    }
  };

  const handleBuyNow = () => {
    window.open('https://play.google.com/store/apps/details?id=com.xrisp.norifarm&pcampaignid=web_share&pli=1', '_blank');
  };

  const currentProduct = getProductForSearch(searchQuery);

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-200">
            Crop to Product Mapper
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Try searching for: tomato, carrot, lettuce, corn, strawberry, cabbage, potato, onion, broccoli, cucumber, or NFT001-NFT010
          </p>
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
          
          {searchQuery && currentProduct && (
            <Card className="animate-fade-in">
              <CardHeader>
                <img 
                  src={currentProduct.image} 
                  alt={currentProduct.title} 
                  className="w-full h-48 object-cover rounded-lg mb-4" 
                />
                <CardTitle>{currentProduct.title}</CardTitle>
                <CardDescription className="text-2xl font-bold text-green-600">
                  {currentProduct.price}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{currentProduct.description}</p>
                <Button onClick={handleBuyNow} className="w-full bg-green-600 hover:bg-green-700">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          )}
          
          {searchQuery && !currentProduct && (
            <div className="text-gray-500 dark:text-gray-400 py-12">
              No product found for "{searchQuery}". Try searching for available crops or NFT IDs.
            </div>
          )}
          
          {!searchQuery && (
            <div className="text-gray-500 dark:text-gray-400 py-12">
              Enter a crop name or NFT ID to see matching products
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
