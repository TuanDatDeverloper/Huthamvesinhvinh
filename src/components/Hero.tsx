import { Button } from "@/components/ui/button";
import { Phone, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-service.jpg";

const Hero = () => {
  const features = [
    "Phục vụ 24/7",
    "Không đục phá",
    "Giá rõ ràng",
    "Bảo hành dài hạn"
  ];

  return (
    <section className="relative bg-gradient-hero text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/40"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Nhanh chóng – Sạch sẽ –{" "}
              <span className="text-trust-green">Giá rõ ràng</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Dịch vụ thông tắc cống, hút hầm vệ sinh chuyên nghiệp tại TP Vinh
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-trust-green" />
                  <span className="text-sm lg:text-base">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                className="bg-warm-orange hover:bg-warm-orange/90 text-white text-lg px-8 py-4"
              >
                <Phone className="h-5 w-5 mr-2" />
                Gọi ngay: 0987.654.321
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-professional-blue text-lg px-8 py-4"
              >
                Báo giá miễn phí
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;