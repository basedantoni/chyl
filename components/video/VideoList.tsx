"use client"
import { useState } from "react";
import VideoSection from "@/components/video/VideoSection";
import { Item } from "@/types";

interface PlaylistSection {
    name: string;
    playlistItem: Item[];
  }
  
type Props = {
    playlistSections: Array<PlaylistSection>;
};

const VideoList = ({ playlistSections } : Props) => {
  const [selectedSection, setSelectedSection] = useState(playlistSections[0]);

  return (
    <div>
      <div className="pt-24 px-6 font-bold flex flex-wrap sm:text-4xl w-full justify-center items-center gap-2 sm:gap-3">
        {playlistSections.map((section, idx, arr) => {
            if (idx === arr.length - 1) {
                return (
                    <span
                        key={idx}
                        onClick={() => setSelectedSection(section)}
                        className={`cursor-pointer ${selectedSection === section ? "font-bold" : ""}`}
                    >
                        {section.name}
                    </span>
                )
            }
            return (
                <span
                    key={idx}
                    onClick={() => setSelectedSection(section)}
                    className={`cursor-pointer ${selectedSection === section ? "font-bold" : ""}`}
                >
                    {section.name} /
                </span>
            )
        })}
      </div>
      {selectedSection && <VideoSection section={selectedSection} />}
    </div>
  );
};

export default VideoList;
