<script>
import Navbar from "./navbar.svelte";
import image1 from "./images/tyskland.jpg";

//midlertidig funksjon løsning fram til backend er fikset

let berlin
function check_berlin(){
    const berlin_flagg = "gj-ctf{mustafa_gemuse_kebab}"
    if (berlin_flagg === berlin){
        alert("Korrekt")
    }
    else{
        alert("Feil flag")
    }
}

//gj-ctf{apfelwein}
//gj-ctf{oktoberfest}
</script>

<div id="main">
    <Navbar/>
    <h1>Germany Julian-CTF</h1>
    <br>
    <img class="img" src={image1} alt="halla">
    <br>

    <p id="story">Julian sitter nok en gang fast i Tyskland og trenger din hjelp til å finne han sine tre eiendeler for å komme seg hjem. <br>
        Han husker kun at eiendelene ligger i tre forskjellige byer: Berlin, Frankfurt og München. Kan du lete i de forskjellige byene og finne dem?
    </p>
    
    <form on:submit={check_berlin}>
        <input type="text" id="berlin" name="berlin" placeholder="Berlin eiendel" bind:value={berlin}><br>
        <input type="submit" value="Submit">
    </form>
    <br>
    <form>
        <input type="text" id="frankfurt" name="frankfurt" placeholder="Frankfurt eiendel"><br>
        <input type="submit" value="Submit">
    </form>
    <br>
    <form action="">
        <input type="text" id="munchen" name="munchen" placeholder="München eiendel"><br>
        <input type="submit" value="Submit">
    </form>
    <br>


</div>


<style>
    .img{
        width: 920px;
        height: 500px;
    }
</style>

