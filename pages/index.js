import Layout from '../components/Layout';
import Listado from '../components/Listado';
import Curso from '../components/Curso';
import Entrada from '../components/Entrada';
import ListadoBlog from '../components/ListadoBlog';
import styles from '../styles/Blog.module.css';


export default function Home({guitarras, curso, entradas}) {

  return (
      <Layout pagina="Inicio" guitarra={guitarras[10]}>
        <main className='contenedor'>
          <h1 className='heading'>Nuestra Colección</h1>
          <Listado
            guitarras={guitarras}
          />
        </main>

        <Curso
          curso={curso}
        />

        <section className='contenedor'>
          <ListadoBlog
            entradas={entradas}
          />
        </section>
      </Layout>
  )
}

//Tenemos que hacer las consultas a la API, pero como haremos varias consultas entonces lo hacemos con Promises para que lo haga al mismo tiempo y con un buen performance...
export async function getServerSideProps() {
  //Links de donde viene la información
  const urlGuitarras = `${process.env.API_URL}/guitarras?_sort=precio:desc`;
  const urlCursos = `${process.env.API_URL}/cursos`;
  const urlEntradas = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`;  // limitamos a solo 3 entradas y orden desc....
  // Primer promesa hace el fetch a cada link y obtiene [respGuitarras, respCursos, respEntradas]
  const [respGuitarras, respCursos, respEntradas] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlEntradas)
  ])
  // Segunda promesa pasa a json las primeras promesas y  obtiene [guitarras, curso, entradas]
  const [guitarras, curso, entradas] = await Promise.all([
    respGuitarras.json(),
    respCursos.json(),
    respEntradas.json()
  ])

  return {
      props: {
          guitarras,
          curso,
          entradas
      }
  }
}
