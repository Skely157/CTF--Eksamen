<script>
import Navbar from "./navbar.svelte";
import image1 from "./images/tyskland.jpg";

//midlertidig funksjon løsning fram til backend er fikset

let count = 0;
let berlin = "";
let frankfurt = "";
let munchen = "";

async function submitFlag(city, flag) {
    const response = await fetch(`http://localhost:3000/checkFlag`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ city, flag })
    });
    const result = await response.json();
    if (result.success) {
        alert("Korrekt");
        count += 1
    } else {
        alert("Feil flag");
    }
}

function handleBerlinSubmit(event) {
    event.preventDefault();
    submitFlag("Berlin", berlin);
}

function handleFrankfurtSubmit(event) {
    event.preventDefault();
    submitFlag("Frankfurt", frankfurt);
}

function handleMunchenSubmit(event) {
    event.preventDefault();
    submitFlag("München", munchen);
}

</script>

{#if count < 3}
    <div id="main">
        <Navbar/>
        <h1>Germany Julian-CTF</h1>
        <br>
        <img class="img" src={image1} alt="halla">
        <br>

        <p id="story">Julian sitter nok en gang fast i Tyskland og trenger din hjelp til å finne han sine tre eiendeler for å komme seg hjem. <br>
            Han husker kun at eiendelene ligger i tre forskjellige byer: Berlin, Frankfurt og München. Kan du lete i de forskjellige byene og finne dem?
        </p>
        
        <form on:submit={handleBerlinSubmit}>
            <input type="text" id="berlin" name="berlin" placeholder="Berlin eiendel" bind:value={berlin}><br>
            <input type="submit" value="Submit">
        </form>
        <br>
        <form on:submit={handleFrankfurtSubmit}>
            <input type="text" id="frankfurt" name="frankfurt" placeholder="Frankfurt eiendel" bind:value={frankfurt}><br>
            <input type="submit" value="Submit">
        </form>
        <br>
        <form on:submit={handleMunchenSubmit}>
            <input type="text" id="munchen" name="munchen" placeholder="München eiendel" bind:value={munchen}><br>
            <input type="submit" value="Submit">
        </form>
        <br>


    </div>
{/if}

{#if count >=3}
    <h2>Du fant alle flaggene!! <br>
        Gratulerer! 🥳🥳
    </h2>

{/if}

<style>
    .img{
        width: 920px;
        height: 500px;
    }
</style>

    <!-- function check_berlin(){
        const berlin_flagg = "gj-ctf{mustafa_gemuse_kebab}"
        if (berlin_flagg === berlin){
            alert("Riktig flagg!!")
        }
        else{
            alert("Feil flagg... :(")
        }
    }
    
    function check_frankfurt(){
        const frankfurt_flagg = "gj-ctf{apfelwein}"
        if (frankfurt_flagg === frankfurt){
            alert("Riktig flagg!!")
        }
        else{
            alert("Feil flagg... :(")
        }
    }
    
    function check_munchen(){
        const munchen_flagg = "gj-ctf{oktoberfest}"
        if (munchen_flagg === munchen){
            alert("Riktig flagg!!")
        }
        else{
            alert("Feil flagg... :(")
        }
    } -->
