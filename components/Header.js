import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css"

function Header({guitarra}) {
    const router = useRouter();

    return (
        <header className={styles.header}>
            <div className="contenedor">
                <div className={styles.barra}>
                    <Link href='/'>
                        <a href="">    {/* rodeamos Image entre "a" para que no aparezca un error dado por poner otro elemento dentro de un Link */}
                            <Image src="/img/logo.svg" alt="imagen logo" width={400} height={100}/>
                        </a>
                    </Link>
                    <nav className={styles.navegacion}>
                        <Link href='/'>Inicio</Link>
                        <Link href='/nosotros'>Nosotros</Link>
                        <Link href='/blog'>Blog</Link>
                        <Link href='/tienda'>Tienda</Link>
                    </nav>
                </div>

                {
                    guitarra && (
                        <div className={styles.modelo}>
                            <h2>Modelo {guitarra.nombre}</h2>
                            <p>{guitarra.descripcion}</p>
                            <p className={styles.precio}>$ {guitarra.precio}</p>
                            <Link href={`/guitarras/${guitarra.url}`}>
                                <a className={styles.enlace}>Ver Producto</a>
                            </Link>
                        </div>
                    )
                }
            </div>

            {
                router.pathname === '/' && (
                    <div className={styles.guitarra}>
                        <Image layout="fixed" src="/img/header_guitarra.png" alt='imagen header'  width={500} height={1200}/>
                    </div>
                )
            }
        </header>
    );
}

export default Header;