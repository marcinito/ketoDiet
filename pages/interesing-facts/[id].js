import {createClient} from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from '../../styles/InteresingFact.module.css'
const client=createClient({
    space:"ps0iaebwipyk",
    accessToken:"kM7KYhpaoJaRnrcRInxKbvwGNQ_BuXXPRU3DGW7Dqw4",
})

export const getStaticPaths=async()=>{
const res=await client.getEntries({content_type:"interesing"})

const paths=res.items.map(el=>(
  
        {params:{id:el.fields.sciezka}}
    )
)

return {
    paths,
    fallback:true
}


}


export const getStaticProps=async({params})=>{

    const {items}=await client.getEntries({content_type:'interesing',
'fields.sciezka':params.id
})

return {
    props:{
        dane:items[0]
    }
}


}


const DetailAboutArticle = ({dane}) => {
    console.log(dane)
    const {tytu,krtkiOpis,opis,sciezka,zdj}=dane.fields
    console.log(zdj.fields.file.url)
    return ( <div className={styles.containerArticleDetial}>
        <h1 className={styles.h1}>{tytu}</h1>
        <img className={styles.zdjArticle} src={`http:${zdj.fields.file.url}`}/>
        <div>{documentToReactComponents(opis)}</div>
    </div> );
}
 
export default DetailAboutArticle;