export interface PastMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  linkedinUrl?: string;
}

export interface PastTenure {
  session: string;
  members: PastMember[];
}

export const pastTenures: PastTenure[] = [
  {
    session: "2023 / 2024 Session",
    members: [
      {
        id: "23-1",
        name: "Jonathan Doe",
        role: "President",
        imageUrl: "https://picsum.photos/400/400?random=201",
        linkedinUrl: "#"
      },
      {
        id: "23-2",
        name: "Amanda Smith",
        role: "Vice President",
        imageUrl: "https://picsum.photos/400/400?random=202",
        linkedinUrl: "#"
      },
      {
        id: "23-3",
        name: "Robert Chen",
        role: "Tech Lead",
        imageUrl: "https://picsum.photos/400/400?random=203",
        linkedinUrl: "#"
      }
    ]
  },
  {
    session: "2022 / 2023 Session",
    members: [
      {
        id: "22-1",
        name: "Michael Chang",
        role: "President",
        imageUrl: "https://picsum.photos/400/400?random=204",
        linkedinUrl: "#"
      },
      {
        id: "22-2",
        name: "Sarah Williams",
        role: "Vice President",
        imageUrl: "https://picsum.photos/400/400?random=205",
        linkedinUrl: "#"
      }
    ]
  }
];