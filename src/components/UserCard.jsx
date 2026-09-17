import StatusBadge from './StatusBadge'
import Card from './Card'
function UserCard({ name, role, experience, location, isAvailable }) {
  return (
    <Card>
      <div>{name}</div>
      <div>{role}</div>
      <div>Опыт: {experience} года</div>
      <div>
        {location.city}, {location.country}
      </div>
      <div>
        <StatusBadge isAvailable={isAvailable} />
      </div>
    </Card>
  )
}
export default UserCard
