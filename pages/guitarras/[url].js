import Layout from '../../components/Layout';
import Image from "next/image";
import styles from '../../styles/Guitarra.module.css';


function Producto( { guitarra } ) {
    const { descripcion, imagen, nombre, precio } = guitarra[0];
    return (
        <Layout pagina={nombre}>
            <div className={styles.guitarra}>
                <Image layout="responsive" priority={true} width={180} height={350} src={imagen.url} alt={`Imagen ${nombre}`}/>
                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>$ {precio}</p>
                    <form className={styles.formulario}>
                        <label>Cantidad:</label>
                        <select>
                            <option value=''>--Seleccione--</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                        <input
                            type='submit'
                            value='Agregar al Carrito'
                        />
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export async function getServerSideProps({query: {url}}) {  // el parametro es el mismo del nombre del archivo, en este caso url
    const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`;
    const resp = await fetch(urlGuitarra);
    const guitarra = await resp.json();
    return {
        props: {
            guitarra
        }
    }
}

export default Producto;