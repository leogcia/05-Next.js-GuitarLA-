import Image from 'next/image';
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'


function Nosotros() {
    return (
        <Layout pagina="Nosotros">
            <main className='contenedor'>
                <h2 className='heading'> Nosotros</h2>

                <div className={styles.contenido}>
                    <Image layout='responsive' width={600} height={450} src='/img/nosotros.jpg' alt='imagen nosotros'/>
                    <div>
                        <p>Donec a vulputate ligula, in pretium lectus. Nullam consequat mauris lorem, vitae pulvinar diam congue nec. Suspendisse ligula arcu, blandit non condimentum id, interdum eleifend lorem. Quisque vestibulum, libero non porttitor luctus, felis elit accumsan nulla, eu rutrum leo ex ut odio. Vivamus a mauris in risus interdum fringilla eu a lectus. Sed porttitor auctor quam, non venenatis arcu volutpat quis.</p>

                        <p>Donec a vulputate ligula, in pretium lectus. Nullam consequat mauris lorem, vitae pulvinar diam congue nec. Suspendisse ligula arcu, blandit non condimentum id, interdum eleifend lorem. Quisque vestibulum, libero non porttitor luctus, felis elit accumsan nulla, eu rutrum leo ex ut odio. Vivamus a mauris in risus interdum fringilla eu a lectus. Sed porttitor auctor quam, non venenatis arcu volutpat quis. Fusce tristique, nunc luctus feugiat porttitor, urna nunc tempor felis.</p>

                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default Nosotros;