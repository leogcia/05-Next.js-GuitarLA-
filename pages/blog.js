import Layout from '../components/Layout';
import ListadoBlog from '../components/ListadoBlog';

//Podemos extraer los datos {entradas} de la API obtenidos por la funcion getStaticProps 
function Blog({entradas}) {

    return (
        <Layout pagina="Blog">
            <main className='contenedor'>
                <ListadoBlog
                    entradas={entradas}
                />
            </main>
        </Layout>
    );
}

//Funcion utilizada en Next.js para la consulta a una API externa
export async function getStaticProps() {    
    const url = `${process.env.API_URL}/blogs?_sort=created_at:desc`;
    const respuesta = await fetch(url);
    const entradas = await respuesta.json();
    return {
        props: {
            entradas
        }
    }
}

export default Blog;