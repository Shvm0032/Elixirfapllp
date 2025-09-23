import { Star, Shield, Zap, Users } from 'lucide-react';

export default function OverlayCards() {
  const cards = [
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'We deliver exceptional quality in every product and service we provide.'
    },
    {
      icon: Shield,
      title: 'Trusted Security',
      description: 'Your data and privacy are protected with enterprise-grade security measures.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Experience blazing-fast performance optimized for your business needs.'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Our dedicated team is always here to help you succeed and grow.'
    }
  ];

  return (
    <div className="relative -mt-32 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-xl p-6 text-center hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                  <IconComponent size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}