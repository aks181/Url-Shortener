import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/animated-counter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link2, BarChart3, Lock, Zap, Globe, Share2 } from "lucide-react";

export default async function Home() {
  const { userId } = await auth();
  if (userId) redirect("/dashboard");

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-24 text-center">
        <Badge variant="secondary" className="mb-6">
          Fast · Secure · Simple
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-3xl">
          Shorten URLs. Track Clicks. Share Smarter.
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
          Transform long, unwieldy URLs into short, memorable links. 
          Track analytics, customize your links, and share with confidence.
        </p>
        <div className="flex gap-4">
          <SignUpButton mode="modal">
            <Button size="lg">
              Get Started Free
            </Button>
          </SignUpButton>
          <Button variant="outline" size="lg" asChild>
            <a href="#features">Learn More</a>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-16 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Powerful Features
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Everything you need to manage your links effectively
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Link2 className="w-10 h-10 mb-2 text-primary" />
                <CardTitle>Instant Shortening</CardTitle>
                <CardDescription>
                  Create short links in seconds with our lightning-fast URL shortener
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Paste any URL and get a clean, short link instantly. Perfect for social media, emails, and more.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart3 className="w-10 h-10 mb-2 text-primary" />
                <CardTitle>Analytics Dashboard</CardTitle>
                <CardDescription>
                  Track clicks, referrers, and engagement in real-time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Gain insights into who&apos;s clicking your links, when, and from where with detailed analytics.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Lock className="w-10 h-10 mb-2 text-primary" />
                <CardTitle>Secure & Private</CardTitle>
                <CardDescription>
                  Your data is encrypted and protected at all times
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We take security seriously. All links are scanned and your data remains private and secure.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="w-10 h-10 mb-2 text-primary" />
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>
                  Optimized for speed with global CDN coverage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Your short links redirect instantly, providing the best experience for your audience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="w-10 h-10 mb-2 text-primary" />
                <CardTitle>Custom Domains</CardTitle>
                <CardDescription>
                  Use your own branded domain for short links
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Build trust with custom branded short URLs that reflect your brand identity.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Share2 className="w-10 h-10 mb-2 text-primary" />
                <CardTitle>Easy Sharing</CardTitle>
                <CardDescription>
                  Share your links anywhere with one click
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Copy, share, or embed your short links across all platforms with ease.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">
                <AnimatedCounter end={10} suffix="K+" />
              </h3>
              <p className="text-muted-foreground">Short Links Created</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">
                <AnimatedCounter end={99.9} decimals={1} suffix="%" />
              </h3>
              <p className="text-muted-foreground">Uptime Guarantee</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">
                <AnimatedCounter end={100} prefix="<" suffix="ms" />
              </h3>
              <p className="text-muted-foreground">Average Redirect Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of users who trust UrlShortener for their link management needs.
          </p>
          <SignUpButton mode="modal">
            <Button size="lg" variant="secondary">
              Create Your Free Account
            </Button>
          </SignUpButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-border text-center text-sm text-muted-foreground">
        <p>&copy; 2026 UrlShortener. All rights reserved.</p>
      </footer>
    </main>
  );
}
