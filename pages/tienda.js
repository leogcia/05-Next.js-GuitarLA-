import Layout from '../components/Layout'
import Listado from '../components/Listado';

function Tienda( { guitarras } ) {
    return (
        <Layout pagina="Tienda Virtual">
            <main className='contenedor'>
                <h1 className='heading'>Nuestra Colección</h1>
                <Listado
                    guitarras={guitarras}
                />
            </main>
        </Layout>
    );
}

//Obtenemos las guitarras desde la API
export async function getServerSideProps() {
    const url = `${process.env.API_URL}/guitarras?_sort=precio:desc`   //strapi nos premite hacer filtros de acuerdo a nuestras necesidades (precio, ultimas entradas, etc)
    const respuesta = await fetch(url)
    const guitarras = await respuesta.json()
    return {
        props: {
            guitarras
        }
    }
}

export default Tienda;