import React, { useState } from 'react'
import { supabase } from './supabaseClient'

// ---- FUNÇÃO DE LOGIN ----
async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    console.error('Erro de login:', error.message)
    alert('Falha no login: ' + error.message)
    return null
  }

  return data.user
}

// ---- FUNÇÃO DE LOGOUT ----
async function logout() {
  const { error } = await supabase.auth.signOut()
  if (error) console.error('Erro no logout:', error.message)
  else window.location.reload()
}

// ---- FUNÇÃO PARA UPLOAD DE MODELOS ----
async function uploadModelo(file, filename) {
  const { data, error } = await supabase.storage
    .from('modelos') // bucket criado no Supabase
    .upload(filename, file, {
      cacheControl: '3600',
      upsert: true,
    })

  if (error) {
    console.error('Erro no upload:', error.message)
    alert('Falha ao enviar o modelo: ' + error.message)
    return null
  }

  alert('Modelo enviado com sucesso!')
  return data
}

// ---- COMPONENTE ----
export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [file, setFile] = useState(null)

  const handleLogin = async () => {
    const loggedUser = await login(email, password)
    if (loggedUser) onLogin(loggedUser)
  }

  const handleUpload = async () => {
    if (!file) return alert('Selecione um arquivo primeiro!')
    const filename = file.name
    await uploadModelo(file, filename)
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ display: 'block', marginBottom: '10px', padding: '5px' }}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ display: 'block', marginBottom: '10px', padding: '5px' }}
      />
      <button onClick={handleLogin} style={{ padding: '5px 10px' }}>Login</button>

      <div style={{ marginTop: '20px' }}>
        <h3>Enviar Modelo</h3>
        <input type="file" onChange={e => setFile(e.target.files[0])} />
        <button onClick={handleUpload} style={{ marginLeft: '10px', padding: '5px 10px' }}>
          Enviar
        </button>
      </div>

      <button onClick={logout} style={{ marginTop: '20px', padding: '5px 10px' }}>Logout</button>
    </div>
  )
}
