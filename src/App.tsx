import { Header } from "./Components/Header";
import { Post } from "./Components/Post";
import { Sidebar } from "./Components/Sidebar";

import './global.css';
import styles from './App.module.css';

// author: {avatarUrl: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/lmartinhao.png',
      name: 'Lola Martinhão',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Oláa, pessoal! 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no primeiro módulo de aprendizado de React, na plataforma da Rocketseat. O nome do projeto é React Burger 🚀' },
      { type: 'link', content: '👉 lolamartinhao.vercel.app/projetos' },
    ],
    publishedAt: new Date('2023-01-07 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://i.ibb.co/GcF8VK8/Captura-de-Tela-2023-01-07-a-s-20-53-36.png',
      name: 'Leo Miranda',
      role: 'CX Supervisor',
    },
    content: [
      { type: 'paragraph', content: 'Bom dia, gente! Todos bem?' },
      { type: 'paragraph', content: 'Estamos com uma vaga aberta no meu time para analista de casos críticos! A equipe é incrível, ambiente 10!' },
      { type: 'paragraph', content: 'Em caso de interesse ou indicações, me chamem pelo linkedIn mesmo, vou deixar o link aqui embaixo:' },
      { type: 'link', content: 'https://www.linkedin.com/in/leonardo-miranda-barbosa/' },
    ],
    publishedAt: new Date('2023-01-06 15:47:30')
  }
];

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
