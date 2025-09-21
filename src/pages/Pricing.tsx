import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Phone, Users, Award } from "lucide-react";

const Pricing = () => {
  const packages = [
    {
      name: "Gói cơ bản",
      price: "200.000đ",
      originalPrice: "300.000đ",
      description: "Phù hợp cho hộ gia đình",
      features: [
        "Thông tắc cống sinh hoạt",
        "Kiểm tra đường ống cơ bản",
        "Vệ sinh nhẹ",
        "Bảo hành 3 tháng",
        "Phục vụ trong ngày làm việc"
      ],
      notIncluded: [
        "Hút hầm vệ sinh",
        "Xử lý mùi hôi",
        "Phục vụ 24/7"
      ],
      popular: false,
      savings: "100.000đ"
    },
    {
      name: "Gói phổ biến",
      price: "500.000đ", 
      originalPrice: "700.000đ",
      description: "Lựa chọn tốt nhất cho hầu hết khách hàng",
      features: [
        "Tất cả dịch vụ gói cơ bản",
        "Hút hầm vệ sinh/bể phốt",
        "Thông tắc nghiêm trọng",
        "Vệ sinh đường ống",
        "Kiểm tra camera (nếu cần)",
        "Bảo hành 6 tháng",
        "Phục vụ 24/7",
        "Tư vấn kỹ thuật"
      ],
      notIncluded: [
        "Nạo vét hố ga",
        "Bảo trì định kỳ"
      ],
      popular: true,
      savings: "200.000đ"
    },
    {
      name: "Gói toàn diện",
      price: "1.000.000đ",
      originalPrice: "1.400.000đ", 
      description: "Giải pháp hoàn chỉnh cho mọi vấn đề",
      features: [
        "Tất cả dịch vụ gói phổ biến",
        "Nạo vét hố ga",
        "Xử lý mùi hôi chuyên sâu",
        "Vệ sinh toàn hệ thống",
        "Kiểm tra định kỳ 6 tháng",
        "Bảo hành 1 năm",
        "Ưu tiên phục vụ cao nhất",
        "Hỗ trợ kỹ thuật 24/7",
        "Tư vấn cải thiện hệ thống"
      ],
      notIncluded: [],
      popular: false,
      savings: "400.000đ"
    }
  ];

  const additionalServices = [
    { name: "Thông tắc cống cơ bản", price: "150.000đ - 300.000đ", unit: "/lần" },
    { name: "Hút bể phốt gia đình", price: "400.000đ - 600.000đ", unit: "/lần" },
    { name: "Hút hầm cầu tập thể", price: "800.000đ - 1.500.000đ", unit: "/lần" },
    { name: "Nạo vét hố ga", price: "100.000đ - 200.000đ", unit: "/hố" },
    { name: "Xử lý mùi hôi", price: "200.000đ - 400.000đ", unit: "/lần" },
    { name: "Kiểm tra camera đường ống", price: "300.000đ - 500.000đ", unit: "/lần" },
    { name: "Sửa chữa đường ống", price: "500.000đ - 2.000.000đ", unit: "/công trình" },
    { name: "Bảo trì định kỳ", price: "1.000.000đ - 3.000.000đ", unit: "/năm" }
  ];

  const testimonials = [
    {
      name: "Anh Minh",
      location: "Hưng Bình, TP Vinh", 
      rating: 5,
      comment: "Dịch vụ nhanh chóng, giá cả hợp lý. Đội thợ làm việc sạch sẽ, chuyên nghiệp."
    },
    {
      name: "Chị Lan",
      location: "Quang Trung, TP Vinh",
      rating: 5, 
      comment: "Hút bể phốt rất sạch sẽ, không có mùi hôi. Giá đúng như báo, không phát sinh."
    },
    {
      name: "Anh Tuấn", 
      location: "Lê Lợi, TP Vinh",
      rating: 5,
      comment: "Phục vụ 24/7 thật sự. Gọi đêm khuya mà vẫn có người đến hỗ trợ ngay."
    }
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
                Bảng giá dịch vụ minh bạch
              </h1>
              <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                Không có chi phí ẩn - Báo giá trước khi thực hiện - Cam kết giá tốt nhất
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-professional-blue mb-4">
                Chọn gói dịch vụ phù hợp
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Các gói dịch vụ được thiết kế để đáp ứng mọi nhu cầu từ cơ bản đến toàn diện
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card 
                  key={index}
                  className={`p-6 relative h-full ${
                    pkg.popular 
                      ? 'border-trust-green shadow-hero bg-gradient-card scale-105' 
                      : 'border-border bg-background shadow-card'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-trust-green text-white px-6 py-2 text-sm font-medium">
                        <Star className="h-4 w-4 mr-1" />
                        Phổ biến nhất
                      </Badge>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-professional-blue mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {pkg.description}
                    </p>
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-3xl font-bold text-trust-green">
                          {pkg.price}
                        </span>
                        <span className="text-lg text-muted-foreground line-through">
                          {pkg.originalPrice}
                        </span>
                      </div>
                      <div className="text-sm text-warm-orange font-medium">
                        Tiết kiệm {pkg.savings}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-trust-green flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    
                    {pkg.notIncluded.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3 opacity-50">
                        <div className="h-4 w-4 rounded-full border border-muted-foreground flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={`w-full ${
                      pkg.popular
                        ? 'bg-trust-green hover:bg-trust-green/90 text-white'
                        : 'bg-professional-blue hover:bg-professional-blue/90 text-white'
                    }`}
                  >
                    Chọn gói này
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 lg:py-24 bg-soft-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-professional-blue mb-4">
                Bảng giá dịch vụ lẻ
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Giá chi tiết cho từng dịch vụ riêng lẻ, phù hợp khi chỉ cần xử lý vấn đề cụ thể
              </p>
            </div>

            <div className="bg-background rounded-lg shadow-card overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
                {additionalServices.map((service, index) => (
                  <div 
                    key={index} 
                    className={`p-6 ${
                      index % 2 === 0 ? 'bg-background' : 'bg-soft-gray/50'
                    } border-b border-r border-border last:border-b-0`}
                  >
                    <h4 className="font-semibold text-professional-blue mb-2">
                      {service.name}
                    </h4>
                    <div className="text-trust-green font-bold">
                      {service.price}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {service.unit}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 bg-background rounded-lg p-6 shadow-card">
              <h3 className="text-lg font-semibold text-professional-blue mb-4">
                Lưu ý về giá cả:
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Giá có thể thay đổi tùy theo tình trạng thực tế và độ phức tạp</li>
                <li>• Phụ phí di chuyển ngoài TP Vinh: 50.000đ - 100.000đ</li>
                <li>• Giảm giá 10% cho khách hàng thân thiết và hợp đồng dài hạn</li>
                <li>• Miễn phí khảo sát và báo giá trong TP Vinh</li>
                <li>• Thanh toán sau khi hoàn thành và kiểm tra chất lượng</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-professional-blue mb-4">
                Khách hàng nói gì về chúng tôi
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Sự hài lòng của khách hàng là niềm tự hào của chúng tôi
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 shadow-card bg-gradient-card border-0">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-warm-orange text-warm-orange" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.comment}"
                  </p>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-trust-green" />
                    <div>
                      <div className="font-medium text-professional-blue">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-professional-blue text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Award className="h-16 w-16 text-trust-green mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Sẵn sàng phục vụ bạn ngay hôm nay
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Liên hệ ngay để được tư vấn và báo giá chính xác cho nhu cầu của bạn
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg"
                className="bg-warm-orange hover:bg-warm-orange/90 text-white px-8"
              >
                <Phone className="h-5 w-5 mr-2" />
                Gọi ngay: 0987.654.321
              </Button>
              <Button 
                variant="outline"
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-professional-blue px-8"
              >
                Nhận báo giá
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;