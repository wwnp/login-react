import { useState, FC } from 'react'

interface FormProps {
  title: string,
  handleClick: (email:string, password: string) => void
}

const Form: FC<FormProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState('sex@yandex.ru')
  const [password, setPassword] = useState('123456')
  return (
    <div>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='email'
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password'
      />
      <button
        onClick={e => handleClick(email, password)}
      >
        {title}
      </button>
    </div>
  )
}

export { Form }