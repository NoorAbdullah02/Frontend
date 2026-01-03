import Section1 from './components/section1/section1.jsx'
import Section2 from './components/section2/section2.jsx'

const App = () => {


  const users = [
    {
      img: 'https://images.unsplash.com/photo-1597898111396-f149999e08f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdpcmx8ZW58MHx8MHx8fDA%3D',
      intro: '',
      tag: 'Satisfied',
      color: 'green'
    },
    {
      img: 'https://images.unsplash.com/photo-1514315384763-ba401779410f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdpcmx8ZW58MHx8MHx8fDA%3D',
      intro: '',
      tag: 'Unsatisfied',
      color: 'red'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1664366737698-3a98169201c3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      tag: 'Satisfied',
      color: 'orange'
    },
    {
      img: 'https://images.unsplash.com/photo-1606814893907-c2e42943c91f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdpcmx8ZW58MHx8MHx8fDA%3D',
      intro: '',
      tag: 'Not High',
      color: 'blue'
    },
  ]


  return (
    <div>

      <Section1 users={users} />
      <Section2 />

    </div>
  )
}

export default App