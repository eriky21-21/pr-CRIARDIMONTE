import React from 'react'

export default function Dashboard({ user }) {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Bem-vindo ao SaaS</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Cadastro:</strong> {new Date(user.created_at).toLocaleDateString()}</p>
    </div>
  )
}
