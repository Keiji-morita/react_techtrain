import React from 'react'
import axios from "axios";



export default function Register() {
  // registerUrl = 'http://localhost:8000/api/admin/register'
	// state = {
	// 	redirect: false
	// }
    
  const registUser = {
    methods: 'POST',
  }
  
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
      
    </div>
    </ main>
  )
}

