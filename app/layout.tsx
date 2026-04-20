import type { Metadata } from "next";
import { ClerkProvider, SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
    title: "UrlShortener",
    description: "A simple URL shortener app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={cn("font-sans", geist.variable)}>
            <body>
                <ClerkProvider>
                    <ThemeProvider>
                    <header className="w-full flex items-center justify-between px-6 py-4 border-b border-border bg-background shadow-sm">
                        <span className="text-xl font-bold">UrlShortener</span>
                        <nav className="flex items-center gap-4">
                            <ThemeToggle />
                            <Show when="signed-out">
                                <SignInButton mode="modal">
                                    <Button variant="ghost">Sign in</Button>
                                </SignInButton>
                                <SignUpButton mode="modal">
                                    <Button>Sign up</Button>
                                </SignUpButton>
                            </Show>
                            <Show when="signed-in">
                                <UserButton />
                            </Show>
                        </nav>
                    </header>
                    {children}
                    </ThemeProvider>
                </ClerkProvider>
            </body>
        </html>
    );
}
