import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Cross2Icon, ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { IMAGES, getImageBySlug } from "../images";
import { LightboxKeyboardHandler } from "../components/LightboxKeyboardHandler";
import "../style.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return IMAGES.map((image) => ({
    slug: image.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const image = getImageBySlug(slug);

  if (!image) {
    return { title: "Not Found" };
  }

  return {
    title: `${image.title} | Cosmic Sanctum`,
    description: image.description || `${image.title} - AI art created with ${image.tool}`,
    openGraph: {
      title: image.title,
      description: `AI art created with ${image.tool}`,
      images: [{ url: image.src }],
    },
  };
}

export default async function LightboxPage({ params }: PageProps) {
  const { slug } = await params;
  const image = getImageBySlug(slug);

  if (!image) {
    notFound();
  }

  // Find prev/next for navigation
  const currentIndex = IMAGES.findIndex((img) => img.slug === slug);
  const prevImage = currentIndex > 0 ? IMAGES[currentIndex - 1] : null;
  const nextImage = currentIndex < IMAGES.length - 1 ? IMAGES[currentIndex + 1] : null;

  return (
    <div className="lightbox-overlay">
      <LightboxKeyboardHandler
        prevSlug={prevImage?.slug ?? null}
        nextSlug={nextImage?.slug ?? null}
      />
      <Link href="/art" className="lightbox-close" aria-label="Close lightbox">
        <Cross2Icon width={24} height={24} />
      </Link>

      {prevImage && (
        <Link
          href={`/art/${prevImage.slug}`}
          className="lightbox-nav lightbox-nav-prev"
          aria-label="Previous image"
        >
          <ChevronLeftIcon width={32} height={32} />
        </Link>
      )}

      {nextImage && (
        <Link
          href={`/art/${nextImage.slug}`}
          className="lightbox-nav lightbox-nav-next"
          aria-label="Next image"
        >
          <ChevronRightIcon width={32} height={32} />
        </Link>
      )}

      <div className="lightbox-content">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="lightbox-image"
          priority
        />
        <div className="lightbox-info">
          <h1 className="lightbox-title">{image.title}</h1>
          <p className="lightbox-tool">{image.tool}</p>
          {image.description && (
            <p className="lightbox-description">{image.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
