export type Member = {
  id: string;
  name: string;
  role: string;
  bio?: string;
  avatarUrl?: string;
};

const team: Member[] = [
  { id: "g1", name: "James Ooi", role: "Founder & Marketing", bio: "Leads partnerships and marketing." },
  { id: "g2", name: "Alex Tan", role: "Head of Product", bio: "Product design & roadmap." },
];

export function TeamGrid() {
  return (
    <section>
      <h2>Our Team</h2>
      <div className="team-grid">
        {team.map((m) => (
          <div key={m.id} className="member-card">
            <div className="avatar">{m.avatarUrl ? <img src={m.avatarUrl} alt={m.name} /> : <div className="initials">{m.name.split(" ").map(n=>n[0]).join("")}</div>}</div>
            <div className="member-info">
              <h3>{m.name}</h3>
              <p className="role">{m.role}</p>
              <p className="bio">{m.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
