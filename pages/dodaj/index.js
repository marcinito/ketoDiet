
import styles from '../../styles/Dodaj.module.css'

const Dodaj = () => {
    return ( <div className={styles.container}>
        <br/>
        <h1 className={styles.h1}>Chcesz dodać własny przepis lub artykuł?Nie prostszego znajdz 5 minut wolnego czasu i zaczynamy</h1>
        <h3 className={styles.h3}>Artykuł lub przepis moze byc na jakikolwiek temat i cokolwiek mozna tam wpisac</h3>
        <ol>
            <li className={styles.li}>Pierwszy Krok, kliknij na link pod spodem żeby wejść na strone na której to zrobisz!
            Gdy na niej juz bedziesz klinij <span className={styles.spaninfo}>Log in</span> po prawej stronie
            </li><a className={styles.a} href="https://www.contentful.com/" without rel="noreferrer" target="_blank">KLIKNIJ NA TEN LINK</a>
            <img className={styles.zdj} src={`/instrukcja/instrukcja1.png`}></img>
            <br/>
            <br/>
            <br/>
            <li className={styles.li}>Drugi krok, po wykonaniu instrukcji z obrazka (kliknieciu na <em className={styles.spaninfo}>Log in</em> zostaniesz 
            przerzucony na taka strone) ,teraz kliknij pod panelem logoania na ikonke <em className={styles.spaninfo2}>GitHub</em> <span>Nie wpisuj tutaj zadych danych</span></li>
            <img className={styles.zdj2} src={`/instrukcja/instrukcja2.png`}></img>
            <br/>
            <br/>
            <br/>
            <li className={styles.li}>Trzeci krok, zostaniesz przerzucony na nastepna strone na niej znajdziesz taki panel
                do logowania wpisz w nim <em className={styles.spaninfo}>Login</em> <span className={styles.spaninfo3}>kalwara_marcin@o2.pl</span> i <em>haslo</em> 
                 <span className={styles.spaninfo3}> marcinkalwara1</span>
                 nastepnie kliknij na zielony przycisk <span>Sign In</span>
            </li>
            <img className={styles.zdj2} src={`/instrukcja/instrukcja3.png`}></img>
            <br/>
            <br/>
            <br/>
            <li className={styles.li}>Czwarty krok, wyskoczy Ci taka strona na czarnym menu kliknij w <span className={styles.spaninfo2}>Content</span></li>
            <img className={styles.zdj} src={`/instrukcja/instrukcja4.png`}></img>
            <br/>
            <br/>
            <br/>
            <li className={styles.li}>Piaty krok, po prawej stronie bedziesz miał niebieski przycisk <span className={styles.spaninfo2}>Add ....</span> kliknij na niego i wysunie Ci
            sie pare opcji co chcesz dodac!<span className={styles.spaninfo3}> UWAGA, wybierz tylko <em className={styles.spaninfo4} >Interesing</em> albo <em className={styles.spaninfo4}>przepisy</em> </span></li>
            <img className={styles.zdj2} src={`/instrukcja/instrukcja5.png`}></img>
            <br/>
            <br/>
            <br/>
            <li className={styles.li}>Szósty krok, wyskoczy Ci pare formularzy do uzupelnienia pod nimi bd mial opis co trzeba w nich umiescic
                ,po wypelnieniu wszystkich okienek kliknij na zielony przycisk <span className={styles.spaninfo}>PUBLISH</span>
            </li>
            
            <img className={styles.zdj} src={`/instrukcja/instrukcja6.png`}></img>




        </ol>


        <h2 className={styles.h1}>Mam nadzieje że dodasz coś ciekawego na tą strone ;) napewno to przeczytam !! </h2>
    <br/>
    <br/>
    <br/>
    </div> );
}
 
export default Dodaj