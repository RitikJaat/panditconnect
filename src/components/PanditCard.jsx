export default function PanditCard({ name, specialization, rating, reviews, price, image }) {
  return (
    <div className="card-pandit">
      <div className="aspect-square bg-gradient-to-br from-saffron-100 to-gold-100 rounded-lg mb-4 flex items-center justify-center text-5xl">
        {image || '🙏'}
      </div>
      
      <h3 className="font-serif text-xl font-bold text-text-primary mb-1">{name}</h3>
      <p className="text-saffron-500 font-semibold text-sm mb-3">{specialization}</p>

      <div className="flex items-center gap-1 mb-3">
        <span>⭐</span>
        <span className="font-semibold">{rating}</span>
        <span className="text-text-secondary text-sm">({reviews} reviews)</span>
      </div>

      <div className="flex justify-between items-center mb-4">
        <span className="text-lg font-bold text-saffron-500">₹{price}/hr</span>
        <span className="badge badge-success">Verified</span>
      </div>

      <button className="btn-primary w-full text-sm">
        Book Now
      </button>
    </div>
  )
}
