import React from 'react'
import axios from "axios";



export default function Register() {
  // registerUrl = 'http://localhost:8000/api/admin/register'
	// state = {
	// 	redirect: false
	// }
    
  const registUser = {
    methods: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ title: 'User Information' })
  };
  fetch('api-for-missions-and-railways.herokuapp.com')
  
  return (
    <main>
    <div>
      <h1>ユーザー情報登録</h1>
      
      <form>
        <label>ユーザーネーム</label>
        <input />
      </form>

      <form>
        <label>メールアドレス</label>
        <input />
      </form>

      <form>
        <label>パスワード</label>
        <input />
      </form>
      
      <button>submit</button>
    </div>
    </ main>
  )
}

