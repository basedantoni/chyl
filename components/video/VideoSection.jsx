// components/VideoSection.js
import React from "react";

const VideoSection = ({ section }) => {
  return (
    <section className="flex flex-col w-full items-center gap-8 mt-12 px-6 sm:px-56">
      {section.playlistItem.map((item, itemIdx) => {
        const publishYear = new Date(item.snippet.publishedAt).getFullYear();

        return (
          <figure key={itemIdx} className="w-full h-[27rem] md:max-w-[48rem] md:max-h-[27rem] flex flex-col items-center justify-center">
            <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${item.contentDetails.videoId}`} allowFullScreen></iframe>
            <figcaption className="w-full">
              <p className="flex flex-col gap-1 mt-5 text-xl">
                <span>{item.snippet.title}</span>
                <span>{publishYear}</span>
              </p>
            </figcaption>
          </figure>
        );
      })}
    </section>
  );
};

export default VideoSection;
