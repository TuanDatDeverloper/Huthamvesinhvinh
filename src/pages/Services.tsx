// Đã cập nhật: Lấy danh sách dịch vụ từ API backend
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Truck, Droplets, Wind, Zap, Shield, Phone, CheckCircle } from "lucide-react";
import equipmentImage from "@/assets/equipment.jpg";
import beforeAfterImage from "@/assets/before-after.jpg";
import { useEffect, useState } from "react";

const iconMap: Record<string, any> = {
  Wrench,
  Truck,
  Droplets,
  Wind,
  Zap,
};

const Services = () => {
  const [mainServices, setMainServices] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/services")
      .then((res) => res.json())
      .then((data) => setMainServices(data))
      .catch(() => setMainServices([]));
  }, []);

  const whyChooseUs = [
    "Đội ngũ kỹ thuật viên có kinh nghiệm 10+ năm",
    "Phục vụ 24/7 kể cả ngày lễ",
    "Không làm hỏng công trình",
    "Giá cả minh bạch, báo giá trước khi làm",
    "Bảo hành dài hạn và hỗ trợ sau dịch vụ"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Dịch vụ thông tắc & hút hầm vệ sinh chuyên nghiệp
              </h1>
              <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                Giải pháp hoàn hảo cho mọi vấn đề về cống rãnh, hầm vệ sinh tại TP Vinh và các tỉnh lân cận
              </p>
<a
  href="tel:0366740019"
  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md bg-warm-orange hover:bg-warm-orange/90 text-white px-8"
  style={{ textDecoration: "none" }}
>
  <Phone className="h-5 w-5 mr-2" />
  Gọi ngay: 0366740019
</a>
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-professional-blue mb-4">
                Các dịch vụ chi tiết
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Từ những vấn đề nhỏ đến các công trình lớn, chúng tôi đều có giải pháp phù hợp
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {mainServices.map((service, index) => {
                const IconComponent = iconMap[service.icon] || Wrench;
                const details = Array.isArray(service.details)
                  ? service.details
                  : (typeof service.details === "string"
                      ? JSON.parse(service.details)
                      : []);
                return (
                  <Card key={index} className="p-6 shadow-card bg-gradient-card border-0">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-professional-blue mb-2">
                          {service.title}
                        </h3>
<div className="flex items-center space-x-4 mb-3">
  <span className="text-lg font-bold text-trust-green">{service.price}</span>
</div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {details.map((detail: string, detailIndex: number) => (
                        <div key={detailIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-trust-green flex-shrink-0" />
                          <span className="text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                    
                    
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Equipment & Technology */}
        <section className="py-16 lg:py-24 bg-soft-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-professional-blue mb-6">
                  Thiết bị hiện đại & Công nghệ tiên tiến
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Chúng tôi đầu tư vào những thiết bị và công nghệ tiên tiến nhất để đảm bảo 
                  chất lượng dịch vụ và sự hài lòng của khách hàng.
                </p>
                
                <div className="space-y-4">
                  {whyChooseUs.map((reason, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-trust-green flex-shrink-0" />
                      <span>{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <img 
                  src={equipmentImage} 
                  alt="Thiết bị chuyên dụng"
                  className="w-full rounded-lg shadow-card"
                />
                <img 
                  src={beforeAfterImage} 
                  alt="Kết quả trước và sau"
                  className="w-full rounded-lg shadow-card"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-professional-blue text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Cần hỗ trợ khẩn cấp?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Chúng tôi sẵn sàng phục vụ 24/7. Gọi ngay để được tư vấn và báo giá miễn phí!
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
<Button 
  size="lg"
  className="bg-warm-orange hover:bg-warm-orange/90 text-white px-8"
  onClick={() => { window.location.href = "tel:0366740019"; }}
>
  <Phone className="h-5 w-5 mr-2" />
  Hotline: 0366740019
</Button>
              <Button 
                variant="outline"
                size="lg" 
                className="bg-warm-orange hover:bg-warm-orange/90 text-white border border-warm-orange px-8"
                onClick={() => { window.location.href = "tel:0366740019"; }}
              >
                Yêu cầu báo giá
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
