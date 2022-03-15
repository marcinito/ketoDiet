import React,{useEffect,useRef,useState} from 'react'
import styles from '../styles/NavbarSecond.module.css'

const tabNavImg=['/keto1.png','/keto2.png','/keto3.png','/keto4.png','/keto5.png','/keto6.png','/keto7.png']

const NavbarSecond = () => {

  const [klik,setKlik]=useState(true)  

let index1=0
let index2=1
let index3=2

const img1Ref=useRef(null)
const img2Ref=useRef(null)
const img3Ref=useRef(null)


const changeImage=(img,index)=>{
 
img.src=tabNavImg[index]


}

useEffect(()=>{
setInterval(()=>{
    if(index1>=tabNavImg.length-1)index1=0
    if(index2>=tabNavImg.length-1)index2=0
    if(index3>=tabNavImg.length-1)index3=0
    index1++
    index2++
    index3++
    
    changeImage(img1Ref.current,index1)
changeImage(img2Ref.current,index2)
changeImage(img3Ref.current,index3)


setKlik(!klik)
},5000)



},[])


    return (<><div className={styles.navbarSecond}>
<img ref={img1Ref} src={tabNavImg[0]} className={styles.navFoto}/>
<img  ref={img2Ref}src="/keto4.png" className={styles.navFoto}/>
<img ref={img3Ref} src="/keto3.png" className={styles.navFoto}/>

    </div> 

    </> );
}
 
export default NavbarSecond;