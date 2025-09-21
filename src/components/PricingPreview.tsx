import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingPreview = () => {
  const packages = [
    {
      name: "Gói cơ bản",
      price: "200.000đ",
      description: "Thông tắc cống nhẹ",
      features: [
        "Thông tắc cống sinh hoạt",
        "Kiểm tra tình trạng đường ống",
        "Phục vụ trong ngày"
      ],
      popular: false
    },
    {
      name: "Gói phổ biến",
      price: "500.000đ",
      description: "Hút hầm vệ sinh + Thông tắc",
      features: [
        "Hút hầm vệ sinh/bể phốt",
        "Thông tắc cống nghiêm trọng",
        "Vệ sinh đường ống",
        "Phục vụ 24/7"
      ],
      popular: true
    },
    {
      name: "Gói toàn diện",
      price: "1.000.000đ",
      description: "Vệ sinh hệ thống hoàn chỉnh",
      features: [
        "Tất cả dịch vụ gói phổ biến",
        "Nạo vét hố ga",
        "Xử lý mùi hôi",
        "Bảo trì định kỳ",
        "Ưu tiên phục vụ"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-professional-blue mb-4">
            Bảng giá tham khảo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Giá cả minh bạch, rõ ràng. Không phát sinh chi phí ẩn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`p-6 relative ${
                pkg.popular 
                  ? 'border-trust-green shadow-card bg-gradient-card' 
                  : 'border-border bg-background'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-trust-green text-white px-4 py-1 rounded-full text-sm font-medium">
                    Phổ biến nhất
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-professional-blue mb-2">
                  {pkg.name}
                </h3>
                <div className="text-3xl font-bold text-trust-green mb-1">
                  {pkg.price}
                </div>
                <p className="text-sm text-muted-foreground">
                  {pkg.description}
                </p>
              </div>

              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-trust-green flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            * Giá có thể thay đổi tùy theo tình trạng thực tế và khoảng cách di chuyển
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;
