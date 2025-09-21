import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-professional-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">TV</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Thông Tắc Vinh</h3>
                <p className="text-sm opacity-80">Dịch vụ chuyên nghiệp</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4">
              Chuyên cung cấp dịch vụ thông tắc cống, hút hầm vệ sinh, bể phốt tại TP Vinh và các tỉnh lân cận. 
              Phục vụ 24/7 với đội ngũ chuyên nghiệp, thiết bị hiện đại.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Dịch vụ chính</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/services" className="opacity-80 hover:opacity-100 transition-opacity">Thông tắc cống</a></li>
              <li><a href="/services" className="opacity-80 hover:opacity-100 transition-opacity">Hút hầm vệ sinh</a></li>
              <li><a href="/services" className="opacity-80 hover:opacity-100 transition-opacity">Hút bể phốt</a></li>
              <li><a href="/services" className="opacity-80 hover:opacity-100 transition-opacity">Nạo vét hố ga</a></li>
              <li><a href="/services" className="opacity-80 hover:opacity-100 transition-opacity">Xử lý mùi hôi</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-trust-green" />
                <span>Hotline: 0987.654.321</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-trust-green" />
                <span>thongtacvinh@email.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-trust-green" />
                <span>TP Vinh, Nghệ An</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-trust-green" />
                <span>Phục vụ 24/7</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2024 Thông Tắc & Hút Hầm Vệ Sinh Vinh. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;