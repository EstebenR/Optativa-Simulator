function generate() {
    //id="gobutton"
    let first = document.getElementById("first");
    let second = document.getElementById("second");
    let firstArray = ["Programacion Competitiva (PCOM)","Juegos Serios (JS)","Ingenieria de Comportamientos Inteligentes (ICI)","Análisis de redes sociales (SOC)","Arquitectura Interna de Linux y Android (LIN)",
"Robótica (ROB)", "Cloud y Big Data (CLO)", "Gestión de la información en la web (GIW)", "Interfaces de usuario (IU)","Testing de Software (TSW)","Bases de Datos (BD)"]
    let secondArray = ['Introducción a la Tecnología Blockchain y Smart Contracts(TBC)',"Bases de Datos noSQL (NSQ)","Programación con restricciones (PR)","Programación Evolutiva (PEV)",
"Programación de GPUs y aceleradores (GPU)","Ingeniería web (IW)","Informática Musical (MUS)","Ciberseguridad en Videojuegos (CSV)","Entornos interactivos y realidad virtual (EIRV)"]
    let randomFirst = randomElement = firstArray[Math.floor(Math.random() * firstArray.length)];
    let randomSecond = randomElement = secondArray[Math.floor(Math.random() * secondArray.length)];
    first.innerHTML = randomFirst
    second.innerHTML = randomSecond
}