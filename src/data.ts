interface StreamingService {
  name: string,
  rate: number
}

export const streamingServices: StreamingService[] =
    [
      {
        name: 'Spotify',
        rate: 0.00437,
      },
      {
        name: 'Apple Music',
        rate: 0.00783,
      },
      {
        name: 'Tidal',
        rate: 0.01284,
      },
      {
        name: 'Deezer',
        rate: 0.0064,
      },
      {
        name: 'Pandora',
        rate: 0.00133,
      },
      {
        name: 'Amazon Music',
        rate: 0.00402,
      }
    ]
;

interface Paragraph {
  heading: string,
  body: string
}

export const paragraphs: Paragraph[] = [
  {
    heading: "What are streaming royalties?",
    body: "Streaming royalties are the main source of income for artists. In fact, they are fees paid to artists and songwriters for every stream on platforms like Spotify, YouTube and Apple Music."
  },
  {
    heading: "Types of streaming service",
    body: "There are two types of steaming service: On-demand and Non-interactive. \n On-demand services include platforms such as Spotify, Apple Music and Youtube. They are placed in this category for their music being ‘on-demand’. Listeners can hear any song whenever they see fit. Non-interactive streaming platforms include sites such as Pandora and internet radio websites. These platforms function much like a radio, playing songs to listeners at random, without the ability to select specific tracks. "
  },
]