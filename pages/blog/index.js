import Link from 'next/link'
import Image from 'next/image'
import {createClient} from 'contentful'
import Przepisy from '../../components/Przepisy'


export async function getStaticProps(){
const client=createClient({
    space:'ps0iaebwipyk',
    accessToken:'kM7KYhpaoJaRnrcRInxKbvwGNQ_BuXXPRU3DGW7Dqw4',
})

const res=await client.getEntries({content_type:'przepisy'})

return {
    props:{dane:res}
}

}



const Wpisy = ({dane}) => {

    const {items}=dane
    console.log(items)
    return ( <div>
{items.map(el=>{
    return(
        <div className="pakPrzepisow" key={el.sys.id}>
       <Link href={`/blog/${el.fields.ketoGofry}`}><a><h1>{el.fields.ketoGofry}</h1>
           <Image src={`http:${el.fields.image.fields.file.url}`} width="200" height="200"></Image>
           
           </a></Link>
           </div>
    )
})}
<style>{`
.pakPrzepisow{
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    
}
`}</style>
    </div> );
}
 
export default Wpisy;