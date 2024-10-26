export const storageAvailable = function (){
    localStorage.setItem("my cat", "tom");
    localStorage.setItem("another cat", "bob");
    localStorage.setItem("my cat", "toddd");
    localStorage.colorSetting = "#a4509b";
    const cat = localStorage.getItem("my cat");
    console.log(cat)
}