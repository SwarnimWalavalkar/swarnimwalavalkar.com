import { z } from "zod";

const videoSchema = z.object({
  title: z.string(),
  url: z.string(),
});

export type Video = z.infer<typeof videoSchema>;

export async function getVideos(): Promise<Video[]> {
  return [
    {
      title: "Randy Pausch Last Lecture",
      url: "https://www.youtube.com/watch?v=ji5_MqicxSo",
    },
    {
      title: "How do computers read code?",
      url: "https://youtu.be/QXjU9qTsYCc?si=rzQjQ2mrcUgzDGjA",
    },
    {
      title: "Let's build GPT: from scratch, in code, spelled out.",
      url: "https://youtu.be/kCc8FmEb1nY?si=JLU7vpr_2uWsFdFx",
    },

    {
      title: "Carl Sagan - Pale Blue Dot",
      url: "https://youtu.be/wupToqz1e2g?si=breeTHkNVcQIFGCd",
    },
    {
      title: "Viktor Frankl on Why Idealists Are Real Realists",
      url: "https://youtu.be/loay2imHq5E?si=u3oyOQNEyCdeuCKk",
    },
    {
      title: "Steve Jobs - Bicycle of the mind",
      url: "https://youtu.be/KmuP8gsgWb8?si=mEYoFr9adrTb9bef",
    },
    {
      title: "Steve Jobs' 2005 Stanford Commencement Address",
      url: "https://youtu.be/UF8uR6Z6KLc?si=nB68dXi2GUjETRek",
    },
    {
      title: "Steve Jobs Secrets of Life",
      url: "https://youtu.be/kYfNvmF0Bqw?si=9C8ose93Ip6QkIaZ",
    },
    {
      title: "Computers as a social construct",
      url: "https://youtu.be/nKyf4gVE5n0?si=P7gBq_N_kObgs0X-",
    },
    {
      title: "The Art of Computers by Scott Hanselman",
      url: "https://youtu.be/gm01bvS5f4A?si=HgH9yCL5GaRnYwbk",
    },
    {
      title: "Introduction to mathematical thinking",
      url: "https://youtu.be/LN7cCW1rSsI?si=F5wAAuEPFqY_DNVu",
    },
  ].sort((a, b) => b.title.length - a.title.length);
}
