import { Logo } from "@/components/Logo";
import { VideoPlayer } from "@/components/VideoPlayer";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('/bg1-desktop.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="min-h-screen bg-background"
    >
      {/* Header */}
      <header className="border-b border-border/40 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 md:px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Logo className="h-8 w-auto" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 md:px-4 py-12">
        {/* Page Headline */}
        <div className="max-w-6xl mx-auto mb-12 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Amway Business Tablet and Toolkit
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Everything you need to grow your Amway business in one powerful
            toolkit
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Video Section 1 - English */}
          <VideoPlayer
            src={`https://videoforinteractivedemons.s3.ap-south-1.amazonaws.com/tablet/ATV+REVISED+2.0+.mp4`}
            title="Amway Business Tablet (English)"
            description="Learn how to use your Amway Business Tablet in English"
          />

          {/* Video Section 2 - Hindi */}
          <VideoPlayer
            src={`https://videoforinteractivedemons.s3.ap-south-1.amazonaws.com/tablet/ATV+REVISED+2.0+.mp4`}
            title="Amway Business Tablet (Hindi)"
            description="अपने Amway Business Tablet का उपयोग हिंदी में सीखें"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 mt-16">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-muted-foreground">
            Copyright © 2025 Amway India Enterprises Pvt. Ltd.
          </p>
        </div>
      </footer>
    </div>
  );
}
