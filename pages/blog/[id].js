import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {createClient} from 'contentful'
import styles from '../../styles/OpisPrzepisow.module.css'
const client=createClient({
    space:"ps0iaebwipyk",
    accessToken:"kM7KYhpaoJaRnrcRInxKbvwGNQ_BuXXPRU3DGW7Dqw4"
})

export async function getStaticPaths(){
const res= await client.getEntries({content_type:"przepisy"})
const paths=res.items.map(el=>{
    return {
        params:{id:el.fields.adres}
    }
})
return {
    paths,
    fallback:true,
}


}

export async function getStaticProps({params}){
const res=await client.getEntries({content_type:"przepisy",
"fields.adres":params.id
})
return {
    props:{
        dane:res.items[0]
    },
    revalidate:1,
}

}

const DetailAboutPrzepis = ({dane}) => {
    if(!dane){return(<h1>Loading....</h1>)}
    console.log(dane)
    const {bilans,adres,image,ketoGofry,shortDescription}=dane.fields
    return ( <div className={styles.container}>
        <br/>
     <h1 className={styles.h1}>{ketoGofry}</h1>
     <img src={`http:${image.fields.file.url}`} className={styles.zdj}></img>
     <div>{documentToReactComponents(bilans)}</div>
     <div>{documentToReactComponents(shortDescription)}</div>

    </div> );
}
 
export default DetailAboutPrzepis;