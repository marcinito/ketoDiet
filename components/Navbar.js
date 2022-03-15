const NavbarTop = () => {
    return ( <><div className="navbarTop">
<div className="search">
    <input className="inputSearch" placeholder="....."/><button className="searchBtn">Search</button>
</div>
    </div>
    <style>{
        `
        .navbarTop{
            width:100%;
            height:5vh;
            background-color:black;
            color:white;
            
        }
        .search{
           height:100%;
         
           width:20%;
           display:flex;
           align-items:center;
        }
        .inputSearch{
height:70%;
text-align:center;
font-weight:bold;
font-size:1.1rem;
margin-left:5%;
box-shadow:inset 0px 0px 3px 3px black;

        }
        .searchBtn{
            height:50%;
            background-color:white;
            border:none;
            font-size:1.1rem;
            box-shadow:inset 0px 0px 3px 3px black;
        }
        `
        
        }</style>
    </>
    
    );
    
}
 
export default NavbarTop;