import Image from 'next/image';
import Layout from '../../components/Layout';
import { formatearFecha } from '../../helpers/index';
import styles from '../../styles/Entrada.module.css'

function EntradaBlog( { entrada } ) {

    const { contenido, imagen, published_at, titulo } = entrada;

    return (
        <Layout pagina={titulo}>
            <main className="contenedor">
                <h1 className="heading">{titulo}</h1>
                <article className={styles.entrada}>
                    <Image layout='responsive' width={800} height={600} src={imagen.url} alt={`Imagen ${titulo}`}/>

                    <div className={styles.contenido}>
                        <p className={styles.fecha}>{formatearFecha(published_at)}</p>
                        <p className={styles.texto}>{contenido}</p>
                    </div>
                </article>
            </main>
        </Layout>
    );
}

//Identifica TODAS LAS ENTRADAS
export async function getStaticPaths() {
    const url = `${process.env.API_URL}/blogs/`;
    const respuesta = await fetch(url);
    const entradas = await respuesta.json();
    const paths = entradas.map(entrada =>({
        //params: { id: entrada.id.toString() }     //lo convertimos a String porque por defecto llega como número, pero la funcion la requiere como string
        params: { url: entrada.url }     //lo convertimos a String porque por defecto llega como número, pero la funcion la requiere como string
    }))

    return {
        paths,
        fallback: false
    }
}

//Para usar getStaticProps es necesario usar getStaticPaths  (en rutas dinamicas como esta [id].js)
//Identifica CADA ENTRADA
export async function getStaticProps({ params: {url} }) {  //params se generó en la funcion getStaticPaths
    const urlBlog = `${process.env.API_URL}/blogs?url=${url}`;
    const respuesta = await fetch(urlBlog);
    const entrada = await respuesta.json();
    return {
        props:{
            entrada: entrada[0]
        }
    }
}

//como estamos en un componente que se refiere a id dinamico "[id].js" getServerSideProps recibe automaticamente "query" y lo podemos volver a desestructurar para obtener el id
// export async function getServerSideProps({ query: {id} }) {
//     const url = `${process.env.API_URL}/blogs/${id}`;
//     const respuesta = await fetch(url);
//     const entrada = await respuesta.json();
//     return {
//         props:{
//             entrada
//         }
//     }
// }

export default EntradaBlog;