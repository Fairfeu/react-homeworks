function StatusBadge({ isAvailable }) {
  return (
    <>
      <div>{isAvailable ? 'Доступен для проекта' : 'Сейчас занят'}</div>
    </>
  )
}
export default StatusBadge
