import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { createClient } from 'contentful';
import Link from 'next/link';
import styles from '../../styles/InteresingFact.module.css'
export async function getStaticProps(){
    const client=createClient({
        space:"ps0iaebwipyk",
        accessToken:"vs1sZNMhCRAT_WaSpaccCDSmoP0ii4Ge_HolkwgBxxA",
    })
    const res=await client.getEntries({content_type:"interesing"})

    return {
        props:{dane:res.items}
    }
}

const Interesing = ({dane}) => {
    console.log(dane)
    return ( <div className={styles.container}>
        <br/>
        <div className={styles.article}>
            {dane.map(el=>(
                <Link key={el.sys.id} href={`/interesing-facts/${el.fields.sciezka}`}><a><h1>{el.fields.tytu}</h1>
                <div className={styles.imgAndOpis}><img className={styles.imgOpis} src={`http:${el.fields.zdj.fields.file.url}`}></img><span>{documentToReactComponents(el.fields.krtkiOpis)}</span></div>
                </a></Link>
            ))}
        </div>
        <br/>
        <br/>
    </div> );
}
 
export default Interesing;