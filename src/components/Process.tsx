import { Phone, Search, FileText, Wrench, CheckCircle } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Phone,
      number: "01",
      title: "Nhận yêu cầu",
      description: "Khách hàng gọi điện hoặc nhắn tin báo tình trạng cần xử lý"
    },
    {
      icon: Search,
      number: "02", 
      title: "Khảo sát",
      description: "Đội kỹ thuật đến hiện trường khảo sát và đánh giá tình trạng"
    },
    {
      icon: FileText,
      number: "03",
      title: "Báo giá",
      description: "Đưa ra báo giá chi tiết, minh bạch cho khách hàng"
    },
    {
      icon: Wrench,
      number: "04",
      title: "Thi công",
      description: "Tiến hành thi công với thiết bị chuyên dụng"
    },
    {
      icon: CheckCircle,
      number: "05",
      title: "Nghiệm thu",
      description: "Kiểm tra kết quả, đảm bảo chất lượng trước khi bàn giao"
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-professional-blue mb-4">
            Quy trình làm việc chuyên nghiệp
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            6 bước thực hiện đảm bảo chất lượng dịch vụ và sự hài lòng của khách hàng
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-hero rounded-full mb-4 shadow-hero">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-warm-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-professional-blue mb-3 text-center">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-soft-gray rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-professional-blue mb-4">
              Cam kết chất lượng
            </h3>
            <p className="text-muted-foreground mb-6">
              Chúng tôi cam kết thực hiện đúng quy trình, đảm bảo chất lượng và tiến độ. 
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-trust-green">24/7</div>
                <div className="text-sm text-muted-foreground">Hỗ trợ</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-professional-blue">Cam kết</div>
                <div className="text-sm text-muted-foreground">Chất lượng</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-trust-green">100%</div>
                <div className="text-sm text-muted-foreground">Hài lòng</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
