interface VideoPlayerProps {
  src: string;
  title: string;
  description: string;
}

export function VideoPlayer({ src, title, description }: VideoPlayerProps) {
  return (
    <section className="space-y-4 border border-black px-8 py-6 rounded-2xl">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-[#1E1E1E]">{title}</h2>
        <p className="text-[#393939]">{description}</p>
      </div>
      <div className="relative w-full aspect-video rounded-[0.875rem] overflow-hidden ">
        {/* <video
          poster="/poster.png"
          className="w-full h-full object-contain"
          controls
          preload="none"
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}

        <iframe
          src={src}
          allowFullScreen
          allow="encrypted-media"
          className="w-full h-full"
        />
      </div>
    </section>
  );
}
