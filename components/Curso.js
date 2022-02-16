import styles from '../styles/Curso.module.css'

function Curso( {curso} ) {
    const { contenido, titulo, imagen } = curso;
    return (
        <section>
            <div className={`contenedor ${styles.grid}`}>
                <div className={styles.contenido}>
                    <h2 className='heading'>{titulo}</h2>
                    <p className={styles.texto}>{contenido}</p>
                    <a className={styles.enlace} href="#" >Más Información</a>
                </div>
            </div>
{/* usaremos la siguiente manera de agregar css al componente porque queremos insertar la imagen que viene en los parámetros de la funcio, y esto no se puede realizar con otra manera conocida de css */}
            <style jsx>{`
                section {
                    padding: 10rem 0;
                    margin-top: 10rem;
                    background-image: linear-gradient(to right, rgb(0 0 0 /.65), rgb( 0 0 0/.7)), url(${imagen.url});
                    background-size: cover;
                    background-position: 50%;
                }
            `}</style>
        </section>
    );
}

export default Curso;