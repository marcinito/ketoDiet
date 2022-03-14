import styles from '../styles/FallbackPage.module.css'
const PlaceholderPage = () => {
    return ( 
        <div className={styles.page} >
<h1>Loading...</h1>
<div className="wait">

</div>
<style>{`
.wait{
    width:80%;
    height:60%;
    box-shadow:3px 3px 10px 10px black
}
`}</style>
    </div> 
     );
}
 
export default PlaceholderPage;