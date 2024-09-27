'use client';
import { useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { birthdayMessages } from "../../constants/BirthdayMessages";

const BirthDayForm = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);

  const generateRandomMessage = () => {
    if (name === undefined || !name.trim()) {
      setError(true)
      return;
    }
    setError(false)

    const randomIndex = Math.floor(Math.random() * birthdayMessages.length);

    setMessage(birthdayMessages[randomIndex].replace("[nome]", name));
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Gerador de Mensagem para Aniversário</h1>

        <input
          type="text"
          placeholder="Digite o nome do aniversariante"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded mb-4"
        />

        <button
          onClick={generateRandomMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >Gerar Mensagem
        </button>

        {error && (
          <div className="mt-6 text-center">
            <span className="text-lg text-red-400">O nome do aniversariante não pode ser vazio.</span>
          </div>
        )}

        {message && (
          <div className="mt-6 text-center">
            <h2 className="text-xl font-semibold mb-4">{message}</h2>

            <div className="flex gap-4 justify-center items-center">
              <CopyToClipboard text={message} onCopy={() => setCopied(true)}>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded">Copiar Mensagem</button>
              </CopyToClipboard>

              {copied && <span className="text-sm text-gray-500">Copiado!</span>}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default BirthDayForm;