import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {createClient} from 'contentful'
import Link from 'next/link'
export async function getStaticProps(){

const client=createClient({
    space:"ps0iaebwipyk",
    accessToken:"kM7KYhpaoJaRnrcRInxKbvwGNQ_BuXXPRU3DGW7Dqw4",
})

const res=await client.getEntries({content_type:"przepisy"})

return {
    props:{
        dane:res.items
    },
    revalidate:1,
}

}



const Przepisy = ({dane}) => {
if(!dane){return(<h1>Loading....</h1>)}
    console.log(dane)
    return ( <div className="listaPrzepisow">
        {dane.map(el=>(
            <Link key={el.sys.id} href={`/blog/${el.fields.adres}`}><a><div className="div"><span className="pText">{el.fields.ketoGofry}</span><br/>
            <div className="zdjAndOpis"><img src={el.fields.image.fields.file.url} className="zdjLink"></img><span className="pOpis">{documentToReactComponents(el.fields.bilans)}</span></div>
            
            </div></a></Link>
        ))}
        <br></br>
        <br></br>
        <br></br>
        <style>{`
        .zdjLink{
            width:30%;
            border:15px solid black;
            border-radius:30%;
            border-left-color:red;
            border-right-color:blue;
            border-top-color:yellow;
            border-bottom-color:green;
            
        }
        .zdjLink:hover{
            transform:rotate(10deg) scale(1.1)
           
        }
        .pText{
            font-size:1.5rem;
           color:darkblue;
           font-family:san-sarif;
         
           display:block;
           margin-top:2%;
        }
        .listaPrzepisow{
       background-color:#DCDCDC;
            margin:0 auto;
            display:flex;
            flex-direction:column;
            align-items:center;
        
            justify-content:center;
        }
        .div{
        
            width:50vw;
            border-bottom:1px solid black;
        }
        .zdjAndOpis{
            display:flex;
        }
        .pOpis{
            margin-left:8%;
           font-weight:bold;
           color:black;
        }
        `}</style>
    </div> );
}
 
export default Przepisy;