import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
    title: "Contact Us",
    description:
        "Get in touch with Feeding the Future Project about volunteering, donating, school partnerships, family support, events, or general questions.",
    path: "/contact/",
});

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
