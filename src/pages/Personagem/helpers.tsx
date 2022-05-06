export function recuperaId(url: string) {
    const urlArr = url.split("/");
    const indice = urlArr.length - 1;
    return Number(urlArr[indice]);
}

export function recuperaStorieId(url: string): number {
    console.log(url);
    
    const urlArr = url.split("/");
    const indice = urlArr.length - 1;
    return Number(urlArr[indice]);
}