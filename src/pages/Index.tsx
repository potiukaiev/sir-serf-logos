import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <Logo />
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-slide-up">
            <Logo variant="default" className="justify-center mb-8" />
          </div>
          
          <h2 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-slide-up">
            Innovative IT Software Solutions
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up">
            Empowering businesses with cutting-edge technology and custom software development. 
            Your trusted partner in digital transformation.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap animate-slide-up">
            <Button variant="premium" size="lg" className="px-8">
              Our Services
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="container mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">What We Do</h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="shadow-card hover:shadow-tech transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-tech rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Custom Software</h4>
              <p className="text-muted-foreground">Tailored solutions designed to meet your unique business requirements.</p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-tech transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">System Integration</h4>
              <p className="text-muted-foreground">Seamlessly connect your existing systems for optimal efficiency.</p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-tech transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-tech-purple rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Performance Optimization</h4>
              <p className="text-muted-foreground">Boost your applications' speed and reliability with our expertise.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/50 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Logo variant="compact" />
            <p className="text-muted-foreground mt-4 md:mt-0">
              © 2024 Sir gay and serf Dmytro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;