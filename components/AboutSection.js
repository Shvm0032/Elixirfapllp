import { CheckCircle } from 'lucide-react';

export default function AboutSection() {
  const features = [
    'Over 15 years of industry experience',
    'Award-winning customer service',
    'Innovative solutions for modern challenges',
    'Sustainable and eco-friendly practices'
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Our Company
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are a leading provider of innovative solutions, dedicated to delivering 
              exceptional value to our clients worldwide. Our commitment to excellence 
              and continuous innovation has made us a trusted partner for businesses 
              of all sizes.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Founded with a vision to transform industries through cutting-edge 
              technology and superior service, we continue to push boundaries and 
              set new standards in our field.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Learn More About Us
            </button>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="About Us"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}