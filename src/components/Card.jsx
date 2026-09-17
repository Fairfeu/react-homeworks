function Card({ children }) {
  return (
    <article
      style={{ textAlign: 'left', marginBottom: '30px' }}
      className="card"
    >
      {children}
    </article>
  )
}
export default Card
