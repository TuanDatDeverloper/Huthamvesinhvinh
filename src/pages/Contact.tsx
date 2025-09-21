import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageCircle, Shield, Award, Users } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });
  
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Phone,
      title: "Hotline 24/7",
      content: "0987.654.321",
      description: "Sẵn sàng phục vụ mọi lúc",
      action: "tel:0987654321"
    },
    {
      icon: MessageCircle,
      title: "Zalo/WhatsApp",
      content: "0987.654.321", 
      description: "Nhắn tin trực tiếp",
      action: "https://zalo.me/0987654321"
    },
    {
      icon: Mail,
      title: "Email",
      content: "thongtacvinh@email.com",
      description: "Gửi yêu cầu chi tiết",
      action: "mailto:thongtacvinh@email.com"
    },
    {
      icon: MapPin,
      title: "Địa chỉ",
      content: "TP Vinh, Nghệ An",
      description: "Phục vụ toàn tỉnh",
      action: "#"
    }
  ];

  const workingHours = [
    { day: "Thứ 2 - Thứ 6", time: "06:00 - 22:00" },
    { day: "Thứ 7 - Chủ nhật", time: "07:00 - 21:00" },
    { day: "Khẩn cấp", time: "24/7" }
  ];

  const serviceAreas = [
    "TP Vinh", "TX Cửa Lò", "TX Hoàng Mai", "Nghi Lộc", "Nam Đàn",
    "Hưng Nguyên", "Diễn Châu", "Yên Thành", "Đô Lương", "Thanh Chương"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.service) {
      toast({
        title: "Vui lòng điền đầy đủ thông tin",
        description: "Họ tên, số điện thoại và loại dịch vụ là bắt buộc",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Đã gửi yêu cầu thành công!",
      description: "Chúng tôi sẽ liên hệ với bạn trong vòng 15 phút",
    });

    // Reset form
    setFormData({ name: "", phone: "", service: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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
                Đội ngũ chuyên nghiệp sẵn sàng hỗ trợ bạn 24/7. Liên hệ ngay để được tư vấn miễn phí!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="p-6 text-center shadow-card bg-gradient-card border-0 hover:shadow-hero transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-professional-blue mb-2">
                      {info.title}
                    </h3>
                    <div className="text-lg font-bold text-trust-green mb-1">
                      {info.content}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {info.description}
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-trust-green text-trust-green hover:bg-trust-green hover:text-white"
                      onClick={() => {
                        if (info.action.startsWith('tel:') || info.action.startsWith('mailto:') || info.action.startsWith('http')) {
                          window.open(info.action, '_blank');
                        }
                      }}
                    >
                      Liên hệ
                    </Button>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 lg:py-24 bg-soft-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="p-8 shadow-card bg-background border-0">
                <h2 className="text-2xl font-bold text-professional-blue mb-6">
                  Gửi yêu cầu tư vấn
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Họ và tên *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Nhập họ và tên của bạn"
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Số điện thoại *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="Nhập số điện thoại"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service">Dịch vụ cần hỗ trợ *</Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Chọn dịch vụ" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="thong-tac-cong">Thông tắc cống</SelectItem>
                        <SelectItem value="hut-ham-ve-sinh">Hút hầm vệ sinh</SelectItem>
                        <SelectItem value="nao-vet-ho-ga">Nạo vét hố ga</SelectItem>
                        <SelectItem value="xu-ly-mui-hoi">Xử lý mùi hôi</SelectItem>
                        <SelectItem value="ve-sinh-duong-ong">Vệ sinh đường ống</SelectItem>
                        <SelectItem value="bao-tri-dinh-ky">Bảo trì định kỳ</SelectItem>
                        <SelectItem value="khac">Khác</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Mô tả chi tiết (không bắt buộc)</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Mô tả tình trạng cần xử lý, địa chỉ, thời gian mong muốn..."
                      rows={4}
                      className="mt-1"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-trust-green hover:bg-trust-green/90 text-white"
                    size="lg"
                  >
                    Gửi yêu cầu ngay
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-soft-gray rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <Shield className="h-4 w-4 inline mr-1" />
                    Thông tin của bạn được bảo mật tuyệt đối. Chúng tôi cam kết chỉ sử dụng để liên hệ tư vấn dịch vụ.
                  </p>
                </div>
              </Card>

              {/* Additional Info */}
              <div className="space-y-8">
                {/* Working Hours */}
                <Card className="p-6 shadow-card bg-background border-0">
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
                <Card className="p-6 shadow-card bg-background border-0">
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

                {/* Commitments */}
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
            </div>
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
                Bản đồ sẽ được tích hợp tại đây
              </h3>
              <p className="text-muted-foreground mb-6">
                Google Maps hiển thị vị trí chính xác và đường đi từ vị trí của bạn
              </p>
              <Button className="bg-professional-blue hover:bg-professional-blue/90 text-white">
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
              >
                <Phone className="h-5 w-5 mr-2" />
                Gọi ngay: 0987.654.321
              </Button>
              <Button 
                variant="outline"
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-warm-orange px-8"
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