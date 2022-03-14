import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { createClient } from "contentful";
import Image from 'next/image'
import PlaceholderPage from '../../components/PlaceholderPage';
const client=createClient({
    space:'ps0iaebwipyk',
    accessToken:'kM7KYhpaoJaRnrcRInxKbvwGNQ_BuXXPRU3DGW7Dqw4'
})
export async function getStaticPaths(){
    const res=await client.getEntries({content_type:"przepisy"})

    const paths= res.items.map(el=>{
        return{
            params:{id:el.fields.ketoGofry}
        }
    })

    return{
        paths,
        fallback:true,
    }
}
export async function getStaticProps({params}){
const res=await client.getEntries({content_type:"przepisy",
'fields.ketoGofry':params.id
})

return{
    props:{
        dane:res.items[0]
    },
    revalidate:1,
}
}

const CatchBlog = ({dane}) => {
if(!dane) return <PlaceholderPage/>
const {ketoGofry,shortDescription,image}=dane.fields
console.log(shortDescription)
    return ( <div>
<h1>{ketoGofry}</h1>
<Image src={`http:${image.fields.file.url}`} width="400" height="300"></Image>
{documentToReactComponents(shortDescription)}
    </div> );
}
 
export default CatchBlog;