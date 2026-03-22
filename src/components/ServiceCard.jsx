export default function ServiceCard({ icon, title, description, onClick }) {
  return (
    <div
      onClick={onClick}
      className="card cursor-pointer hover:scale-105 transition-transform duration-200 text-center"
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="font-serif text-xl font-bold text-text-primary mb-2">{title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
    </div>
  )
}
