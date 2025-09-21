import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Truck, Droplets, Wind, Zap, Shield } from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      icon: Wrench,
      title: "Thông tắc cống",
      description: "Thông tắc cống thoát nước, đường ống bị tắc do rác thải, lá cây, chất bẩn",
      price: "Từ 200.000đ"
    },
    {
      icon: Truck,
      title: "Hút hầm vệ sinh",
      description: "Hút bể phốt, hầm cầu, bồn chứa nước thải với xe chuyên dụng hiện đại",
      price: "Từ 500.000đ"
    },
    {
      icon: Droplets,
      title: "Nạo vét hố ga",
      description: "Vệ sinh, nạo vét hố ga, hố thu nước mưa, đảm bảo thoát nước tốt",
      price: "Từ 150.000đ"
    },
    {
      icon: Wind,
      title: "Xử lý mùi hôi",
      description: "Khử mùi hôi từ cống, hầm vệ sinh bằng công nghệ xử lý hiện đại",
      price: "Từ 300.000đ"
    },
    {
      icon: Zap,
      title: "Vệ sinh đường ống",
      description: "Vệ sinh toàn bộ hệ thống đường ống, đảm bảo hoạt động trơn tru",
      price: "Từ 400.000đ"
    },
    {
      icon: Shield,
      title: "Bảo trì định kỳ",
      description: "Gói bảo trì định kỳ, kiểm tra và vệ sinh hệ thống theo lịch",
      price: "Tư vấn miễn phí"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-soft-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-professional-blue mb-4">
            Dịch vụ chuyên nghiệp
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chúng tôi cung cấp đầy đủ các dịch vụ thông tắc, hút hầm vệ sinh với đội ngũ chuyên nghiệp và thiết bị hiện đại
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-card transition-all duration-300 bg-gradient-card border-0">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-professional-blue">{service.title}</h3>
                    <p className="text-sm font-medium text-trust-green">{service.price}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <Button variant="outline" className="w-full border-trust-green text-trust-green hover:bg-trust-green hover:text-white">
                  Xem chi tiết
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-professional-blue hover:bg-professional-blue/90 text-white px-8"
          >
            Xem tất cả dịch vụ
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;