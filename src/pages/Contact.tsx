// Trang liên hệ mới: Không còn form yêu cầu tư vấn, chỉ hiển thị thông tin liên hệ và bản đồ
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle, Shield, Award, Users } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Hotline 24/7",
      content: "0366740019",
      description: "Sẵn sàng phục vụ mọi lúc",
action: () => window.open("tel:0366740019")
    },
    {
      icon: MessageCircle,
      title: "Zalo",
      content: "0366740019", 
      description: "Nhắn tin trực tiếp",
      action: () => window.open("https://zalo.me/0366740019", "_blank")
    },
    {
      icon: MapPin,
      title: "Địa chỉ",
      content: "TP Vinh, Nghệ An",
      description: "Phục vụ toàn tỉnh",
      action: () => window.open("https://www.google.com/maps/search/?api=1&query=Thành+phố+Vinh,+Nghệ+An", "_blank")
    }
  ];

  const workingHours = [
    { day: "Thứ 2 - Thứ 6", time: "06:00 - 22:00" },
    { day: "Thứ 7 - Chủ nhật", time: "07:00 - 21:00" },
    { day: "Khẩn cấp", time: "24/7" }
  ];

  const serviceAreas = [
    "Hưng Dũng", "Hưng Bình", "Lê Mao", "Quang Trung", "Đội Cung",
    "Trường Thi", "Bến Thủy", "Hà Huy Tập", "Hưng Phúc", "Hưng Đông",
    "Hưng Chính", "Hưng Lộc", "Hưng Hòa", "Hưng Nhân", "Nghi Phú",
    "Nghi Ân", "Nghi Kim", "Nghi Liên", "Nghi Đức", "Nghi Phong",
    "Nghi Vạn", "Nghi Thái", "Nghi Tân", "Nghi Trung", "Nghi Thu",
    "Nghi Xuân", "Nghi Hoa", "Nghi Hải", "Nghi Hương", "Nghi Quang"
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
                Liên hệ với chúng tôi
              </h1>
              <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                Đội ngũ chuyên nghiệp sẵn sàng hỗ trợ bạn 24/7. Liên hệ ngay qua hotline hoặc Zalo để được tư vấn miễn phí!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 lg:py-20 bg-soft-gray">
          <div className="max-w-6xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="p-8 text-center shadow-card bg-white border border-gray-100 rounded-xl flex flex-col items-center justify-between transition-all duration-300 hover:shadow-lg">
                    <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-professional-blue mb-2">
                      {info.title}
                    </h3>
                    <div className="text-xl font-bold text-trust-green mb-1">
                      {info.content}
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">
                      {info.description}
                    </p>
<Button
  variant="outline" 
  size="lg"
  className="border-trust-green text-trust-green hover:bg-trust-green hover:text-white w-full"
  onClick={info.title === "Hotline 24/7" ? () => window.open("tel:0366740019") : info.action}
>
  Liên hệ
</Button>
                  </Card>
                );
              })}
            </div>
            <div className="flex justify-center mt-8">
<Button
  size="lg"
  className="bg-warm-orange hover:bg-warm-orange/90 text-white text-lg px-8 py-4 border border-warm-orange rounded-md"
  onClick={() => window.open("tel:0366740019")}
>
  Báo giá miễn phí
</Button>
            </div>
          </div>
        </section>

        {/* Working Hours & Service Areas */}
        <section className="py-16 lg:py-24 bg-soft-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Working Hours */}
              <Card className="p-6 shadow-card bg-background border-0 mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-6 w-6 text-trust-green" />
                  <h3 className="text-xl font-semibold text-professional-blue">
                    Giờ làm việc
                  </h3>
                </div>
                <div className="space-y-3">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-muted-foreground">{schedule.day}</span>
                      <span className="font-medium text-professional-blue">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Service Areas */}
              <Card className="p-6 shadow-card bg-background border-0 mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="h-6 w-6 text-trust-green" />
                  <h3 className="text-xl font-semibold text-professional-blue">
                    Khu vực phục vụ
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="text-sm text-muted-foreground">
                      • {area}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Và các huyện lân cận trong tỉnh Nghệ An
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Commitments */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-6 shadow-card bg-gradient-card border-0">
              <div className="flex items-center space-x-3 mb-4">
                <Award className="h-6 w-6 text-trust-green" />
                <h3 className="text-xl font-semibold text-professional-blue">
                  Cam kết dịch vụ
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Users className="h-4 w-4 text-trust-green" />
                  <span className="text-sm">Đội ngũ kỹ thuật viên chuyên nghiệp</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-4 w-4 text-trust-green" />
                  <span className="text-sm">Bảo hành dài hạn cho mọi dịch vụ</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-trust-green" />
                  <span className="text-sm">Hỗ trợ khẩn cấp 24/7</span>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-professional-blue mb-4">
                Vị trí của chúng tôi
              </h2>
              <p className="text-lg text-muted-foreground">
                Trụ sở chính tại TP Vinh, phục vụ toàn tỉnh Nghệ An
              </p>
            </div>
            <div className="bg-soft-gray rounded-lg p-8 text-center">
              <MapPin className="h-16 w-16 text-trust-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-professional-blue mb-2">
                Bản đồ vị trí TP Vinh
              </h3>
              <iframe
                src="https://www.google.com/maps?q=18.679585,105.681443&z=15&output=embed"
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map TP Vinh"
              />
              <Button
                className="bg-professional-blue hover:bg-professional-blue/90 text-white mt-6"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/search/?api=1&query=Thành+phố+Vinh,+Nghệ+An",
                    "_blank"
                  )
                }
              >
                Xem đường đi
              </Button>
            </div>
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="py-16 bg-warm-orange text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Phone className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Cần hỗ trợ khẩn cấp?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Gọi ngay hotline 24/7 để được hỗ trợ nhanh chóng nhất
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
<Button 
  size="lg"
  className="bg-professional-blue hover:bg-professional-blue/90 text-white px-8"
  onClick={() => window.open("tel:0366740019")}
>
  <Phone className="h-5 w-5 mr-2" />
  Gọi ngay: 0366740019
</Button>
              <Button 
                size="lg"
                className="bg-[#0084ff] hover:bg-[#0057b8] text-white border-none px-8"
                onClick={() => window.open("https://zalo.me/0366740019", "_blank")}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Chat Zalo
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
