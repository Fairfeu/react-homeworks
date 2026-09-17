import './App.css'
import UserCard from './components/UserCard'
function App() {
  return (
    <>
      <UserCard
        name="Павел"
        role="Frontend-разработчик"
        experience={3}
        location={{ city: 'Минск', country: 'Беларусь' }}
        isAvailable={true}
      />
      <UserCard
        name="Alex"
        role="PHP-разработчик"
        experience={2}
        location={{ city: 'Gomel', country: 'Беларусь' }}
        isAvailable={true}
      />
      <UserCard
        name="Aleh"
        role="Java-разработчик"
        experience={4}
        location={{ city: 'Brest', country: 'Беларусь' }}
        isAvailable={false}
      />
    </>
  )
}
export default App
