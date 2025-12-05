interface VideoPlayerProps {
  src: string;
  title: string;
  description: string;
}

export function VideoPlayer({ src, title, description }: VideoPlayerProps) {
  return (
    <section className="space-y-4">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          {title}
        </h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="relative w-full aspect-video rounded-[0.875rem] overflow-hidden border border-border/40 bg-muted shadow-lg">
        <video
          poster="/poster.png"
          className="w-full h-full object-contain"
          controls
          preload="none"
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
