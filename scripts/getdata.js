const textVersion = document.querySelector('.version');
const championList = document.querySelector('.champion-list');


const getVersion = async() => {
    const urlToFetch = 'https://ddragon.leagueoflegends.com/api/versions.json';
    try{
        const response = await fetch(urlToFetch, {
            method: "GET",
            cache: "no-cache"
        });
        if(response.ok) {
            const data = await response.json();
            console.log(data);
            const version = data[0]
            textVersion.innerHTML += `\nVersión: ${version}`;
            console.log(`version: ${version}`);
            return version;
        }
    } catch (error) {
        console.log(error);
        return 0;
    }
}

const getLanguage = async() => {
    const urlToFetch = 'https://ddragon.leagueoflegends.com/cdn/languages.json';
    try{
        const response = await fetch(urlToFetch, {
            method: "GET",
            cache: "no-cache"
        });
        if(response.ok) {
            const data = await response.json();
            console.log(data);
            const language = data[9];
            textVersion.innerHTML += `<br> Language: ${language}`;
            console.log(`language: ${language}`);
            return language;
        }
    } catch (error) {
        console.log(error);
        return 0;
    }
}

const getChamps = async(version, language) => {
    const urlToFetch = `https://ddragon.leagueoflegends.com/cdn/${version}/data/${language}/champion.json`;
    console.log(urlToFetch);
    try{
        const response = await fetch(urlToFetch, {
            method: "GET",
            cache: "no-cache"
        });
        if(response.ok) {
            const champions = await response.json();
            console.log(champions);
            return champions;
        }
    } catch (error) {
        console.log(error);
        return 0;
    }
}

async function main() {
    const version = await getVersion();
    const language = await getLanguage();
    const champs = await getChamps(version, language);
    
    for (const [key, value] of Object.entries(champs.data)) {
        championList.innerHTML += `<li>${key}: ${value.title} <br> <img style="width: 200px; border: 5px solid orange" src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${key}_0.jpg"/></li>`;
      }
   
}

main();



