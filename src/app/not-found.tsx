import Link from "next/link";
import { Button } from "@/components/ui";

export default function NotFound() {
    return (
        <div className="min-h-[60vh] flex items-center justify-center px-4">
            <div className="max-w-md mx-auto text-center">
                <div className="text-6xl font-extrabold text-brand-500 mb-4">404</div>
                <h1 className="text-2xl font-bold text-neutral-900 mb-3">
                    Page Not Found
                </h1>
                <p className="text-neutral-600 mb-8">
                    Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have
                    been moved or no longer exists.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button href="/" variant="primary">
                        Go Home
                    </Button>
                    <Button href="/contact/" variant="outline">
                        Contact Us
                    </Button>
                </div>
            </div>
        </div>
    );
}
